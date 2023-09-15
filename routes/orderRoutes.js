const express = require('express');
const orderRouter = express.Router();
const auth = require("../middleware/auth");
const { placeOrder, editOrder, removeOrders, getOrders } = require('../controllers/order');

orderRouter.post('/placeorder', placeOrder)
orderRouter.post('/editorder', auth, editOrder)
orderRouter.post('/removeorders', auth, removeOrders)
orderRouter.get('/getorders', getOrders)

module.exports = orderRouter;
