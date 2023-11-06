const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    memberID: {
        type: mongoose.Types.ObjectId,
        ref: 'Member',
    },
    reviewText: {
        type: String,
        required: true,
        unique: false
    }
});

const Review = mongoose.model('Review', ReviewSchema);

module.exports = {
   Review
}