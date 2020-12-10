const inquirer = require('inquirer')
// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }

    getOfficeNumber() {
        inquirer
            .prompt ({
                type: 'input',
                message: "What is the employee's office number?",
                name: 'office'
            })
            .then (val => {
                val.office = this.office
            })
        this.getRole()    
    }

    getRole() {
        return "Manager"
    }
}

module.exports = Manager