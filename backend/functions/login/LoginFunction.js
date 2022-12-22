let connection = require('../data_base/DBConnection')

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

            resolve({
                validated: true,
                user: result[0]
            })
        })
    })
}