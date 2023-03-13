const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

// Schema
const bookSchema = new Schema({
    id: { },
    title: { type: String, required: true },
    description: { type: String},
    year: { type: Number},
    quantity:{ type: Number, required: true},
    imageURL: { type: String, default: 'http://placehold.it/500x500.png' },
})


const Book = mongoose.model('Book', bookSchema)

module.exports = Book