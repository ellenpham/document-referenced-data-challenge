// This file handles the boot-up of the server 

require('dotenv').config();

const { app } = require('./server');
const { databaseConnect } = require('./database')

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    await databaseConnect();   
    console.log(`Listening on port ${PORT}...`)
})