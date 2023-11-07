const express = require('express');
const { Book } = require('../models/BookModel');
const router = express.Router();

// Get all books - DONE
// GET localhost:3000/books/all 
router.get("/all", async (request, response) => {
    let result = await Book.find({});

    response.json({
        books: result
    });
});


// Get one book by its ID - with Reviews
// GET localhost:3000/books/one/id/1
router.get("/one/id/:id", async (request, response) => {
    let result = null;
    
    response.json({
        book: result
    });
});

// Get one book by its name - with Reviews
// GET localhost:3000/books/one/name/atomic-habits
router.get("/one/name/:nameToSearchFor", async (request, response) => {
    let result = null;
    
    response.json({
        book: result
    });
});


// Get multiple books from the same author
// GET localhost:3000/books/multiple/author/paulo-coelho
router.get("/multiple/author/:authorToFilterBy", async (request, response) => {
    let result = null;
    
    response.json({
        books: result
    });
});

// Create a new book - DONE
// POST localhost:3000/books/
router.post("/", async (request, response) => {
    let result = await Book.create(request.body).catch(error => error);
    
    response.json({
        book: result
    });
});

// Update an existing book
// PATCH localhost:3000/books/id/1
router.patch("/id/:id", async (request, response) => {
    let result = null;
    
    response.json({
        book: result
    });
});


// Delete a book by ID
// DELETE localhost:3000/books/id/1 
router.delete("/id/:id", async (request, response) => {
    let result = null;
    
    response.json({
        book: result
    });
});


// Create a new review 
// POST localhost:3000/books/id/1/reviews/
router.post("/id/:bookId/reviews/", async (request, response) => {
    let result = null
    
    response.json({
        book: result
    });
});


// Update a review
// PATCH localhost:3000/books/id/1/reviews/1
router.patch("/id/:bookId/reviews/:reviewId", async (request, response) => {
    let result = null;
    
    response.json({
        book: result
    });
});


// Delete a review
// DELETE localhost:3000/books/id/1/reviews/1
router.delete("/id/:bookId/reviews/:reviewId", async (request, response) => {
    let result = null;
    
    response.json({
        book: result
    });
});


module.exports = router;