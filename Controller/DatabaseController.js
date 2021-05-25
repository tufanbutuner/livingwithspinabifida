const mysql = require('mysql2');

class DatabaseController
{
    static async SelectQuery(sql, parameters = null)
    {
        const pool = mysql.createConnection({ host: 'remotemysql.com', user: '6KWAbGb9JQ', password: '2E47QGs5Yk', port: 3306, database: "6KWAbGb9JQ" })
        const promisePool = pool.promise();
        let [rows, fields] = await promisePool.query(sql, parameters);
        pool.end();
        return rows;
    }
    
    static async InsertUpdateQuery(sql, parameters = null)
    {
        const pool = mysql.createConnection({ host: 'remotemysql.com', user: '6KWAbGb9JQ', password: '2E47QGs5Yk', port: 3306, database: "6KWAbGb9JQ" })
        const promisePool = pool.promise();
        let [rows, fields] = await promisePool.query(sql, parameters);
        pool.end();
        return rows.affectedRows;
    }
}

module.exports = DatabaseController;