const express = require('express');
const { Member } = require('../models/MemberModel');
const router = express.Router();

// Get all members
// GET localhost:3000/members/all 
router.get('/', async (request, response) => {
    let result = await Member.find({});

    response.json({
        members: result
    });
});


// Get one member by ID
// GET localhost:3000/members/one/id/1
router.get("/one/id/:id", async (request, response) => {
    let result = null;
    
    response.json({
        book: result
    });
});


// Create a new member
// POST localhost:3000/members/
router.post("/", async (request, response) => {
    let result = await Member.create(request.body).catch(error => error);
    
    response.json({
        member: result
    });
});


// Update an existing member
// PATCH localhost:3000/members/id/1
router.patch("/id/:id", async (request, response) => {
    let result = null;
    
    response.json({
        member: result
    });
});


// Delete a member by ID
// DELETE localhost:3000/members/id/1 
router.delete("/id/:id", async (request, response) => {
    let result = null;
    
    response.json({
        member: result
    });
});