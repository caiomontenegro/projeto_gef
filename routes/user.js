const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('Você está na Home Page');
    res.send('<h1> Grupo Espírita Fraternidade. </h1>')
})

module.exports = router;