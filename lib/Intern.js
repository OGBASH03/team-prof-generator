const Employee = require("./Employee.js")

//INTERN DATA 
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = "Intern";
    }

    retrieveSchool() {
        return this.school;
    }
};

module.exports = Intern;