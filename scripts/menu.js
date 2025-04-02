import { showMenu } from "./header.js";
import { products, buttons, selectProducts, renderStartingMenu } from "./data.js";

showMenu();
renderStartingMenu();
showMenuNav();

let content = '';
buttons.forEach((button) => {
  const HTML = `
    <button class="nav-button js-nav-button" data-button-type="${button.type}">${button.name}</button>
  `;

  content += HTML;

  const buttonHolder = document.querySelector('.js-buttons-holder');
  buttonHolder.innerHTML = content;

  document.querySelectorAll('.js-nav-button').forEach((button) => {
    button.addEventListener('click', () => {
      const buttonType = button.dataset.buttonType;
      const rightProducts = selectProducts(buttonType);
      let menuContent = '';
      rightProducts.forEach((rightProduct) => {
        const html = `
          <div class="menu-item">
            <p class="item-name">${rightProduct.name}</p>
            <p class="item-price">${rightProduct.price} RSD</p>
          </div>
        `;

        menuContent += html;

        const menuInside = document.querySelector('.js-menu-items-holder');
        menuInside.innerHTML = menuContent;


      });
    });
  });
});

function showMenuNav() {
  const arrow = document.querySelector('.js-arrow-button');
  const arrowLineOne = document.querySelector('.js-al-1');
  const arrowLineTwo = document.querySelector('.js-al-2');
  const menuNav = document.querySelector('.js-menu-nav');
  const menu = document.querySelector('.js-menu');

  arrow.addEventListener('click', () => {
    arrow.classList.toggle('active');
    arrowLineOne.classList.toggle('active');
    arrowLineTwo.classList.toggle('active');
    menuNav.classList.toggle('active');
  });

  menuNav.addEventListener('click', () => {
    arrow.classList.toggle('active');
    arrowLineOne.classList.toggle('active');
    arrowLineTwo.classList.toggle('active');
    menuNav.classList.toggle('active');
  });
  
  menu.addEventListener('click', () => {
    arrow.classList.remove('active');
    arrowLineOne.classList.remove('active');
    arrowLineTwo.classList.remove('active');
    menuNav.classList.remove('active');
  });
}