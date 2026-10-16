const express = require("express");
const app = express();

const port = 8080;
app.set("view engine","ejs");

app.listen(port, ()=>{
    console.log(`listening to port ${port}`);
});

app.use(express.static("public"));

app.get("/",(req,res) => {
    res.render("home.ejs");
});
app.get("/bio",(req,res) => {
    res.render("bio.ejs");
});
app.get("/projects",(req,res) => {
    res.render("projects.ejs");
});
app.get("/skills",(req,res) => {
    res.render("skills.ejs");
});



app.get("/:username",(req,res)=>{
    let { username } = req.params;
    res.send(username);
});