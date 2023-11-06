require('dotenv').config();

const mongoose = require('mongoose');
const { databaseConnect } = require('./database');
const { Book } = require('./models/BookModel');
const { Member } = require('./models/MemberModel');

databaseConnect().then( async () => {
    console.log('Creating seed data!');

    let newBook = await Book.create({
        name: 'Atomic Habits',
        authorName: 'James Clear',
        yearPublished: 2018,
    });

    console.log(newBook)

    let newMember = await Member.create({
        name: 'Jamie'
    });

    console.log(newMember)

}).then( async () => {
    await mongoose.connection.close();
    console.log("Database disconnected!")
});