require("dotenv").config({ path: "/config/.env" });

const DATABASE_NAME = process.env.DB_NAME;
const DATABASE_USERNAME = process.env.DB_USERNAME;
const DATABASE_PASS = process.env.DB_PASSWORD;
module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: DATABASE_NAME,
      user: DATABASE_USERNAME,
      password: DATABASE_PASS,
    },
    migrations: {
      directory: "./model/database/migrations",
    },
    seeds: {
      directory: "./model/database/seeds",
    },
  },
  testing: {
    client: "postgresql",
    connection: {
      database: DATABASE_NAME,
      user: DATABASE_USERNAME,
      password: DATABASE_PASS,
    },
    migrations: {
      directory: "./model/database/migrations",
    },
    seeds: {
      directory: "./model/database/seeds",
    },
  },
  production: {
    client: "postgresql",
    connection: {
      database: DATABASE_NAME,
      user: DATABASE_USERNAME,
      password: DATABASE_PASS,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./model/database/migrations",
    },
    seeds: {
      directory: "./model/database/seeds",
    },
  },
};
