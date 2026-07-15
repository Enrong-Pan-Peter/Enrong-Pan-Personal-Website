(function () {
  document.body.classList.add("js");
  var sections = document.querySelectorAll("main section[id], main footer[id]");
  var navLinks = document.querySelectorAll(".nav a");

  var reveal = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          reveal.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08 }
  );
  document.querySelectorAll(".reveal").forEach(function (el) {
    reveal.observe(el);
  });

  var spy = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        navLinks.forEach(function (a) {
          a.classList.toggle(
            "active",
            a.getAttribute("href") === "#" + e.target.id
          );
        });
      });
    },
    { rootMargin: "-30% 0px -60% 0px" }
  );
  sections.forEach(function (s) {
    spy.observe(s);
  });
})();
