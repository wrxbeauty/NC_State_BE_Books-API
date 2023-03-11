// Dependencies
const express = require('express')

// Configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// Routes
app.get('/', function (req, res) {
    // This gets sent to the client 
    // (your web browser most likely!)
    res.send('My Books')
})

// Books
const booksController = require('./controllers/books_controller.js')
app.use('/books', booksController)

// app.get('/second', (req,res) => {
//     res.send('My Second Page!')
// })

// app.post('/book', (req, res) => {
//     res.send('My First Book')
// })

// Listen for connections.
app.listen(PORT, function () {
    console.log('You Did It!')
})