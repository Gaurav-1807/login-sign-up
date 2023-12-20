const express = require('express')
const router = require("./routs/user.rout");
const connect = require('./config/db');
const cookie = require('cookie-parser')
const app = express();

app.use(express.json())
app.use(cookie())
app.use(express.urlencoded({ extended : true }))

app.use(router)

app.listen (8090, () => {
    connect()
    console.log("listening on port 8090")
})

 