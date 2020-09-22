exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        { user_id: 1, username: "lyntechi", password: "secretpass" },
        { user_id: 2, username: "wonderwoman", password: "secretpass" },
        { user_id: 3, username: "batman", password: "secretpass" },
      ]);
    });
};
