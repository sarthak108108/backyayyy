require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram_handle', (req, res) => {
    res.send('_sarthak.arora@gmail.com')
})

app.get('/login', (req, res) =>{
    res.send('<h1>Login at backyayyy</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})