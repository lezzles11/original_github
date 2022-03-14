$(document).ready(function() {

    console.log("hello")
        // first test 
    let newElement = $("<div>insert me as first</div>")
    mergeE.insertAsFirst($("[data-child=1] .grandchild"), newElement)

    // create dropdown content
    let newWrapper = $("<div class='box'></div>")
    mergeE.wrapEach($(".dropdown"), newWrapper)



    // add this item to the third dropdown item in dropbox
    let newItem = $("<div>newdropdown</div>")
    mergeE.addToEndOfNthElement(".dropdown-item", 0, newItem)
    let newItem2 = $("<div>newdropdown</div>")
    mergeE.addToBegOfNthElement(".dropdown-item", 3, newItem2)
        // insert before and insert after 
    let newDropdown = $(`<a href="#" class="dropdown-item" data-id='6'>6</a>`)
    mergeE.insertAfter($("[data-id=5]"), newDropdown)

    let newDropdown1 = $(`<a href="#" class="dropdown-item" data-id='0'>og0</a>`)
    mergeE.insertBefore($("[data-id=1]"), newDropdown1)

    // insert as last 
    // first test 
    let newLastInsertion = $("<div>insert me as last</div>")
    mergeE.insertAsLast($("[data-child=1] .grandchild"), newLastInsertion)

    function changeToGreen(element) {
        element.css("color", "green")
    }

    function changeToPink(element) {
        element.data("test", "test2")
        element.css("color", "pink")
    }
    let getText = mergeE.getAllTextWithinElement("[data-parent='2']")
    console.log(getText)
        // console.log(getTextTest)

    mergeE.getAllElementsWithinParent(".grandparent", ".child")

    mergeE.getElementBasedOnSibling("[data-greatgrandchild='2']", ".great-grandchild", changeToGreen)
    let newLastInsertion2 = $("<div>yoyoas last</div>")
    mergeE.insertAsLastIntoNthElement(".grandchild", 2, newLastInsertion2)
    mergeE.changeParent("[data-greatgrandchild='2']", ".parent", changeToPink)
    let getParentElement = $(".child").eq(0)
})