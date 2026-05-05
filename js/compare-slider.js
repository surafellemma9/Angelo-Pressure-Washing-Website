/**
 * Before/after comparison sliders — touch- and pointer-friendly for mobile.
 * Call initCompareSliders() after gallery cards are in the DOM (see gallery-render.js).
 */
(function () {
  function setPosition(root, value) {
    var v = Math.max(0, Math.min(100, value));
    root.style.setProperty("--compare-p", v + "%");
    var range = root.querySelector(".compare-slider__range");
    if (range) {
      range.value = String(v);
      range.setAttribute("aria-valuenow", String(Math.round(v)));
    }
  }

  function initCompare(root) {
    if (root._compareInit) return;
    root._compareInit = true;

    var range = root.querySelector(".compare-slider__range");
    if (!range) return;

    setPosition(root, parseFloat(range.value) || 50);

    range.addEventListener("input", function () {
      setPosition(root, parseFloat(range.value) || 0);
    });

    range.addEventListener("change", function () {
      setPosition(root, parseFloat(range.value) || 0);
    });
  }

  window.initCompareSliders = function initCompareSliders() {
    document.querySelectorAll("[data-compare]").forEach(initCompare);
  };
})();
