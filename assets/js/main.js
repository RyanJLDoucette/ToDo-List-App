//Check off todos by clicking
$("ul").on("click","li",function(){
    $(this).toggleClass("strike");
});

//Click on x to delete Todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//Add todo
$("input[type='text'").on("keypress", function(event){
    /*IF ENTER WAS PRESSED -> CLEAR INPUT AND ADD TODO
    */
    if(event.which == 13) {
        var newToDo = $(this).val();//get input
        $(this).val("");//Clear input
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + newToDo + "</li>");
    }
});

//hide form when plus is clicked
$(".fa-plus").on("click", function(){
    $("input").toggleClass("hidden");
});