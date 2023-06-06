const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { getMenuController, getCartController, getOrderController, getAdminController, getOrderByIdController, getDeleteOrderByIdController, postCartController, postOrderController } = require('../controllers/order');
const Order = mongoose.model('Order');


mongoose.set('useFindAndModify',false);//configuration for mongodb to ignore deprecated methods. 

router.get('/',getMenuController)


router.get('/cart',getCartController)


router.get('/orders',getOrderController)


router.get('/admin',getAdminController)


router.get('/order/:id',getOrderByIdController)


router.get('/order/delete/:id',getDeleteOrderByIdController);


//post
router.post('/cart' ,postCartController);

router.post('/order',postOrderController);


module.exports = router; 