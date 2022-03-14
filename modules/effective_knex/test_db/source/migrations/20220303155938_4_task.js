exports.up = function(knex) {
    return knex.schema.createTable("task", (table) => {
        table.increments("id").primary();
        table.integer("user_id").unsigned().references("user.id").onUpdate("CASCADE").onDelete("CASCADE")
        table.integer("hourglass_id").unsigned().references("hourglass.id")
        table.integer("problem_id").unsigned().references("problem.id")
        table.string("name", 1000);
        table.timestamp("created").defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("task");
};