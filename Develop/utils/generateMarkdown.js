// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-lightgrey.svg)`
  }
  return ''
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return (
      `\n* [License](#license)\n`
    )
  }
  return ''
}
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License
      ${license}
     `
    )
  }
  return ''
}

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
  ## Tests (Optional)
  ${data.test}
  ## Questions
  * Message me on my [GitHub profile](https://github.com/${data.github})
  
  * Or email me with any quesitons [send an email](mailto:${data.email}). 
  ## License
  Copyright (c) [${data.github}](https://github.com/${data.github}).
  
${data.license} license.
`;
}

module.exports = generateMarkdown;
