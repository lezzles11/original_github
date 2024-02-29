$(() => {
    $(".problem_form_btn").click(function(event) {
        console.log("clicked close") event.preventDefault() $(".new_problem_modal").removeClass("unfolding") $(".new_problem_modal").addClass("out") $('body').removeClass('modal-active');
    })

    $(".new_problem_trigger").click(function(event) {
        console.log("clicked") $(".new_problem_modal").removeClass("out") $(".new_problem_modal").addClass("unfolding") $('body').addClass('modal-active')
    })
    $(".new_problem_trigger").click(function(event) {
        console.log("clicked")
    })
    $(".close_problem_modal").click(function(event) {
        console.log("clicked close") event.preventDefault() $(".new_problem_modal").removeClass("unfolding") $(".new_problem_modal").addClass("out") $('body').removeClass('modal-active');
    })
})