inIt();

var mainToSection = {
    toAbout: {id: "#about-section", index: 0},
    toSkills: {id: "#skills-section", index: 1},
    toEducation: {id: "#education-section", index: 2},
    toPersonal: {id: "#personal-section", index: 3},
    toPortfolio: {id: "#portfolio-section", index: 4},
    toContact: {id: "#contact-section", index: 5},
}

$(".btn-home").on("click", function(){
    $("#index-parent").children().fadeOut(500);
    $("#navbar").fadeOut(500, function(){
        $("#index-main-section").addClass("slide-rotate-hor-top-reverse");
        $("#index-main-section").fadeIn(500, function(){
            $("#index-main-section").removeClass("slide-rotate-hor-top-reverse");
            currentIndex = -1;
        });
    });
});

$(".main-btn-group").on("click", function(){
    var hitSection = mainToSection[this.id];
    $("#index-main-section").addClass("slide-rotate-hor-top");
    $("#index-main-section").fadeOut(500, function(){
        $("#index-main-section").removeClass("slide-rotate-hor-top");
        botToMid($("#navbar"));
        botToMid($(hitSection.id));
        currentIndex = hitSection.index;
    });
});

function botToMid(ele){
    ele.removeClass("d-none");
    ele.css("display", "none");
    ele.fadeIn(500);
}

function inIt(){
    $("#index-main-section").css("display", "none");
    $("#index-main-section").fadeIn(700);
    var currentIndex = -1;
};