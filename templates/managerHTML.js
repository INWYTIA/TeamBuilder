function managerHTML (data) {
  return `<!DOCTYPE html>
  <html>
     <head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
      <title>My Team</title>
      <style>
        .card {
          margin-bottom: 20px;
          border: 2px solid #777;
        }
        .jumbotron {
          background-color: #669988;
        }
        .Engineer {
          background-color: #bf9;
        }
        .Intern {
          background-color: #ffc;
        }
        body {
          background-color: #e0e8ff;
        }
        h1, h5 {
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">${data.name}'s Team</h1>
          <h3>Manager</h3>
          <div class="row">
            <div class="col">${data.name}</div>
            <div class="col">ID #: ${data.id}</div>
            <div class="col">Email: ${data.email}</div>
            <div class="col">Office Number: ${data.officeNumber}</div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row justify-content-center">
        `
}

module.exports = managerHTML;
