// Dependencies / Helpers
const path = require('path');
const express = require('express');
const session = require('express-session')
const exphbs = require('express-handlebars')
const sequelize = require('./config/connection');

//Routes file
const routes = require('./routes');



const helper = require('./utils/helper');

// Setting up express application
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// Listening port
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Server started at listening on: http://localhost:' + PORT));
  });