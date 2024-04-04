const pg = require('pg')
const Pool = pg.Pool;
const dotenv = require('dotenv')
dotenv.config();

// Acceder a la BD
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT
})

// Creo una funcion para cada vez que se necesite hacer una promesa de query
const querypromise = (sql) => {
    return new Promise((resolve, reject) => { 
        pool.query(sql, (error, results) => {
            if (error){
                return reject(error)
            }
            return resolve(results.rows)
        }) 
    })
}
// Esto me permite utilizar esta variables en otros archivos
module.exports = {
    pool,
    querypromise
}