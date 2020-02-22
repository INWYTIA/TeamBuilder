const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Inquirer = require('Inquirer');
const fs = require('fs');
const util = require("util");
const managerHTML = require('./templates/managerHTML');
const employeeHTML = require('./templates/employeeHTML');
const capHTML = require('./templates/capHTML');

const appendFileAsync = util.promisify(fs.appendFile);

const managerQuestions = [
  {
    type: "input",
    message: "Welcome team manager! What is your name?",
    name: "name"
  },
  {
    type: "input",
    message: "What is your employee ID number?",
    name: "id"
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email"
  },
  {
    type: "input",
    message: "What is your office number?",
    name: "officeNum"
  },
];

const engineerQuestions = [
  {
    type: "input",
    message: "What is the name of this engineer?",
    name: "name"
  },
  {
    type: "input",
    message: "What is their ID number?",
    name: "id"
  },
  {
    type: "input",
    message: "What is their email address?",
    name: "email"
  },
  {
    type: "input",
    message: "What is their github profile name?",
    name: "github"
  },
];

const internQuestions = [
  {
    type: "input",
    message: "What is the name of this intern?",
    name: "name"
  },
  {
    type: "input",
    message: "What is their ID number?",
    name: "id"
  },
  {
    type: "input",
    message: "What is their email address?",
    name: "email"
  },
  {
    type: "input",
    message: "What school do they attend?",
    name: "school"
  },
];

function getManager () {
  Inquirer.prompt(managerQuestions).then(ans => {
    const user = new Manager (ans.name, ans.id, ans.email, ans.officeNum);
    const filePath = `${ans.name}'s Team.html`;
    //generate html with user info and return it
  })
  //THEN 'append' beginning of file with html
  //THEN ask how many engineers are on the team and return the result
};

function getEngineers (quantity) {
  //if no engineers log a message and move on
  //else loop for number of engineers
    //inquire for engineer data
    //pass data to html generator
    //append to file
  //THEN ask how many interns are on the team and return the result
};

function getInterns (quantity) {
  //if no interns log a message and move on
  //else loop for interns
    //inquire for intern data
    //pass data to html generator
    //append to file
  //cap html and log message that the file is done
};