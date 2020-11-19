const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/biblioteca', (req, res) => {
    console.log('Você está na biblioteca');
    res.sendFile(path.join(__dirname, '../', 'views', 'biblioteca.html'));
});

router.post('/add-livro', (req, res) => {
    console.log('Foi cadastrado o livro:', req.body);
    res.redirect('/biblioteca')
})

module.exports = router;