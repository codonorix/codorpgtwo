let connection = require('../data_base/DBConnection')
const {PlayerObject} = require("./PlayerObject");


module.exports = {
    createAccount: this.createAccount = (details) => new Promise((resolve, reject) => {

        let db = connection.sqlConnection()

        const username = details.details.username
        const password = details.details.password

        try {
            const userObj = new PlayerObject()
            userObj.classId = Number(details.classType)

            db.query(`INSERT INTO users (username, password, user_obj) VALUES ('${username}', '${password}', '${JSON.stringify(userObj)}')`, (err, result, fields) => {
                if (err) {
                    console.log(err)
                    reject({
                        created: false
                    })
                }

                resolve({
                    created: true
                })
            })
        } catch (e) {
            reject(e)
        }
    })

}