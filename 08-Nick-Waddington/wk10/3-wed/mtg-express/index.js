const express = require('express');
const ejs = require('ejs');
const _ = require('underscore');
const axios = require('axios');

// Basic setup
const server = express();
server.set('view engine', ejs);
const PORT = 8000;

//Define routes

server.get('/', (req, res) => {
    res.render('home.ejs');
})

server.get('/cards', async (req, res) => {
    try {
        const cards = [];
        for (let i = 0; i < 4; i++) {
          const response = await axios.get('https://api.scryfall.com/cards/random');
          const card = response.data;
          cards.push(card);
        }
        res.render('mtg_cards.ejs', { cards });
      } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
      }
})

server.get('/set', async (req, res) => {
    const set_code = req.query.set
    try {
          const response = await axios.get(`https://api.scryfall.com/sets/${set_code}`);
          const set = response.data;
        
        res.render('mtg_set.ejs', { set });
      } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
      }
})

server.listen(PORT, () => console.log(`Now serving on http://localhost:${ PORT }`));