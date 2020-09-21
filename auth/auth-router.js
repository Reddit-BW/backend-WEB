const bcryptjs = require("bcryptjs");
const router = require("express").Router();
const Users = require("../users/users-model");
const jwt = require("jsonwebtoken");

function isValid(user) {
  return Boolean(
    user.username && user.password && typeof user.password === "string"
  );
}

router.post("/register", (req, res) => {
  const credentials = req.body;

  if (isValid(credentials)) {
    const rounds = process.env.BCRYPT_ROUNDS || 8;
    //this is me hashing the password
    const hash = bcryptjs.hashSync(credentials.password, rounds);
    credentials.password = hash;

    //now i am saving user to the database
    Users.add(credentials)
      .then((user) => {
        res.status(201).json({ message: "user account successfully created" });
      })
      .catch((err) => {
        res.status(500).json({ message: err.message });
      });
  } else {
    res.status(400).json({
      message:
        "please provide username and password and the password shoud be alphanumeric",
    });
  }
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (isValid(req.body)) {
    Users.findBy({ username: username })
      .then(([user]) => {
        // if (user && bcryptjs.compareSync(password, user.password)) {
        //   res.json({ message: "Welcome and enjoy these Dad jokes!" });
        // } else {
        //   res.status(401).json({ message: "invalid credentials" });
        // }

        // compare the password the hash stored in the database
        if (user && bcryptjs.compareSync(password, user.password)) {
          const token = makeJwt(user);
          res.status(200).json({ token });
        } else {
          res.status(401).json({ message: "Invalid credentials" });
        }
      })
      .catch((error) => {
        res.status(500).json({ message: error.message });
      });
  } else {
    res.status(400).json({
      message:
        "please provide username and password and the password shoud be alphanumeric",
    });
  }
});

function makeJwt({ id, username }) {
  const payload = {
    username,
    id,
  };
  const config = {
    jwtSecret: process.env.JWT_SECRET || "is it secret, is it safe?",
  };
  const options = {
    expiresIn: "8 hours",
  };
  return jwt.sign(payload, config.jwtSecret, options);
}

module.exports = router;
