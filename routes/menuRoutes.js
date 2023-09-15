const express = require('express');
const menuRouter = express.Router();
const auth = require("../middleware/auth");
const { addItem, editItem, removeItem, getItems, getTodayssp } = require("../controllers/menu");

menuRouter.post('/additem', auth, addItem)
menuRouter.post('/edititem', auth, editItem)
menuRouter.post('/removeitem', auth, removeItem)
menuRouter.get('/getitems', getItems)
menuRouter.get('/gettodayssp', getTodayssp);

module.exports = menuRouter;