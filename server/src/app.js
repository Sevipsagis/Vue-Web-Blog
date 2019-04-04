const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// get status
app.get("/status", (req, res) => {
    res.send("App running on 8081");
});

//test req
app.get("/hello/:person", (req, res) => {
    res.send("Hello " + req.params.person);
});

// gel all users
app.get("/users", (req, res) => {
    res.send("get all users");
});

// gel user
app.get("/user/:userId", (req, res) => {
    res.send("get user " + req.params.userId);
});

// create user
app.post("/user", (req, res) => {
    res.send("create user : " + JSON.stringify(req.body));
});

// edit user
app.put("/user/:userId", (req, res) => {
    res.send("edit user " + req.params.userId + " : " + JSON.stringify(req.body));
});

// delete user
app.delete("/user/:userId", (req, res) => {
    res.send("delete user " + req.params.userId + " : " + JSON.stringify(req.body));
});

app.listen(8081, () => {
    console.log("server running on 8081");
});