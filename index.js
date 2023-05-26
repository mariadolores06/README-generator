// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'projectTitle',
    message: 'What is the title of your project?',

  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a brief description of your project: ',
    
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please describe the installation process, if there is any:',
    
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide usage information for your project',
    
  },
  {
    type: 'input',
    name: 'contributions',
    message: 'Please provide guidelines to contribute to this project',
    
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please provide instructions on how to test your project',
    
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please choose a license for your project',
    choices: [
      'MIT',
      'GPLv3',
      'GPLv2',
      'Apache',
      'MPL 2.0',
      'No License'
    ],
    
  },
  {
    type: 'input',
    name: 'Github',
    message: 'What is your Github username?',
    
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
    
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const readMe = generateMarkdown(data)

  fs.writeFile(fileName, readMe, (err) => 
  err 
    ? console.error(err)
    : console.log(`Success!`))
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((data) => {
      const fileName = "generateREADME.md";
      writeToFile(fileName, data)
    })
}   

// Function call to initialize app
init();
