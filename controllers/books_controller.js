const express = require('express')
const books = express.Router()
const Book = require('../models/books.js')

// INDEX
books.get('/', (req, res) => {
  res.render('Index')
})

// New
books.get('/books', (req,res) => {
  Book.find()
  .then(() => {
    res.render('new')
  })
})


books.get('/books/:id', (req, res) => {
  res.send(Book)
})

// Show
books.get('/books', (req,res) => {
    res.send(Book[req.params.books])
})

books.put('/books/:id')

module.exports = books