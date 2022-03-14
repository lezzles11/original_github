$(() => {
    let newE = $(document.createElement("p"))
    newE.html("hello there")
    mergeE.insertAsFirst(".target", newE)
})