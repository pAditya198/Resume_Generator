module.exports = ({ name,phone,githubUrl }) => {
  const today = new Date();
  const arr=['kirito','aditya']
   const loop=arr.map((ele)=>{
      return `<p>${ele}</p>`
   })

  return `
   <!doctype html>
   <html>
      <head>
         <meta charset="utf-8">
         <title>PDF Result Template</title>
         <style>
         .container {
            max-width: 800px;
            margin: auto;
            padding: 30px;
            border: 1px solid #eee;
            box-shadow: 0 0 10px rgba(0, 0, 0, .15);
            font-size: 16px;
            line-height: 24px;
            font-family: 'Helvetica Neue', 'Helvetica';
            color: #555;
        }
        .container header ul {
            display: flex;
            justify-content: space-between;
        list-style: none;
        }
         </style>
      </head>
      <body>
      <div class="container">
      <header>
         <ul>
            <li>Name : Kirito</li>
            <li>Contact : 7985565341</li>
            <li>Github : https://github.com/paditya198</li>
         </ul>
      </header>
   </div>
      </body>
   </html>
   `;
};
