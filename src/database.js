const mongoose = require('mongoose');


/**
 * Connect or create and connect to a database
 * @date 11/6/2023 - 10:58:58 PM
 *
 * @async
 * @returns {*}
 */
async function databaseConnect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/BookClubDB');
        console.log('Database connected!')
    } catch (error) {
        console.warn(`databaseConnect failed to connect to DB:\n${JSON.stringify(error)}`);
    }
}

module.exports = {
    databaseConnect
}