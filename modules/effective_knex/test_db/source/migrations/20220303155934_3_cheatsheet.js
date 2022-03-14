exports.up = function(knex) {
    return knex.schema.createTable("cheatsheet", (table) => {
        table.increments("id").primary();
        table.integer("user_id").unsigned().references("user.id").onUpdate("CASCADE").onDelete("CASCADE")
        table.integer("hourglass_id").unsigned().references("hourglass.id")
        table.string("title");
        table.string("key_info", 1000);
        table.string("description", 1000);
        table.string("notes", 5000);
        table.string("structure", 1000);
        table.timestamp("created").defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("cheatsheet");
};