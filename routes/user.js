const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/', (req, res) => {
  console.log('Você está na Home Page')
  res.render('index')
})

module.exports = router
