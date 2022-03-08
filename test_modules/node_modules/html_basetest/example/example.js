$(() => {
    console.log("hello")
    let el = ".yonas"
    let love = $(".love")
    let hasClass = baseTest.hasClass(el, "yonas")
    let hasClassFalse = baseTest.hasClass(el, "no")
    console.log('hasClassFalse:', hasClassFalse);
    console.log('hasClass:', hasClass);
    let hasIdTrue = baseTest.hasId(el, "yon")
    console.log('hasIdTrue:', hasIdTrue);
    let hasIdFalse = baseTest.hasId(el, "whatsup")
    console.log('hasIdFalse:', hasIdFalse);
    let hasAttrTrue = baseTest.hasAttr(el, "disabled")
    console.log('hasAttrTrue:', hasAttrTrue);
    let hasAttrFalse = baseTest.hasAttr(el, "no")
    console.log('hasAttrFalse:', hasAttrFalse);
    let hasDataTrue = baseTest.hasDataTest(el, "problem_id")
    console.log('hasDataTrue:', hasDataTrue);
    let hasDataFalse = baseTest.hasDataTest(el, "task_id")
    console.log('hasDataFalse:', hasDataFalse);
    let hasDataTrueTrue = baseTest.hasDataTest(el, "problem_id", 32)
    console.log("🚀 ~ file: baseTest.js ~ line 76 ~ hasDataTrueTrue", hasDataTrueTrue)
    let hasDataTrueTrue2 = baseTest.hasDataTest(el, "problem_id", "3")
    console.log("🚀 ~ file: baseTest.js ~ line 78 ~ hasDataTrueTrue2", hasDataTrueTrue2)
    let htmlTrue = baseTest.hasHTML(el, "<div>baller</div>")
    console.log("🚀 ~ file: baseTest.js ~ line 80 ~ htmlTrue", htmlTrue)
    let htmlFalse = baseTest.hasHTML(el, "whatthef")
    console.log("🚀 ~ file: baseTest.js ~ line 82 ~ htmlFalse", htmlFalse)
    let htmltext = baseTest.hasHTML(el, "ll")
    console.log("🚀 ~ file: baseTest.js ~ line 84 ~ htmltext", htmltext)
    let existTrue = baseTest.exists(el)
    console.log("🚀 ~ file: baseTest.js ~ line 90 ~ existTrue", existTrue)
    let existFalse = baseTest.exists($(".love"))
    console.log("🚀 ~ file: baseTest.js ~ line 92 ~ existFalse", existFalse)
    let visibleTrue = baseTest.visible(el)
    console.log("🚀 ~ file: baseTest.js ~ line 91 ~ visibleTrue", visibleTrue)
    let visibleFalse = baseTest.visible($(".noDisplay"))
    console.log("🚀 ~ file: baseTest.js ~ line 93 ~ visibleFalse", visibleFalse)
    let hasCSSFalse = baseTest.hasCSS(el, "color", "#6f57e5")
    console.log("🚀 ~ file: baseTest.js ~ line 95 ~ hasCSSFalse", hasCSSFalse)
    let hasCSSTrue = baseTest.hasCSS(el, "display", "flex")
    console.log("🚀 ~ file: baseTest.js ~ line 97 ~ hasCSSTrue", hasCSSTrue)
    let hasChildTrue = baseTest.hasChild(el, $(".supergrandchild"))
    console.log("🚀 ~ file: baseTest.js ~ line 101 ~ hasChildTrue", hasChildTrue)
    let ChildTrue1 = baseTest.hasChild(el, ".supergrandchild")
    console.log("🚀 ~ file: baseTest.js ~ line 103 ~ ChildTrue1", ChildTrue1)
    let hasChildFalse = baseTest.hasChild(el, ".what")
    console.log("🚀 ~ file: baseTest.js ~ line 105 ~ hasChildFalse", hasChildFalse)
})