const { response } = require('express');
const Order = require('../models/order');


const getMenuController = (request, response) => {
    response.render('menu');
};


const getCartController = (request, response) => {
    response.render('cart');
}

const getOrderController = (request, response) => {
    response.render('orders');
}

const getOrderByIdController = (request, response) => {
    const { id } = request.params;
    Order.findById(id).then(result => {
        response.render('orders',{order:result})
    }).catch(error => console.log({error}));
}

const getDeleteOrderByIdController = (request, response) => {
    const { id } = request.params;
    Order.findByIdAndRemove(id).then((result) => {
        const message = 'order removed successfully';
        console.log({ message });
        response.redirect('/admin');
    }
    ).catch((error) => {
        console.log({ error });
    })
}



const getAdminController = (request, response) => {
    Order.find()
        .then((result) => response.render('admin', { order: result }))
        .catch((error) => console.log({ error }));
}


//post 
const postCartController = (request, response) => {
    const date = new Date();
    const time = date.getTime();
    let counter = time;
    counter += 1;
    const order = new Order();
    order.total = request.body.total;
    order.order = counter;
    order.save()
        .then((result) => {
            const message = 'added the order successfully ';
            console.log({message});
            response.redirect('/');
        }).catch((error) => {
            response.status(400).json({ error });
        })
}


const postOrderController = (request, response) => {
    console.log(request.body);
    Order.findOneAndUpdate({ _id: request.body._id }, request.body, { new: true })
        .then((result) => {
            console.log({ result });
            const message = "added successfully";
            response.redirect('/admin')
        })
        .catch((error) => response.status(400).json({ error }));
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




