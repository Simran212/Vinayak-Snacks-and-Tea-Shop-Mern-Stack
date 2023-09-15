const express = require('express');
const empRouter = express.Router();
const auth = require("../middleware/auth");
const { addEmployee, editEmployee, removeEmployee, getEmployees, signinEmployee } = require("../controllers/employee");

empRouter.post('/signinemployee', signinEmployee)
empRouter.post('/addemployee',  auth, addEmployee)
empRouter.post('/editemployee', auth, editEmployee)
empRouter.post('/removeemployee', auth, removeEmployee)
empRouter.get('/getemployees',  auth, getEmployees)

module.exports = empRouter;