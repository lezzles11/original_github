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
    problem: {
        problem: "the problem is that it's really hard to keep track of the different pages and modules that we create",
        whatshouldbe: "it should be easier to keep track of them and to only write things once",
        whatactuallyis: "it's actually quite difficult to keep track and visualize our progress",
        hypothesis: "put everything on zen-out, make sure the website is easy to use and straightforward",
        plan: "you should just have an array of objects as data, and then have the template standardized for everything. it's more about the data than about the actual pages and code components",
    },
    hourglass: {
        seconds: 3,
        start: new Date(),
        edit: new Date(),
        end: "2022-12-12"
    },
    cheatsheet: {
        title: "getting things done",
        key_info: "just do it",
        description: "be more like water",
        structure: "think less",
    },
    task: {
        name: "highlight utils in orange, classes in soft pink, function in bright pink",
    },
    tag_snippet: {
        tag: "confidence",
        snippet: "be more comfortable in your own skin, don't be afraid. accept your vulnerability, and be strong about it.",
    },
    user: {
        email: "lesleyc@bu.edu",
        logged_in: true,
        theme: "professional",
        hash: "$2b$10$ekHZn.odDz8jM4FBnaYF3.2HLkgxDgEIEOZyUpqnEc3pCzchZyRle",
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
        title: " hello",
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
    },
    thirteen: {
        tag: "tag",
        link: "www.google.com",
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

module.exports = { inputs }