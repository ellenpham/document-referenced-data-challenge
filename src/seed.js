require('dotenv').config();

const mongoose = require('mongoose');
const { databaseConnect } = require('./database');
const { Book } = require('./models/BookModel');
const { Member } = require('./models/MemberModel');
const { Review } = require('./models/ReviewModel');

databaseConnect().then( async () => {
    console.log('Creating seed data!');

    let newBook = await Book.create({
        name: 'Atomic Habits',
        authorName: 'James Clear',
        yearPublished: 2018,
    });

    console.log(newBook);

    let newMember = await Member.create({
        name: 'Jamie',
        favouriteBook: newBook._id
    });

    console.log(newMember);

    let newReview = await Review.create({
        memberID: newMember._id,
        book: newBook._id,
        reviewText: "The best book for creating good habits! Highly recommended!"
    });

    console.log(newReview);

}).then( async () => {
    await mongoose.connection.close();
    console.log("Database disconnected!")
});