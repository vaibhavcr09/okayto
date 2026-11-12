/* Form helpers: validation, chip groups, file previews. Nothing is sent anywhere. */
window.F = {
  chips(el, items, { multi = true, color, initial = [] } = {}) {
    const sel = new Set(initial);
    items.forEach(it => { const b = document.createElement('button'); b.type = 'button'; b.className = 'chip' + (it.x ? ' x' : ''); b.textContent = it.label; b.dataset.v = it.v;
      if (it.c) b.style.setProperty('--c', it.c); b.setAttribute('aria-pressed', sel.has(it.v));
      b.onclick = () => { if (!multi) { sel.clear(); el.querySelectorAll('.chip').forEach(c => c.setAttribute('aria-pressed', false)); }
        sel.has(it.v) ? sel.delete(it.v) : sel.add(it.v); b.setAttribute('aria-pressed', sel.has(it.v)); el.dispatchEvent(new Event('change')); };
      el.append(b); });
    return sel;
  },
  file(drop) { const inp = drop.querySelector('input'), pv = drop.querySelector('.pv'), b = drop.querySelector('b');
    ['dragenter', 'dragover'].forEach(e => drop.addEventListener(e, () => drop.classList.add('over')));
    ['dragleave', 'drop'].forEach(e => drop.addEventListener(e, () => drop.classList.remove('over')));
    inp.addEventListener('change', () => { const f = inp.files[0]; if (!f) return; if (!/^image\//.test(f.type)) { F.err(drop.closest('.field'), 'Please choose a photo (JPG or PNG).'); inp.value = ''; return; }
      F.ok(drop.closest('.field')); const url = URL.createObjectURL(f); pv.style.backgroundImage = `url(${url})`; pv.textContent = ''; b.textContent = f.name; });
    return inp; },
  err(field, msg) { field.classList.add('bad'); const e = field.querySelector('.err'); if (e) e.textContent = msg; },
  ok(field) { field.classList.remove('bad'); const e = field.querySelector('.err'); if (e) e.textContent = ''; },
  check(field, cond, msg) { if (cond) { F.ok(field); return true; } F.err(field, msg); return false; },
  firstBad(root) { const b = root.querySelector('.field.bad'); if (b) { b.scrollIntoView({ behavior: 'smooth', block: 'center' }); const i = b.querySelector('input,select,textarea'); i && i.focus({ preventScroll: true }); } return !!b; },
};
