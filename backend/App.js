const login = require('./functions/login/LoginFunction')

const express = require('express')
const cors = require('cors')
const {checkUsername} = require("./functions/register/CheckUsername");
const {createAccount} = require("./functions/register/CreateAccount");
const {getData} = require('./functions/get_data/GetData')

const app = express()
app.use(cors())

app.get('/login', (req, res) => {
    let details = req.query.userDetails
    login.userLogin(details.username, details.password)
        .then(data => {
            res.send(data)
        })
        .catch(data => {
            res.send(data)
        })
})

app.get('/check_username', (req, res) => {
    let details = req.query.username

    checkUsername(details)
        .then(data => {
            res.send(data)
        })
        .catch(data => {
            res.send(data)
        })
})

//PieIsReallyGood1
app.get('/create_user', (req, res) => {
    let details = req.query

    createAccount(details)
        .then(data => {
            res.send(data)
        }).catch(data => {
        res.send(data)
    })
})

app.get('/get_data', (req, res) => {
    let username = req.query.username
    getData(username)
        .then(data => {
            res.send(data)
        }).catch(data => {
        res.send(data)
    })
})

app.listen(8000, (error) => {
        if (!error)
            console.log("Server is Successfully Running")
        else
            console.log("Error occurred, server can't start", error);
    }
);