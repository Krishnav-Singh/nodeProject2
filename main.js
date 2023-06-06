const express = require('express');

const app = express();

app.listen(3000, 'localhost');
// change the number in line 11, change the text to prime or composite, depending on the number you choose and then input the same number in the web search
let num = 2;
app.get('/number', (req, res) => {
    res.send('<p>Go to /number/:num to check if :num is prime or composite</p>');
});

app.get('/number/:2', (req, res) =>{
    res.send('<p> The number you have chosen is prime.</p>')
});


