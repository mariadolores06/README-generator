// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case "GPLv3":
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case "GPLv2": 
      return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
    case "Apache":
      return  '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case "MPL 2.0":
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    case "No License": // If there is no license, return an empty string
      return ''; 
    default:
      return '';
    }
  } 

// TODO: Create a function that returns the license link

function renderLicenseLink(license) {
switch (license) {
  case "MIT":
    return 'https://choosealicense.com/licenses/mit/';
  case "GPLv3":
    return 'https://choosealicense.com/licenses/gpl-3.0/';
  case "GPLv2": 
    return 'https://choosealicense.com/licenses/gpl-2.0/';
  case "Apache":
    return 'https://choosealicense.com/licenses/apache-2.0/'; 
  case "MPL 2.0":
    return 'https://choosealicense.com/licenses/mpl-2.0/';
  case "No License": // If there is no license, return an empty string
    return '';
  default: 
    return '';
  }
} 
// TODO: Create a function that returns the license section of README

function renderLicenseSection(license) {
  if (!license) {
    return ``; // If there is no license, return an empty string
  } else {
    return `## Licenses
    This project is covered under the ${license} license. To learn more about what this means, click the license button at the top.`
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Licenses](#licenses)
  * [Questions](#questions)
  
  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}
  ${renderLicenseSection(data.licenses)}

  ## Contributing

  ${data.contributions}

  ## Tests

  ${data.tests}

  ## Questions

  Have questions about this project? [Please email me](mailto:${data.email}).
  Please visit my [Github Profile](https://github.com/${data.Github}).`;
}

module.exports = generateMarkdown;
