let mysql = require('mysql')

module.exports = {
    sqlConnection : sqlConnection = () => {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'codorgp'
        })
    }
}