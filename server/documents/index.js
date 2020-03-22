module.exports = ({ name, gmail,twitter,linkdin, github }) => {
  const today = new Date();
  const arr = ["kirito", "aditya"];
  const loop = arr.map(ele => {
    return `<p>${ele}</p>`;
  });
  const path = "http://github.com/iiitv.png";
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Resume</title>
     <script src="https://use.fontawesome.com/72777e07a4.js"></script>
     <style>
     .container {
      max-width: 800px;
      margin: auto;
      padding: 25px;
      padding-right: 10px;
      border: 1px solid #eee;
      box-shadow: 0 0 10px rgba(0, 0, 0, .15);
      line-height: 24px;
      font-family: 'Helvetica Neue', 'Helvetica';
  }
  
  .header .name{
      text-align: center;
  }
  
  .header .imp-links tr td{
  font-size: 12px;
  font-weight: bold;
  padding: 7.5px;
  }
     </style>
  </head>
  <body class="container">
     <header class="header">
        <h1 class="name">${name}</h1>
        <table class="imp-links">
           <tr>
              <td><i class="fa fa-at"></i> ${gmail}</td>
              <td><i class="fa fa-twitter"></i> ${twitter} </td>
              <td><i class="fa fa-linkedin"></i> ${linkdin} </td>
              <td><i class="fa fa-github"></i> ${github} </td>
           </tr>
        </table>
     </header>
     
  </body>
  </html>
   `;
};
