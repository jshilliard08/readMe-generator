// TODO: Include packages needed for this application
const fs = require('fs');
const util = require("util");
const inquirer = require('inquirer');
const generateReadMe = require('./utils/generateMarkdown');
//const writeFile = utils.promisfy(fs.writeFile);
const writeFileAsync = util.promisify(fs.writeFile);
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
        message: "Please choose the project license."
        
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
]


// function to prompt user - returns answers object
const promptUser = () => {
    return inquirer
        .prompt(questions);
}


// function to write README file
const writeToFile = (fileName, data) => {
    return writeFileAsync(fileName, data);
}


// function to initialize program
const init = async () => {
    try {
        console.log("Welcome to the README generator.\nPlease answer the following questions:")

        // ask user for answers to questions
        const answers = await promptUser();

        // create markdown content from user answers
        const fileContent = generateReadMe(answers);

        // write markdown content to README.md file
        await writeToFile("./output/README.md", fileContent);

        // notify user that file has been written
        console.log("README.md created in output folder.");

    } catch (err) {
        console.error("Error creating README. File not created.");
        console.log(err);
    }
}

init();
