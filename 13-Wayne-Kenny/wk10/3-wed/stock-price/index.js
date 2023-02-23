// import the express library, ejs, underscore, axios
const express = require('express');
const ejs = require('ejs')
const _ = require('underscore');
const quote = require('stock-quote')

// Basic setup
const server = express();
server.set('view-engine', ejs); // the views folder will not work without this and you wouldn't be able to access the ejs files
server.use(express.static('public'));

const PORT = 6969;

// Define your routes
server.get('/', (req, res) => {
    res.render('home.ejs');
});

server.get('/info',async (req, res) => {
    const { currentPrice } =  await quote.getQuote(req.query.symbol);
    res.render(`info.ejs`, {symbol: req.query.symbol, price: currentPrice});
})

// Find the port in terminal and confirm that it is working
server.listen(PORT, () => console.log(`Now serving on http://localhost:${ PORT }/`));
