// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
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


// Models.sequelize.sync({ force: false }).then(function() {
app.listen(PORT, server_host, function() {
    console.log(`Listening on PORT: ${PORT}`);
});
// });
