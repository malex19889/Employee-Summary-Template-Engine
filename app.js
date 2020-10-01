const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
// inquirer quetion arrays
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
// empty array to push new employee objects 
var employeeArr = [];
// function to start app
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
        // let html =  render(employeeArr);
        // console.log(html);
        writeToFile();
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
  prompts(engineerQuestions)
  .then(function(info){
    let engineer = new Engineer(info.name, info.id, info.email, info.github);
    employeeArr.push(engineer);
    init();
  })
  
}
function addIntern() {
  prompts(internQuestions)
  .then(function(info){
    let intern = new Intern(info.name, info.id, info.email, info.school);
    employeeArr.push(intern);
    init();
  })
  
}
function writeToFile() {
  if(!fs.existsSync(OUTPUT_DIR)){
    console.log("creating new output folder...");
    fs.mkdirSync(OUTPUT_DIR)
  }
  console.log("Creating your team.html page...")
  fs.writeFileSync(outputPath,render(employeeArr))
  
}
// call enquirer
function prompts(questions) {
  return inquirer.prompt(questions);
}
// call init to start app
init();

