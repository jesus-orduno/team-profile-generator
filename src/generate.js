const generateManager = (manager) => {
  return `
    <div class="col-3 card shadow" style="width: 18rem;">
      <div class="card-body">
        <h3>Manager: ${manager.name}</h3>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
          </ul>
        </div>
      </div>
    </div>
  `;
};

const generateEngineer = (engineer) => {
  return engineers.map(engineer => {
    return `
      <div class="col-3 card shadow" style="width: 18rem;">
        <div class="card-body">
          <h3>Engineer: ${engineer.name}</h3>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${engineer.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
              <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}" target="_blank" rel="noopener noreferrer">${engineer.github}</a></li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }).join('');
};

const generateIntern = (intern) => {
  return interns.map(intern => {
    return `
      <div class="col-3 card shadow" style="width: 18rem;">
        <div class="card-body">
          <h3>Intern: ${intern.name}</h3>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${intern.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
              <li class="list-group-item">School: ${intern.school}</li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }).join('');
};

const generatePage = (manager, engineer, intern) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        <title>Team Profile Generator</title>
      </head>
      <body>
        <header class="bg-danger text-white p-3">
          <h1 class="text-center">My Team</h1>
        </header>
        <main class="container">
          <div class="row">
            ${generateManager(manager)}
            ${generateEngineer(engineer)}
            ${generateIntern(intern)}
          </div>
        </main>
      </body>
    </html>
  `;
}

module.exports = {
  generatePage,
  generateManager,
  generateEngineer,
  generateIntern
}