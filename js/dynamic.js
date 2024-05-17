// main work section
const overlay = document.querySelector('.overlay');
const mainWork = {
  title: 'Math Magicians app',
  image: '.assets/works/calculator.png',
  live: 'https://mathmagicians-troos.onrender.com/',
  repository: 'https://github.com/Kgomotso196/Math-Magicians',
  technology: ['React', 'Tailwindcss'],
  description: 'Math-Magicians is a web development project involving creating a web page that generates arithmetic problems for users to solve. It helps practice HTML, CSS, and JavaScript skills while providing a platform for users to practice and improve their math abilities.',
};

const mainWorkSection = document.querySelector('#mainWork');

function mainWorkCard() {
  const mainCard = document.createElement('article');
  mainCard.classList.add('card');
  mainCard.innerHTML = `<div class="cardImg">
          <img src="${mainWork.image}" alt="img card of my work" />
        </div>
        <div class="cardContainer">
          <div class="card-content">
            <h2 class="primaryCardText">${mainWork.title}</h2>
            <p class="seconndryCardText">
             ${mainWork.description}
            </p>
          </div>
          <ul class="mainListCategoris">
          ${mainWork.technology.map((item) => `<li class="mainTags">${item}</li>`).join('')}
          </ul>
          <div class="actionBtn">
            <button type="button" class="btn mainBtn">See project</button>
          </div>
        </div>`;

  mainWorkSection.appendChild(mainCard);
}

// this function to add the details of the proejets inside the modal
function mainPopUp() {
  // define empty array to add the details to it
  const mainWorkAr = [];
  const mainPopWidow = document.createElement('section');
  mainPopWidow.classList.add('modal', 'hidden'); // add the default classes
  mainPopWidow.innerHTML = `
    <div class="modalHeader">
      <div class="title">
        <h3 class="modalTitle">${mainWork.title}</h3>
        <button class="closeBtn"><i class="fas fa-times"></i></button>
      </div>

      <ul class="mainListCategoris">
        ${mainWork.technology.map((item) => `<li class="mainTags">${item}</li>`).join('')}
      </ul>
    </div>
    <div class="modalContent">
      <div class="imgContainer">
        <img src="${mainWork.image}" alt="works image">
      </div>
      <div class="middle">
        <p>
         ${mainWork.description}
        </p>
        <div class="footer">
         <a href="${mainWork.live}" target="_blank"><button class="btn">See live <img src="./assets/Icon-see-live.png" alt="see live icon"></button></a>
         <a href="${mainWork.repository}" target="_blank"><button class="btn">See source <img src="./assets/giticon.png" alt="github icon"></button></a>
        </div>
      </div>
    </div>
    `;

  mainWorkAr.push(mainPopWidow);

  return mainWorkAr;
}

// for declare the function that pop the window on see project button
function forMainModal() {
  // here we make selector all to return an array value so we can iterate through it
  const showPro = document.querySelectorAll('.mainBtn');

  // define a variable to have the window details
  const popWindow = mainPopUp();

  // loop throgh the projects buttons
  for (let index = 0; index < showPro.length; index += 1) {
    // add the event to each see project button
    showPro[index].addEventListener('click', () => {
      // remove the default classes
      popWindow[index].classList.remove('hidden');
      overlay.classList.remove('hidden');

      // append the detail window to the work section
      mainWorkSection.appendChild(popWindow[index]);

      const close = document.querySelectorAll('.closeBtn');

      close.forEach((btn) => {
        btn.addEventListener('click', () => {
          btn.parentElement.parentElement.parentElement.classList.add('hidden');
          overlay.classList.add('hidden');
        });
      });
    });
  }
}

mainWorkCard();
forMainModal();

// end fo the main work section

