/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
/* eslint-disable camelcase */

const popUpWindow = document.getElementById('pop-up-window');
const myRecentWork = document.getElementById('my-recent-work-section');
const title = document.getElementById('multipost-stories-title');
const snapshotPic = document.getElementById('pop-up-snapshot');
const PopUpParagr = document.getElementById('multipost-story-prgph');
const languages = document.getElementById('pup-up-build-with');
const seeLiveButton = document.getElementById('see-live-btn');
const seeSourceButton = document.getElementById('see-source-btn');
const closingButton = document.getElementById('button-closing-pop');

const myDataArray = [
  {
    title: 'Children with disabilities',
    snapshotPicSrc: './assets/children.png',
    prgphContent: `This is a simple website build for children with desabilities, it talks about the inequality of chances
    and discrimination they mostly face`,
    LanguagesBuildWith: ['html', 'css', 'SASS', 'Javascript'],
    seeLiveBtn: 'https://yannickzahinda.github.io/Capstone-project/',
    seeSource: 'https://yannickzahinda.github.io/Capstone-project',
  },
  {
    title: 'TV Maze',
    snapshotPicSrc: './assets/films.png',
    prgphContent: `This is a movies website that allow the user to see films displayed on the screen, taking data from API`,
    LanguagesBuildWith: ['html', 'CSS', 'Javascript', 'Webpack', 'API documentation'],
    seeLiveBtn: 'https://yannickzahinda.github.io/Javascript-group-capstone-project/',
    seeSource: 'https://github.com/YannickZahinda/My-Portfolio-design',
  },
  {
    title: 'Leaderboard',
    snapshotPicSrc: './assets/leaderboard.png',
    prgphContent: `This is a simple website that allows the user to record his score and see them displaying on the 
    screen, the data are recorded on an API `,
    LanguagesBuildWith: ['html', 'css', 'Javascript', 'Webpack', 'Api'],
    seeLiveBtn: 'https://yannickzahinda.github.io/Leaderboard/',
    seeSource: 'https://github.com/YannickZahinda/My-Portfolio-design',
  },
  {
    title: 'Math Magician',
    snapshotPicSrc: './assets/Math.png',
    prgphContent: `Math Magician is a single page application (SPA); for maths lovers ! it's a website that allows the user to
    perform basics calculation with basics operator !`,
    LanguagesBuildWith: ['html', 'css', 'javascript', 'react'],
    seeLiveBtn: 'https://github.com/YannickZahinda/math-magician',
    seeSource: 'https://github.com/YannickZahinda/My-Portfolio-design',
  },
];

// const popUpData = myDataArray[n];

function onpenWindow() {
  popUpWindow.style.display = 'block';
  popUpWindow.style.transition = '1s ease';
}

closingButton.addEventListener('click', () => {
  popUpWindow.style.display = 'none';
});

function onpenWindowDataIncluded(i) {
  const popUpData = myDataArray[i];
  title.innerText = popUpData.title;
  snapshotPic.src = myDataArray[i].snapshotPicSrc;
  PopUpParagr.innerText = popUpData.prgphContent;
  languages.innerHTML = popUpData.LanguagesBuildWith.map(
    (lang) => `<li class='language-pop'>${lang}</li>`,
  )
    .join('');
  seeLiveButton.onclick = () => {
    window.location.href = myDataArray[i].seeLiveBtn;
  };
  seeSourceButton.onclick = () => {
    window.location.href = myDataArray[i].seeSource;
  };

  onpenWindow();
}

myRecentWork.innerHTML = `
<div class="multipost-stories-item">
        <div class="img-placeholder-container">
          <img src='${myDataArray[0].snapshotPicSrc}' alt="snapshot-portfolio" class="snapshot">
        </div>
        <div class="multipost-stories-container">
          <h6 class="multipost-stories-title">${myDataArray[0].title}</h6>
          <p class="multipost-story-prgph">
            ${myDataArray[0].prgphContent}
          </p>
          <ul class="build-with pop-up-build-with">
            <li class="language>css</li>
            <li class="language">html</li>
            <li class="language">Boostrap</li>
            <li class="language">Ruby</li>
          </ul>
          <div class="button-container">
            <button class="see-project-button" onclick="onpenWindowDataIncluded(0)" type="button">
              See Project
            </button>
          </div>
        </div>
      </div>

      <div class="multipost-stories-item multipost-stories-item1">
        <div class="img-placeholder-container">
          <img src="${myDataArray[1].snapshotPicSrc}" alt="snapshot-portfolio" class="snapshot">
        </div>
        <div class="multipost-stories-container">
          <h6 class="multipost-stories-title">${myDataArray[1].title}</h6>
          <p class="multipost-story-prgph">
          ${myDataArray[1].prgphContent}
          </p>
          <ul class="build-with pop-up-build-with">
            <li class="language">css</li>
            <li class="language">html</li>
            <li class="language">Boostrap</li>
            <li class="language">Ruby</li>
          </ul>
          <div class="button-container">
            <button class="see-project-button" onclick="onpenWindowDataIncluded(1)" type="button">
              See Project
            </button>
          </div>
        </div>
      </div>
      <div class="multipost-stories-item">
        <div class="img-placeholder-container">
          <img src="${myDataArray[2].snapshotPicSrc}" alt="snapshot-portfolio" class="snapshot">
        </div>
        <div class="multipost-stories-container">
          <h6 class="multipost-stories-title">${myDataArray[2].title}</h6>
          <p class="multipost-story-prgph">
            ${myDataArray[2].prgphContent}
          </p>
          <ul class="build-with pop-up-build-with">
            <li class="language">css</li>
            <li class="language">html</li>
            <li class="language">Boostrap</li>
            <li class="language">Ruby</li>
          </ul>
          <div class="button-container">
            <button class="see-project-button" onclick="onpenWindowDataIncluded(2)" type="button">
              See Project
            </button>
          </div>
        </div>
      </div>
      <div class="multipost-stories-item multipost-stories-item1">
        <div class="img-placeholder-container">
          <img src="${myDataArray[3].snapshotPicSrc}" alt="snapshot-portfolio" class="snapshot">
        </div>
        <div class="multipost-stories-container">
          <h6 class="multipost-stories-title">${myDataArray[3].title}</h6>
          <p class="multipost-story-prgph">
            ${myDataArray[3].prgphContent}
          </p>

          <ul class="build-with pop-up-build-with">
            <li class="language">css</li>
            <li class="language">html</li>
            <li class="language">Boostrap</li>
            <li class="language">Ruby</li>
          </ul>
          <div class="button-container">
            <button class="see-project-button" type="button" onclick="onpenWindowDataIncluded(3)">
              See Project
            </button>
          </div>
        </div>
      </div>
`;
