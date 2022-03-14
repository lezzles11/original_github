exports.up = function(knex, Promise) {
    return knex.schema.createTable("problem", (table) => {
        table.increments("id").primary();
        table.integer("user_id").unsigned().references("user.id").onUpdate("CASCADE").onDelete("CASCADE")
        table.integer("hourglass_id").unsigned().references("hourglass.id")
        table.string("problem", 1000);
        table.string("whatshouldbe", 1000);
        table.string("whatactuallyis", 1000);
        table.string("hypothesis", 1000);
        table.string("plan", 1000);
        table.timestamp("created").defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("problem");
};