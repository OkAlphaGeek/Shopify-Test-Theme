function initializeBurgerNav(scope = document) {
  const burgerNav = scope.querySelector(".nav-burger");

  if (burgerNav) {
    burgerNav.addEventListener("click", () => {
      const isOpen = burgerNav.classList.toggle("open");
      document.body.style.overflow = isOpen ? "hidden" : "";
    });
  }
}

function initializeMenuAccordion(scope = document) {
  const menuAccordionParent = document.querySelectorAll(".burger .parent-link");  

  menuAccordionParent.forEach(menuParent => {
    menuParent.addEventListener("click", event => {
      /* Only one open at a time */
      const openParentMenu = document.querySelector(".burger .parent-link.open");
      if(openParentMenu && openParentMenu !== menuParent) {
        openParentMenu.classList.toggle("open");
        openParentMenu.nextElementSibling.style.maxHeight = 0;
      }
      /* Open and close */
      menuParent.classList.toggle("open");
      
      const menuChild = menuParent.nextElementSibling;
      if(menuParent.classList.contains("open")) {
        menuChild.style.maxHeight = menuChild.scrollHeight + "px";
      } else {
        menuChild.style.maxHeight = 0;
      }
    });
  });
}

initializeBurgerNav();
initializeMenuAccordion();


document.addEventListener("shopify:section:load", (event) => {
  initializeBurgerNav(event.target);
  initializeMenuAccordion(event.target);
});

