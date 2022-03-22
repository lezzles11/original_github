let userType = {
    gmail_id: "string",
    facebook_id: "string",
    spotify_id: "string",
    name: "string",
    email: "string",
    verified: "boolean",
    logged_in: "boolean",
    theme: "string",
    hash: "string",
    id: "number",
    created: "date"
}

let hourglassType = {
    id: "number",
    user_id: "number",
    email: "string",
    seconds: "number",
    public: "boolean",
    status: "string",
    usefulness: "number",
    importance: "number",
    difficulty: "number",
    start: "date",
    edit: "date",
    end: "date",
    created: "date"
}

let problemType = {
    id: "number",
    user_id: "number",
    hourglass_id: "number",
    problem: "string",
    whatshouldbe: "string",
    whatactuallyis: "string",
    hypothesis: "string",
    plan: "string",
    created: "date"
}

let cheatsheetType = {
    id: "number",
    user_id: "number",
    hourglass_id: "number",
    problem_id: "number",
    title: "string",
    key_info: "string",
    description: "string",
    notes: "string",
    structure: "string",
    created: "date"
}
let taskType = {
    id: "number",
    user_id: "number",
    hourglass_id: "number",
    problem_id: "number",
    cheatsheet_id: "number",
    name: "string",
    created: "date"
}
let tag_snippetType = {
    id: "number",
    user_id: "number",
    hourglass_id: "number",
    problem_id: "number",
    cheatsheet_id: "number",
    task_id: "number",
    tag: "string",
    snippet: "string",
    link: "string",
    created: "date"
}
let followType = {
    id: "number",
    user_id: "number",
    follow_user_id: "number",
    hourglass_id: "number",
    created: "date"
}
let deviceType = {
    id: "number",
    user_id: "number",
    type: "string",
    device: "string",
    last_login: "date",
    created: "date"
}
let paymentType = {
    id: "number",
    user_id: "number",
    type: "string",
    paid_date: "date",
    created: "date"
}
module.exports = { userType, hourglassType, problemType, taskType, tag_snippetType, cheatsheetType, followType, deviceType, paymentType }