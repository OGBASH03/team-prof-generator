const Employee = require("./Employee.js")

//MANAGER DATA 
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }

    retrieveOfficeNumber() {
        return this.officeNumber;
    }
};

module.exports = Manager;