const express = require('express');
const ejs = require('ejs');
const movier = require('movier');

// Basic setup
const server = express();
server.set('view-engine', ejs);
const PORT = 1337;

server.get('/ask', (req,res) => {
    res.render('ask.ejs');
});

server.get('/answer', (req,res) => {
    const data = movier.getTitleDetailsByName(req.query.question);
    data.then((response) => { 
        console.log(response);
        res.render('answer.ejs', {question: req.query.question, answer: response });
    });
 });

 server.listen(PORT, () => console.log(`Now serving on http://localhost:${PORT}`));