const React = require('react')
const Default = require('./layouts/Default')

function Show ({book}) {
  console.log(book.name)
    return (
      <Default>
        <h2>Show Page</h2>
        <h3>{book.name}</h3>
        <img src={book.image} alt={book.name} />
      </Default>
    )
}

module.exports = Show
