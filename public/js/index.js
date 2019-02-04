$(".btn-home").on("click", function(){
    $("#about-section").addClass("d-none");
    $("#navbar").addClass("d-none");
    $("#index-main-section").removeClass("d-none");
});

$(".toAbout").on("click", function(){
    $("#index-main-section").addClass("d-none");
    $("#about-section").removeClass("d-none");
    $("#navbar").removeClass("d-none");
});

$(".toAbout").on("click", function(){
    $("#index-main-section").addClass("d-none");
    $("#about-section").removeClass("d-none");
    $("#navbar").removeClass("d-none");
});
