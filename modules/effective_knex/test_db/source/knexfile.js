module.exports = {
    development: {
        client: "postgresql",
        connection: {
            database: "hbs_auth_temp",
            user: "postgres",
            password: "postgres",
        },
        migrations: {
            directory: "./migrations"
        },
        seeds: {
            directory: "./seeds"
        },
    },
    testing: {
        client: "postgresql",
        connection: {
            database: "hbs_auth_temp",
            user: "postgres",
            password: "postgres",
        },
        migrations: {
            directory: "./migrations"
        },
        seeds: {
            directory: "./seeds"
        },
    },
    production: {
        client: "postgresql",
        connection: {
            database: "hbs_auth_temp",
            user: "postgres",
            password: "postgres",
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: "./migrations"
        },
        seeds: {
            directory: "./seeds"
        },
    },
};