// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//const { generateMarkdown } = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
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
            validate: descriptionInput => {
              if (descriptionInput) {
                return true;
              } else {
                console.log('Please enter a project description!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'installation',
            message: 'Provide any information for the intallation of your project:',
          },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide any usage information for the project:'
        },
        {
           type: 'input',
           name: 'contributing',
           message: 'Who contributed to this project?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide any tests written for the application and how they are run:'
        }
            // put licenses here!!!   
    ];




// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }

    console.log("Your Readme file is ready!")
    });
}
        

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions) 
}

// Function call to initialize app
init();
