//Check off todos by clicking
$("li").click(function(){
    $(this).toggleClass("strike");
});

//Click on x to delete Todo
$("span").click(function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});