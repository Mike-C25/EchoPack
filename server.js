const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const sassMiddleware = require('node-sass-middleware');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express();
const home = require('./controllers/homeController.js');

const PORT = process.env.PORT || 3000;
const server_host = process.env.YOUR_HOST || '0.0.0.0';

// Set up view w. Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Middleware
// app.use(session({
//     secret: 'app',
//     cookie: { maxAge: 6 * 1000 * 1000 * 1000 * 1000 },
//     resave: true,
//     saveUninitialized: true,
// }));
app.use(cookieParser());

//Use Controllers
app.use('',home);

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(sassMiddleware({
    /* Options */
    src: __dirname,
    dest: path.join(__dirname, 'public/assets/scss'),
    debug: true,
    outputStyle: 'compressed',
    prefix: '/public/assets/css' // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/>
}));
// Note: you must place sass-middleware *before* `express.static` or else it will
// not work.


// Models.sequelize.sync({ force: false }).then(function() {
app.listen(PORT, server_host, function() {
    console.log(`Listening on PORT: ${PORT}`);
});
// });