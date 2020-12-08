const express = require('express')
const router = express.Router()
const path = require('path')

const livros = []

router.get('/biblioteca', (req, res) => {
  console.log('Você está na biblioteca')
  const books = livros
  res.render('biblioteca', {books: livros, pageTitle: 'Biblioteca'})
  console.log('Livros:', livros)
})

router.post('/add-livro', (req, res) => {
  livros.push({ Livro: req.body.Livro })
  console.log('Foi cadastrado o livro:', req.body)
  res.redirect('/biblioteca')
})

exports.routes = router
exports.livros = livros
