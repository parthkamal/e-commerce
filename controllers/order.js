const express = require('express');
const mongoose = require('mongoose');
const Order = mongoose.model('Order');


const getMenuController = (request,response) => {
    response.render('menu');
};


const getCartController = (request,response) => {
    response.render('cart');
}

const getOrderController = (request,response) => {
    response.render('orders');
}

const getOrderByIdController = (request,response) => {
    const {id } = request.params;


    Order.findById(id, (error, result) => {
        if(!error) {
            response.render('orders', {order:result})
        }else {
            console.log({error});
        }
    })
}

const getDeleteOrderByIdController =  (request,response) => {
    const {id} = request.params;
    Order.findByIdAndRemove(id,(error,result) =>{
        if(!error) {
            response.redirect('/admin');
        }else {
            console.log({error});
        }
    })
}



const getAdminController = (request,response) => {
    Order.find((error,docs) => {
        if(!error){
            response.render('admin',{order:docs});
        }else {
            console.log({error});
        }
    })
}


//post 


const postCartController = (request,response) => {
    const date = new Date();
    const time = date.getTime();
    let counter = time; 
    counter +=1; 
    const order = new Order();
    order.total = request.body.total; 
    order.order = counter; 
    order.save((error,result) => {
        if(!error){
            console.log('orders;', order);
            response.redirect('/admin');
        }else {
            console.log('error insert order 1 ',error);
        }
    })
}


const postOrderController = (request,response) => {
    Order.findOneAndUpdate({_id: request.body._id}, request.body, {new:true}, (error, result) => {
        if(!error) {
            response.redirect('/admin');
        }else {
            console.log('update error' , {error});
        }
    })
}




module.exports = {
    getMenuController,
    getCartController,
    getOrderByIdController,
    getAdminController,
    getOrderController,
    getDeleteOrderByIdController,
    postCartController,
    postOrderController
    
}




