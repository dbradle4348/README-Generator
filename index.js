// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//const { generateMarkdown } = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
              if (titleInput) {
                return true;
              } else {
                console.log('Please enter your project title!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'description',
            message: 'Describe your project. (Required)',
            validate: projectInput => {
              if (projectInput) {
                return true;
              } else {
                console.log('Please enter a project description!');
                return false;
              }
            }
          },
          {
            type: 'confirm',
            name: 'confirmInstallation',
            message: 'Would you like to enter information about the installation of your project?',
            default: true
          },
          {
            type: 'input',
            name: 'installation',
            message: 'Describe how to install your project:',
            when: ({ confirmInstallation }) => confirmInstallation
          }
          
    ])
}



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
