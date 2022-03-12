//----------Pop up js------------//

const popUpWindow = document.getElementById('pop-up-window');
const myRecentWork = document.getElementById('my-recent-work-section');
const title = document.getElementById('multipost-stories-title');
const snapshotPic = document.getElementById('pop-up-snapshot');
const PopUpParagr = document.getElementById('multipost-story-prgph');
const languages = document.getElementById('pup-up-build-with');
const seeLiveButton = document.getElementById('see-live-btn');
const seeSourceButton = document.getElementById('see-source-btn');
const closingButton = document.getElementById('button-closing-pop')

const myDataArray = [
  {
    title: 'Multipost stories',
    snapshotPicSrc: "./assets/snapshot-portfolio.png",
    prgphContent: `A daily selection of privately personalized reads; no accounts or
        sign-ups required. has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a standard
        dummy text when an unknown printer took a standard.
        deserunt dolore aliquid!`,
    LanguagesBuildWith: ["html", "Ruby on rails", "css"],
    seeLiveBtn: "https://yannickzahinda.github.io/My-Portfolio-design/",
    seeSource: "https://github.com/YannickZahinda/My-Portfolio-design",
  },
  {
    title: 'Multipost stories',
    snapshotPicSrc: "./assets/snapshot-portfolio.png",
    prgphContent: `A daily selection of privately personalized reads; no accounts or
        sign-ups required. 
        re, since the 1500s, when an unknown printer took a standard
        dummy text. galley of type and scrambled it 1960s with the releaLorem Ipsum is simply,`,
    LanguagesBuildWith: ["html", "Ruby on rails", "css"],
    seeLiveBtn: "https://yannickzahinda.github.io/My-Portfolio-design/",
    seeSource: "https://github.com/YannickZahinda/My-Portfolio-design",
  },
  {
    title: 'Multipost stories',
    snapshotPicSrc: "./assets/snapshot-portfolio.png",
    prgphContent: `A daily selection of privately personalized reads; no accounts or
        sign-ups required. re, explicabo repudiandae magnam deleniti obcaecati! Odit ipsam soluta doloremque velit autem deserunt dolore aliquid! has been the industry's standard dummy text
        ever since the 1500s, 
        dummy text.galley of type and scrambled it 1960s with the releaLorem Ipsum is simply,`,
    LanguagesBuildWith: ["html", "Ruby on rails", "css"],
    seeLiveBtn: "https://yannickzahinda.github.io/My-Portfolio-design/",
    seeSource: "https://github.com/YannickZahinda/My-Portfolio-design",
  },
  {
    title: 'Multipost stories',
    snapshotPicSrc: "./assets/snapshot-portfolio.png",
    prgphContent: `A daily selection of privately personalized reads; no accounts or
        sign-ups required. has been re, explicabo repudiandae magnam deleniti obcaecati! Odit ipsam soluta doloremque velit autem deserunt dolore aliquid! the industry's standard dummy text
        ever since the 1500s, 
        dummy text. galley of type and scrambled it 1960s with the releaLorem Ipsum is simply,`,
    LanguagesBuildWith: ["html", "Ruby on rails", "css"],
    seeLiveBtn: "https://yannickzahinda.github.io/My-Portfolio-design/",
    seeSource: "https://github.com/YannickZahinda/My-Portfolio-design",
  },
];

// const popUpData = myDataArray[n];

function onpenWindow() {
  popUpWindow.style.display = "block";
  popUpWindow.style.transition = "1s ease";
}

closingButton.addEventListener("click", () => {
  popUpWindow.style.display = "none";
})


function onpenWindowDataIncluded(i) {
  const popUpData = myDataArray[i];
  title.innerText = popUpData.title;
  snapshotPic.src = myDataArray[i].snapshotPicSrc;
  PopUpParagr.innerText = popUpData.prgphContent;
  languages.innerHTML = popUpData.LanguagesBuildWith.map(
    (lang) => `<li class='language-pop'>${lang}</li>`
  ).join("");
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
          <img src="./assets/snapshot-portfolio.png" alt="snapshot-portfolio" class="snapshot">
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
          <img src="./assets/snapshot-portfolio.png" alt="snapshot-portfolio" class="snapshot">
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
          <img src="./assets/snapshot-portfolio.png" alt="snapshot-portfolio" class="snapshot">
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
          <img src="./assets/snapshot-portfolio.png" alt="snapshot-portfolio" class="snapshot">
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
