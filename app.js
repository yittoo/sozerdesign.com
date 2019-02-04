var express = require("express"),
    app     = express(),
    bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/en", function(req, res){
    res.render("en/index.ejs");
});

app.get("/tr", function(req, res){
    res.render("tr/index.ejs");
});

app.get("/tr/*", function(req, res){
    res.redirect("/tr");
});

app.get("/en/*", function(req, res){
    res.redirect("/en");
});

app.get("*", function(req, res){
    res.redirect("/");
});

app.listen(3000, "127.0.0.1" , function(){
    console.log("webbo is uppo");
});

