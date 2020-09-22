const router = require("express").Router();
const Posts = require("./posts-model");

router.get("/", (req, res) => {
  Posts.find()
    .then((post) => {
      res.status(200).json(post);
    })
    .catch((err) => res.send(err.message));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Posts.findPostBy(id)
    .then((posts) => {
      console.log(posts);
      if (posts) {
        res.json(posts);
      } else {
        res.status(404).json({ message: "Could not find post with given id." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.post("/:id/", (req, res) => {
  const { id } = req.params;
  const userData = req.body;
  userData.user_id = id;

  Posts.add(userData)
    .then((post) => {
        console.log(post)
      res.status(201).json({ data: post });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  db("users")
    .where({ id })
    .update(changes)
    .then((count) => {
      if (count) {
        res.json({ update: count });
      } else {
        res.status(404).json({ message: "Could not find user with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to update user" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

 Posts.findPostBy(id)
    .del()
    .then((post) => {
      if (post) {
        res.json({ removed: post[0] });
      } else {
        res.status(404).json({ message: "Could not find post with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;
