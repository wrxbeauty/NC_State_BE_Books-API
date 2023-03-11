const express = require('express')
const books = express.Router()
const Book = require('../models/books.js')

// INDEX
books.get('/', (req, res) => {
  res.send(Book)
})

// Show
books.get('/:arrayIndex', (req,res) => {
    res.send(Book[req.params.arrayIndex])
})

module.exports = books