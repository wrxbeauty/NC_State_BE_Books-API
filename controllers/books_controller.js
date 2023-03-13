const express = require('express')
const books = express.Router()
const Book = require('../models/books.js')

// Index
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

// Show
books.get('/books/:id', (req, res) => {
  Book.findById()
  .populate()
  .then(
    res.render('show')
  )
  .catch(err => {
    res.send('404')
  })
})

// Edit
books.get('/books/:id', (req, res) => {
  Book.find()
      .then(() => {
          Book.findById(req.params.id)
              .then(() => {
                  res.render('edit')
              })
      })
})

// Update
books.put('/books/:id', (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(updateBook => {
          console.log(updateBook)
          res.redirect(`/books/${req.params.id}`)
      })
})

// CREATE
books.post('/books/:id', (req, res) => {
  if (!req.body.image) {
      req.body.image = undefined
  }
  Book.create(req.body)
  res.redirect('/books')
})

module.exports = books