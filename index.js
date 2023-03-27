const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
// const postsApi = require('./server/posts');
// const loginApi = require('./server/login');
// const registerApi = require('./server/register');
// const userApi = require('./server/users');

app.use('/', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '2mb' }));
app.use(cookieParser());
// app.use(postsApi);
// app.use(loginApi);
// app.use(registerApi);
// app.use(userApi);

const db = 'mongodb+srv://admin:fhFJRUjL8Fyhfk@personal.glw3av5.mongodb.net/HashHawk?retryWrites=true&w=majority';

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => {
    console.log('Connected with database');
});

app.listen(process.env.PORT || 8080, () => {
    console.log(`Server up and running on port ${process.env.PORT || 8080}`);
});