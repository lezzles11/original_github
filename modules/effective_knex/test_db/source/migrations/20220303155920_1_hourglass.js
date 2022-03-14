exports.up = function(knex) {
    return knex.schema.createTable("hourglass", (table) => {
        table.increments("id").primary();
        table.integer("user_id").unsigned().references("user.id").onUpdate("CASCADE").onDelete("CASCADE")
        table.string("email");
        table.integer("seconds")
        table.boolean("public")
        table.string("status");
        table.integer('usefulness');
        table.integer("importance");
        table.integer("difficulty");
        table.timestamp("start");
        table.timestamp("edit");
        table.timestamp("end");
        table.timestamp("created").defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("hourglass");
};