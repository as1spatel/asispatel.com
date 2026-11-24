// Fade sections in as they scroll into view.
// Elements marked data-reveal start hidden (see styles.css, section 7)
// only once this script has added the "js" class, so the page still
// shows everything if JavaScript is off.
(function () {
  var root = document.documentElement;
  root.classList.add("js");

  // Keep the copyright year current
  var year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  // Overscroll colour: orange behind the footer, white at the top
  if (document.querySelector(".site-footer")) {
    var ticking = false;
    var updateEdge = function () {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      root.classList.toggle("is-near-footer", window.scrollY > max / 2);
      ticking = false;
    };
    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; requestAnimationFrame(updateEdge); }
    }, { passive: true });
    window.addEventListener("resize", updateEdge);
    updateEdge();
  }

  var items = document.querySelectorAll("[data-reveal]");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduce || !("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.05 });

  items.forEach(function (el) { observer.observe(el); });
})();
