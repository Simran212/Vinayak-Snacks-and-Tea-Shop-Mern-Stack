const Order = require("../models/Order");
const { validationResult } = require("express-validator");

exports.placeOrder = async (req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({error: errors.array()});
    }

    const { placedat, name, phone, items, subtotal } = req.body;
    
    try {

        const orderno = await Order.countDocuments() + 1;
        const status = "Request Received";

        const order = await Order.create({ 
            orderno,
            placedat,
            name,
            phone,
            status,
            items,
            subtotal
        })

        console.log(order);
        return res.status(200).json(order);

    } 
    catch (err) {
        if (err.code === 11000) {
          return res.status(500).json({ error: "Order with this number exist already" });
        }
        return res.status(500).json({ error: "500 Internal Error" });
    }
}

exports.editOrder = async (req, res) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(400).json({error: errors.array()});
    }

    const { _id, status } = req.body;
    console.log(_id, status);
  
    try {
        const filter = { _id: _id };
        const update = { 
            status 
        };

        const findResult = await Order.findOne(filter);

        if(findResult){
            const updateResult = await Order.updateOne(filter,update);
            console.log(updateResult);
            res.status(200).json({data: 'Order updated successfully' })
        }else{
            
            res.status(403).json({error: 'No such order found'})
        }
    } catch (error) {
        return res.status(400).json({ error: "Updation failed, Try again !" });
    }
}

exports.removeOrders = async (req, res) => {
    
    try {
        console.log('Order Remove');
        const deleteResult = await Order.remove({});
        console.log(deleteResult);

        res.status(200).json({data: deleteResult !== null ? 'Today\'s Orders removed successfully' : 'can\'t remove orders'})
    } catch (error) {
        return res.status(400).json({ error: "Deletion failed, Try again !" });
    }
}

exports.getOrders = async (req, res) => {

    try {

        const ordersResult = await Order.find();
        res.status(200).json(ordersResult);

    } catch (error) {
        return res.status(400).json({ error : "Not getting Orders" });
    }
}