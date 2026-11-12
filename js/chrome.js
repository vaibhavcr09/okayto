/* Shared nav, mobile menu, footer, toast and scroll-reveal for every page. */
(function () {
  const here = location.pathname.split('/').pop() || 'index.html';
  const isHome = here === 'index.html' || here === '';
  const H = isHome ? '' : 'index.html';
  const nav = document.createElement('nav'); nav.className = 'nav'; nav.id = 'nav';
  nav.innerHTML = `<a class="logo" href="index.html">okayto</a>
    <div class="pills">
      <a class="pill hide-m${here === 'index.html' && false ? ' on' : ''}" href="${H}#finder" data-go="finder">Find a table</a>
      <a class="pill hide-m${here === 'map.html' ? ' on' : ''}" href="map.html">Map</a>
      <a class="pill solid" href="${H}#finder" data-go="finder">Pack my dabba</a>
      <button class="pill menu-btn" type="button" aria-expanded="false">Menu</button>
    </div>`;
  document.body.prepend(nav);
  const mm = document.createElement('div'); mm.className = 'mmenu'; mm.setAttribute('aria-hidden', 'true');
  mm.innerHTML = `<button class="pill close" type="button" style="color:var(--cream)">Close</button>
    <a href="${H}#finder">Find a table</a><a href="map.html">Map</a>
    ${OK.DIETS.map(d => `<a href="diet.html?d=${d.k}">${d.name}</a>`).join('')}
    <a href="add.html">Add a kitchen</a><a href="about.html">About</a>`;
  document.body.append(mm);
  const mb = nav.querySelector('.menu-btn');
  mb.onclick = () => { mm.classList.add('open'); mb.setAttribute('aria-expanded', 'true'); };
  mm.querySelector('.close').onclick = () => { mm.classList.remove('open'); mb.setAttribute('aria-expanded', 'false'); };
  mm.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mm.classList.remove('open')));

  // footer (skip if the page supplies its own)
  if (!document.querySelector('footer')) {
    const f = document.createElement('footer'); f.className = 'foot';
    f.innerHTML = `<div class="top"><div class="say display">Eat out by <em>your</em> rules.</div>
      <div class="links">${OK.DIETS.map((d, i) => `<a href="diet.html?d=${d.k}">${d.name}</a><a href="${['add.html', 'verify.html', 'report.html', 'about.html'][i]}">${['Add a kitchen', 'Verify a certificate', 'Report cross-contact', 'About'][i]}</a>`).join('')}</div></div>
      <div class="big display">okayto<img src="frames/f_0001.webp" alt=""></div>`;
    document.body.append(f);
  }
  // toast
  const t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); document.body.append(t);
  let tt; window.toast = msg => { t.textContent = msg; t.classList.add('show'); clearTimeout(tt); tt = setTimeout(() => t.classList.remove('show'), 2600); };
  // solid nav after scrolling on sub pages
  if (!isHome) addEventListener('scroll', () => nav.classList.toggle('solid', scrollY > 40), { passive: true });
  // reveal on scroll
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
  const watch = () => document.querySelectorAll('.reveal:not(.in)').forEach(el => io.observe(el));
  window.watchReveals = watch; addEventListener('DOMContentLoaded', watch); setTimeout(watch, 50);
})();
