const express = require('express')
const ejs = require('ejs')
const axios = require('axios')
const yahooStockPrices = require('yahoo-stock-prices')

const server = express()
server.set('view-engine', ejs)
const PORT = 1337

//----------------------------------------

server.get('/', (req, res) => {
    res.render('home.ejs')
})

server.get('/result', (req, res) => {
    axios.get(`https://query1.finance.yahoo.com/v8/finance/chart/${req.query.stock}?region=US&lang=en-US&includePrePost=false&interval=1wk&range=5y&corsDomain=finance.yahoo.com&.tsrc=finance`).then((response) => {
        // res.send(response.data)
        res.render('result.ejs', {stock: response.data.chart.result[0].meta.symbol, price: response.data.chart.result[0].meta.regularMarketPrice})
    })  
})

//----------------------------------------

server.listen(PORT, () => console.log(`Now serving on http://localhost:${PORT}`))