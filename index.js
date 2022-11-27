const inquirer = require('inquirer');

const fs = require('fs');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const { generateHTML, generateManager, generateEngineer, generateIntern } = require('./src/generate.js');

// Questions to receive user input. Future development would include validation.
const questions = {
  manager: [
    {
      name: 'managerName',
      type: 'input',
      message: "What is the manager's name?",
    },
    {
      name: 'managerId',
      type: 'input',
      message: "What is the manager's ID of the manager?",
    },
    {
      name: 'managerEmail',
      type: 'input',
      message: "What is the manager's email?",
    },
    {
      name: 'managerOfficeNumber',
      type: 'input',
      message: "What is the manager's office number?",
    }
  ],

  engineer: [
    {
      name: 'engineerName',
      type: 'input',
      message: "What is the engineer's name?",
    },
    {
      name: 'engineerId',
      type: 'input',
      message: "What is the engineer's ID?",
    },
    {
      name: 'engineerEmail',
      type: 'input',
      message: "What is the engineer's email?",
    },
    {
      name: 'engineerGithub',
      type: 'input',
      message: "What is the engineer's GitHub username?",
    }
  ],

  intern: [
    {
      name: 'internName',
      type: 'input',
      message: "What is the intern's name?",
    },
    {
      name: 'internId',
      type: 'input',
      message: "What is the intern's ID?",
    },
    {
      name: 'internEmail',
      type: 'input',
      message: "What is the intern's email?",
    },
    {
      name: 'internSchool',
      type: 'input',
      message: "What is the intern's school?",
    }
  ],

  addEmployee: [
    {
      name: 'addEmployee',
      type: 'list',
      message: 'Would you like to add an employee?',
      choices: ['Add an engineer', 'Add an intern', 'No, I am done adding employees.']
    }
  ]
};

function createTeam() {
  inquirer.prompt(questions.manager).then((answer) => {
    const manager = new Manager(answer.managerName, answer.managerId, answer.managerEmail, answer.managerOfficeNumber);
    addTeamMember(manager, [], []);
  });
}

function addTeamMember(manager, engineers, interns) {
  inquirer.prompt(questions.addEmployee).then((answer) => {
    if (answer.addEmployee === 'Add an engineer') {
      inquirer.prompt(questions.engineer).then((answer) => {
        const engineer = new Engineer(answer.engineerName, answer.engineerId, answer.engineerEmail, answer.engineerGithub);
        engineers.push(engineer);
        addTeamMember(manager, engineers, interns);
      })
    } else if (answer.addEmployee === 'Add an intern') {
      inquirer.prompt(questions.intern).then((answer) => {
        const intern = new Intern(answer.internName, answer.internId, answer.internEmail, answer.internSchool);
        interns.push(intern);
        addTeamMember(manager, engineers, interns);
      })
    } else {
      const html = generateHTML(manager, engineers, interns);
      fs.writeFile('./dist/generatedTeam.html', html, (err) => {
        if (err) throw err;
        console.log('Your team file has been created!');
      });
    }
  })
}

createTeam();