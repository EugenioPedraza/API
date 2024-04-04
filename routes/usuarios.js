
const express = require('express')
const router = express.Router()
const UserController = require('../controllers/usuarios.js')

// Aqui se generan las rutas para la pagina web en donde puedes ver y/o editar los datos.
router.get('/', UserController.getAllUsers)
router.get('/:id', UserController.getUser)
router.post('/add', UserController.addUser)
router.put('/update/:id', UserController.updateUser)
router.delete('/delete/:id', UserController.deleteUser)

module.exports = router;