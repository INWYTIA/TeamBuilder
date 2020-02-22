function employeeHTML (data) {
  let role = data.getRole();
  if (role === 'Engineer') {
    var unique = `Github: <a href="https://github.com/${data.github}" class="card-link">${data.github}</a>`
  } else {
    var unique = `School: ${data.school}`
  }
  return `<div class="col-4">
    <div class="card ${role}">
      <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
        <p class="card-text">${role}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID #: ${data.id}</li>
        <li class="list-group-item">Email: ${data.email}</li>
        <li class="list-group-item">${unique}</li>
      </ul>
    </div>
  </div>
  `
  }

module.exports = employeeHTML;
