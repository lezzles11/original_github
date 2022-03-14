/*
In order to quickly build components
  As a developer, I want to quickly use a set of snippets that will allow me to insert into elements
  In order to quickly test components
  As a developer, I want to quickly be able to test components, and by utilizing this selector class, I can quickly see if the components contain certain objects
  In order to quickly create layouts:
  As a developer, I want to be able to simply append certain things to the layout, rather than creating them as it takes so much time
*/
describe("the selector class methods should work", () => {
    it("should insert as first element", () => {
        let newElement = $("<div>insert me as first</div>")
        mergeE.insertAsFirst($("[data-child=1] .grandchild"), newElement)
        let insertAsFirstTest = baseTest.hasChild($("[data-child='1']"), newElement)
        expect(insertAsFirstTest).to.be.true
    })

    it("should wrap element into another", () => {
        let newWrapper = $("<div class='box'></div>")
        mergeE.wrapEach($(".dropdown"), newWrapper)
        let wrapEachTest = baseTest.hasHTML($(".box"), "Dropdown")
        expect(wrapEachTest).to.be.true
    })
    it("should append to the nth of a specific element", () => {
        let newItem = $("<div>newdropdown</div>")
        mergeE.addToEndOfNthElement(".dropdown-item", 0, newItem)
        let addToEndOfNthElement = baseTest.hasHTML($(".dropdown-item").eq(0), "newdropdown")
        expect(addToEndOfNthElement).to.be.true
    })
    it("should insert into as last", () => {
        let newLastInsertion = $("<div>insert me as last</div>")
        mergeE.insertAsLast($("[data-child=1] .grandchild"), newLastInsertion)
        let insertAsLastTest = baseTest.hasChild($("[data-child='1']"), newLastInsertion)
        expect(insertAsLastTest).to.be.true
    })
    it("should change all children in a parent", () => {
        function changeToPink(element) {
            element.data("test", "test2")
            element.css("color", "pink")
        }
        mergeE.changeParent("[data-greatgrandchild='2']", ".parent", changeToPink)
        let getParentElement = $(".child").eq(0)
        let changeParentTest = baseTest.hasDataTest(getParentElement, "test", "test2")
        expect(changeParentTest).to.be.true
    })
    it("should allow you to get all elements based on sibling", () => {
        let newLastInsertion2 = $("<div>yoyoas last</div>")
        mergeE.insertAsLastIntoNthElement(".grandchild", 2, newLastInsertion2)
    })
})