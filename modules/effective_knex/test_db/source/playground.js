const { see } = require("code_clarity")
const effective_knex = require("effective_knex")
    // const { see, hourglass } = require("code_clarity")
const { makeFakes } = require("make_fakes")
const input_knex = require("knex")({
    client: "postgresql",
    connection: {
        database: "optee3",
        user: "postgres",
        password: "postgres",
    }
})


const output_knex = require("knex")({
    client: "postgresql",
    connection: {
        database: "hbs_auth_temp",
        user: "postgres",
        password: "postgres",
    }
})


async function mass_post(input, output, table) {

    let inputs = await effective_knex.getAll(input, table)
    for (let i = 0; i < inputs.length; i++) {
        let cleanPost = await effective_knex.cleanPostObject(output, table, inputs[i])
        let getId = output_knex(table).insert(cleanPost).returning("id")
    }


}


setTimeout(() => {

    mass_post(input_knex, output_knex, "hourglass")
    see.motherlode("make things as simple as possible")
}, 1000)

setTimeout(() => {

    mass_post(input_knex, output_knex, "problem")
}, 4000)


setTimeout(() => {

    mass_post(input_knex, output_knex, "cheatsheet")
}, 6000)


setTimeout(() => {

    mass_post(input_knex, output_knex, "task")
}, 8000)

// mass_post(input_knex, output_knex, "task")

setTimeout(() => {

    mass_post(input_knex, output_knex, "tag_snippet")
}, 10000)

// mass_post(input_knex, output_knex, "tag_snippet")


class NewReset {
    constructor() {

    }
    resetScript() {

    }
    async postHourglass() {
        let getData = {
            email: 'string',
            seconds: 'number',
            public: [true, false],
            status: ["to do", "doing", "done"],
            usefulness: [1, 2, 3],
            importance: [1, 2, 3],
            difficulty: [1, 2, 3],
            start: 'date',
            edit: 'date',
            end: 'date'
        }
        let getFakes = makeFakes.createMany(getData, 352, false, { user_id: 4 })
        console.log("🚀 ~ file: playground.js ~ line 47 ~ mass_post ~ getFakes", getFakes)
        for (let i = 0; i < getFakes.length; i++) {
            let getPost = await effective_knex.cleanPostObject(output_knex, "hourglass", getFakes[i])
            console.log(getPost)
            let posted = await output_knex.insert(getPost).returning("*").toString()
            console.log("🚀 ~ file: playground.js ~ line 75 ~ postArray ~ posted", posted)
                // let id = await knex(table).returning("id").insert(getPost).then((result) => {
                //     console.log(result)
                // })
        }
    }
    async verifyPost() {

        mass_post(input_knex, output_knex, "problem")

    }
    all() {
        this.postHourglass()
        this.verifyPost()
    }
}

let resets = new NewReset()
resets.verifyPost()

// postArray("hourglass")