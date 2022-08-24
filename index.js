let items = [
  {
    id: 1,
    heading: `The Wet Codbase`,
    time: `October 4th, 2020 11 min read`,
    details: `I'm baby ramps kombucha gluten-free ennui swag tattooed street
              art. Marfa biodiesel letterpress blue bottle subway tile, pop-up
              pok pok of.`,
  },
  {
    id: 2,
    heading: `Goodby, Clean Code`,
    time: `November 22nd, 2019 5 min read`,
    details: `Biodiesel artisan seitan plaid sriracha copper mug venmo shabby
              chic. Kickstarter raclette kombucha, yr post-ironic jianbing
              try-hard flexitarian vaporware normcore.`,
  },
  {
    id: 3,
    heading: `My Decade In Review`,
    time: `August 11th, 2018 5 min read`,
    details: `Direct trade shabby chic four dollar toast, tilde actually
              try-hard bicycle rights aesthetic forage. Meditation keytar
              asymmetrical tacos artisan truffaut. Pabst jean shorts roof party
              scenester.`,
  },
  {
    id: 4,
    heading: `What Are The React Team Principles`,
    time: `June 4th, 2015 5 min read`,
    details: `Selvage street art hammock affogato VHS. Mustache shaman literally
              wayfarers schlitz. Direct trade four loko narwhal VHS pop-up,
              chartreuse trust fund typewriter street art swag thundercats art
              party.`,
  },
];
let toggleBtn = document.querySelector(`.toggle-btn`);
let sectionCenter = document.querySelector(`.section-center`);
let sectionItems = document.querySelector(`.items`);
toggleBtn.addEventListener(`click`, () => {
  document.body.classList.toggle(`dark-theme`);
});

window.addEventListener(`DOMContentLoaded`, function () {
  let displayView = items.map((item) => {
    return `<section class="items">
          <div class="sub-section">
            <h2>${item.heading}</h2>
            <p>${item.time}</p>
            <div class="details">
              ${item.details}
            </div>
          </div>
        </section>`;
  });
  displayViews = displayView.join(``);
  sectionItems.innerHTML = displayViews;
});
