module.exports = ({ name, gmail, twitter, linkdin, github }) => {
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
      max-width: 750px;
      height: max-content;
      margin: auto;
      padding: 25px;
      padding-right: 20px;
      border: 1px solid #eee;
      box-shadow: 0 0 10px rgba(0, 0, 0, .15);
      line-height: 24px;
      font-family: 'Helvetica Neue', 'Helvetica';
  }
  
  .inner-container {
      margin-left: 40px;
  }
  
  .name {
      text-decoration: none;
      text-transform: uppercase;
      font-weight: 700;
  }
  
  .header .imp-links tr td {
      font-size: 12px;
      padding-right: 5px;
  }
  
  .main-body {
      margin-top: 20px;
      height: 953px;
  }
  
  .line {
      margin: 0;
      height: 1px;
      background-color: #000;
      border-color: #000;
  }
  
  .left {
      position: absolute;
      width: 340px;
  }
  
  .content{
      margin-top: 10px;
  }
  
  .heading {
      font-size: 25px;
  }
  
  .sub-head{
      margin: 0;
      margin-top: 10px;
      font-size: 16px;
      font-weight: 700;
  
  }
  
  .list{
      margin: 0;
      padding: 0;
      padding-left: 10px;
  }
  
  .list-item{
      font-size: 14px;
      padding: 0;
      margin: 0;
      line-height: 20px;
  }
  
  .education-content{
      margin: 0;
      margin-top: 10px;
  }
  
  .degree{
      display: block;
  }
  
  .right {
      position: absolute;
      margin-left: 30px;
      left: 50%;
      width: 300px;
  }
  
  .skill-set{
      margin: 10px 0;
      font-size: 15px;
      font-weight: 500;
  }
     </style>
  </head>
  <body class="container">
  
  <div class="inner-container">
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
     <div class="main-body">
         <div class="left">
            <div class="experience">
               <span class="name heading">
                  experience
               </span>
               <hr class="line">
               <div class="web">
                  <p class="sub-head">Web Development</p>
                  <ul class="list">
                     <i class="fa fa-calendar"> 21st April 2020</i>
                     <li>
                        <p class="list-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem provident
                           aut
                           sunt harum quos
                           commodi iusto quaerat saepe veniam doloremque.</p>
                     </li><i class="fa fa-calendar"> 20st May 2020</i>
                     <li>
                        <p class="list-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem provident
                           aut
                           sunt harum quos
                           commodi iusto quaerat saepe veniam doloremque.</p>
                     </li>
                  </ul>
               </div>
               <div class="software">
                  <p class="sub-head">Software Development</p>
                  <ul class="list">
                     <i class="fa fa-calendar"> 21st April 2019</i>
                     <li>
                        <p class="list-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem provident
                           aut
                           sunt harum quos
                           commodi iusto quaerat saepe veniam doloremque.</p>
                     </li><i class="fa fa-calendar"> 01st April 2015</i>
                     <li>
                        <p class="list-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem provident
                           aut
                           sunt harum quos
                           commodi iusto quaerat saepe veniam doloremque.</p>
                     </li>
                  </ul>
               </div>
               <div class="Others">
                  <p class="sub-head">Others</p>
                  <ul class="list">
                     <i class="fa fa-calendar"> 21st May 2018</i>
                     <li>
                        <p class="list-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem provident
                           aut
                           sunt harum quos
                           commodi iusto quaerat saepe veniam doloremque.</p>
                     </li><i class="fa fa-calendar"> 14st October 2017</i>
                     <li>
                        <p class="list-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem provident
                           aut
                           sunt harum quos
                           commodi iusto quaerat saepe veniam doloremque.</p>
                     </li>
                  </ul>
               </div>
            </div>
            <div class="content">
               <span class="education name heading">
                  education
               </span>
               <hr class="line">
               <p class="education-content"><span class="degree"> Bachelor of Technology</span> <span> <b>Indian
                        Indtitue of Information Technology, Vadodara</b> </span> </p>
               <p class="education-content"><span class="degree"> Bachelor of Technology</span> <span> <b>Indian
                        Indtitue of Information Technology, Vadodara</b> </span> </p>
               <p class="education-content"><span class="degree"> Bachelor of Technology</span> <span> <b>Indian
                        Indtitue of Information Technology, Vadodara</b> </span> </p>
            </div>
         </div>
         <div class="right">
            <div class="skills">
               <span class="name heading">
                  skills
               </span>
               <hr class="line">
               <p class="skill-set">C++,Java,JavaScript,AngularJS,NodeJS </p>
            </div>
            <div class="content">
               <span class="name heading">
                  Projects
               </span>
               <hr class="line">
               
            </div>
         </div>
      </div>
</div>
  </body>
  </html>
   `;
};
