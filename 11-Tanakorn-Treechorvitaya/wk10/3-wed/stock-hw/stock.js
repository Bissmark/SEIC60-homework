const express = require('express');
const ejs = require('ejs');
const StockSocket = require("stocksocket");

// Basic setup
const server = express();
server.set('view-engine', ejs);
const PORT = 1337;

server.get('/ask', (req,res) => {
    res.render('ask.ejs');
});

server.get('/answer', (req,res) => {
    console.log(req.query.question);
    StockSocket.addTicker(req.query.question, stockPriceChanged);
    function stockPriceChanged(data) {
        console.log(data);
        res.render('answer.ejs', {question: req.query.question, answer: data.price});
      }
 });

 server.listen(PORT, () => console.log(`Now serving on http://localhost:${PORT}`));