// This file handles the boot-up of the server 

require('dotenv').config();

const { app } = require('./server');


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})