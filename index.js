const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");


teamArray = [];



function runApp () {

  function createTeam () {
    inquirer.prompt([{
      type: "list",
      message: "What type of employee would you like to add?",
      name: "addEmployee",
      choices: ["Engineer", "Intern", "Manager",]
    }]).then(function (userInput) {
      switch(userInput.addEmployee) {
        case "Manager":
          addManager();
          break;
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
      }
    })
  }

  function addEngineer() {
    inquirer.prompt ([
      
      {
        type: "input",
        name: "engineerName",
        message: "Provide the engineer's name."
      },
  
      {
        type: "input",
        name: "engineerId",
        message: "Provide the engineer's employee ID number."
      },
  
      {
        type: "input",
        name: "engineerEmail",
        message: "Provide the engineer's email address."
      },
  
      {
        type: "input",
        name: "engineerOfficeNum",
        message: "Provide the engineer's office number."
      }
  
    ]).then(answers => {})
  }


  function addIntern() {
    inquirer.prompt ([
      
      {
        type: "input",
        name: "internName",
        message: "Provide the intern's name."
      },
  
      {
        type: "input",
        name: "internId",
        message: "Provide the intern's employee ID number."
      },
  
      {
        type: "input",
        name: "internEmail",
        message: "Provide the intern's email address."
      },
  
      {
        type: "input",
        name: "internOfficeNum",
        message: "Provide the intern's office number."
      }
  
    ]).then(answers => {})
  }


  function addManager() {
    inquirer.prompt ([
      
      {
        type: "input",
        name: "managerName",
        message: "Provide the manager's name."
      },
  
      {
        type: "input",
        name: "managerId",
        message: "Provide the manager's employee ID number."
      },
  
      {
        type: "input",
        name: "managerEmail",
        message: "Provide the manager's email address."
      },
  
      {
        type: "input",
        name: "managerOfficeNum",
        message: "Provide the manager's office number."
      }
  
    ]).then(answers => {})
  }


}

runApp();