const ef = require("effective_knex")
async function testEffectiveKnex() {
    const knex = require("knex")({
        client: "postgresql",
        connection: {
            database: "optee3",
            user: "postgres",
            password: "postgres",
        }
    })
    see.should("do all basic queries")
        // let getPost = await ef.post(knex, "hourglass", { start: "2011-02-02" }, callbacks)
        // let getUpdate = await ef.update(knex, "hourglass", getPost.id, { start: "2012-02-02" }, callbacks)
    let getOne = await ef.getOne(knex, "user", 1)
        // let getAll = await ef.getAll(knex, "user")
        // let deleteOne = await ef.del(knex, "hourglass", 12)
        // let getCount = await ef.tableColValCount(knex, "hourglass", "status", "to do")
        // let getTables = await ef.getTables(knex)
        // let getTableInfo = await ef.getInfo(knex, "hourglass", "object")

    see.should("handle return object for post and update requests")
    see.is(getPost)
        // see.is(getUpdate)
        // see.should("get one and get all")
        // see.is(getOne)
        // see.is(getAll)
        // see.should("delete cascade")
        // see.is(deleteOne)
        // see.should("get count based on table key value")
        // see.is(getCount)
        // see.should("render database information")
        // see.is(getTables, getTableInfo)


}
testEffectiveKnex()