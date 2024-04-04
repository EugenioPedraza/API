
// Importamos express y creamos un router para las rutas de la API 
const express = require('express')
const router = express.Router()

router.use('/usuarios', require('./usuarios.js'))

module.exports = router;