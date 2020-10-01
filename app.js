const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employeeType = [
  {
    type: "list",
    name: "employeeType",
    message: "What type of employee are you adding?",
    choices: ["Manager", "Engineer", "Intern", "Done"],
  },
];
const employeeQuestions = [
  {
    type: "input",
    name: "name",
    message: "Please enter employee name",
  },
  {
    type: "input",
    name: "id",
    message: "Please enter employee id",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter employee email",
  },
];

const managerQuestions = [
  ...employeeQuestions,
  {
    type: "input",
    name: "officeNumber",
    message: "Please enter officeNumber",
  },
];

const engineerQuestions = [
  ...employeeQuestions,
  {
    type: "input",
    name: "github",
    message: "Please enter github username",
  },
];
const internQuestions = [
  ...employeeQuestions,
  {
    type: "input",
    name: "school",
    message: "Please enter school info",
  },
];
var employeeArr = [];
async function init() {
  try {
    console.log("Welcome to your team creation engine");
     await prompts(employeeType)
    .then(function(data){
      switch (data.employeeType) {
      case "Manager":
        console.log("man");
        addManager();
        break;

      case "Engineer":
        console.log("eng");
         addEngineer();
        break;

      case "Intern":
        console.log("int");
         addIntern();
        break;

      case "Done":
        console.log("Your page will be rendered now!");
        let html =  render(employeeArr);
        console.log(html);
        break;

      default:
        console.log("Something went wrong please try again");
        break;
    }
    })
    
  } catch (error) {
    console.log(error);
  }
}
function addManager() {
   prompts(managerQuestions)
  .then(function(info){
    let manager = new Manager(info.name, info.id, info.email, info.officeNumber);
    employeeArr.push(manager);
    init();
  })
  
}
function addEngineer() {
  let info = prompts(engineerQuestions)
  .then(function(info){
    let engineer = new Engineer(info.name, info.id, info.email, info.github);
    employeeArr.push(engineer);
    init();
  })
  
}
function addIntern() {
  let info = prompts(internQuestions)
  .then(function(info){
    let intern = new Intern(info.name, info.id, info.email, info.school);
    employeeArr.push(intern);
    init();
  })
  
}
function writeFile() {
  // After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
}
function prompts(questions) {
  return inquirer.prompt(questions);
}

init();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!



// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
