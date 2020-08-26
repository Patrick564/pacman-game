const express = require('express');
const app = express();

// const server = require('http').Server(app);

app.use('/public', express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

module.exports = app;

// server.listen(8000, '0.0.0.0', (err) => {
//     if (err) throw err;
// });
