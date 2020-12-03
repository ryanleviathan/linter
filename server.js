const express = require('express')
const app = express()
const Stack = require('./stack.js')

app.use(express.json())

app.get('./lint', (req, res) => {
  res.send('Hello world')
})

app.listen(3000, () => {
  console.log('started on 3000')
})