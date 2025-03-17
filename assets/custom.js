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
  const nav = document.querySelector(".header-navigation");

  if (!nav) return;

  nav.addEventListener("click", function (e) {
    const clickedLink = e.target.closest("a");
    if (!clickedLink) return;

    const subMenu = clickedLink.nextElementSibling;
    if (
      !subMenu ||
      (!subMenu.classList.contains("sub-menu") &&
        !subMenu.classList.contains("sub-sub-menu"))
    )
      return;

    e.preventDefault();

    const parentLi = clickedLink.closest("li");
    const parentUl = parentLi.closest("ul");

    parentUl.querySelectorAll(".sub-menu, .sub-sub-menu").forEach((menu) => {
      if (menu !== subMenu) {
        clickedLink.classList.add("open")
        menu.classList.remove("open");
        menu.style.maxHeight = null;
      }
    });

    if (subMenu.classList.contains("open")) {
      subMenu.classList.remove("open");
      subMenu.style.maxHeight = null;
      clickedLink.classList.remove("open")
    } else {
      clickedLink.classList.add("open")
      subMenu.classList.add("open");
      subMenu.style.maxHeight = subMenu.scrollHeight + "px";
    }
    console.log(clickedLink)
  });
}

initializeBurgerNav();
initializeMenuAccordion();

document.addEventListener("shopify:section:load", (event) => {
  initializeBurgerNav(event.target);
  initializeMenuAccordion(event.target);
});
