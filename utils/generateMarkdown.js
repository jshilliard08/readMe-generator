// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` 
  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](https://www.contributor-covenant.org/version/2/0/code_of_conduct/)
  
  # **${data.title}**
  # Table of Contents
  * [Project Description](#project-description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [License](#license)
  * [Contributing](#contributing)
  * [Username](#username)
  * [Repo](#repo)
  * [Questions](#questions)
  # Project Description
  ${data.description}
  
  # Installation
  ${data.installation}
  # Usage
  ${data.usage}
  # License
  ${data.license}
  # Contributing
  ${data.contributing}
  #Test
  ${data.test}
  #Username
  ${data.username}
  #Repo
  - [Project Repo](${data.repo})
## GitHub
![Image of me](${githubInfo.githubImage})
- ${githubInfo.name}
- [GitHub Profile](${githubInfo.profile})
- <${githubInfo.email}>
`;
}



module.exports = generateMarkdown;
