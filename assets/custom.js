/* Burger Nav */
function initializeBurgerNav(scope = document) {
  const burgerNav = scope.querySelector(".nav-burger");

  if (burgerNav && !burgerNav.dataset.initialized) {
    burgerNav.dataset.initialized = "true";
    burgerNav.addEventListener("click", () => {
      const isOpen = burgerNav.classList.toggle("open");
      document.body.style.overflow = isOpen ? "hidden" : "";
    });
  }
}

/* Burger Nav Accordion */
function initializeMenuAccordion(scope = document) {
  const nav = scope.querySelector(".header-navigation");

  if (!nav || nav.dataset.initialized) return;
  nav.dataset.initialized = "true";

  nav.addEventListener("click", (e) => {
    const clickedLink = e.target.closest("a");
    if (!clickedLink) return;

    const subMenu = clickedLink.nextElementSibling;
    if (!subMenu || !subMenu.matches(".sub-menu, .sub-sub-menu")) return;

    e.preventDefault();

    const parentLi = clickedLink.closest("li");
    const parentUl = parentLi.closest("ul");

    parentUl.querySelectorAll(".sub-menu.open, .sub-sub-menu.open").forEach((menu) => {
      if (menu !== subMenu) {
        menu.classList.remove("open");
        menu.style.maxHeight = null;
      }
    });

    subMenu.classList.toggle("open");
    clickedLink.classList.toggle("open");
    subMenu.style.maxHeight = subMenu.classList.contains("open") ? `${subMenu.scrollHeight}px` : null;
  });
}

/* Cart Drawer */
function initializeCartDrawer(scope = document) {
  const cartIcon = scope.querySelector(".icon-header-cart");

  if (!cartIcon || cartIcon.dataset.initialized) return;
  cartIcon.dataset.initialized = "true";

  cartIcon.addEventListener("click", () => {
  const isOpen = cartIcon.classList.toggle("open");
  })
}

initializeBurgerNav();
initializeMenuAccordion();

document.addEventListener("shopify:section:load", (event) => {
  initializeBurgerNav(event.target);
  initializeMenuAccordion(event.target);
});
