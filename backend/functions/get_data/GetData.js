let connection = require('../data_base/DBConnection')

module.exports = {
    getData: getData = (username) => new Promise((resolve, reject) => {
        let db = connection.sqlConnection()
        db.query(`select user_obj from users WHERE username = '${username}'`, (err, result, fields) => {
            if (err) {
                reject({
                        validated: false,
                    }
                )
            }

            resolve({
                validated: true,
                data: JSON.parse(result[0].user_obj)
            })
        })
    })
}