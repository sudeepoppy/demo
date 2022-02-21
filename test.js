	
var express = require('express')
var serveStatic = require('serve-static')

var app = express()

//app.use(serveStatic('public/ftp', { index: ['default.html', 'default.htm'] }))
app.use(serveStatic('public/lib/app', { index: ['index.html' ] }))
app.listen(3000)

/*
const express = require('express')
const app = express()
const static =  require('serve-static')
const path =  require('path')
const port = 3000


app.use('/static', express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
*/