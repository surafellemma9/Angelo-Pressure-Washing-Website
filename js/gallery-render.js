(function () {
  var container = document.getElementById("gallery-root");
  var projects = window.GALLERY_PROJECTS;
  if (!container || !projects || !projects.length) return;

  projects.forEach(function (p) {
    var article = document.createElement("article");
    article.className = "project-card";
    article.setAttribute("data-category", p.categoryFilter);

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
      '<div class="before-after">' +
      "<figure>" +
      '<img src="' +
      escapeAttr(p.before) +
      '" alt="' +
      escapeAttr(p.title + " — before") +
      '" width="800" height="600" loading="lazy" />' +
      "<figcaption>Before</figcaption>" +
      "</figure>" +
      "<figure>" +
      '<img src="' +
      escapeAttr(p.after) +
      '" alt="' +
      escapeAttr(p.title + " — after") +
      '" width="800" height="600" loading="lazy" />' +
      "<figcaption>After</figcaption>" +
      "</figure>" +
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
})();
