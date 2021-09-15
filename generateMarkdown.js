const fs = require("fs");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return `## License 
    this project is licensed with ${license}`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (license === "None") {
    return `## License 
    this project is licensed with ${license}`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `PROJECT TITLE NAME  
${data.userTitle}


LICENSE
${data.license}


PROJECT DESCRIPTION
${data.description}


TABLE OF CONTENTS
${data.tableOfContents}


USAGE 
${data.usage}


INSTALATION INSTRUCTIONS
${data.installation} 


HOW TO CONTRIBUTE
${data.contributor}


TESTS
${data.test}







HOW TO GET IN TOUCH WITH ANY QUESTIONS
${data.userGitHub}
${data.userEmail}













                        `;
}

// function finalPrint() {
//   fs.appendFile("README.md", JSON.stringify(data), (err) => {
//     err ? console.log(err) : console.log("File was Written!!!");
//     return doIt;
//   });
// }

// finalPrint();

module.exports = generateMarkdown;
