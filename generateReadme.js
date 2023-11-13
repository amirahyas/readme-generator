
// Function to return a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`;
  }

}

// Function to return the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `[License](https://opensource.org/licenses/${license})`;
  }
  return '';
}

// Function to return the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the [${license} License](https://opensource.org/licenses/${license}).`;
  }
  return '';
}

// Function to generate markdown for README
async function generateMarkdown(data) {
  const licensePrompt = await inquirer.prompt([
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license:',
      choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause', 'None'],
    },
  ]);

  const selectedLicense = licensePrompt.license;

  return `# ${data.title}

${renderLicenseBadge(selectedLicense)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(selectedLicense)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For any questions, please contact ${data.name}:
- Email: ${data.email}
- GitHub: [${data.username}](https://github.com/${data.username})
`;
}

export default generateMarkdown;
