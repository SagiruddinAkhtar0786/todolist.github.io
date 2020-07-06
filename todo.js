// $("li").click(function(){
//     // console.log($(this).css("color"));
//     if($(this).css("color") === "rgb(128, 128, 128)"){
//         $(this).css({
//             color:"black",
//             textDecoration : "none"
//         })
//     }
//     else{
//         $(this).css({
//             color:"gray",
//             textDecoration : "line-through"
//         })
//     }

  
// })

$("ul").on("click", "li" ,function(){
    $(this).toggleClass("completed");
});

//click on X to delete todo

$("ul").on("click" , "span" , function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
    if(event.which === 13){
        //grabbing new todo text from input
        var todotext = $(this).val();

        $(this).val("");//to clear input

        //create a new li and add to it

        $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " +todotext +"</li>")
    }
});


$(".fa-plus").click(function(){
        $("input[type='text'").fadeToggle();
});

