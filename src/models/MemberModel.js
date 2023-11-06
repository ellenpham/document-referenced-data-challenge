const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MemberSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    favouriteBook: {
        type: mongoose.Types.ObjectId,
        ref: 'Book'
    }
});

// database hook - not necessary
// but there are more complex functionality we can do with schema using pre-save hook
// example: encrypt password again if users change their password
MemberSchema.pre(
    'save',
    async function (next) {
        console.log('About to save a member to the DB!');
        next();
    }
)

const Member = mongoose.model('Member', MemberSchema);

module.exports = {
    Member
}