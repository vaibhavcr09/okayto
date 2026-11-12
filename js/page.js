/* Sub-page helpers (loaded after chrome.js): plate markup, robust scroll reveal, nav colour over dark heroes, hidden toast. */
(function () {
  const st = document.createElement('style');
  st.textContent = '.toast:not(.show){opacity:0;visibility:hidden}.toast{transition:transform .6s var(--spring),opacity .3s}';
  document.head.append(st);
  window.plate = (img, cls = '') => `<div class="plate ${cls}"><div class="cast"></div><div class="wall"></div><div class="rim"></div><div class="food" style="background-image:url(${img})"></div></div>`;
  // reveal anything that has entered the viewport (works with fast scrolling + full-page captures too)
  const check = () => document.querySelectorAll('.reveal:not(.in)').forEach(el => { const r = el.getBoundingClientRect(); if (r.top < innerHeight * .96 && r.bottom > -innerHeight) el.classList.add('in'); });
  window.revealCheck = check;
  addEventListener('scroll', check, { passive: true }); addEventListener('resize', check); addEventListener('load', check); setTimeout(check, 60);
  // light nav while a dark hero ([data-dark]) is under it
  const nav = document.getElementById('nav');
  const navTone = () => { const h = document.querySelector('[data-dark]'); if (!nav || !h) return; const b = h.getBoundingClientRect(); nav.classList.toggle('light', b.bottom > 70 && b.top < 70); };
  window.navTone = navTone; addEventListener('scroll', navTone, { passive: true }); setTimeout(navTone, 30);
})();
