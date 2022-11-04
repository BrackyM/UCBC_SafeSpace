// Dependencies / Helpers
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection.js');
const hbs = exphbs.create({});

// Routes file
const routes = require('./controllers');

// Setting Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars')

const helper = require('./utils/helper');

// Setting up express application
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setting express routes up
app.use(routes);
app.use(express.static(path.join(__dirname, 'public')));

// Listening port
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Server started at listening on: http://localhost:' + PORT));
  });