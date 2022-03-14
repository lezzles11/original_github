const make_chances = require("make_chances")
let userObject = {
    id: "integer",
    name: "name",
    email: "email",
    hash: "hash",
    fb_token: "social_app_tokens",
    created: "date",
    verified: "boolean",
    phone: "phone",
    address: "address"
}
make_chances.create(userObject, 20)
make_chances.createDirty(userObject, 20)