// works section
const works = [{
  title: 'Capstone Music-Concert',
  image: '.assets/works/music_concert.png',
  live: 'https://kgomotso196.github.io/FirstCapstoneProject/',
  repository: 'https://github.com/Kgomotso196/FirstCapstoneProject',
  technology: ['Bootstrap', 'JS', 'HTML', 'CSS'],
  description: `FirstCapstoneProject is a two page website designed for Music Festal
              in Newtown.It has been designed using HTML, CSS, JS and some parts are designed
              dynamically like the the speakers section part, and has the functionality for both mobile-first and desktop-first versions.`,
},
{
  title: 'Book My Shows',
  image: '.assets/works/movies.png',
  live: 'https://rifat8080.github.io/Javascript-Group-Capstone/dist/index.html',
  repository: 'https://github.com/Kgomotso196/Javascript-Group-Capstone',
  technology: ['Bootstrap', 'Ruby', 'HTML', 'CSS'],
  description: `Book My Shows is a web
               app based on an external API. We have selected an API
              that provides data about movie and series and then build the web app around it. 
              The web app will have 2 or 3 user interfaces.`,
},
{
  title: 'Testing To-Do-List-ES6',
  image: '.assets/works/ToDos.png',
  live: 'https://kgomotso196.github.io/Testing-To-Do-List/dist',
  repository: 'https://github.com/Kgomotso196/Testing-To-Do-List',
  technology: ['Bootstrap', 'Ruby', 'HTML', 'CSS'],
  description: `To-do List is a tool used by developers to keep track of work
              that needs to be done, track progress, and prioritize tasks,Unit testing done
              using jest library.`,
},
{
  title: 'Budget',
  image: '.assets/works/budget.png',
  live: 'https://budget-app-d2td.onrender.com/',
  repository: 'https://github.com/Kgomotso196/Budget',
  technology: ['Bootstrap', 'Ruby', 'HTML', 'CSS'],
  description: `This budget app helps you track your spending. 
              It lists all your transactions by category, 
              so you can see where your money goes.`,
},
{
  title: 'Multi-Post Stories',
  image: '.assets/works/work.png',
  live: '#',
  repository: 'https://github.com/Kgomotso196',
  technology: ['Bootstrap', 'Ruby', 'HTML', 'CSS'],
  description: `A daily selection of privately personalized reads; no accounts or
            sign-ups required. has been the industry's standard dummy text
         ever since the 1500s, when an unknown printer took a standard dummy text.`,
},
{
  title: 'Multi-Post Stories',
  image: '.assets/works/work.png',
  live: '#',
  repository: 'https://github.com/Kgomotso196',
  technology: ['Bootstrap', 'React', 'HTML', 'CSS'],
  description: `A daily selection of privately personalized reads; no accounts or
            sign-ups required. has been the industry's standard dummy text
         ever since the 1500s, when an unknown printer took a standard dummy text.`,
},

];

const worksSection = document.querySelector('#worksSection');

function worksCard() {
  works.forEach((work) => {
    const card = document.createElement('div');
    card.classList.add('works');
    card.innerHTML = ` <article class="worksCard" style='background:linear-gradient(180.45deg,rgba(38, 38, 38, 0) 0.75%,rgba(38, 38, 38, 0.9) 61.94%),url(${work.image}); background-repeat: no-repeat; background-size: cover;'> 
            <div class="card-container">
            <div class="cardContent">
                <h2 class="CardText">${work.title}</h2>
                <p class="paragraphCardText">
                 ${work.description}
                 </p>
                 </div>
                 <ul class="mainListCategoris">
                 ${work.technology.map((item) => `<li class="tags">${item}</li>`).join('')}
                 </ul>
                 </div>
                 <button type="button" class="btn cardBtn showPro">See project</button>
                 </article> `;
    worksSection.appendChild(card);
  });
}
// this function to add the details of the proejets inside the modal
function windowPopUp() {
  // define empty array to add the details to it
  const worksArr = [];
  works.forEach((work) => {
    const popWindow = document.createElement('section');
    popWindow.classList.add('modal', 'hidden'); // add the default classes
    popWindow.innerHTML = `
      <div class="modalHeader">
        <div class="title">
          <h3 class="modalTitle">${work.title}</h3>
          <button class="closeBtn"><i class="fas fa-times"></i></button>
        </div>
        <ul class="mainListCategoris">
          ${work.technology.map((item) => `<li class="mainTags">${item}</li>`).join('')}
        </ul>
      </div>
      <div class="modalContent">
        <div class="imgContainer">
          <img src="${work.image}" alt="works image">
        </div>
        <div class="middle">
          <p>
           ${work.description}
          </p>
          <div class="footer">
           <a href="${work.live}" target="_blank"><button class="btn">See live <img src="./assets/Icon-see-live.png" alt="see live icon"></button></a>
           <a href="${work.repository}" target="_blank"><button class="btn">See source <img src="./assets/giticon.png" alt="github icon"></button></a>
          </div>
        </div>
      </div>
      `;
    worksArr.push(popWindow);
  });
  return worksArr;
}
// for declare the function that pop the window on see project button
function forModal() {
  // here we make selector all to return an array value so we can iterate through it
  const showProject = document.querySelectorAll('.showPro');
  // define a variable to have the window details
  const popWindow = windowPopUp();
  // loop throgh the projects buttons
  for (let i = 0; i < showProject.length; i += 1) {
    // add the event to each see project button
    showProject[i].addEventListener('click', () => {
      // remove the default classes
      popWindow[i].classList.remove('hidden');
      overlay.classList.remove('hidden');
      // append the detail window to the work section
      mainWorkSection.appendChild(popWindow[i]);
      const close = document.querySelectorAll('.closeBtn');
      close.forEach((btn) => {
        btn.addEventListener('click', () => {
          btn.parentElement.parentElement.parentElement.classList.add('hidden');
          overlay.classList.add('hidden');
        });
      });
    });
  }
}
worksCard();
forModal();
