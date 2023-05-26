// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return ""
    case "GPLv3":
      return "" 
    case "GPLv2": 
      return ""
    case "Apache":
      return "" 
    case "MPL 2.0":
      return ""
    case "No License":
      return '';
    default:
      return '';
    }
  } 

  // 'MIT',
  // 'GPLv3',
  // 'GPLv2',
  // 'Apache',
  // 'MPL 2.0',
  // 'No License'
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
switch (license) {
  case "MIT":
    return ""
  case "GPLv3":
    return "" 
  case "GPLv2": 
    return ""
  case "Apache":
    return "" 
  case "MPL 2.0":
    return ""
  case "No License":
    return '';
  default:
    return '';
  }
} 
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return `## Licenses
    This project is covered under the ${license} license. To learn more about what this means, click the license button at the top.`
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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

  Have questions about this project? Please email me at (mailto:${data.email}).
  Please visit my [Github Profile](https://github.com/${data.github}).`;
}

module.exports = generateMarkdown;
