const mysql = require('mysql2/promise')

const index = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'architech',
    password:'root',
    connectionLimit:10,
    enableKeepAlive:true,
    keepAliveInitialDelay:0
})

async function query(query, value){
    try {
        const [executeQuery] = await index.query(query,value ?? [])
        return executeQuery
    } catch (error) {
        console.log(error);
    }
    
}

module.exports = query