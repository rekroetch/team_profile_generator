const inquirer = require('inquirer')
// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    };

    getName() {
        inquirer
            .prompt ({
                type: 'input',
                message: "What is the employee's name?",
                name: 'name'
            })
            .then (val => {
                val.name = this.name
                this.getId()    
            })
    }

    getId() {
        inquirer
            .prompt ({
                type: 'input',
                message: "What is the employee's ID?",
                name: 'id'
            })
            .then (val => {
                val.id = this.id
                this.getEmail()    
            })
    }

    getEmail() {
        inquirer
            .prompt ({
                type: 'input',
                message: "What is the employee's email address?",
                name: 'email'
            })
            .then (val => {
                val.email = this.email
                // gives me all undefined
                // console.log(`Role: ${val.role}, Name: ${val.name}, ID: ${val.id}, Email: ${val.email}`)
            })
    }

    getRole() {
        return "Employee"
    }

}



module.exports = Employee;
