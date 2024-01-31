const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getUserInput(prompt) {
  return new Promise(resolve => {
    rl.question(prompt, answer => {
      resolve(answer.trim());
    });
  });
}

async function generateReadme() {
  
  const projectTitle = await getUserInput('Enter your project title: ');
  const description = await getUserInput('Enter project description: ');
  const installation = await getUserInput('Enter installation instructions: ');
  const usage = await getUserInput('Enter usage information: ');
  const contributing = await getUserInput('Enter contribution guidelines: ');
  const tests = await getUserInput('Enter test instructions: ');
  const licenseChoice = await getUserInput('Choose a license (e.g., MIT): ');
  const githubUsername = await getUserInput('Enter your GitHub username: ');
  const emailAddress = await getUserInput('Enter your email address: ');

  const readmeContent = `# ${projectTitle}\n\n`
    + `## Description\n${description}\n\n`
    + `## Table of Contents\n- [Installation](#installation)\n- [Usage](#usage)\n- [Contributing](#contributing)\n- [Tests](#tests)\n- [License](#license)\n- [Questions](#questions)\n\n`
    + `## Installation\n${installation}\n\n`
    + `## Usage\n${usage}\n\n`
    + `## Contributing\n${contributing}\n\n`
    + `## Tests\n${tests}\n\n`
    + `## License\n[![License](https://img.shields.io/badge/License-${licenseChoice}-blue.svg)](LICENSE)\n\n`
    + `## Questions\nFor additional questions, you can reach me through my [GitHub profile](https://github.com/${githubUsername}) or by email at ${emailAddress}.\n`;

  fs.writeFileSync('README.md', readmeContent);

  console.log('Successfully created the README.md file!');
  rl.close();
}

generateReadme();
