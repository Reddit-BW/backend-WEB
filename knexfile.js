// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./database/init.db3",
    },
    useNullAsDefault: true,
  },
  migrations: {
    directory: "./migrations",
  },
  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    migrations: {
      directory: "./migrations",
    },
  },
};
