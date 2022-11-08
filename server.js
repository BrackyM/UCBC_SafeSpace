// // Dependencies / Helpers
// const path = require('path');
// const express = require('express');
// const session = require('express-session');
// const exphbs = require('express-handlebars');
// const sequelize = require('./config/connection');
// const hbs = exphbs.create({});

// // Routes file
// const routes = require('./controllers');

// // tutorial connection
// app.engine('hbs', exphbs({
//   defaultLayout: 'main',
//   extname: '.hbs'
// }));

// app.get('/', (req, res) => {
//   res.render('home');
// });

// app.listen(3000, () => {
//   console.log('The web server has started on port 3000');
// });



// app.set('view engine', 'hbs');



// // Setting Handlebars
// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars')

// const helper = require('./utils/helper');

// // Setting up express application
// const app = express();
// const PORT = process.env.PORT || 3001;

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Setting express routes up
// app.use(routes);
// app.use(express.static(path.join(__dirname, 'public')));

// // Listening port
// sequelize.sync({ force: false }).then(() => {
//     app.listen(PORT, () => console.log('Server started at listening on: http://localhost:' + PORT));
//   });

const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const dataBase = require('./db/data.json')

// Setting up express application
const PORT = process.env.PORT || 3001;
const app = express()

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var path = require ('path');
app.use(express.static(path.join(__dirname + 'public')));

// Setting Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.render('home', {dataBase});
});

app.listen(PORT, () => {
  console.log(`Page available at: ${PORT}`);
});