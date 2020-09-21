exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("user_posts")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("user_posts").insert([
        {
          id: 1,
          title: "fitness",
          text: "I would like to lose 10 pounds",
          user_id: 1,
        },
        {
          id: 2,
          title: "web development",
          text:
            "I feel like its so hard to learn javascript. Does anyone know any sites that I can possibly benefit from?",
          user_id: 2,
        },
        {
          id: 3,
          title: "real estate",
          text:
            "I would like to know how I can start investing into real estate. What are the pros and cons of starting in this type of business?",
          user_id: 3,
        },
      ]);
    });
};
