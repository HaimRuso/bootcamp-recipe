const express = require('express')
const app = express()
const port = 8080
const path = require('path')
const request = require('request')
const exphbs = require('express-handlebars');
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.get('/sanity', function (req, res) {
    res.send("OK")
})

app.get('/recipes/:ingredient', function (req, res) {
    let ingredient = req.params.ingredient
    request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function (err, response, body) {
        if (err) {
            console.log("Error")
        }
        else {
            let data = JSON.parse(body)
            res.send(data.results)
        }
    })
})

app.listen(port, function () {
    console.log("the server is running on port:" + port)
})



