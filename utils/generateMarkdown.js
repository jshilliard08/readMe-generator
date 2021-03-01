// TODO: Create a function to generate markdown for README
function generateReadMe(data) {
  return `
  <h1 align="center">${data.projectTitle} </h1>
  ![badge](https://img.shields.io/badge/license-${answers.license}-blue)<br />
    ##Description
    ${data.description}
      ##Table of Contents
      - [Description](#description)
      - [Installation](#installation)
      - [Usage](#usage)
      - [License](#license)
      - [Contributing](#contributing)
      - [Tests](#tests)
      - [Questions](#questions)
      ##Installation
      ${data.installation}
      ##Usage
      ${data.usage}
      ##License
      ${data.license}
      This project has a  ${data.license} license.
      ##Contributing
      ${data.contributors}
      ##Tests
      ${data.tests}
      ##Questions
      ${data.questions}
      
    ##Github Username
    <br/>
      Follow me on Github: [${data.username}] ((https://github.com/${data.username}))
    ##Github Email
    Feel free to reachout via: ${data.email}
    
  README created with [README-Generator] (https://github.com/nme22/README-Generator)
    `;
  }
  
  module.exports = generateReadMe;