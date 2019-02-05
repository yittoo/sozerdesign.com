
var currentIndex = -1;

inIt();

var mainToArray = [
    {name: "toAbout", id: "#about-section"},
    {name: "toSkills", id: "#skills-section"},
    {name: "toEducation", id: "#education-section"},
    {name: "toPersonal", id: "#personal-section"},
    {name: "toPortfolio", id: "#portfolio-section"},
    {name: "toContact", id: "#contact-section"},
]

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
    var hitSection = this.id;
    mainToArray.forEach(function(pair, index){
        if(pair.name===hitSection){
            hitSection = pair.id;
            currentIndex = index;
        }
    });
    $("#index-main-section").addClass("slide-rotate-hor-top");
    $("#index-main-section").fadeOut(500, function(){
        $("#index-main-section").removeClass("slide-rotate-hor-top");
        displaySection($("#navbar"));
        displaySection($(hitSection));
        toast();
    });
});

$("body").keydown(function(key){
    if(key.which === 37 && currentIndex > 0){
        $(mainToArray[currentIndex].id).addClass("slide-rotate-ver-right");
        $(mainToArray[currentIndex].id).fadeOut(500, function(){
            $(mainToArray[currentIndex].id).removeClass("slide-rotate-ver-right");
            $(mainToArray[currentIndex-1].id).addClass("slide-rotate-ver-left-reverse");
            displaySection($(mainToArray[currentIndex-1].id));
            currentIndex--;
            setTimeout(function(){
                $(mainToArray[currentIndex].id).removeClass("slide-rotate-ver-left-reverse");
            }, 500);
        });
    };
    if(key.which === 39){
        if(currentIndex<5){
            $(mainToArray[currentIndex].id).addClass("slide-rotate-ver-left");
            $(mainToArray[currentIndex].id).fadeOut(500, function(){
                $(mainToArray[currentIndex].id).removeClass("slide-rotate-ver-left");
                $(mainToArray[currentIndex+1].id).addClass("slide-rotate-ver-right-reverse");
                displaySection($(mainToArray[currentIndex+1].id));
                currentIndex++;
                setTimeout(function(){
                    $(mainToArray[currentIndex].id).removeClass("slide-rotate-ver-right-reverse");
                }, 500);
            });
        }
    }
});

function displaySection(ele){
    ele.removeClass("d-none");
    ele.css("display", "none");
    ele.fadeIn(500);
};

function toast(){
    $(".toast").fadeTo(700, 1);
    setTimeout(function(){
        $(".toast").fadeTo(300, 0);
    }, 4000);
}


function inIt(){
    $("#index-main-section").css("display", "none");
    // $(".toast").css("display", "none");
    $("#index-main-section").fadeIn(700);
};