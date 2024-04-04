
// Variables necsarias para la ejecucion del servidor
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const pool = require('./config/db.js')
const dotenv = require('dotenv')
dotenv.config();

// Middlewares y tipo de codificacion
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Rutas
app.get('/', (req, res) => {
  res.send('WebAPI Starting Page')
})

// Aqui estan todas las rutas
app.use(require('./routes/routes.js'))

// Inicializacion del servidor
app.listen(port, () => {
  console.log(`Escuchando desde el puerto: ${port}`)
})
