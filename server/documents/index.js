module.exports = ({ name, phone, githubUrl }) => {
  const today = new Date();
  const arr = ["kirito", "aditya"];
  const loop = arr.map(ele => {
    return `<p>${ele}</p>`;
  });

  return `
   <!doctype html>
   <html>
      <head>
         <meta charset="utf-8">
         <title>PDF Result Template</title>
         <style>
         .container {
            max-width: max-content;
            margin: auto;
            padding: 30px;
            border: 1px solid #eee;
            box-shadow: 0 0 10px rgba(0, 0, 0, .15);
            font-size: 14px;
            line-height: 24px;
            font-family: 'Helvetica Neue', 'Helvetica';
            color: #555;
        }
        
        .container header table td {
            padding: 5px;
            vertical-align: top;
        }
        

        .container table tr.top table td {
            padding-bottom: 20px;
        }
         </style>
      </head>
      <body>
      <div class="container">
      <header>
      <table>
         <tr>
            <td><strong> Name</strong> : ${name} </td>
            <td><strong>Contact</strong> : ${phone} </td>
            <td><strong>Github Url</strong> : ${githubUrl} </td>
         </tr>
      </table>
      </header>
   </div>
      </body>
   </html>
   `;
};
