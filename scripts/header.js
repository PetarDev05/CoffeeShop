export function showMenu() {
  const icon = document.querySelector('.js-burger-menu-icon');
  const lineOne = document.querySelector('.js-line-1');
  const lineTwo = document.querySelector('.js-line-2');
  const lineThree = document.querySelector('.js-line-3');
  const menu = document.querySelector('.js-off-screen');

  icon.addEventListener('click', () => {
    lineOne.classList.toggle('active');
    lineTwo.classList.toggle('active');
    lineThree.classList.toggle('active');
    menu.classList.toggle('active');
  });
}