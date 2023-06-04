const mongoose = require('mongoose');

const createConnection = () => mongoose.connect('mongodb://localhost:27017/e-commerce',{useNewUrlParser: true})
.catch((error) => console.log({error}));


module.exports = {createConnection};





