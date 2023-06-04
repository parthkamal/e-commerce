const mongoose = require('mongoose');

const createConnection = () => mongoose.connect(process.env.DB_CONNECTION_STRING,{useNewUrlParser: true})
.catch((error) => console.log({error}));


module.exports = {createConnection};





