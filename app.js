const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");


const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");
const { create } = require("domain");


createManager()

let employees = []


function createManager() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is your manager's name?"
            },
            {
                type: "input",
                name: "managerId",
                message: "What is your manager's ID?"
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is your manager's email address?"
            },
            {
                type: "input",
                name: "managerOffice",
                message: "What is your manager's office number?"
            },
        ])
        .then(response => {
            const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOffice)
            employees.push(manager)
            nextStep()
            
        })
}


function nextStep() {
    inquirer
        .prompt ({
            type: 'list',
            message: "Which employee would you like to add next?",
            choices: ["Manager", "Engineer", "Intern", "None, I'm done"],
            name: 'addNext',
        })
        .then (response => {
            if (response.addNext === "Manager") {
                createManager()
            } else if (response.addNext === "Engineer") {
                createEngineer()
            } else if (response.addNext === "Intern") {
                createIntern()
            } else {
                createTeam()
            }
        
        })
}

function createEngineer() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is your engineer's name?"
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is your engineer's ID?"
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is your engineer's email address?"
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "What is your engineer's GitHub account?"
            },
        ])
        .then(response => {
            const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub)
            employees.push(engineer)
            nextStep()
            
        })

    
}

function createIntern() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "internName",
                message: "What is your intern's name?"
            },
            {
                type: "input",
                name: "internId",
                message: "What is your intern's ID?"
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is your intern's email address?"
            },
            {
                type: "input",
                name: "internSchool",
                message: "What is your intern's school?"
            },
        ])
        .then(response => {
            const intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool)
            employees.push(intern)
            nextStep()
            
        })
}

function createTeam() {
    fs.writeFileSync(outputPath, render(employees), "utf-8");
}




