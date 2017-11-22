
/***************
 Toggles the menu
****************/

(function() {
  const menuBtn = document.querySelector('.nav-menu-btn');
  const menuContainer = document.querySelector('.menu');
  menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('change');
    menuContainer.classList.toggle('open');			
  })
})();