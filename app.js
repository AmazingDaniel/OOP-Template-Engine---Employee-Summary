const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const team = []

const manQ = [
    {
        type: "input",
        name: "manName",
        message: "Manager name?"
    },
    {
        type: "input",
        name: "manId",
        message: "What is your employee ID#?"
    },
    {
        type: "input",
        name: "manEmail",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Type manager office #?",
    }
];

function manager() {
    inquirer.prompt(manQ).then(function(info){
        let newMan = new Manager
        (info.manName, 
            info.manId, 
            info.manEmail, 
            info.officeNumber);
        team.push(newMan);
        confirmEmp();
    });
};

manager();

function confirmEmp() {
    inquirer.prompt([
        {
            type: "list",
            name: "choiceEmployee",
            message: "Which type of employee would you like to add?",
            choices: [
                "Engineer",
                "Intern",
                "Quit"
            ]
        }
    ]).then(function(info){
        if (info.choiceEmployee === "Engineer"){
            engineer();
        } else if (info.choiceEmployee === "Intern"){
            intern();
        } else {
        output();
        }
    });
};

function engineer() {
    inquirer.prompt([
        {
            type: "input",
            name:"engName",
            message: "Software engineer's name?"
        },
        {
            type: "input",
            name:"engId",
            message: "What is the engineer's ID#?"
        },
        {
            type: "input",
            name: "engEmail",
            message: "Engineer's email adress?"
        },
        {
            type: "input",
            name: "engGitHub",
            message: "Engineer's GitHub?"
        }
    ]).then(function(info){
        const newEng = new Engineer
        (info.engName, 
            info.engId, 
            info.engEmail, 
            info.engGitHub);
        team.push(newEng);
        confirmEmp();
    });
};

function intern() {
    inquirer.prompt([
        {
            type: "input",
            name: "intName",
            message: "Intern's name enter here?"
        },
        {
            type: "input",
            name: "intId",
            message: "Enter intern's ID#?"
        },
        {
            type: "input",
            name: "intEmail",
            message: "Enter intern's email?"
        },
        {
            type: "input",
            name: "intSchool",
            message: "Enter intern's school?"
        }
    ]).then(function(info){
        const newInt = new Intern
        (info.intName, 
            info.intId, 
            info.intEmail, 
            info.intSchool);
        team.push(newInt);
        confirmEmp();
    });
};

function output() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(team), "utf-8");
}
