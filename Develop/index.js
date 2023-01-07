//https://github.com/mmeii/9-good-readme-generator
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'What is the project title?  This should be unique to your project.',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is the project description?  What was the motivation, why did you build this project, whap problem does it solve? What did you learn?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'List out the table of contents.',
      name: 'contents',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation',
      },
    {
        type: 'input',
        message: 'Provide instructions for usage.  Add a screenshot.',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
        name: 'credits',
      },
      {
        type: 'input',
        message: 'Pick your license.',
        name: 'license',
      },
      {
        type: 'input',
        message: 'List out any badges.',
        name: 'badges',
      },
      {
        type: 'input',
        message: 'List out your project features.',
        name: 'features',
      },
      {
        type: 'input',
        message: 'List out guidelines for others to contribute.',
        name: 'contribute',
      },
      {
        type: 'input',
        message: 'Provide examples on how to test your application.',
        name: 'tests',
      },
];
  //The && then doesnt work yet, need to troubleshoot
//   .then((response) =>
//   response.title != ''
//     ? console.log('Success!')
//     : console.log('You need to add a title') &&
//     response.description != ''
//     ? console.log('Success!')
//     : console.log('You need to add a description') &&
//     response.contents != ''
//     ? console.log('Success!')
//     : console.log('You need to add contents') &&
//     response.installation != ''
//     ? console.log('Success!')
//     : console.log('You need to add installation instructions')
// );

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('README file successfully created!');
        }
    })
};
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        writeToFile("README.md", generateMarkdown(data));
    })
};

// Function call to initialize app
init();
