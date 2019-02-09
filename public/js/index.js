
var currentIndex = 0;

inIt();

var mainToArray = [
    {name: "toAbout", id: "#about-section"},
    {name: "toSkills", id: "#skills-section"},
    {name: "toEducation", id: "#education-section"},
    {name: "toPersonal", id: "#personal-section"},
    {name: "toPortfolio", id: "#portfolio-section"},
    {name: "toContact", id: "#contact-section"},
]

var navToArray = [
    {name: "toAboutNav", id: "#about-section"},
    {name: "toSkillsNav", id: "#skills-section"},
    {name: "toEducationNav", id: "#education-section"},
    {name: "toPersonalNav", id: "#personal-section"},
    {name: "toPortfolioNav", id: "#portfolio-section"},
    {name: "toContactNav", id: "#contact-section"},
]

$(".nav-btn-group").on("click", function(){
    var hitNavBtn = this.id;
    navToArray.forEach(function(pair, index){
        $("#"+navToArray[index].name).removeClass("active");
        if(pair.name===hitNavBtn){
            $(navToArray[currentIndex].id).fadeOut(500, function(){
                hitNavBtn = pair.id;
                currentIndex = index;
                $(navToArray[index].id).fadeIn(500);
                $("#"+navToArray[currentIndex].name).addClass("active");
                backgroundSetter();
            });
        }
    });
});

$("body").keydown(function(key){
    if(key.which === 37 && currentIndex > 0){
        $(mainToArray[currentIndex].id).addClass("slide-rotate-ver-right");
        $(mainToArray[currentIndex].id).fadeOut(500, function(){
            $(mainToArray[currentIndex].id).removeClass("slide-rotate-ver-right");
            $(mainToArray[currentIndex-1].id).addClass("slide-rotate-ver-left-reverse");
            $("#"+navToArray[currentIndex].name).removeClass("active");
            $("#"+navToArray[currentIndex-1].name).addClass("active");
            $(mainToArray[currentIndex-1].id).fadeIn(500);
            currentIndex--;
            setTimeout(function(){
                $(mainToArray[currentIndex].id).removeClass("slide-rotate-ver-left-reverse");
                backgroundSetter();
            }, 500);
        });
    };
    if(key.which === 39 && currentIndex<5){
        $(mainToArray[currentIndex].id).addClass("slide-rotate-ver-left");
        $(mainToArray[currentIndex].id).fadeOut(500, function(){
            $(mainToArray[currentIndex].id).removeClass("slide-rotate-ver-left");
            $(mainToArray[currentIndex+1].id).addClass("slide-rotate-ver-right-reverse");
            $("#"+navToArray[currentIndex].name).removeClass("active");
            $("#"+navToArray[currentIndex+1].name).addClass("active");
            $(mainToArray[currentIndex+1].id).fadeIn(500);
            currentIndex++;
            setTimeout(function(){
                $(mainToArray[currentIndex].id).removeClass("slide-rotate-ver-right-reverse");
                backgroundSetter();
            }, 500);
        });
    }    
});

$(document).ready(function(){
    setTimeout(function(){
        $("#loader").css("background-image", "url(../image/indexBackground3.jpg)")
    }, 500);
    setTimeout(function(){
        $("#loader").css("background-image", "url(../image/codeBackground.jpg)")
    }, 1000);
    setTimeout(function(){
        $("#loader").css("background-image", "url(../image/indexBackground4.jpg)")
    }, 1500);
    setTimeout(function(){
        $("#loader").css("background-image", "url(../image/indexBackground5.jpg)")
    }, 2000);
    setTimeout(function(){
        $("#loader").css("background-image", "url(../image/indexBackground6.jpg)")
    }, 2500);
    setTimeout(function(){
        $("#loader").css("background-image", "url(../image/indexBackground7.jpg)")
    }, 3000);
});


function toast(){
    $(".toast").fadeTo(700, 1);
    setTimeout(function(){
        $(".toast").fadeTo(300, 0);
    }, 8000);
}

function backgroundSetter(){
    $("body").removeClass("blurOverBackground");
    switch (currentIndex) {
        case 0 :
            $("body").css("background-image", "url(../image/indexBackground3.jpg)");
            break;
        case 1 :
            $("body").css("background-image", "url(../image/codeBackground.jpg)");
            break;
        case 2 :
            $("body").css("background-image", "url(../image/indexBackground4.jpg)");
            break;
        case 3 :
            $("body").css("background-image", "url(../image/indexBackground5.jpg)");
            break;
        case 4 :
            $("body").css("background-image", "url(../image/indexBackground6.jpg)");
            break;
        case 5 :
            $("body").css("background-image", "url(../image/indexBackground7.jpg)");
            break;
    }
}

function inIt(){
    // $("#index-main-section").css("display", "none");
    // $("#index-main-section").fadeIn(700);
    $("#index-parent").children().css("display", "none");
    $("#navbar").css("display", "none");
    toast();
    $("#navbar").fadeIn(700);
    $("#about-section").fadeIn(700);
    backgroundSetter();
};