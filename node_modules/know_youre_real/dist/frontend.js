/**
 * @example
 * confirm_signup_login(object, "/dashboard")
 * @description 
 * - Will stringify parameter
 * - Set local storage "user" to stringed object
 * @author zen-out
 * @date 2022-03-16
 * @param {object} responseFromLoginSignup
 * @param {string}  route
 * @returns {object}
 */
function confirm_signup_login(responseFromLoginSignup, route) {
    let user = JSON.stringify(responseFromLoginSignup)
    window.localStorage.setItem("user", user)
    setTimeout(() => {
        window.location.replace(route)
    }, 1000)
}

/**
 * confirm_verify()
 * @description goes to local storage and parses user. if user and user.token, then will return parseInt(user.id)
 * @date 2021-12-30
 * @returns {number} user id
 */
function verify_local_storage() {
    let localStorage = window.localStorage.getItem("user")
    let user = JSON.parse(localStorage)
    if (user.id) {
        return parseInt(user.id)
    } else {
        return false;
    }
}

/**
 * @example
 * confirm_logout("/login")
 * @description 
 *  * removes from local storage user
 * replaces window.location with login 
 * @author zen-out
 * @date 2022-03-16
 * @param {string} routeToGoAfter
 */
function confirm_logout(routeToGoAfter) {
    window.localStorage.removeItem("user")
    setTimeout(() => {
        window.location.replace(routeToGoAfter)
    }, 1000)
}