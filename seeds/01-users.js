exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, username: "lyntechi", password: "secretpass" },
        { id: 2, username: "wonderwoman", password: "secretpass" },
        { id: 3, username: "batman", password: "secretpass" },
      ]);
    });
};
