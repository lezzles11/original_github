$(() => {
    console.log("hi this is lesley speaking")
    mergeE.insertAsFirst(".box", $("<div>hii</div>"))
    mergeE.addToEndOfNthElement(".third", 0, $("<div class='box'>insert me as third</div>"))
    mergeE.addToBegOfNthElement(".third", 0, $("<div>hiiii insert me to the beginning of the nth element</div>"))


    // First Test 
    mergeE.insertAfter(".first", $("<div class='testOne'>insert me after the third element</div>"))
    let firstTest = baseTest.hasChild(".first", ".testOne")
    console.log("🚀 ~ file: nodes.js ~ line 8 ~ firstTest", firstTest)

    // Second Test
    mergeE.insertAsFirst(".second", $("<div class='secondTest'>hii</div>"))
    let secondTest = baseTest.hasChild(".second", ".secondTest")
    console.log("🚀 ~ file: nodes.js ~ line 16 ~ secondTest", secondTest)

    // Third Test
    mergeE.insertAsLast(".third", $("<div class='thirdTest'>hii</div>"))
    let thirdTest = baseTest.hasChild(".third", ".thirdTest")
    console.log("🚀 ~ file: nodes.js ~ line 21 ~ thirdTest", thirdTest)

    // Fourth Test 
    mergeE.wrapEach(".box", $("<div class='wrapper'> wrapper</div>"))
    let fourthTest = baseTest.hasChild(".wrapper", ".box")
    console.log("🚀 ~ file: nodes.js ~ line 26 ~ fourthTest", fourthTest)

    // Fifth Test
    mergeE.addToEndOfNthElement(".fifth", 0, $("<div class='fifthTest'>fifth Test</div>"))
    let fifthTest = baseTest.hasChild(".fifth", ".fifthTest")
    console.log("🚀 ~ file: nodes.js ~ line 31 ~ fifthTest", fifthTest)

    // Sixth Test
    mergeE.insertBefore(".sixth-b", $("<div class='sixthTest'>sixth Test</div>"))
    let sixthTest = baseTest.hasChild(".sixth", ".sixthTest")
    console.log("🚀 ~ file: nodes.js ~ line 36 ~ sixthTest", sixthTest)

    // Seventh Test
    mergeE.insertAfter(".sixth-b", $("<div class='seventhTest'>seventh test</div>"))
    let seventhTest = baseTest.hasChild(".sixth", ".seventhTest")
    console.log("🚀 ~ file: nodes.js ~ line 41 ~ seventhTest", seventhTest)

    // Eighth Test

})