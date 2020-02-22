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

var filePath;

const phase2Question = [
  {
    type: 'confirm',
    name: 'engineers',
    message: 'Are there any engineers on this team?',
    default: true
  },
];

const phase3Question = [
  {
    type: 'confirm',
    name: 'interns',
    message: 'Are there any interns on this team?',
    default: true
  },
];

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
  {
    type: 'confirm',
    name: 'again',
    message: 'Are there any more engineers?',
    default: true
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
  {
    type: 'confirm',
    name: 'again',
    message: 'Are there any more interns?',
    default: true
  },
];

function getManager () {
  return new Promise (function (resolve) {
    Inquirer.prompt(managerQuestions).then(ans => {
    const user = new Manager (ans.name, ans.id, ans.email, ans.officeNum);
    filePath = `./output/${ans.name}'s Team.html`;
    resolve (managerHTML(user));
    });
  });
};

async function getEngineers (html) {
  if (!html) {
    html = ``;
  };
  const {again, ...ans} = await Inquirer.prompt(engineerQuestions);
  const myEngineer = new Engineer (ans.name, ans.id, ans.email, ans.github);
  const newHTML = employeeHTML(myEngineer);
  const finalHTML = html + newHTML;
  return again ? getEngineers (finalHTML) : finalHTML;
};

async function getInterns (html) {
  if (!html) {
    html = ``;
  };
  const {again, ...ans} = await Inquirer.prompt(internQuestions);
  const myIntern = new Intern (ans.name, ans.id, ans.email, ans.school);
  const newHTML = employeeHTML(myIntern);
  const finalHTML = html + newHTML;
  return again ? getInterns (finalHTML) : finalHTML;
};

getManager().then(html => {
  appendFileAsync (filePath, html);
  console.log("Now let's put your team together starting with your enginneers.");
}).then(async () => {
  const ans = await Inquirer.prompt(phase2Question);
  if (ans.engineers) {
    await getEngineers().then(html => {
      appendFileAsync (filePath, html);
    });
  };
  console.log("Last, but not least, we'll add your interns.");
}).then(async () => {
  const ans = await Inquirer.prompt(phase3Question);
  if (ans.interns) {
    await getInterns().then(html => {
      const endCap = html + capHTML();
      appendFileAsync (filePath, endCap);
    });
  };
  console.log(`Your page is complete! You can find it at ${filePath}.`);
});
