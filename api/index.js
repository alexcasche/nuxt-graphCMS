const app = require('express')()
const Prismic = require('prismic-javascript')
const prismicURL = 'https://athleticgreens.prismic.io/api/v2'

app.get('/api/:page', (req, res) => {
  Prismic.api(prismicURL)
    .then(function(api) {
      return api.query(Prismic.Predicates.at('document.type', 'homepage'))
    })
    .then(function(response) {
      res.send(response.results[0].data)
    })
})

module.exports = app
