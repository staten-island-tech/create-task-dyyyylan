import '../style/style.css'
import { gachaPool } from './array'
import { DOMSelectors } from './dom'

function createtest() {
  gachaPool.forEach((gachaPool) => {
    DOMSelectors.container.insertAdjacentHTML(
      'beforeend',
      `<div class="card w-[50%] sm:w-[50%] lg:w-[20%] h-[100%] rounded-[20px] bg-base-100 bg-opacity-50 shadow-lg">
        <img src="${gachaPool.image}" alt="img" class="card-img">
        <div class="card-content">
          <p class="card-title">${gachaPool.name}</p>
          <p class="card-description">${gachaPool.rarity}</p>
        </div>
      </div>`
    );
  });
}

createtest();
