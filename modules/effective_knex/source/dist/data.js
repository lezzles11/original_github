/**********************************************
 * 
 * ==================================
 ***********************************************/

const knex = require("knex")({
    client: "postgresql",
    connection: {
        database: "optee3",
        user: "postgres",
        password: "postgres",
    }
})

// let hourglass = {
//     public: "boolean",
//     seconds: "number",
//     status: ["to do", "doing", "done"],
//     difficulty: [1, 2, 3],
//     importance: [1, 2, 3],
//     usefulness: [1, 2, 3],
//     email: "email",
// }

// let getMany = makeFakes.createMany(hourglass, 2, true)

let callbacks = {
    /**
     * formatDifficulty(difficulty)
     * @author zen-out
     * @date 2021-12-19
     * @param {string}{int} 1 easy 2 medium 3 hard
     * @returns {string}{int} if empty, will return 3
     */
    "difficulty": function(difficulty) {
        if (difficulty === 1) {
            return "easy"
        } else if (difficulty === 2) {
            return "medium"
        } else if (difficulty === 3) {
            return "hard"
        } else if (difficulty === "hard") {
            return 3
        } else if (difficulty === "medium") {
            return 2
        } else if (difficulty === "easy") {
            return 1
        } else {
            return undefined
        }
    },
    /**
     * formatImportance("high")
     * formatImportance(1)
     * @description will return 3 if cannot read parameter
     * @author zen-out
     * @date 2021-12-19
     * @param {string}{int} 1 high 2 medium 3 low 
     * @returns {string}{int}
     */
    "importance": function(importance) {
        if (importance === 1) {
            return "high"
        } else if (importance === 2) {
            return "medium"
        } else if (importance === 3) {
            return "low"
        } else if (importance === 0) {
            return "low"
        } else if (importance === "high") {
            return 1
        } else if (importance === "medium") {
            return 2
        } else if (importance === "low") {
            return 3
        } else {
            return undefined
        }
    },
    /**
     * formatPublic(string/boolean)
     * @description it essentially formats the inputs and outputs 
     * @author zen-out
     * @date 2021-12-19
     * @param {string}{boolean} private public true or false
     * @returns {string}{boolean}
     */
    "public": function(publicValue) {
        if (publicValue === "public") {
            return true;
        } else if (publicValue === "private") {
            return false;
        } else if (publicValue === false) {
            return "private"
        } else if (publicValue === true) {
            return "public"
        } else if (publicValue === "false") {
            return false;
        } else if (publicValue === "true") { return true; } else {
            return undefined
        }
    },

    "status": function(status) {
        if (status === "to do") {
            return 1;
        } else if (status === "doing") {
            return 2;
        } else if (status === "done") {
            return 3;
        } else if (status === 1) {
            return "to do"
        } else if (status === 2) {
            return "doing"
        } else if (status === 3) {
            return "done"
        } else {
            return undefined
        }
    },
    "usefulness": function(usefulness) {
        if (usefulness === 1) {
            return "high"
        } else if (usefulness === 2) {
            return "medium"
        } else if (usefulness === 3) {
            return "low"
        } else if (usefulness === 0) {
            return "low"
        } else if (usefulness === "high") {
            return 1
        } else if (usefulness === "medium") {
            return 2
        } else if (usefulness === "low") {
            return 3
        } else {
            return undefined
        }
    },
}

const inputs = {
    one: {
        seconds: 20,
        status: "doing"
    },
    two: {
        importance: "high",
        status: "to do"
    },
    three: {
        importance: 1,
        difficulty: 3,
        status: "to do"
    },
    four: {
        name: "hi",
        seconds: 3,
        start: new Date(),
        edit: new Date(),
        end: "2022-12-12"

    },
    five: {
        user_id: "4",
        seconds: "0",
        name: "hello",
        public: "public",
        status: 'to do',
        importance: "high",
        difficulty: "hard",
        start: new Date(),
        edit: "2020-12-22",
        end: "2020-12-22"
    },
    six: {
        user_id: "4",
        seconds: "0",
        name: "hello",
        public: "public",
        status: "to do",
        importance: "high",
        difficulty: "hard",
        start: new Date(),
        edit: "2020-12-22",
        end: "2020-12-22"
    },
    seven: {
        public: true,
        status: "to do",
        importance: 1,
        difficulty: 3,
    },
    eight: {
        start: "Dec 11, 1994",
        edit: "December 15 2020",
        end: "Dec 11, 2022"
    },
    nine: {
        user_id: 4,
        whatshouldbe: "hi",
        hourglass_id: 10,
        problem_id: 2,
        cheatsheet_id: "4",
        task_id: "2",
        name: "hi",
        email: "",
        status: "to do",
        public: "public",
        importance: "low",
        difficulty: "hard",
        start: "2021-12-08",
        end: "",
        seconds: "9",
        link: "www.google.com"
    },
    ten: {
        id: 200,
        timer_user_id: 1,
        timer_problem_id: 1,
        timer_id: 1,
        hourglass_id: 31,
        user_id: 1,
        hourglass_user_id: 1,
        importance: 'medium',
        seconds: 20
    },
    eleven: {
        id: 200,
        timer_user_id: 1,
        timer_problem_id: 1,
        timer_id: 1,
        hourglass_id: 31,
        user_id: 1,
        hourglass_user_id: 1,
        importance: 'medium',
        seconds: 20
    },
    twelve: {
        id: 1,
        timer_user_id: 1,
        timer_problem_id: 1,
        timer_id: 1,
        hourglass_id: 31,
        user_id: 1,
        hourglass_user_id: 1,
        whatddup: undefined,
        not: null,
        importance: 'medium',
    }
}
module.exports = { inputs, callbacks, knex }