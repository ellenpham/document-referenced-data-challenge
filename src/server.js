// Sever confifuration happends in server.js

const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    response.json({
        message: 'Hello world!'
    });
});

const BookRouter = require('./controllers/BookController');
app.use('/books', BookRouter);

const UserRouter = require('./controllers/UserController');
app.use('/members', UserRouter);


module.exports = {
    app
}