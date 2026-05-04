(function () {
  var root = document.getElementById("reviews-root");
  var items = window.REVIEWS;
  if (!root || !items || !items.length) return;

  items.forEach(function (r) {
    var article = document.createElement("article");
    article.className = "review-card";
    article.innerHTML =
      '<div class="review-stars" aria-hidden="true">★★★★★</div>' +
      "<blockquote>" +
      escapeHtml(r.quote) +
      "</blockquote>" +
      '<p class="review-meta">' +
      escapeHtml(r.author) +
      (r.location ? " · " + escapeHtml(r.location) : "") +
      "</p>";
    root.appendChild(article);
  });

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }
})();
