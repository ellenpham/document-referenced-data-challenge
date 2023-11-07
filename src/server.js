// Sever confifuration happends in server.js

const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.json({
        message: 'Hello world!'
    });
});

module.exports = {
    app
}