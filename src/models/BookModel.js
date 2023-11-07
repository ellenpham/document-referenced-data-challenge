const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    authorName: {
        type: String, 
        required: true,
        unique: false
    },
    yearPublished: {
        type: Number,
        required: false,
        unique: false
    },
    review: [{
        type: mongoose.Types.ObjectId,
        ref: 'Review'
    }],
});

const Book = mongoose.model('Book', BookSchema);

module.exports = {
    Book
}