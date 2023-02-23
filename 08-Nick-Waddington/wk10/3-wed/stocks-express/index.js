const express = require('express');
const ejs = require('ejs');
const _ = require('underscore');
const axios = require('axios');
const stockdata = require('node-stock-data');

// Basic setup
const server = express();
server.set('view engine', ejs);
const PORT = 8000;

//Define routes

server.get('/', (req, res) => {
    res.render('stock_form.ejs');
})

server.get('/stockinfo', async (req, res) => {
    try {
        console.log('Fetching stock data...');
        console.log(req.query.question);
      const response = await stockdata.stocks({
        API_TOKEN: 'fbb9be93b1011038b21c19e5a12fc60a',
        options: {
          limit: 3,
          symbols: req.query.symbol
        }
      });
      console.log('Stock data fetched:', response.data);
      const stock = response.data[0];
      const stockData = {
        symbol: stock.symbol,
        open: stock.open,
        close: stock.close
      };
      res.render('stock_data.ejs', { stockData });
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred');
    }
  });

server.listen(PORT, () => console.log(`Now serving on http://localhost:${ PORT }`));