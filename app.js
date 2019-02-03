var express = require("express"),
    app     = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/about", function(req, res){
    res.render("about");
});


app.listen(3000, "127.0.0.1" , function(){
    console.log("webbo is uppo");
});

