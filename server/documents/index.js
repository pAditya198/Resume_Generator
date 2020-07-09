module.exports = ({ name, gmail, twitter, linkdin, github }) => {
   if(!name || !gmail || !twitter || !linkdin || !github ){
      return ;
   }
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
      height: 940px;
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
      height: 940px;
  }
  
  .skill-set{
      margin: 0;
      padding: 0;
      font-size: 15px;
      font-weight: 500;
  }
  
  
  .soft-skill{
      display: inline-block;
      margin: 0;
      margin-top: 10px;
      padding: 2px 7px;
      border: 1px solid black;
      border-radius: 10000px;
      width: max-content;
      box-shadow: 1px 1px 1px;
  }
  
  .new-page {
   margin: 25.65px 0;
}

.projects {
   width: 670px;
   margin-top: 25px;
}

.linked:link, .linked:visited {
   font-weight: 500;
   text-decoration: none;
   color: black;
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
              <td><i class="fa fa-twitter"></i> ${twitter}</td>
              <td><i class="fa fa-linkedin"></i> ${linkdin}</td>
              <td><i class="fa fa-github"></i> ${github}</td>
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
              <p class="sub-head"> ProgrammingLanguage </p>
              <p class="skill-set">C++, C, Java, Python, SQL</p>
              <p class="sub-head"> Web Technology </p>
              <p class="skill-set">HTML, CSS, JS, React, Angular, </p>
              <p class="sub-head"> Database </p>
              <p class="skill-set">MySQL</p>
              <p class="sub-head"> Source Control </p>
              <p class="skill-set">Git</p>
              <p class="sub-head"> Language </p>
              <p class="skill-set">English, Hindi, French, Punjabi</p>
           </div>
           <div class="content">
              <span class="name heading">
                 Soft skills
              </span>
              <hr class="line">
              <div class="skill">
                 <p class="soft-skill">Team Work</p>
                 <p class="soft-skill">Research</p>
                 <p class="soft-skill">Presentation</p>
                 <p class="soft-skill">Decision Making</p>
                 <p class="soft-skill">Problem Solving</p>
              </div>
           </div>
           <div class="content">
              <span class="name heading">
                 Certificates
              </span>
              <hr class="line">
              <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia repellat necessitatibus unde cum aperiam
                 corporis, placeat sapiente porro ab numquam error obcaecati doloremque corrupti, sed, debitis aspernatur
                 minima rem voluptatum commodi suscipit at quas repudiandae. Enim molestiae accusantium vero maiores
                 voluptate quasi laborum, similique explicabo repellendus necessitatibus a repudiandae iste aliquid impedit
                 numquam. Nemo adipisci odit facilis laudantium nam! Nihil, aut incidunt minus quis harum, nesciunt
                 perspiciatis vero mollitia sint modi similique. At impedit dolorem odio eligendi repellat perspiciatis
                 accusamus expedita, vero incidunt commodi provident doloribus. Id culpa assumenda doloremque. </p>
           </div>
        </div>
     </div>
     <hr class="new-page">
     <div class="projects">
        <span class="project name heading">
           projects
        </span>
        <hr class="line">
        <div>
           <p class="sub-head">To-do Application</p>
           <ul class="list">
              <li>
                 <p class="list-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem provident
                    aut
                    sunt harum quos
                    commodi iusto quaerat saepe veniam doloremque.</p>
              </li>
              <li>
                 <p class="list-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem provident
                    aut
                    sunt harum quos
                    commodi iusto quaerat saepe veniam doloremque.</p>
              </li>

           </ul>
           <p class="list-item"> Project URL : <a href="
                 https://to-do-application.glitch.me/" class="linked">
                 https://to-do-application.glitch.me/ </a> </p>

           <p class="list-item"> Github URL : <a href="
                       https://github.com/pAditya198/todo-application" class="linked">
                 https://github.com/pAditya198/todo-application </a> </p>

        </div>
        <div>
           <p class="sub-head">To-do Application</p>
           <ul class="list">
              <li>
                 <p class="list-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem provident
                    aut
                    sunt harum quos
                    commodi iusto quaerat saepe veniam doloremque.</p>
              </li>
              <li>
                 <p class="list-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem provident
                    aut
                    sunt harum quos
                    commodi iusto quaerat saepe veniam doloremque.</p>
              </li>

           </ul>
           <p class="list-item"> Project URL : <a href="
                 https://to-do-application.glitch.me/" class="linked">
                 https://to-do-application.glitch.me/ </a> </p>

           <p class="list-item"> Github URL : <a href="
                       https://github.com/pAditya198/todo-application" class="linked">
                 https://github.com/pAditya198/todo-application </a> </p>

        </div>
        <div>
           <p class="sub-head">To-do Application</p>
           <ul class="list">
              <li>
                 <p class="list-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem provident
                    aut
                    sunt harum quos
                    commodi iusto quaerat saepe veniam doloremque.</p>
              </li>
              <li>
                 <p class="list-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem provident
                    aut
                    sunt harum quos
                    commodi iusto quaerat saepe veniam doloremque.</p>
              </li>

           </ul>
           <p class="list-item"> Project URL : <a href="
                 https://to-do-application.glitch.me/" class="linked">
                 https://to-do-application.glitch.me/ </a> </p>

           <p class="list-item"> Github URL : <a href="
                       https://github.com/pAditya198/todo-application" class="linked">
                 https://github.com/pAditya198/todo-application </a> </p>

        </div>
        <div>
           <p class="sub-head">To-do Application</p>
           <ul class="list">
              <li>
                 <p class="list-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem provident
                    aut
                    sunt harum quos
                    commodi iusto quaerat saepe veniam doloremque.</p>
              </li>
              <li>
                 <p class="list-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem provident
                    aut
                    sunt harum quos
                    commodi iusto quaerat saepe veniam doloremque.</p>
              </li>

           </ul>
           <p class="list-item"> Project URL : <a href="
                 https://to-do-application.glitch.me/" class="linked">
                 https://to-do-application.glitch.me/ </a> </p>

           <p class="list-item"> Github URL : <a href="
                       https://github.com/pAditya198/todo-application" class="linked">
                 https://github.com/pAditya198/todo-application </a> </p>

        </div>
     </div>
  </div>
</body>
  </html>
   `;
};
