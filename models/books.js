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


// module.exports = [
//     {
//         "books": [
//           {
//             "id": 1,
//             "title": "The Shinobi Initiative",
//             "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
//             "year": 2014,
//             "quantity": "10",
//             "imageURL": "/assets/shinobi-initiative.jpeg"
//           },
//           {
//             "id": 2,
//             "title": "Tess the Wonder Dog",
//             "description": "The tale of a dog who gets super powers",
//             "year": 2007,
//             "quantity": "3",
//             "imageURL": "/assets/tess.jpg"
//           },
//           {
//             "id": 3,
//             "title": "The Annals of Arathrae",
//             "description": "This anthology tells the intertwined narratives of six fairy tales.",
//             "year": 2016,
//             "quantity": "8",
//             "imageURL": "/assets/arathrae.jpeg"
//           },
//           {
//             "id": 4,
//             "title": "W∀RP",
//             "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
//             "year": 2010,
//             "quantity": "40",
//             "imageURL": "/assets/warp.jpeg"
//           }
//         ]
//       }
// ]