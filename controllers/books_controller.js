const express = require('express')
const books = express.Router()
const Book = require('../models/books.js')

// Index
books.get('/', (req, res) => {
  res.send('Index')
})

// New
books.get('/books', (req, res) => {
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

// Delete
books.delete('/books/:id', (req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then(deletedBook => {
      console.log(deletedBook)
      res.status(303).redirect('/books')
    })
})

// SEED
books.get('/seed', (req, res) => {
  Book.insertMany([{
    "title": "The Shinobi Initiative",
    "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
    "year": 2014,
    "quantity": 10,
    "imageURL": "https://imgur.com/LEqsHy5.jpeg"
  },
  {
    "title": "Tess the Wonder Dog",
    "description": "The tale of a dog who gets super powers",
    "year": 2007,
    "quantity": 3,
    "imageURL": "https://imgur.com/cEJmGKV.jpg"
  },
  {
    "title": "The Annals of Arathrae",
    "description": "This anthology tells the intertwined narratives of six fairy tales.",
    "year": 2016,
    "quantity": 8,
    "imageURL": "https://imgur.com/VGyUtrr.jpeg"
  },
  {
    "title": "Wâˆ€RP",
    "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
    "year": 2010,
    "quantity": 4,
    "imageURL": "https://imgur.com/qYLKtPH.jpeg"
  }])
    .then(res.status(200).json({
      message: 'Seed successful'
    }))
    .catch(res.status(400).json({
      message: 'Seed unsuccessful'
    }))
})


module.exports = books