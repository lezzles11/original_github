import { lorem } from "./data.js"
export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export function getRandomInArr(arr) {
    let num = getRandomInt(0, arr.length - 1)
    return arr[num]
}
export class GetChance {
    /**
     * let getChance = new GetChance()
     * @date 2022-03-02
     * @returns {any}
     */
    constructor() {

    }
    float() {
        let randomNum = getRandomInt(1, 2000)
        let randomDecimal = getRandomInt(1, 99)
        let arr = [randomNum, ".", randomDecimal]
        return parseFloat(arr.join(""))
    }
    paragraph() {
            return this.getArrayOptions(lorem)
        }
        /**
         * getChaance.boolean()
         * @date 2022-03-02
         * @returns {any}
         */
    boolean() {
            let randomNum = getRandomInt(1, 2000)
            if (randomNum % 2 === 0) {
                return true;
            } else {
                return false;
            }
        }
        /**
         * getChance.number(1, 100)
         * @date 2022-03-02
         * @param {number} min
         * @param {number} max
         * @returns {number}
         */
    number(min = 1, max = 200) {

        let randomNum = getRandomInt(min, max)
        return randomNum;
    };
    /**
     * getChance.string(10)
     * @date 2022-03-02
     * @param {number} maxLength=10
     * @returns {string}
     */
    string(maxLength = 10) {
        let randomString = this.getArrayOptions(lorem)
        let splitted = randomString.split(" ")
        return this.getArrayOptions(splitted)
    };
    /**
     * getChance.email()
     * @date 2022-03-02
     * @returns {string}
     */
    email() {
        let emails = ["joelw@optonline.net", "kspiteri@outlook.com", "garyjb@att.net", "jbryan@outlook.com", "jigsaw@gmail.com", "cgreuter@icloud.com", "euice@sbcglobal.net", "burns@att.net", "sabren@icloud.com", "kidehen@me.com", "arachne@mac.com"]

        let get = getRandomInArr(emails)
        return get;
    };
    date() {
            let getRandomMonth = getRandomInt(0, 11)
            let getRandomDay = getRandomInt(1, 25)
            return new Date(2022, getRandomMonth, getRandomDay)
        }
        /**g
         * getChance.password()
         * @date 2022-03-02
         * @returns {string}
         */
    password() {
        let one = this.randomString()
        let two = this.randomString().toUpperCase()
        let num = this.randomNum(3, 24)
        return one + num + two;
    };
    /**
     * getChance.past_date()
     * @date 2022-03-02
     * @returns {object}
     */
    past_date() {
        let getRandomYear = getRandomInt(2015, 2021)
        let getRandomMonth = getRandomInt(0, 11)
        let getRandomDay = getRandomInt(1, 25)
        return new Date(getRandomYear, getRandomMonth, getRandomDay)
    };
    /**
     * getChance.future_date
     * @date 2022-03-02
     * @returns {object}
     */
    future_date() {
        let getRandomYear = getRandomInt(2024, 2030)
        let getRandomMonth = getRandomInt(0, 11)
        let getRandomDay = getRandomInt(1, 25)
        return new Date(getRandomYear, getRandomMonth, getRandomDay)
    };
    /**
     * getChance.number_date
     * @date 2022-03-02
     * @returns {integer}
     */
    number_date() {
        let getRandomMonth = getRandomInt(0, 11)
        let getRandomDay = getRandomInt(1, 25)
        return new Date(2022, getRandomMonth, getRandomDay)
    };
    /**
     * getChance.phone()
     * @date 2022-03-02
     * @returns {string}
     */
    phone() {
        return faker.phone.phoneNumber()
    };
    /**
     * getChance.getArrayOptions([1, 2, 3])
     * @date 2022-03-02
     * @param {any} array
     * @returns {any}
     */
    getArrayOptions(array) {
        let num = getRandomInt(0, array.length - 1)
        return array[num]
    };
    /**
     * getChance.image
     * @date 2022-03-02
     * @param {any} width=100
     * @param {any} height=100
     * @returns {string}
     */
    image() {
        let images = ["https://cdn.cnn.com/cnnnext/dam/assets/200805163718-01-best-lakes-california.jpg", "https://i.picsum.photos/id/796/200/300.jpg?hmac=tubV2vVJFyJ_KIav5eG2iKDmpKoctbrojgEFaflH_l4", "https://upload.wikimedia.org/wikipedia/commons/b/be/Frukost_under_stora_bj%C3%B6rken_av_Carl_Larsson_1896.jpg", "https://upload.wikimedia.org/wikipedia/commons/8/8c/Blomsterf%C3%B6nstret_av_Carl_Larsson_1894.jpg", "https://upload.wikimedia.org/wikipedia/commons/6/67/Carl_Larsson_-_S%C3%B6derk%C3%A5kar_1885.jpg", "https://upload.wikimedia.org/wikipedia/commons/f/f6/Carl_Larsson_-_a.jpg", "https://ordrupgaard.dk/wp-content/uploads/2014/01/brevskrivning1.jpg"]
        return this.getArrayOptions(images)

    }
}


let getChance = new GetChance()
export { getChance }
// let num = getChance.number(1, 100)
// console.log("🚀 ~ file: playground.js ~ line 62 ~ num", num)
// let name = getChance.string()
// console.log("🚀 ~ file: playground.js ~ line 63 ~ name", name)

// const future_date = getChance.future_date()
// console.log(typeof future_date)
// const past_date = getChance.past_date()
// console.log(typeof past_date)
// const number_date = getChance.number_date()
// console.log(typeof number_date)
// const phone = getChance.phone()
// console.log(phone, typeof phone)
// const date = faker.time.recent();
// console.log("🚀 ~ file: playground.js ~ line 58 ~ date", date)
// console.log(new Date(date))
// const arr = getChance.getArrayOptions([1, 2, 3])
// console.log("🚀 ~ file: playground.js ~ line 73 ~ arr", arr)
// console.log(getChance.date())