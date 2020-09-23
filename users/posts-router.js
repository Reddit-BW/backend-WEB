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
  Posts.findById(id)
    .then((posts) => {
      if (posts) {
        res.json({ data: posts });
      } else {
        res.status(404).json({ message: "Could not find post with given id." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.post("/", (req, res) => {
  const { id } = req.params;
  const userData = req.body;
  userData.user_id = id;

  Posts.add(userData)
    .then((post) => {
     
      res.status(201).json({ data: post });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Posts.update(id, changes)
    .then((post) => {
      if (post) {
        res.json({ data: post });
      } else {
        res.status(404).json({ message: "Could not find post with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to update post" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Posts.remove(id)
    .then((post) => {
      if (post) {
        res.json({ removed: post });
      } else {
        res.status(404).json({ message: "Could not find post with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;
