const React = require('react')
const Default = require('./layouts/default')

function Index({books, title}) {
    return (
        <Default title={title}>
            <h2>Index Page</h2>
            <ul>
                {
                    books.map((book, index)=> {
                        return (
                        <li key={index}>
                            <a href={`/books/${index}`}>
                            {book.name}
                            </a>
                        </li>
                        )
                    })
                }
            </ul>
        </Default>
    )
}

module.exports = Index