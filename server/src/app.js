const express = require("express");
const app = express();

// get status
app.get("/status", (req, res) => {
    res.send("App running on 8081");
});

//test req
app.get("/hello/:person", (req, res) => {
    res.send("Hello " + req.params.person);
});

// create user
app.post("/user", (req, res) => {
    res.send("create user");
});

// edit user
app.put("/user/:userId", (req, res) => {
    res.send("edit user");
});

// delete user
app.delete("/user/:userId", (req, res) => {
    res.send("delete user");
});

// gel all users
app.get("/users", (req, res) => {
    res.send("get all users");
});

// gel user
app.get("/user/:userId", (req, res) => {
    res.send("get user");
});

app.listen(8081, () => {
    console.log("server running on 8081");
});