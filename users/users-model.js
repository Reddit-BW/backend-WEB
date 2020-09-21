const db = require("../database/dbConfig");

module.exports = {
  find,
  add,
  findBy,
  findById,
};

function find() {
  return db("users").select("id", "username").orderBy("id");
}
function findBy(filter) {
  return db("users").where(filter);
}

async function add(user) {
  try {
    const [id] = await db("users").insert(user, "id");
    return findById(id);
  } catch (err) {
    throw err;
  }
}
function findById(id) {
  return db("users").where({ id: id }).first();
}
