$("#about").on("click", function(){
    $("#index-main-section").addClass("d-none");
    $("#about-section").removeClass("d-none");
});

$(".btn-go-back").on("click", function(){
    $("#about-section").addClass("d-none");
    $("#index-main-section").removeClass("d-none");
});
