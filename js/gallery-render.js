(function () {
  var container = document.getElementById("gallery-root");
  var projects = window.GALLERY_PROJECTS;
  if (!container || !projects || !projects.length) return;

  projects.forEach(function (p) {
    var article = document.createElement("article");
    article.className = "project-card";
    article.setAttribute("data-category", p.categoryFilter);

    var altB = escapeAttr(p.title + " — before");
    var altA = escapeAttr(p.title + " — after");

    article.innerHTML =
      '<div class="project-card-header">' +
      '<span class="category">' +
      escapeHtml(p.category) +
      "</span>" +
      "<h3>" +
      escapeHtml(p.title) +
      "</h3>" +
      '<p class="desc">' +
      escapeHtml(p.description) +
      "</p>" +
      "</div>" +
      '<div class="project-card-media">' +
      '<div class="compare-slider" data-compare style="--compare-p: 50%" role="group" aria-label="Before and after comparison. Drag the slider to compare.">' +
      '<div class="compare-slider__viewport">' +
      '<img class="compare-slider__after" src="' +
      escapeAttr(p.after) +
      '" alt="' +
      altA +
      '" width="1200" height="900" loading="lazy" decoding="async" draggable="false" />' +
      '<img class="compare-slider__before" src="' +
      escapeAttr(p.before) +
      '" alt="' +
      altB +
      '" width="1200" height="900" loading="lazy" decoding="async" draggable="false" />' +
      '<div class="compare-slider__rail" aria-hidden="true">' +
      '<span class="compare-slider__grip" aria-hidden="true"></span>' +
      "</div>" +
      '<div class="compare-slider__labels" aria-hidden="true">' +
      "<span>Before</span><span>After</span>" +
      "</div>" +
      '<label class="compare-slider__control">' +
      '<span class="visually-hidden">Slide to compare before and after</span>' +
      '<input type="range" class="compare-slider__range" min="0" max="100" value="50" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" />' +
      "</label>" +
      "</div>" +
      '<p class="compare-slider__hint">Slide to compare</p>' +
      "</div>" +
      "</div>";

    container.appendChild(article);
  });

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function escapeAttr(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;");
  }

  if (typeof window.initCompareSliders === "function") {
    window.initCompareSliders();
  }
})();
