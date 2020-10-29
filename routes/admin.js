const express = require('express');
const router = express.Router();

router.get('/biblioteca', (req, res) => {
    console.log('Você está na biblioteca');
    res.send('<h1> Bem-vindo à Biblioteca </h1> <h3> Utilize o campo abaixo para cadastrar novos livros: </h3> <form action="/add-livro" method="POST"><input type="text" name="livro"><button type="submite">Cadastrar</button></form>');
});

router.post('/add-livro', (req, res) => {
    console.log('Foi cadastrado o livro:', req.body);
    res.redirect('/biblioteca')
})

module.exports = router;