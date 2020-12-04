const express = require('express')
const app = express()
const { linter } = require('./utils.js')

app.use(express.json())

app.post('/api/v1/lint', (req, res) => {
  console.log(req.body)
  const result = linter(req.body)
  res.send(result)
})

app.listen(3000, () => {
  console.log('started on 3000')
})