const express = require('express')
const ejs = require('ejs')
const axios = require('axios')

const server = express()
server.set('view-engine', ejs)
const PORT = 2000

//----------------------------------------

server.get('/', (req, res) => {
    res.render('home.ejs')
})

server.get('/result', (req, res) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${req.query.name}`).then((response) => {
        res.render('result.ejs', {name: response.data.name, image: response.data.sprites.front_default})
    })
    
}) 

//----------------------------------------

server.listen(PORT, () => console.log(`Now serving on http://localhost:${PORT}`))