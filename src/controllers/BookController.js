const express = require('express');
const { Book } = require('../models/BookModel');
const router = express.Router();

router.get("/all", async (request, response) => {
    let result = await Book.find({});

    response.json({
        books: result
    });
});

module.exports = router;