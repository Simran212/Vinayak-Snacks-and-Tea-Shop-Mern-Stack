const {validationResult} = require("express-validator");
const Employee = require("../models/Employee");
const jwt = require("jsonwebtoken");

exports.addEmployee = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({error: errors.array()});
    }

    const { empname, emprole, empdate, emploc, empimg } = req.body;
   
    try {
        const employee = await Employee.create({
            empname,
            emprole,
            empdate,
            emploc,
            empimg
        })

        console.log(employee)
        return res.status(200).json(employee)
    } catch (error) {
        return res.status(400).json({ error: "Employee not created, Try again !" });
    }
}

exports.editEmployee = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({error: errors.array()});
    }

    const { _id, empname, empimg, emprole, empdate, emploc } = req.body;

    try {
        const filter = { _id: _id };
        const update = { 
            empname,
            emprole,
            empdate,
            emploc,
            empimg
        };

        const findResult = await Employee.findOne(filter);

        if(findResult){
            const updateResult = await Employee.updateOne(filter,update);
            console.log(updateResult);
            res.status(200).json({data: 'Employee updated successfully' })
        }else{
            res.status(403).json({error: 'No such employee found'})
        }
    } catch (error) {
        return res.status(400).json({ error: "Updation failed, Try again !" });
    }
}

exports.removeEmployee = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({error: errors.array()});
    }
    
    try {
        const filter = { _id: req.body._id };
        deleteResult = await Employee.findOneAndRemove(filter);
        console.log(deleteResult);
        
        res.status(200).json({data: deleteResult !== null ? 'Employee removed successfully' : 'can\'t remove this user'})
    } catch (error) {
        return res.status(400).json({ error: "Deletion failed, Try again !" });
    }
}

exports.getEmployees = async (req, res) => {
    
    try {
        const employeesResult = await Employee.find();

        res.status(200).json(employeesResult);

    } catch (error) {
        return res.status(400).json({ error : "Not getting Employees" });
    }
}

const MAX_AGE = 7 * 24 * 60 * 60;
const createwebToken = (payload) => {
  return jwt.sign(payload,"skskjshhshshhsyaujshrwiajsmdhjdhsgatreuyeikdmsjhagagsgsddhjdjddjjdjdjdjdjdjdjdjd" , {
    expiresIn: MAX_AGE,
  });
};

exports.signinEmployee = async (req,res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({error: errors.array()});
    }

    const { name, password } = req.body;

    try{

        if(password.toLowerCase() === "ADMINLOGIN".toLowerCase())
        {
            const payload = { password : "ADMINLOGIN", isAuth : true}
            const token = createwebToken(payload);
            console.log(token);
            res.cookie("jwt", token, { expires: new Date(Date.now() + 86400000),sameSite: false, secure:false});
            console.log('You are logged in successfully');
            res.status(200).json({data: 'You are logged in successfully'});            
        }
        else return res.status(400).json({error: "Invalid SignIn Credentials" })

    } catch (error) {
        return res.status(400).json({ error: "Invalid SignIn Credentials"})
    }
}

