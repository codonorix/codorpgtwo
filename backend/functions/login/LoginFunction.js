let connection = require('../data_base/DBConnection')
const {PlayerObject} = require("../register/PlayerObject");

module.exports = {
    userLogin: userLogin = (username, password) => new Promise((resolve, reject) => {
        let db = connection.sqlConnection()
        db.query(`select * from users WHERE username = '${username}' AND password = '${password}'`, (err, result, fields) => {

            if (err) {
                reject({
                        validated: false,
                        user: null
                    }
                )
            }

            if (result.length === 0) reject({
                validated: false,
                user: null
            })

            let obj = Object.assign(new PlayerObject(), JSON.parse(result[0].user_obj))

            db.query(`UPDATE users SET user_obj = '${JSON.stringify(obj)}' WHERE username = '${username}'`)

            resolve({
                validated: true,
                user: result[0],
                dbData: obj
            })
        })
    })
}