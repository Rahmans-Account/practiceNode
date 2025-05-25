const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

let logindata = { login: false, ErrorMessage: '' };

// HOME
app.get('/', (req, res) => {
  res.render('home');
});

// LOGIN GET
app.get('/login.ejs', (req, res) => {
  res.render('login', { logindetails: logindata });
});

// LOGIN POST
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'rahman' && password === '123') {
    logindata = { login: true, ErrorMessage: '' };
    res.render('dashboard');
  } else {
    logindata = { login: false, ErrorMessage: 'Invalid Username Or Password' };
    res.render('login', { logindetails: logindata });
  }
});

// PROFILE
app.get('/profile.ejs', (req, res) => {
  const user = {
    username: 'john doe',
    email: 'john@gmail.com',
  };
  res.render('profile', { user });
});
app.get('/help.ejs', (req, res) => {
  const user = {
    username: 'john doe',
    email: 'john@gmail.com',
  };
  res.render('help', { user });
});
// PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
