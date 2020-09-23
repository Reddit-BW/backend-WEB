const db = require("../database/dbConfig");

module.exports = {
  find,
  add,
  findBy,
  findById,
  update,
  findPostBy,
  remove,
};

function find() {
  return db("user_posts")
    .select("user_id", "title", "text", "id")
    .orderBy("id");
  // .join("users")
  // .on("user_posts");
}
function findPostBy(id) {
  return db("user_posts")
    .join("users", "users.user_id", "user_posts.user_id")
    .select("users.username", "user_posts.title", "user_posts.text", "id")
    .where("user_posts.user_id", id);
}
function findBy(filter) {
  return db("user_posts").where(filter);
}

async function add(post) {
  try {
    const [id] = await db("user_posts").insert(post, "id");
    return findById(id);
  } catch (err) {
    throw err;
  }
}
function findById(id) {
  return db("user_posts").where({ id: id }).first();
}
async function update(id, changes) {
  await db("user_posts").where({ id }).update(changes);

  return findById(id);
}

function remove(id) {
  return db("user_posts").where({ id }).del();
}
