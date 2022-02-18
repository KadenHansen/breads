const React = require('react')
const Default = require('./layouts/Default')
const breads = require("../models/bread")

function Index () {
    return (
      <Default>
          <h2>Index Page</h2>
          <ul>
            {
              breads.map((bread, index) => {
                return (
                  <li key={index}>
                    <a href={`/bread/${index}`}>
                      {bread.name}
                    </a>
                  </li>)
              })
            }
          </ul>
          <a href="/bread/new">
            <button>Add a Bread</button>
          </a>
      </Default>
    )
}

module.exports = Index