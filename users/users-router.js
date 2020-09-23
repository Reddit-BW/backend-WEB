const router = require("express").Router();
const Users = require("./users-model");

router.get("/", (req, res) => {
  Users.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => res.send(err.message));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Users.findById(id)
    .then((user) => {
      if (user) {
        res.json({ data: user });
      } else {
        res.status(404).json({ message: "Could not find user with given id." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Users.remove(id)
    .then((user) => {
      if (user) {
        res.json({ removed: user });
      } else {
        res.status(404).json({ message: "Could not find user with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});
module.exports = router;
