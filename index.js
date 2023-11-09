import fs from "fs";
import util from "util";
import inquirer from "inquirer";
import generateMarkdown from "./generateReadme.js";
const writeFileAsync = util.promisify(fs.writeFile);


// prompt questions
function promptUser(){
    return inquirer.prompt([

        {
            type: "input",
            name: "projectTitle",
            message: "what is the project title?",
            // validate property to check the user provided a value.
            // validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},

        },
        {
            type: "input",
            name: "installation",
            message: "how do you install your app?",
            // validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},

        },
        {  type: "input",
           name: "usage",
           message: "How do you use your app?",
        //    validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
           
        },

        // listed license
        {  type: "list ",
           name: "license",
           message: "what license is being used",
           choices: [
            "Apache", "Academic", "GNU", "ISC","MIT","Mozilla","Open"],
        //    validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
        {  type: "input",
           name: "Git",
           message: "Github username:",
        //    validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},

        },
        {  type: "input",
           name: "email",
           message: "Please ente your email",
        //    validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},


        },
        {  type: "input",
           name: "questions",
           message: "fix any issues",
        //    validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},


        }

    

    ])
}


// Function to initialize the application
async function init() {
  try {

    // Ask user questions and generate responses
    const answers = await promptUser();
    const generateContent = generateMarkdown(answers);

    // Write new README.md to the 'dist' directory
    await writeFileAsync("./Develop/dist/README.md", generateContent);
    console.log("✔️  Successfully wrote to README.md");

  } catch (err) {
    console.error(err);
  }
}

// Initialize the application
init();
