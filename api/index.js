const app = require('express')()
const axios = require('axios')
const graphCMS =
  'https://api-uswest.graphcms.com/v1/cjmuo8ke601gj01gha4wwi79a/master'
const queries = require('./queries')

app.get('/api/:page', (req, res) => {
  axios({
    url: graphCMS,
    method: 'post',
    data: {
      query: queries[req.params.page]
    }
  }).then(result => {
    res.send(result.data.data)
  })
})

module.exports = app
