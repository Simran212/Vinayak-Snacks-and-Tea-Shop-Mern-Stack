const { validationResult } = require("express-validator");
const Item = require("../models/Item");
const fs = require("fs");

exports.addItem = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({error: errors.array()});
    }

    const { name, price, quantity, todays_sp, itemimg } = req.body;

    try {
        const item = await Item.create({
            name, 
            price, 
            quantity, 
            todays_sp,
            itemimg
        })

        console.log(item)
        return res.status(200).json(item)
    } catch (error) {
        return res.status(400).json({ error: "Item not created, Try again !" });
    }
}

exports.editItem = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({error: errors.array()});
    }

    const { _id, itemId, name, price, quantity, todays_sp, itemimg } = req.body;
  
    try {
        const filter = { _id: _id };
        const update = { 
            name, 
            price, 
            quantity, 
            todays_sp,
            itemimg
        };

        const findResult = await Item.findOne(filter);

        if(findResult){
            const updateResult = await Item.updateOne(filter,update);
            console.log(updateResult);
            res.status(200).json({data: 'Item updated successfully' })
        }else{
            res.status(403).json({error: 'No such item found'})
        }
    } catch (error) {
        return res.status(400).json({ error: "Updation failed, Try again !" });
    }
}

exports.removeItem = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    
    try {
        const filter = { _id: req.body._id };
        deleteResult = await Item.findOneAndRemove(filter);
        console.log(deleteResult);

        res.status(200).json({data: deleteResult !== null ? 'Item removed successfully' : 'can\'t remove this item'})
    } catch (error) {
        return res.status(400).json({ error: "Deletion failed, Try again !" });
    }
}

exports.getItems = async (req, res) => {

    try {
        const itemsResult = await Item.find();

        res.status(200).json(itemsResult);

    } catch (error) {
        return res.status(400).json({ error : "Not getting Items" });
    }
}

exports.getTodayssp = async (req, res) => {
    try {

        const filter = {  todays_sp: { $in: ["Yes", "yes", "Ha", "ha"] } };
        const todaysResult = await Item.find(filter);

        res.status(200).json(todaysResult);
    } catch (error) {
        return res.status(400).json({ error : "Nothing special today"});
    }
}