const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/about', (req, res) => {
  res.send('we are in the about route')
})
app.get('/about/:number', (req, res) => {
  res.send(req.params.number)
})
app.listen(3000, () => console.log('Server ready at port 3000'))