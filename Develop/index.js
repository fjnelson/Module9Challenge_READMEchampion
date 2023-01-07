//inqurer library, fs, generateMarkdown
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

//questions asked using inquirer in the command line
const questions = [
  {
    type: "input",
    message: "What is your Github username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: "input",
    message:
      "What is the project title?  This should be unique to your project.",
    name: "title",
  },
  {
    type: "input",
    message:
      "What is the project description?  What was the motivation, why did you build this project, whap problem does it solve? What did you learn?",
    name: "description",
  },
  {
    type: "input",
    message: "What are the steps required to install your project?",
    name: "installation",
    default: 'npm i'
  },
  {
    type: "input",
    message: "Provide instructions for usage.  Add a screenshot.",
    name: "usage"
  },
  {
    type: "input",
    message:
      "List your collaborators, if any, with links to their GitHub profiles.",
    name: "credits"
  },
  {
    type: "list",
    name: "license",
    message: "Pick your license.",
    choices: ["APACHE2.0", "Boost1.0", "BSD2" ,"BSD3", "GPL3.0", "MIT", "None"]
  },
  {
    type: "input",
    message: "List out any badges.",
    name: "badges"
  },
  {
    type: "input",
    message: "List out your project features.",
    name: "features"
  },
  {
    type: "input",
    message: "List out guidelines for others to contribute.",
    name: "contribute"
  },
  {
    type: "input",
    message: "Provide examples on how to test your application.",
    name: "tests"
  },
];

//writes to file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("created README file");
    }
  });
}
//uses inquirer to ask the questions and pass the answers
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("README.md", generateMarkdown(data));
  });
}

// initializing function call
init();
