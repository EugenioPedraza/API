const UserServices = require('../services/usuarios.js')

// Controlladores que se exportan a traves de los archivos para manejar los servicios de POST y GET
module.exports = {
    getAllUsers : async (req, res, next) => {
        try {
            const usuarios = await UserServices.getAllUsers();
            res.json({usuarios})

        } catch (err){
            res.json({"message": `Error al obtener todos los usuarios. Err: ${err}`})
        }
    },
    getUser : async (req, res) =>{
        const id = req.params.id;
        try {
            const usuario = await UserServices.getUser(id);
            res.json({usuario})

        } catch (err){
            res.json({"message": `Error al obtener el usuario. Err: ${err}`})
        }
    },
    // Controllador para agregar un nuevo usuario (email)
    addUser : async (req, res) =>{
        try {
            const usuario = await UserServices.addUser(req.body);
            res.status(200).json({usuario})

        } catch (err){
            res.status(500).json({"message": `Error al agregar el usuario. Err: ${err}`})
        }
    },
    updateUser : async (req, res) => { 

        const id = req.params.id;

        try {
            const usuario = await UserServices.updateUser(id, req.body);
            res.status(200).json({usuario})

        } catch (err){
            res.status(500).json({"message": `Error al actualizar los usuarios. Err: ${err}`})
        } 
    },
    deleteUser : (req, res) => { 
        const id = req.params.id;
        try {
            const usuario = UserServices.deleteUser(id);
            res.status(200).json({usuario})

        } catch (err){
            res.status(500).json({"message": `Error al eliminar el usuario. Err: ${err}`})
        }
    }
}