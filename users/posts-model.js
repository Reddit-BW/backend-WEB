const db = require("../database/dbConfig");

module.exports = {
  find,
  add,
  findBy,
  findById,
  update,
  findPostBy
};

function find() {
  return db("user_posts")
    .select("id", "title", "text")
    .orderBy("id")
    // .join("users")
    // .on("user_posts");
}
function findPostBy(userId){
    return db("user_posts")
    .join("users", "users.user_id", "user_posts.user_id")
    .select("users.username", "user_posts.title", "user_posts.text")
    .where("user_posts.user_id", userId)
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
