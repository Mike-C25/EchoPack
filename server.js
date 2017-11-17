// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require("express-session");
// const sassMiddleware = require('node-sass-middleware')
const path = require('path');
const exphbs = require('express-handlebars');
const passport = require('./config/passport'); // our local passport strategy
const app = express();

const home = require('./controllers/homeController.js');
const box = require('./controllers/boxController.js');
const post = require('./controllers/postController.js');
const user = require('./controllers/userController.js');
//const comment

const env = require('dotenv/config')
const db = require("./models");

const PORT = process.env.PORT || 3000;
const server_host = process.env.YOUR_HOST || '0.0.0.0';


// Set up view w. Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//MIDDLEWARE FOR SASS
// app.use(sassMiddleware({
//     /* Options */
//     src: path.join(__dirname, 'public/assets/sass'),
//     dest: path.join(__dirname, 'public/assets/css/main.css'),
//     debug: true,
//     indentedSyntax: true,
//     outputStyle: 'compressed',
//     prefix: '/assets'
// }));
// Note: you must place sass-middleware *before* `express.static` or else it will 
// not work. 
app.use('/public', express.static(path.join(__dirname, 'public')));
// Vin added this... not sure if we need ?
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session());
//Use Controllers
app.use('/', home);
// home(app);
box(app);
post(app);
user(app);
//comment(app);


/*
// Models.sequelize.sync({ force: false }).then(function() {
app.listen(PORT, server_host, function() {
    console.log(`Listening on PORT: ${PORT}`);
});
// });
*/
db.sequelize.sync({force:false}).then(function(){
	app.listen(PORT, function(){
		console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
	})
})