// TODO: Include packages needed for this application
const fs = require('fs');
const util = require("util");
const inquirer = require('inquirer');
const generateReadMe = require('./utility/generateReadMe');
const writeFile = utility.promisfy(fs.writeFile);
// TODO: Create an array of questions for user input
function promptUser(){
	return inquirer.prompt([
    
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
        message: "Please choose the project license."
        choices: [
            'MIT',
            'APACHE',
            'MIT',
            'MOZILLA',
            'NONE'
        ]
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
])};


// TODO: Create a function to write README file
async function init(){
	try {
		// Asks questions and grabs responses
		const data = await promptUser();
		const writeReadMe = generateReadMe(data);

		// Write ReadMe.md and send to a folder
		await writeFile('./product/README.md', writeReadMe);
		console.log(' Generated to README.md');
	} catch(err) {
		console.log(err);
	}
}

init();
