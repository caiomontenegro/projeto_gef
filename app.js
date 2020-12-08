// Requisição de módulos
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

const userRoutes = require('./routes/user')
const adminRoutes = require('./routes/admin')

// COnfiguração de módulos
app.set('view engine', 'pug')
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'public')))


// Rotas
app.use(userRoutes)
app.use(adminRoutes.routes)

app.use((req, res) => {
  res.status(404).render('404', {pageTitle: 'Ops'})
})


// Porta do Servidor
app.listen(3000)
