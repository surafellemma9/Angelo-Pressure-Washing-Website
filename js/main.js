(function () {
  var navToggle = document.querySelector(".nav-toggle");
  var navDesktop = document.querySelector(".nav-desktop");

  if (navToggle && navDesktop) {
    navToggle.addEventListener("click", function () {
      var open = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", !open);
      navDesktop.classList.toggle("is-open", !open);
    });

    navDesktop.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navToggle.setAttribute("aria-expanded", "false");
        navDesktop.classList.remove("is-open");
      });
    });
  }

  var filterButtons = document.querySelectorAll(".filter-btn");
  var projectCards = document.querySelectorAll("[data-category]");

  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var filter = btn.getAttribute("data-filter");
      filterButtons.forEach(function (b) {
        b.classList.toggle("is-active", b === btn);
      });
      projectCards.forEach(function (card) {
        var cat = card.getAttribute("data-category");
        var show = filter === "all" || cat === filter;
        card.style.display = show ? "" : "none";
      });
    });
  });
})();
