let connection = require('../data_base/DBConnection')

module.exports = {
    checkUsername: checkUsername = (username) => new Promise((resolve, reject) => {
        let db = connection.sqlConnection()
        db.query(`select * from users WHERE username = '${username}'`, (err, result, fields) => {
            if (err) {
                reject({
                        validated: false,
                    }
                )
            }

            if (result.length === 0) resolve({
                validated: true,
            })

            resolve({
                validated: false,
            })
        })
    })
}