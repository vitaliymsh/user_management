const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const exphbs = require('express-handlebars');


require('dotenv').config();

const mongoConnect = require('./util/database').mongoConnect;

const app = express();
const port = process.env.PORT || 5000;

// Parsing middleware
// Parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true })); // New

// Parse application/json
// app.use(bodyParser.json());
app.use(express.json()); // New

// Static Files
app.use(express.static('public'));

// Templating Engine
//const handlebars = exphbs.create({ extname: '.hbs', });
//app.engine('.hbs', handlebars.engine);
//app.set('view engine', '.hbs');
app.set('view engine', 'ejs');

const routes = require('./routes/user');
app.use('/', routes);

app.listen(port, () => console.log(`Listening on port ${port}`));
mongoConnect(() => {
    app.listen(8080);
  });