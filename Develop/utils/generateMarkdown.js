// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return (
      `\n* [License](#license)\n`
    )
  }
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License 📛
      Copyright © ${license}. All rights reserved. 
      
      Licensed under the ${license} license.`

    )
  }
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Github URL
  [${data.github}](https://github.com/${data.github}/)
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contribution](#credits)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)
  ## Installation
  ${data.installation}
  ## Usage
  ${renderLicenseSection(data.license)}
  ## Contribution
  ${data.contribution}
  ## Tests
  ${data.test}
  ## Questions
  * Checkout my [GitHub profile](https://github.com/${data.github})
  
  * Any additional questions or feed back, feel free to [send an email](mailto:${data.email}). 
  ## License
  Copyright (c) [${data.github}](https://github.com/${data.github}). All rights reserved.
  
  Licensed under the ${data.license} license.
`;
}

module.exports = generateMarkdown;
