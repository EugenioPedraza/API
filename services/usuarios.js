const dbServices = require('../config/db.js')
// Se exportan los servicios de usuario para ser utilizados en los controladores
module.exports = {
    getAllUsers : () => {
       // Llamar a la BD con los datos de usuario en formato JSON
    sql = 'SELECT id, email FROM usuario'
        return dbServices.querypromise(sql)
    },
    getUser : (id) => {
        // Llamar a la BD con los datos de usuario en formato JSON
     sql = `SELECT id, email FROM usuario WHERE id=${id}`
        return dbServices.querypromise(sql)
     },
     // Se enecarga de agreagar en la BD el nuevo correo de usuario
     addUser: (body) => {
        const {email} = body
        
        sql = `INSERT INTO usuario(email) VALUES('${email}') RETURNING *`

        return dbServices.querypromise(sql)
     },
     // Cambiamos el email del usuario tomando cuenta su ID
     updateUser: (id, body) => {

        const {email} = body

        sql = `UPDATE usuario SET email='${email}' WHERE id=${id} RETURNING *`
        return dbServices.querypromise(sql)
     },
     deleteUser: (id) => { 
         sql = `DELETE FROM usuario WHERE id=${id}`
         return dbServices.querypromise(sql)
     }
}