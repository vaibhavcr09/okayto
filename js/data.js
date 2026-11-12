/* Okayto shared data (example data — fictional kitchens in Bengaluru). Loaded by every page. */
window.OK = (function () {
  const DIETS = [
    { k: 'gf', name: 'Gluten free', short: 'GF', bg: '#F2B21B', ink: '#1C1206', tag: '#B07C00', fill: 'img/fill_gf.jpg',
      line: 'No wheat, no maida, no “just a little atta in the batter”. We ask about the fryer too.',
      n: 38, nl: 'kitchens with a dedicated gluten-free fryer',
      checks: ['Wheat, maida, rava, barley and rye in every component', 'Soy sauce swapped for tamari', 'Shared fryer or shared tawa', 'Thickeners in gravies and soups'] },
    { k: 'vegan', name: 'Vegan', short: 'VG', bg: '#2F7A3B', ink: '#F7EEDC', tag: '#2F7A3B', fill: 'img/fill_vegan.jpg',
      line: 'No ghee in the tadka, no paneer in disguise, no honey in the dressing. Checked dish by dish.',
      n: 61, nl: 'fully plant-based kitchens in the city',
      checks: ['Ghee or butter in the tadka', 'Dairy in gravies, curd marinades, cream finishes', 'Honey, egg wash, fish sauce', 'Bone-broth bases'] },
    { k: 'halal', name: 'Halal', short: 'HL', bg: '#0F5C55', ink: '#F4E6C4', tag: '#0F5C55', fill: 'img/fill_halal.jpg',
      line: 'Certificates photographed, dated and verified by three diners. Shared tandoors flagged.',
      n: 94, nl: 'certificates verified in the last 30 days',
      checks: ['A current certificate, photographed and dated', 'Meat supplier named on the certificate', 'Alcohol in sauces or marinades', 'Shared tandoor or grill with non-halal meat'] },
    { k: 'keto', name: 'Keto', short: 'KT', bg: '#D8401F', ink: '#FFF1E0', tag: '#D8401F', fill: 'img/fill_keto.jpg',
      line: 'Net carbs on every plate, and the swap that keeps you under twenty: lettuce for the bun, cauli for the rice.',
      n: 6, nfrom: 62, nl: 'grams of net carbs in the paneer tikka bowl',
      checks: ['Net carbs per plate (carbs minus fibre)', 'Sugar in marinades and glazes', 'Hidden flour and cornflour', 'A swap that brings it under 20 g'] },
  ];
  // verdict per diet for each dish: 'full' | 'partial' | 'no'  (+ note)
  const R = [
    { id: 'little-millet', n: 'Little Millet', area: 'Indiranagar', km: 0.6, open: 'Open till 9 pm', d: ['gf', 'vegan'], al: ['Nuts'], carbs: 34,
      img: 'img/fill_gf.jpg', note: 'Dedicated gluten-free bakery', map: [0.62, 0.38], price: '₹₹', phone: '+91 80 4000 1201',
      trust: [['Gluten', 'Separate GF kitchen, own fryer', 'verified 6 days ago'], ['Cross-contact', 'No wheat on the premises', 'reported by 12 diners']],
      dishes: [
        { n: 'Millet dosa, coconut chutney', carbs: 31, v: { gf: ['full'], vegan: ['full'], halal: ['full', 'Plant-only kitchen'], keto: ['no', '31 g net carbs'] } },
        { n: 'Ragi banana bread', carbs: 38, v: { gf: ['full'], vegan: ['partial', 'Ask for no honey glaze'], halal: ['full'], keto: ['no', '38 g net carbs'] } },
        { n: 'Lemon rice bowl', carbs: 44, v: { gf: ['full'], vegan: ['full'], halal: ['full'], keto: ['no', '44 g net carbs'] } } ] },
    { id: 'green-theory', n: 'Green Theory', area: 'Koramangala', km: 0.9, open: 'Open till 10 pm', d: ['vegan', 'gf'], al: ['Sesame'], carbs: 38,
      img: 'img/fill_vegan.jpg', note: 'Tahini in most bowls', map: [0.44, 0.58], price: '₹₹', phone: '+91 80 4000 1202',
      trust: [['Vegan', 'Fully plant-based since 2019', 'verified 9 days ago'], ['Sesame', 'Tahini in 7 of 12 bowls', 'listed on menu']],
      dishes: [
        { n: 'Chana masala bowl', carbs: 36, v: { gf: ['full'], vegan: ['full'], halal: ['full'], keto: ['no', '36 g net carbs'] } },
        { n: 'Tofu tikka, greens', carbs: 9, v: { gf: ['partial', 'Ask for tamari'], vegan: ['full'], halal: ['full'], keto: ['full', '9 g net carbs'] } },
        { n: 'Jackfruit biryani', carbs: 52, v: { gf: ['full'], vegan: ['full'], halal: ['full'], keto: ['no', '52 g net carbs'] } } ] },
    { id: 'ember-halal-grill', n: 'Ember Halal Grill', area: 'Frazer Town', km: 1.2, open: 'Open till 11:30 pm', d: ['halal', 'gf', 'keto'], al: ['Sesame', 'Dairy'], carbs: 5,
      img: 'img/fill_halal.jpg', note: 'Certificate verified 3 days ago', warn: 'Shared fryer', map: [0.56, 0.22], price: '₹₹₹', phone: '+91 80 4000 1203',
      trust: [['Halal', 'Certificate HC-2291, zabiha beef and chicken', 'verified 3 days ago'], ['Fryer', 'Fries share oil with breaded items', 'reported by 4 diners']],
      dishes: [
        { n: 'Smash burger', carbs: 41, v: { gf: ['partial', 'Swap the bun for a lettuce wrap'], vegan: ['no', 'Beef, cheddar'], halal: ['full', 'Zabiha beef'], keto: ['partial', '5 g net carbs bunless'] } },
        { n: 'Lamb seekh kebab', carbs: 3, v: { gf: ['full'], vegan: ['no', 'Lamb'], halal: ['full'], keto: ['full', '3 g net carbs'] } },
        { n: 'Chicken shawarma plate', carbs: 28, v: { gf: ['partial', 'Skip the pita'], vegan: ['no', 'Chicken'], halal: ['full'], keto: ['partial', '8 g without rice'] } } ] },
    { id: 'nori-lab', n: 'Nori Lab', area: 'HSR Layout', km: 1.7, open: 'Open till 10:30 pm', d: ['gf'], al: ['Soy'], carbs: 22,
      img: 'img/fill_gf.jpg', note: 'Tamari on request', map: [0.3, 0.72], price: '₹₹₹', phone: '+91 80 4000 1204',
      trust: [['Gluten', 'Tamari kept separately', 'verified 14 days ago']],
      dishes: [
        { n: 'Salmon avocado roll', carbs: 24, v: { gf: ['partial', 'Ask for tamari, no tempura flakes'], vegan: ['no', 'Salmon'], halal: ['partial', 'Mirin contains alcohol'], keto: ['no', '24 g net carbs'] } },
        { n: 'Sashimi plate', carbs: 2, v: { gf: ['full'], vegan: ['no', 'Fish'], halal: ['full', 'Fish is halal'], keto: ['full', '2 g net carbs'] } } ] },
    { id: 'fat-kettle', n: 'Fat Kettle', area: 'Jayanagar', km: 2.0, open: 'Open till 11 pm', d: ['keto', 'gf'], al: ['Dairy', 'Egg'], carbs: 4,
      img: 'img/fill_keto.jpg', note: 'Macros printed on the menu', map: [0.22, 0.42], price: '₹₹', phone: '+91 80 4000 1205',
      trust: [['Keto', 'Macros lab-tested quarterly', 'verified 20 days ago']],
      dishes: [
        { n: 'Paneer tikka bowl', carbs: 6, v: { gf: ['full'], vegan: ['no', 'Paneer'], halal: ['full'], keto: ['full', '6 g net carbs'] } },
        { n: 'Cauli rice biryani', carbs: 9, v: { gf: ['full'], vegan: ['partial', 'Ask for no ghee'], halal: ['partial', 'Ask for the halal chicken'], keto: ['full', '9 g net carbs'] } },
        { n: 'Avocado salmon plate', carbs: 4, v: { gf: ['full'], vegan: ['no', 'Salmon'], halal: ['full'], keto: ['full', '4 g net carbs'] } } ] },
    { id: 'saffron-and-salt', n: 'Saffron & Salt', area: 'Shivajinagar', km: 3.1, open: 'Open till midnight', d: ['halal', 'gf'], al: ['Dairy', 'Nuts'], carbs: 62,
      img: 'img/fill_halal.jpg', note: 'Certificate verified 11 days ago', map: [0.78, 0.6], price: '₹₹', phone: '+91 80 4000 1206',
      trust: [['Halal', 'Certificate HC-1874, chicken and mutton', 'verified 11 days ago'], ['Gluten', 'Biryani has no wheat thickener', 'verified 11 days ago']],
      dishes: [
        { n: 'Hyderabadi chicken biryani', carbs: 62, v: { gf: ['full'], vegan: ['no', 'Chicken, ghee'], halal: ['full'], keto: ['no', '62 g net carbs'] } },
        { n: 'Mutton paya', carbs: 7, v: { gf: ['partial', 'Ask: no wheat in the gravy today?'], vegan: ['no', 'Mutton'], halal: ['full'], keto: ['full', '7 g net carbs'] } } ] },
  ];
  const ALLERGENS = ['Nuts', 'Dairy', 'Sesame', 'Egg', 'Soy'];
  const fitsDiet = (r, k) => k === 'keto' ? r.carbs <= 20 || r.d.includes('keto') : r.d.includes(k);
  const byId = id => R.find(r => r.id === id);
  const diet = k => DIETS.find(d => d.k === k);
  const q = k => new URLSearchParams(location.search).get(k);
  // saved kitchens (per browser)
  const saved = { get() { try { return JSON.parse(localStorage.getItem('okayto.saved') || '[]') } catch (e) { return [] } },
    has(id) { return this.get().includes(id) }, toggle(id) { const s = this.get(); const i = s.indexOf(id); i < 0 ? s.push(id) : s.splice(i, 1); try { localStorage.setItem('okayto.saved', JSON.stringify(s)) } catch (e) {} return i < 0 } };
  return { DIETS, R, ALLERGENS, fitsDiet, byId, diet, q, saved };
})();
