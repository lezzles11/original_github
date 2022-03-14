const { mergeE } = require("./package.js")

describe("selectors", () => {
    it("should be able to accurately insert the first element within the node", () => {
        let getElement = $("<div>this should be inserted as the first element</div>")
        mergeE.insertAsFirst("<div></div>", getElement)


    })
})