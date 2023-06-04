const http = require('http');
const express = require('express');



const orderRoute = require('./routes/order');


const app = express();
const server = http.createServer(app);


//middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));


//app configuration
app.set('views','views');
app.set('view engine', 'ejs');


//routes
app.use('/', orderRoute);






const PORT = 3000 || process.env.PORT;

// server listener
server.listen(3000, ()=> {
    console.log(`the server is listening on ${PORT}`);
})