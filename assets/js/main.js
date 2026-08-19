(function () {
  "use strict";
  document.body.classList.add("js");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- 3D boat scene (Three.js), with the 2D SVG as fallback ---------- */
  var boatRAF = null;
  (function boat3d() {
    if (typeof THREE === "undefined" || reduceMotion) return;
    var scene3 = document.getElementById("boat-scene");
    var canvas = document.getElementById("boat-canvas");
    if (!scene3 || !canvas) return;
    scene3.classList.add("three-on");

    var W = 340, H = 200;
    var renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H, false);
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(32, W / H, 0.1, 50);
    camera.position.set(0, 1.1, 9.5);
    camera.lookAt(0, 0, 0);

    scene.add(new THREE.AmbientLight(0xfff6e8, 0.75));
    var sun = new THREE.DirectionalLight(0xfff9f0, 0.85);
    sun.position.set(3, 6, 4);
    scene.add(sun);
    var fill = new THREE.DirectionalLight(0xcfe0e8, 0.3);
    fill.position.set(-4, 2, -2);
    scene.add(fill);

    function waveRow(color, y, z, r) {
      var g = new THREE.Group();
      var geo = new THREE.CylinderGeometry(r, r, 1.6, 26);
      var mat = new THREE.MeshStandardMaterial({ color: color, roughness: 0.85, metalness: 0 });
      for (var i = -6; i <= 6; i++) {
        var c = new THREE.Mesh(geo, mat);
        c.rotation.x = Math.PI / 2;
        c.position.set(i * r * 1.9, y, z);
        g.add(c);
      }
      var band = new THREE.Mesh(
        new THREE.BoxGeometry(14, 1.1, 1.6),
        mat
      );
      band.position.set(0, y - 0.62, z);
      g.add(band);
      scene.add(g);
      return g;
    }
    var backWave = waveRow(0xa4bcc5, -0.62, -0.85, 0.5);
    var frontWave = waveRow(0x7fa0ad, -0.95, 0.85, 0.56);

    var boat = new THREE.Group();
    var wood = new THREE.MeshStandardMaterial({ color: 0x966b44, roughness: 0.95 });
    var cream = new THREE.MeshStandardMaterial({ color: 0xf5edd9, roughness: 0.9, side: THREE.DoubleSide });

    var hull = new THREE.Mesh(new THREE.SphereGeometry(1, 28, 20), wood);
    hull.scale.set(1.55, 0.52, 0.72);
    boat.add(hull);
    var deck = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 0.07, 28), new THREE.MeshStandardMaterial({ color: 0xe8dcc0, roughness: 0.95 }));
    deck.scale.set(1.45, 1, 0.6);
    deck.position.y = 0.24;
    boat.add(deck);
    var mast = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 2.1, 10), new THREE.MeshStandardMaterial({ color: 0x6e5a43, roughness: 0.8 }));
    mast.position.set(0, 1.3, 0);
    boat.add(mast);

    var sailShape = new THREE.Shape();
    sailShape.moveTo(0.08, 0.55);
    sailShape.lineTo(0.08, 2.15);
    sailShape.quadraticCurveTo(0.85, 1.6, 1.28, 0.55);
    sailShape.lineTo(0.08, 0.55);
    var sail = new THREE.Mesh(new THREE.ShapeGeometry(sailShape), cream);
    sail.rotation.y = -0.35;
    boat.add(sail);

    var sail2 = new THREE.Mesh(new THREE.ShapeGeometry(sailShape), cream);
    sail2.scale.set(-0.62, 0.78, 1);
    sail2.position.set(-0.02, 0.12, 0.02);
    sail2.rotation.y = 0.35;
    boat.add(sail2);

    var flagShape = new THREE.Shape();
    flagShape.moveTo(0, 0);
    flagShape.lineTo(0, 0.28);
    flagShape.lineTo(0.42, 0.14);
    flagShape.lineTo(0, 0);
    var flag = new THREE.Mesh(
      new THREE.ShapeGeometry(flagShape),
      new THREE.MeshStandardMaterial({ color: 0xbf4126, roughness: 0.8, side: THREE.DoubleSide })
    );
    flag.position.set(0.02, 2.18, 0);
    flag.rotation.y = -0.25;
    boat.add(flag);

    boat.position.y = -0.05;
    scene.add(boat);

    var t0 = performance.now();
    function loop(now) {
      var t = (now - t0) / 1000;
      boat.position.y = -0.18 + Math.sin(t * 1.5) * 0.1;
      boat.rotation.z = Math.sin(t * 1.5 + 0.7) * 0.07;
      boat.rotation.x = Math.sin(t * 1.1) * 0.03;
      backWave.position.x = ((t * 0.28) % 0.95);
      frontWave.position.x = -((t * 0.42) % 1.064);
      renderer.render(scene, camera);
      boatRAF = requestAnimationFrame(loop);
    }
    boatRAF = requestAnimationFrame(loop);
  })();

  /* ---------- loading gate ---------- */
  (function runLoader() {
    var loader = document.getElementById("loader");
    if (!loader) return;
    document.body.classList.add("loading");
    var countEl = document.getElementById("loader-count");
    var fillEl = document.getElementById("loader-fill");
    var imgs = Array.prototype.slice.call(document.querySelectorAll(".polaroid img, .portrait img"));
    var total = imgs.length || 1;
    var loaded = 0;
    imgs.forEach(function (img) {
      if (img.complete) loaded++;
      else {
        img.addEventListener("load", function () { loaded++; });
        img.addEventListener("error", function () { loaded++; });
      }
    });
    var start = performance.now();
    var minTime = reduceMotion ? 300 : 2200;
    var maxTime = 4500;
    var shown = 0;
    function tick(now) {
      var t = now - start;
      var timeP = Math.min(t / minTime, 1);
      var target = Math.min(timeP, Math.max(loaded / total, t / maxTime)) * 100;
      if (target > shown) shown = Math.min(shown + 2.2, target);
      countEl.textContent = String(Math.round(shown)).padStart(3, "0");
      fillEl.style.width = shown + "%";
      if (shown >= 100) {
        loader.classList.add("done");
        document.body.classList.remove("loading");
        setTimeout(function () {
          loader.remove();
          if (boatRAF) cancelAnimationFrame(boatRAF);
        }, 600);
      } else {
        requestAnimationFrame(tick);
      }
    }
    requestAnimationFrame(tick);
  })();

  /* ---------- wheel: preload early, launch its entry only when in view ---------- */
  (function wheelDeferredMount() {
    if (location.protocol === "file:") return;
    var frame = document.getElementById("wheel-frame");
    if (!frame || !frame.dataset.src) return;
    setTimeout(function () {
      if (!frame.src) frame.src = frame.dataset.src;
    }, 2200);
    var wheelVisible = false;
    var starter = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          wheelVisible = e.isIntersecting;
        });
      },
      { threshold: 0.35 }
    );
    starter.observe(frame);
    var pings = 0;
    var pinger = setInterval(function () {
      pings++;
      if (wheelVisible && frame.src && frame.contentWindow) {
        try {
          frame.contentWindow.postMessage({ type: "viscose-start" }, "*");
        } catch (err) {}
      }
      if (pings > 150) clearInterval(pinger);
    }, 400);
  })();

  /* ---------- wheel iframe needs http; swap in a note under file:// ---------- */
  (function wheelFallback() {
    if (location.protocol !== "file:") return;
    var embed = document.querySelector(".wheel-embed");
    if (!embed) return;
    embed.innerHTML =
      '<div class="wheel-fallback"><img src="assets/img/wheel_preview.jpg" alt="Preview of the photo wheel carousel">' +
      '<p style="margin:0;color:#43453f;font-size:15px">The live wheel runs on the published site (or a local server) &mdash; browsers block its files when opened directly.<br>' +
      '<span class="mono" style="font-size:12px;color:#6e6753">quick preview: run &nbsp;<code>python3 -m http.server</code>&nbsp; in the site folder, then visit localhost:8000</span></p></div>';
  })();

  /* ---------- reveal on scroll ---------- */
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
  document.querySelectorAll(".reveal").forEach(function (el) { reveal.observe(el); });

  /* ---------- scrollspy nav ---------- */
  var navLinks = document.querySelectorAll(".nav a");
  var spy = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        navLinks.forEach(function (a) {
          a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id);
        });
      });
    },
    { rootMargin: "-30% 0px -60% 0px" }
  );
  document
    .querySelectorAll("main section[id], main footer[id]")
    .forEach(function (s) { spy.observe(s); });
})();
