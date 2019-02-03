var express = require("express"),
    app     = express(),
    bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
    res.render("landing");
});

app.use(bodyParser.urlencoded({extended: true}));

app.get("/:lang", function(req, res){
    if(req.params.lang === "en" || req.params.lang === "tr"){
        res.render("index.ejs", {language: req.params.lang});
    } else if(req.params.lang !== "favicon.ico") {
        console.log("that language support does not exist");
        res.redirect("/");
    }
});

    

app.listen(3000, "127.0.0.1" , function(){
    console.log("webbo is uppo");
});

