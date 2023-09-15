const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    empname: {
        type: String,
        required: true
    },
    emprole: {
        type: String,
        required: true
    },
    emploc: {
        type: String,
        required: true
    },
    empdate: {
        type: String,
        required: true,
    },
    empimg: {
        type:String,
    }
})

const Employee = mongoose.model("employees", employeeSchema);
module.exports = Employee;