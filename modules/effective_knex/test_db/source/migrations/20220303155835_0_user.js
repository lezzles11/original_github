exports.up = function(knex) {
    return knex.schema.createTable("user", (table) => {
        table.increments("id").primary();
        table.string("gmail_id");
        table.string("facebook_id");
        table.string("linkedin_id");
        table.string("spotify_id");
        table.string("name");
        table.string("email").unique();
        table.boolean("verified")
        table.string("hash");
        table.timestamp("created").defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("user");
};