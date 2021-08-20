// TODO: Include packages needed for this application
const inquire = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "userGitHub",
    message: "What is your Github name?",
  },

  {
    type: "input",
    name: "userEmail",
    message: "What is your email address?",
  },

  {
    type: "input",
    name: "userTitle",
    message: "What is the name of your Project?",
  },

  {
    type: "input",
    name: "description",
    message: "Please provide a description of your project.",
  },

  {
    type: "list",
    name: "license",
    message: "Please select what kind of license your project uses.",
    choices: ["1", "2", "3"],
  },

  {
    type: "input",
    name: "installation",
    message: "Please describe how you instal your application",
  },

  {
    type: "input",
    name: "test",
    message: "What commands should be run for tests?",
    default: "npm i",
  },

  {
    type: "input",
    name: "contributor",
    message: "How does a user contribute to this project?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    fs.writeFile("README.md", JSON.stringify(data), (err) => {
      err ? console.log(err) : console.log("File was Written!!!");
    });
  });
}

init();
