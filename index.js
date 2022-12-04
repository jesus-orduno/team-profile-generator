const inquirer = require('inquirer');

const fs = require('fs');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const { generatePage, generateManager, generateEngineer, generateIntern } = require('./src/generate.js');

// Questions to receive user input. Future development would include validation.
const questions = {
  manager: [
    {
      name: 'managerName',
      type: 'input',
      message: "What is the manager's name?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return 'Please enter a name.';
        }
      }
    },
    {
      name: 'managerId',
      type: 'input',
      message: "What is the manager's ID of the manager?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return 'Please enter an ID.';
        }
      }
    },
    {
      name: 'managerEmail',
      type: 'input',
      message: "What is the manager's email?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return 'Please enter an email.';
        }
      }
    },
    {
      name: 'managerOfficeNumber',
      type: 'input',
      message: "What is the manager's office number?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return 'Please enter an office number.';
        }
      }
    }
  ],

  engineer: [
    {
      name: 'engineerName',
      type: 'input',
      message: "What is the engineer's name?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return 'Please enter a name.';
        }
      }
    },
    {
      name: 'engineerId',
      type: 'input',
      message: "What is the engineer's ID?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return 'Please enter an ID.';
        }
      }
    },
    {
      name: 'engineerEmail',
      type: 'input',
      message: "What is the engineer's email?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return 'Please enter an email.';
        }
      }
    },
    {
      name: 'engineerGithub',
      type: 'input',
      message: "What is the engineer's GitHub username?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return 'Please enter a GitHub username.';
        }
      }
    }
  ],

  intern: [
    {
      name: 'internName',
      type: 'input',
      message: "What is the intern's name?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return 'Please enter a name.';
        }
      }
    },
    {
      name: 'internId',
      type: 'input',
      message: "What is the intern's ID?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return 'Please enter an ID.';
        }
      }
    },
    {
      name: 'internEmail',
      type: 'input',
      message: "What is the intern's email?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return 'Please enter an email.';
        }
      }
    },
    {
      name: 'internSchool',
      type: 'input',
      message: "What is the intern's school?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return 'Please enter a school.';
        }
      }
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
      const managerHtml = generateManager(manager);
      const engineerHtml = generateEngineer(engineers);
      const internHtml = generateIntern(interns);

      fs.writeFile('./dist/generatedTeam.html', generatePage(managerHtml, engineerHtml, internHtml), (err) => 
        err ? console.log(err) : console.log('Success! Your team profile has been generated!')
      );
    }
  })
}

createTeam();