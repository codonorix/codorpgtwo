const login = require('./functions/login/LoginFunction')

const express = require('express')
const cors = require('cors')

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

    // console.log(value)
})

app.listen(8000)