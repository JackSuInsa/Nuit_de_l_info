const express = require('express');
const app = express();

const port = 3000;

app.use(express.urlencoded({ extended: true }));

const session = require('express-session');
app.use(session({
	secret: 'user_session',
	resave: true,
	saveUninitialized: true,
	cookie: {httpOnly: true},
}));

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));


const home = require('./routes/home');
app.use('/', home);

const decouverte = require('./routes/decouverte');
app.use('/decouverte', decouverte);

const credit = require('./routes/credit');
app.use('/credit', credit);

app.use((req, res) => {
	res.status(404).send('404 : Page not found');
});

app.listen(port, () => {
	console.log(`Express app listening on port ${port}`);
});