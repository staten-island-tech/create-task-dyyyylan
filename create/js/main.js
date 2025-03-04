import '../style/style.css'
import { gachaPool } from './array'
import { DOMSelectors } from './dom'

const dropRate = {
  "2-Star": 0.4,  
  "4-Star": 0.09, 
  "5-Star": 0.05, 
  "6-Star": 0.001,
};


function run() {
  const random = Math.random();
  let rarity;

  if (random < dropRate["6-Star"]) {
    rarity = "6-Star";
  } else if (random < dropRate["6-Star"] + dropRate["5-Star"]) {
    rarity = "5-Star";
  } else if (random < dropRate["6-Star"] + dropRate["5-Star"] + dropRate["4-Star"]) {
    rarity = "4-Star";
  } else {
    rarity = "2-Star";
  }
  const items = gachaPool.filter(item => item.rarity === rarity);
  const result = items[Math.floor(Math.random() * items.length)];
  let exists = false;
  [...DOMSelectors.container.querySelectorAll('.card-title')].forEach(card => {
    if (card.textContent === result.name) {
      exists = true;
    }
  });

  if (!exists) {
    DOMSelectors.container.insertAdjacentHTML(
      'beforeend',
      `<div class="card">
        <img src="${result.image}" alt="img" class="card-img">
        <div class="card-content">
          <p class="card-title">${result.name}</p>
          <p class="card-description">${result.rarity}</p>
        </div>
      </div>`
    );
  }
}

DOMSelectors.pull.addEventListener("click", function() {
  run();
})
