const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const request = require('request')
const exphbs  = require('express-handlebars');
app.use(express.static(path.join(__dirname, 'client')))
app.use(express.static(path.join(__dirname, 'node_modules')))

