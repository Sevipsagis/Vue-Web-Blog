const express = require("express");
const app = express();

app.get("/status", (req, res) => {
    res.send("Hello, World!!");
})

app.listen(8081, () => {
    console.log("server running on 8081");
});