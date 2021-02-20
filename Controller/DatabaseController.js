const mysql = require('mysql2');

class DatabaseController
{
    async SelectQuery(sql, parameters = null)
    {
        const pool = mysql.createConnection({ host: 'localhost', user: 'root', port: 3308, database: "spinabifida" })
        const promisePool = pool.promise();
        let [rows, fields] = await promisePool.query(sql, parameters);
        pool.end();
        return rows;
    }
    
    async InsertUpdateQuery(sql, parameters = null)
    {
        const pool = mysql.createConnection({ host: 'localhost', user: 'root', port: 3308, database: "spinabifida" })
        const promisePool = pool.promise();
        let [rows, fields] = await promisePool.query(sql, parameters);
        pool.end();
        return rows.affectedRows;
    }
}

module.exports = DatabaseController;