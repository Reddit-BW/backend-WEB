exports.up = function (knex) {
  return knex.schema
    .createTable("users", (users) => {
      users.increments("user_id").unsigned();
      users.string("username", 255).notNullable().unique();
      users.string("password", 255).notNullable();
    })
    .createTable("user_posts", (posts) => {
      posts.increments().unsigned();
      posts.string("title").notNullable();
      posts.string("text").notNullable();
      posts
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("Cascade");
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users").dropTableIfExists("user_posts");
};
