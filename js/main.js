const button = document.getElementById("menu-toggler")
const navList = document.getElementById("main-navlist")

button.addEventListener('click',()=>{
  navList.classList.toggle('hidden');
  button.getAttribute('aria-expanded') === "false"?button.ariaExpanded='true':button.ariaExpanded='false';
  button.getAttribute('aria-expanded') === "false"?button.firstElementChild.src='./images/hero/cross.svg':button.firstElementChild.src='./images/hero/menu.svg';
})