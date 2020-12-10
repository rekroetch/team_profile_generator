const inquirer = require('inquirer')
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }

    getGithub() {
        inquirer
            .prompt ({
                type: 'input',
                message: "What is the employee's GitHub username?",
                name: 'github'
            })
            .then (val => {
                val.github = this.github
            })
    }

    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer

