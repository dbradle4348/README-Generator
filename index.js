// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
          {
            type: 'input',
            name: 'username',
            message: 'What is your Github username?',
            validate: usernameInput => {
              if (usernameInput) {
                return true;
              } else {
                console.log('Please enter your Github username!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
            validate: usernameInput => {
              if (usernameInput) {
                return true;
              } else {
                console.log('Please enter your Github username!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
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
            message: 'Describe your project:',
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
            message: 'Provide any information for the installation of your project:',
            validate: installationInput => {
              if (installationInput) {
                return true;
              } else {
                console.log('Please enter installation info!');
                return false;
              }
            }
          },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide any usage information for the project:',
            validate: usageInput => {
              if (usageInput) {
                return true;
              } else {
                console.log('Please enter usage information!');
                return false;
              }
            }
          },
        
        {
           type: 'input',
           name: 'contributing',
           message: 'Who contributed to this project?',
           validate: contributingInput => {
            if (contributingInput) {
              return true;
            } else {
              console.log('Please enter all who contributed to this project.');
              return false;
            }
          }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide any tests written for the application and how they are run:',
            validate: testsInput => {
              if (testsInput) {
                return true;
              } else {
                console.log('Please enter your tests here.');
                return false;
              }
            }
          },
        {
          type: 'list',
          name: 'license',
          message: 'Which license do you want to use?',
          choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
        }  
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
    .then(data => {
      writeToFile("README.md", generateMarkdown(data))
    })
}

// Function call to initialize app
init();
