const express = require('express')
const app = express()
const { linter } = require('./utils.js')

app.use(express.json())

app.post('/api/v1/lint', (req, res) => {
  res.send(linter(req.body))
})

app.listen(3000, () => {
  console.log('started on 3000')
})