describe("should return an object and array of info", () => {


    let objectInfo = getInfo(knex, "hourglass", "object").then((obj) => {
        console.log(obj)
    })
    console.log("🚀 ~ file: playground.js ~ line 38 ~ objectInfo", objectInfo)
    it("returns objects", () => {
        let result = {
            id: 'number',
            email: 'string',
            seconds: 'number',
            public: 'boolean',
            status: 'string',
            usefulness: 'number',
            importance: 'number',
            difficulty: 'number',
            start: 'object',
            edit: 'object',
            end: 'object'
        }
    })
    it("returns array", () => {

        let objectArr = getInfo(knex, "hourglass", "array").then((arr) => {
            console.log(arr)
        })
        console.log("🚀 ~ file: playground.js ~ line 40 ~ objectArr", objectArr)

        let result = [
            'id', 'email',
            'seconds', 'public',
            'status', 'usefulness',
            'importance', 'difficulty',
            'start', 'edit',
            'end'
        ]
    })
})