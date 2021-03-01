// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description for your project."
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide the installation instructions."
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide the project's usage."
    },
    {
        type: "input",
        name: "license",
        message: "Please provide the project license or your badge link."
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide the contributing parties."
    },
    {
        type: "input",
        name: "test",
        message: "Please provide the project tests."
    },
    {
        type: "input",
        name: "username",
        message: "What is your github user name?"
    },
    {
        type: "input",
        name: "repo",
        message: "Please provide your repo link."
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}
//Function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        switch(inquirerResponses.license) {
            case 'MIT':
                inquirerResponses.licenseLink = 'https://opensource.org/licenses/MIT';
                break;
            case 'Apache2.0':
                inquirerResponses.licenseLink = 'https://opensource.org/licenses/Apache-2.0';
                break;
            case 'GPLv3':
                inquirerResponses.licenseLink = 'https://opensource.org/licenses/gpl-3.0';
                break;
            case 'BSD3':
                inquirerResponses.licenseLink = 'https://opensource.org/licenses/bsd-3'; 
                break;
            case 'MPL2.0':
                inquirerResponses.licenseLink = 'https://opensource.org/licenses/MPL-2.0';
                break;
            default: ;
        }
        console.log("generating your readme");
        writeToFile('readMe.md', generateMarkdown(inquirerResponses))
    })
    .catch((err) => console.error(err));
}
init();