const { databaseConnect } = require('./database');

databaseConnect().then( () => {
    console.log('Creating seed data!');

    const Book = mongoose.model('Book', {
        name: String,
        authorName: String,
        yearPublished: Number
    })
})