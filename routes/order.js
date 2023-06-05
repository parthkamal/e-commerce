const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Order = mongoose.model('Order');


mongoose.set('useFindAndModify',false);//configuration for mongodb to ignore deprecated methods. 

router.get('/',(request,response) => {
    response.render('menu');
})


router.get('/cart',(request,response) => {
    response.render('cart');
})


router.get('/orders',(request,response) => {
    response.render('orders');
})


router.get('/admin',(request,response) => {
    Order.find((error,docs) => {
        if(!error){
            response.render('admin',{order:docs});
        }else {
            console.log({error});
        }
    })
})


router.get('/order/:id',(request,response) => {
    const {id } = request.params;


    Order.findById(id, (error, result) => {
        if(!error) {
            response.render('orders', {order:result})
        }else {
            console.log({error});
        }
    })
})


router.get('/order/delete/:id', (request,response) => {
    const {id} = request.params;
    Order.findByIdAndRemove(id,(error,result) =>{
        if(!error) {
            response.redirect('/admin');
        }else {
            console.log({error});
        }
    })
});


//post
module.exports = router; 