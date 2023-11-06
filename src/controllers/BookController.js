const express = require('express');
const { Book } = require('../models/BookModel');
const router = express.Router();

// Get all books
// example route: localhost:3000/books/all - GET method
router.get("/all", async (request, response) => {
    let result = await Book.find({});

    response.json({
        books: result
    });
});


// Get one book by its ID
// example route: localhost:3000/books/one/id/1 - GET method
router.get("/one/id/:id", async (request, response) => {
    let result = null;
    
    response.json({
        book: result
    });
});

// Get one book by its name
// example route: localhost:3000/books/one/name/atomic-habits - GET method
router.get("/one/name/:nameToSearchFor", async (request, response) => {
    let result = null;
    
    response.json({
        book: result
    });
});


// Get multiple books from the same author
// example route: localhost:3000/books/multiple/author/paulo-coelho - GET method
router.get("/multiple/author/:authorToFilterBy", async (request, response) => {
    let result = null;
    
    response.json({
        books: result
    });
});

// Create a new book
// example route: localhost:3000/books/ - POST method
router.post("/", async (request, response) => {
    let result = await Book.create(request.body).catch(error => error);
    
    response.json({
        book: result
    });
});

// Update an existing book
// example route: localhost:3000/books/id/1 - PATCH method
router.patch("/id/:id", async (request, response) => {
    let result = null;
    
    response.json({
        book: result
    });
});


// Delete a book by ID
// example route: localhost:3000/books/id/1 - DELETE method
router.delete("/id/:id", async (request, response) => {
    let result = null;
    
    response.json({
        book: result
    });
});


module.exports = router;