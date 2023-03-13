// Dependencies
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')

// Configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// Middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(methodOverride('_method'))

mongoose.connect(process.env.MONGO_URI, 
{
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => {
    console.log('connected to mongo: ', process.env.MONGO_URI);
}).catch((err) => {
    console.error('Error connecting to MongoDB: ', err);
})

// Routes
app.get('/', function (req, res) {
    // This gets sent to the client 
    // (your web browser most likely!)
    res.send('My Books')
})

// Books
const booksController = require('./controllers/books_controller.js')
app.use('/books', booksController)

// Listen for connections.
app.listen(PORT, function () {
    console.log('Hello World!')
})

app.get('*', (req, res) => {
    res.send('404')
})