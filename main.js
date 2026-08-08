import './style.css';

/* ══════════════════════════════════════════
   TRANSLATIONS (EN / FR)
══════════════════════════════════════════ */
const i18n = {
  en: {
    'nav.home':'Home','nav.menu':'Menu','nav.about':'About','nav.gallery':'Gallery',
    'nav.contact':'Contact','nav.reservation':'Reserve a Table',
    'hero.tag':'Established 2014 · High River, Alberta',
    'hero.tagline':'Where every plate tells a story of\nCanadian heritage & culinary passion',
    'hero.menuBtn':'Explore Menu','hero.reserveBtn':'Book a Table',
    'stats.years':'Years of Excellence','stats.dishes':'Signature Dishes',
    'stats.days':'Days a Week','stats.rating':'Guest Rating',
    'feat.fresh':'Locally Sourced','feat.fresh.sub':'Fresh Canadian ingredients',
    'feat.award':'Award-Winning Chef','feat.award.sub':'Hyatt-trained, world-class',
    'feat.events':'Private Events','feat.events.sub':'Birthdays, parties, ceremonies',
    'feat.location':'30km from Calgary','feat.location.sub':'110 1 St SW, High River, AB',
    'menu.tag':'Our Culinary Delights','menu.title':'Explore Our Menu',
    'menu.subtitle':'Every dish tells a story of passion and fresh ingredients',
    'menu.all':'All','menu.breakfast':'Breakfast','menu.starters':'Starters',
    'menu.mains':'Mains','menu.burgers':'Burgers & Wraps','menu.pasta':'Pasta & Salads',
    'about.tag':'Our Story','about.title':'From India to High River, Alberta',
    'about.p1':'Established in 2014, Southfork Restaurant is a beloved local treasure in High River, Alberta — just 30km from Calgary. Founded by Chef Rajesh Balaji, whose culinary journey began at the prestigious Hyatt Hotel in India, every dish reflects decades of international expertise and a deep love for Canadian cuisine.',
    'about.p2':'Whether you\'re craving a classic Alberta beef steak, our famous Butter Chicken Eggs Benedict, a hearty poutine, or a fresh Caesar salad — we celebrate Canada\'s finest flavours with a modern twist. Family-friendly, welcoming to all, and open 7 days a week.',
    'about.cta':'Reserve Your Table',
    'tl.1.title':'The Hyatt, India','tl.1.desc':'Chef Rajesh Balaji begins his fine dining career mastering Western cuisine at the iconic Hyatt Hotel.',
    'tl.2.title':'Calgary, Alberta','tl.2.desc':'The journey to Canada begins at Mat\'s Diner in Calgary — learning Canadian tastes and community values.',
    'tl.3.title':'Southfork Opens','tl.3.desc':'Southfork Restaurant opens in High River — quickly becoming the #1 dining destination in the area.',
    'gallery.tag':'Visual Feast','gallery.title':'A Glimpse of Southfork',
    'testi.tag':'What Guests Say','testi.title':'Guest Reviews',
    'testi.1':'"The butter chicken eggs benedict is absolutely divine. We drove from Calgary just for breakfast and it was worth every kilometre!"',
    'testi.2':'"Best steak I\'ve had in Alberta. The atmosphere is warm, staff incredibly friendly. Southfork has become our family\'s special occasion restaurant."',
    'testi.3':'"We hosted our anniversary dinner here. Chef Rajesh personally came out to greet us. The food, service, and ambience were absolutely world-class."',
    'res.tag':'Reservations','res.title':'Book Your Table','res.subtitle':'Reserve your spot and experience the best of High River dining',
    'res.info.title':'Visit Us','hours.text':'Mon – Sun: 8:00 AM – 9:00 PM',
    'form.heading':'Your Details',
    'form.name':'Full Name *','form.email':'Email Address *','form.phone':'Phone Number *',
    'form.party':'Party Size *','form.date':'Date *','form.time':'Preferred Time *',
    'form.special':'Special Requests',
    'form.preorder':'Pre-Informed Menu',
    'form.disclaimer':'★ This pre-informed menu helps our kitchen prepare in advance. All food is freshly cooked only upon your arrival. Prices shown are approximate and may vary slightly.',
    'form.submit':'Confirm Reservation',
    'form.whatsapp':'Send Pre-Informed Menu via WhatsApp',
    'form.savenotice':'Your name, email & phone are saved in your browser for your next visit.',
    'form.namePlaceholder':'Your full name',
    'form.emailPlaceholder':'you@example.com',
    'form.phonePlaceholder':'+1 403-000-0000',
    'form.select':'Select...',
    'form.selectTime':'Select time...',
    'form.specialPlaceholder':'Dietary needs, celebrations, allergies...',
    'contact.tag':'Find Us','contact.title':'Contact & Location',
    'contact.address.title':'Address','contact.phone.title':'Phone',
    'contact.hours.title':'Hours','contact.hours.text':'Monday – Sunday\n8:00 AM – 9:00 PM',
    'contact.email.title':'Email',
    'news.title':'Stay in the Loop','news.desc':'Get the latest menu updates, holiday hours & special events from Southfork.',
    'news.btn':'Subscribe',
    'footer.tagline':'Bringing the best of Canadian cuisine to your table since 2014.',
    'footer.links':'Quick Links','footer.hours':'Opening Hours','footer.contact':'Contact Us',
    'footer.rights':'All Rights Reserved.','footer.privacy':'Privacy Policy','footer.terms':'Terms of Use',
    'footer.designedBy':'Designed and maintained by',
    'day.mon':'Monday','day.tue':'Tuesday','day.wed':'Wednesday','day.thu':'Thursday',
    'day.fri':'Friday','day.sat':'Saturday','day.sun':'Sunday',
    'cart.title':'Pre-Informed Menu','cart.empty':'Your list is empty.\nAdd items from the menu!',
    'cart.total':'Estimated Total','cart.checkout':'Book & Inform',
    'cart.disclaimer':'★ This pre-informed menu is shared with the restaurant to help prepare in advance. All food is freshly cooked only after your arrival. Prices are indicative and may vary.',
  },
  fr: {
    'nav.home':'Accueil','nav.menu':'Menu','nav.about':'À Propos','nav.gallery':'Galerie',
    'nav.contact':'Contact','nav.reservation':'Réserver une Table',
    'hero.tag':'Établi en 2014 · High River, Alberta',
    'hero.tagline':'Où chaque assiette raconte une histoire de\npatrimoine canadien et de passion culinaire',
    'hero.menuBtn':'Explorer le Menu','hero.reserveBtn':'Réserver une Table',
    'stats.years':'Ans d\'Excellence','stats.dishes':'Plats Signature',
    'stats.days':'Jours par Semaine','stats.rating':'Note des Clients',
    'feat.fresh':'Produits Locaux','feat.fresh.sub':'Ingrédients canadiens frais',
    'feat.award':'Chef Primé','feat.award.sub':'Formé au Hyatt, classe mondiale',
    'feat.events':'Événements Privés','feat.events.sub':'Anniversaires, fêtes, cérémonies',
    'feat.location':'30km de Calgary','feat.location.sub':'110 1 St SO, High River, AB',
    'menu.tag':'Nos Délices Culinaires','menu.title':'Explorez Notre Menu',
    'menu.subtitle':'Chaque plat raconte une histoire de passion et d\'ingrédients frais',
    'menu.all':'Tout','menu.breakfast':'Petit-Déjeuner','menu.starters':'Entrées',
    'menu.mains':'Plats Principaux','menu.burgers':'Burgers et Wraps','menu.pasta':'Pâtes et Salades',
    'about.tag':'Notre Histoire','about.title':'De l\'Inde à High River, Alberta',
    'about.p1':'Établi en 2014, le Restaurant Southfork est un trésor local bien-aimé à High River, Alberta — à seulement 30 km de Calgary. Fondé par le Chef Rajesh Balaji, dont le parcours culinaire a commencé au prestigieux Hyatt Hotel en Inde, chaque plat reflète des décennies d\'expertise internationale.',
    'about.p2':'Que vous ayez envie d\'un bifteck d\'Alberta classique, de notre célèbre Eggs Benedict au Beurre de Poulet, d\'une poutine copieuse ou d\'une salade César fraîche — nous célébrons les meilleures saveurs du Canada avec une touche moderne.',
    'about.cta':'Réserver Votre Table',
    'tl.1.title':'Le Hyatt, Inde','tl.1.desc':'Le Chef Rajesh Balaji commence sa carrière en gastronomie au célèbre Hyatt Hotel.',
    'tl.2.title':'Calgary, Alberta','tl.2.desc':'Le voyage au Canada commence au Mat\'s Diner à Calgary.',
    'tl.3.title':'Southfork Ouvre','tl.3.desc':'Le Restaurant Southfork ouvre à High River — devenant rapidement la première destination gastronomique.',
    'gallery.tag':'Festin Visuel','gallery.title':'Un Aperçu de Southfork',
    'testi.tag':'Ce que Disent nos Clients','testi.title':'Avis des Clients',
    'testi.1':'"Les Eggs Benedict au beurre de poulet sont absolument divins. Nous avons conduit depuis Calgary juste pour le petit-déjeuner et ça valait chaque kilomètre !"',
    'testi.2':'"Meilleur steak que j\'ai eu en Alberta. L\'atmosphère est chaleureuse. Southfork est devenu notre restaurant pour les occasions spéciales."',
    'testi.3':'"Nous avons organisé notre dîner d\'anniversaire ici. Le Chef Rajesh est venu personnellement nous saluer. Absolument de classe mondiale."',
    'res.tag':'Réservations','res.title':'Réservez Votre Table','res.subtitle':'Réservez votre place et vivez la meilleure expérience culinaire de High River',
    'res.info.title':'Visitez-Nous','hours.text':'Lun – Dim : 8h00 – 21h00',
    'form.heading':'Vos Coordonnées',
    'form.name':'Nom Complet *','form.email':'Adresse E-mail *','form.phone':'Numéro de Téléphone *',
    'form.party':'Nombre de Personnes *','form.date':'Date *','form.time':'Heure Préférée *',
    'form.special':'Demandes Spéciales',
    'form.preorder':'Menu Pré-Informé',
    'form.disclaimer':'★ Ce menu pré-informé aide notre cuisine à se préparer à l\'avance. Toute la nourriture est cuite fraîchement uniquement à votre arrivée. Les prix sont indicatifs et peuvent légèrement varier.',
    'form.submit':'Confirmer la Réservation',
    'form.whatsapp':'Envoyer le Menu Pré-Informé via WhatsApp',
    'form.savenotice':'Votre nom, e-mail et téléphone sont enregistrés dans votre navigateur pour votre prochaine visite.',
    'form.namePlaceholder':'Votre nom complet',
    'form.emailPlaceholder':'vous@exemple.com',
    'form.phonePlaceholder':'+1 403-000-0000',
    'form.select':'Sélectionner...',
    'form.selectTime':'Sélectionner l\'heure...',
    'form.specialPlaceholder':'Régime alimentaire, allergies, célébrations...',
    'contact.tag':'Nous Trouver','contact.title':'Contact et Localisation',
    'contact.address.title':'Adresse','contact.phone.title':'Téléphone',
    'contact.hours.title':'Horaires','contact.hours.text':'Lundi – Dimanche\n8h00 – 21h00',
    'contact.email.title':'Email',
    'news.title':'Restez Informé','news.desc':'Recevez les dernières mises à jour du menu et événements spéciaux de Southfork.',
    'news.btn':'S\'abonner',
    'footer.tagline':'Apporter le meilleur de la cuisine canadienne à votre table depuis 2014.',
    'footer.links':'Liens Rapides','footer.hours':'Horaires d\'Ouverture','footer.contact':'Contactez-Nous',
    'footer.rights':'Tous Droits Réservés.','footer.privacy':'Politique de Confidentialité','footer.terms':'Conditions d\'Utilisation',
    'footer.designedBy':'Conçu et maintenu par',
    'day.mon':'Lundi','day.tue':'Mardi','day.wed':'Mercredi','day.thu':'Jeudi',
    'day.fri':'Vendredi','day.sat':'Samedi','day.sun':'Dimanche',
    'cart.title':'Menu Pré-Informé','cart.empty':'Votre liste est vide.\nAjoutez des articles du menu !',
    'cart.total':'Total Estimé','cart.checkout':'Réserver et Informer',
    'cart.disclaimer':'★ Ce menu pré-informé est partagé avec le restaurant pour aider à la préparation. Toute la nourriture est cuite fraîchement à votre arrivée. Les prix sont indicatifs.',
  }
};

let lang = 'en';

function t(key) { return i18n[lang][key] || i18n['en'][key] || key; }

function applyLang(l) {
  lang = l;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = i18n[l][key];
    if (val === undefined) return;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else {
      el.textContent = val;
    }
  });
  document.querySelectorAll('.lang-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.lang === l)
  );
  document.documentElement.lang = l;
  // Re-render menu in new language
  renderMenu(activeCategory);
  renderCart();
  updateCartSummaryInForm();
}

document.querySelectorAll('.lang-btn').forEach(b =>
  b.addEventListener('click', () => applyLang(b.dataset.lang))
);



/* ══════════════════════════════════════════
   MENU DATA
══════════════════════════════════════════ */
const menuItems = [
  // BREAKFAST
  { id:1,  cat:'breakfast', emoji:'🍳', price:24, name:'Butter Chicken Eggs Benedict',      name_fr:'Œufs Bénédicte au Beurre de Poulet',         desc:'Rich & creamy chicken in Indian-spiced tomato gravy, with pitta bread & plain rice.',                                                            desc_fr:'Poulet crémeux en sauce tomate épicée, avec pain pitta et riz blanc.' },
  { id:2,  cat:'breakfast', emoji:'🥬', price:19, name:'Harvest Green Eggs Benedict',        name_fr:'Œufs Bénédicte Harvest Green',               desc:'Fresh greens, hollandaise, 2 poached eggs on English muffin, with herbed hash browns.',                                                          desc_fr:'Légumes frais, hollandaise, 2 œufs pochés sur muffin, hash browns.' },
  { id:3,  cat:'breakfast', emoji:'🥑', price:18, name:'Smashed Avocado Toast',              name_fr:'Toast à l\'Avocat Écrasé',                    desc:'2 pcs multigrain toast with avocado, sunny-side egg, arugula, feta, balsamic drizzle, herbed hash browns.',                                      desc_fr:'Pain multigrain grillé, avocat, œuf, roquette, feta émiettée, balsamique.' },
  { id:4,  cat:'breakfast', emoji:'🍄', price:17, name:'Wild Mushroom Eggs Benedict',        name_fr:'Bénédicte aux Champignons Sauvages',          desc:'English muffin with sautéed wild mushrooms, 2 poached eggs, house hollandaise & herbed hash browns.',                                           desc_fr:'Muffin anglais, champignons sauvages sautés, 2 œufs pochés, hollandaise maison.' },
  // STARTERS
  { id:5,  cat:'starters',  emoji:'🫓', price:16, name:'Nachos',                             name_fr:'Nachos',                                      desc:'Tri-colour tortilla chips with onion, tomato, jalapeños, olives, peppers & cheese; served with salsa & sour cream.',                              desc_fr:'Chips tortilla tricolores, oignons, tomates, jalapeños, fromage, salsa & crème sure.' },
  { id:6,  cat:'starters',  emoji:'🐟', price:19, name:'Fish and Chips',                     name_fr:'Fish and Chips',                              desc:'House fresh-battered fried fish with tartar sauce, coleslaw and fries.',                                                                          desc_fr:'Poisson frais pané maison, sauce tartare, coleslaw et frites.' },
  { id:7,  cat:'starters',  emoji:'🦑', price:17, name:'Calamari',                           name_fr:'Calamars',                                    desc:'Buttermilk spiced baby squid, flour tossed & fried, served with tzatziki sauce.',                                                                 desc_fr:'Petits calmars au babeurre et épices, servis avec sauce tzatziki.' },
  { id:8,  cat:'starters',  emoji:'🍗', price:16, name:'Crispy Chicken Tenders',             name_fr:'Filets de Poulet Croustillants',              desc:'Crispy fried chicken tenders with choice of dipping sauce & fries.',                                                                             desc_fr:'Filets de poulet croustillants, trempette au choix et frites.' },
  { id:9,  cat:'starters',  emoji:'🥒', price:12, name:'Fried Pickles',                      name_fr:'Cornichons Frits',                            desc:'Crumb-fried pickles served with dipping sauce.',                                                                                                  desc_fr:'Cornichons panés frits avec sauce trempette.' },
  { id:10, cat:'starters',  emoji:'🥔', price:12, name:'Potato Skins',                       name_fr:'Peaux de Pomme de Terre',                    desc:'Potato skin topped with bacon bits, shredded cheese & chives; served with sour cream.',                                                          desc_fr:'Peaux de pommes de terre, bacon, fromage râpé, ciboulette, crème sure.' },
  { id:11, cat:'starters',  emoji:'🧀', price:12, name:'Mozzarella Sticks',                  name_fr:'Bâtonnets de Mozzarella',                    desc:'Crumb-fried mozzarella sticks served with marinara sauce.',                                                                                       desc_fr:'Bâtonnets de mozzarella panés frits avec sauce marinara.' },
  // MAINS
  { id:12, cat:'mains',     emoji:'🍝', price:18, name:'Baked Lasagna',                      name_fr:'Lasagne au Four',                            desc:'Fresh pasta sheets with house meat sauce, baked with cheese, served with pitta bread.',                                                          desc_fr:'Pâtes fraîches, sauce à la viande maison, gratinées, avec pain pitta.' },
  { id:13, cat:'mains',     emoji:'🐷', price:25, name:'Pulled Pork Dinner',                 name_fr:'Dîner de Porc Effiloché',                    desc:'Slow braised pork loin with special BBQ sauce, served with choice of side.',                                                                      desc_fr:'Longe de porc braisée lentement, sauce BBQ, accompagnement au choix.' },
  { id:14, cat:'mains',     emoji:'🐠', price:27, name:'Blackened Salmon',                   name_fr:'Saumon Noirci',                               desc:'Blackened 8oz salmon topped with house hollandaise & your choice of side.',                                                                       desc_fr:'Saumon 8oz noirci, hollandaise maison et accompagnement au choix.' },
  { id:15, cat:'mains',     emoji:'🍤', price:36, name:'Steak and Shrimp',                   name_fr:'Steak et Crevettes',                          desc:'8oz New York steak with garlic shrimp (8pcs), garlic mushrooms & choice of side.',                                                               desc_fr:'Steak New York 8oz, crevettes à l\'ail (8 pcs), champignons, accompagnement.' },
  { id:16, cat:'mains',     emoji:'🍖', price:24, name:'BBQ Baby Back Ribs',                 name_fr:'Côtes Levées BBQ',                            desc:'House-broiled baby back ribs with BBQ sauce, served with choice of side.',                                                                        desc_fr:'Côtes levées rôties maison, sauce BBQ, accompagnement au choix.' },
  { id:17, cat:'mains',     emoji:'🥩', price:34, name:'Alberta Beef Steak',                 name_fr:'Bifteck d\'Alberta',                          desc:'Premium AAA Alberta beef, char-grilled to perfection, with choice of side & classic sauce.',                                                    desc_fr:'Bœuf AAA d\'Alberta grillé à perfection, accompagnement et sauce classique.' },
  // BURGERS & WRAPS
  { id:18, cat:'burgers',   emoji:'🍔', price:18, name:'California Chicken Burger',          name_fr:'Burger Poulet California',                   desc:'Blackened chicken, avocado, smoke bacon, mozzarella & burger sauce on brioche bun, served with fries.',                                          desc_fr:'Poulet noirci, avocat, bacon fumé, mozzarella sur brioche, avec frites.' },
  { id:19, cat:'burgers',   emoji:'🌮', price:17, name:'Chicken Quesadilla',                 name_fr:'Quesadilla au Poulet',                        desc:'House-spice grilled chicken, onions, peppers, jalapeños, shredded cheese in crispy tortilla; with salsa & sour cream.',                         desc_fr:'Poulet grillé maison, oignons, poivrons, jalapeños, fromage en tortilla croustillante.' },
  { id:20, cat:'burgers',   emoji:'🥪', price:16, name:'Turkey Salad Sandwich',              name_fr:'Sandwich Salade de Dinde',                   desc:'Shredded turkey with onions, peppers, lettuce, chives & mayo on bread of choice, with fries.',                                                   desc_fr:'Dinde effilochée, oignons, poivrons, laitue, ciboulette et mayo sur pain au choix.' },
  { id:21, cat:'burgers',   emoji:'🥩', price:19, name:'Steak Sandwich',                     name_fr:'Sandwich au Steak',                           desc:'AAA 6oz sirloin steak, garlic bread, garlic mushrooms & 3 fried onion rings.',                                                                    desc_fr:'Surlonge AAA 6oz, pain à l\'ail, champignons à l\'ail, 3 rondelles d\'oignon.' },
  { id:22, cat:'burgers',   emoji:'🌯', price:17, name:'Crispy Chicken Caesar Wrap',         name_fr:'Wrap César au Poulet Croustillant',           desc:'Crispy fried chicken tenders tossed with Caesar salad, wrapped in crispy tortilla.',                                                              desc_fr:'Filets de poulet croustillants, salade César dans une tortilla croustillante.' },
  { id:23, cat:'burgers',   emoji:'🍔', price:16, name:'Pulled Pork Sandwich',               name_fr:'Sandwich Porc Effiloché',                    desc:'Slow-roasted house BBQ pork with coleslaw on brioche bun, served with fries.',                                                                    desc_fr:'Porc BBQ effiloché avec coleslaw dans un bun brioché, avec frites.' },
  // PASTA & SALADS
  { id:24, cat:'pasta',     emoji:'🦐', price:21, name:'Seafood Pasta',                      name_fr:'Pâtes aux Fruits de Mer',                    desc:'Spaghetti with mussels, shrimp & calamari in marinara sauce, with pitta bread.',                                                                  desc_fr:'Spaghetti, moules, crevettes et calmars en sauce marinara, avec pain pitta.' },
  { id:25, cat:'pasta',     emoji:'🍝', price:20, name:'Steak Pasta',                        name_fr:'Pâtes au Steak',                              desc:'AAA steak strips, fresh spaghetti & vegetables in special ginger sauce, with pitta bread. Option: Chicken.',                                    desc_fr:'Lanières de steak AAA, spaghetti frais, légumes en sauce gingembre. Option poulet.' },
  { id:26, cat:'pasta',     emoji:'🥗', price:16, name:'Greek Salad',                        name_fr:'Salade Grecque',                              desc:'Red onion, tomato, cucumber, Kalamata olives, feta, peppers & lettuce with Greek dressing.',                                                      desc_fr:'Oignon rouge, tomate, concombre, olives Kalamata, feta, poivrons, vinaigrette grecque.' },
  { id:27, cat:'pasta',     emoji:'🥗', price:16, name:'Caesar Salad',                       name_fr:'Salade César',                                desc:'Crispy romaine, house Caesar dressing, croutons & parmesan. Add Blackened Chicken +$5, Shrimp +$9.',                                            desc_fr:'Romaine croustillante, vinaigrette César maison, croûtons, parmesan. Poulet +5$.' },
  { id:28, cat:'pasta',     emoji:'🌾', price:16, name:'Quinoa Salad',                       name_fr:'Salade Quinoa',                               desc:'Quinoa, pumpkin seeds, sunflower seeds & seasonal vegetables in a light dressing.',                                                              desc_fr:'Quinoa, graines de citrouille, graines de tournesol, légumes de saison.' },
];

/* ══════════════════════════════════════════
   CART STATE
══════════════════════════════════════════ */
let cart = [];

const cartCount = () => cart.reduce((s, i) => s + i.qty, 0);
const cartTotal = () => cart.reduce((s, i) => s + i.price * i.qty, 0).toFixed(2);
const itemTotal = (item) => (item.price * item.qty).toFixed(2);

function addToCart(id) {
  const item = menuItems.find(m => m.id === id);
  if (!item) return;
  const existing = cart.find(c => c.id === id);
  if (existing) existing.qty++;
  else cart.push({ ...item, qty: 1 });
  updateCartBadge();
  renderCart();
  updateCartSummaryInForm();
  updateMenuCardQty(id);
}

function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(c => c.id !== id);
  updateCartBadge();
  renderCart();
  updateCartSummaryInForm();
  updateMenuCardQty(id);
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  updateCartBadge();
  renderCart();
  updateCartSummaryInForm();
  updateMenuCardQty(id);
}

// Expose to global scope (called from inline onclick in dynamic HTML)
window.addToCart    = addToCart;
window.changeQty    = changeQty;
window.removeFromCart = removeFromCart;
window.menuAddFromCard = (id) => { addToCart(id); };
window.menuChangeQty   = (id, delta) => { changeQty(id, delta); };

function updateCartBadge() {
  document.getElementById('cartBadge').textContent = cartCount();
}

/* Update the inline qty display on the menu card */
function updateMenuCardQty(id) {
  const card = document.querySelector(`.menu-card[data-id="${id}"]`);
  if (!card) return;
  const cartItem = cart.find(c => c.id === id);
  const qty = cartItem ? cartItem.qty : 0;
  card.setAttribute('data-qty', qty);
  const numEl = card.querySelector('.menu-qty-num-el');
  if (numEl) numEl.textContent = qty;
}

function renderCart() {
  const container = document.getElementById('cartItems');
  const footer    = document.getElementById('cartFooter');

  if (cart.length === 0) {
    container.innerHTML = `<p class="cart-empty">${t('cart.empty')}</p>`;
    footer.style.display = 'none';
    return;
  }
  footer.style.display = 'block';

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-emoji">${item.emoji}</div>
      <div class="cart-item-details">
        <div class="cart-item-name">${lang === 'fr' ? item.name_fr : item.name}</div>
        <div class="cart-item-price">$${itemTotal(item)}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)" aria-label="Remove one">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, +1)" aria-label="Add one">+</button>
        </div>
      </div>
      <button class="cart-remove" onclick="removeFromCart(${item.id})" aria-label="Remove item"><i class="fas fa-times"></i></button>
    </div>
  `).join('');

  document.getElementById('cartTotal').textContent = `$${cartTotal()}`;
}

function updateCartSummaryInForm() {
  const box    = document.getElementById('cartSummaryInForm');
  const list   = document.getElementById('cartSummaryList');
  const hidden = document.getElementById('hiddenMessage');
  const special = document.getElementById('specialRequests');

  if (cart.length === 0) {
    if (box) box.style.display = 'none';
    if (hidden) hidden.value = special?.value || '';
    return;
  }

  if (box) box.style.display = 'block';
  if (list) {
    list.innerHTML =
      cart.map(i => `
        <div class="summary-row">
          <span>${i.emoji} ${lang === 'fr' ? i.name_fr : i.name} × ${i.qty}</span>
          <span>$${itemTotal(i)}</span>
        </div>`).join('') +
      `<div class="summary-row summary-total-row"><span>Total</span><span>$${cartTotal()}</span></div>`;
  }

  const cartText = cart.map(i => `${lang === 'fr' ? i.name_fr : i.name} x${i.qty} = $${itemTotal(i)}`).join(', ');
  const userMsg = special?.value ? `\nSpecial requests: ${special.value}` : '';
  if (hidden) hidden.value = `Pre-informed menu: ${cartText}. Total: $${cartTotal()}.${userMsg}`;
}

document.getElementById('specialRequests')?.addEventListener('input', updateCartSummaryInForm);

/* ══════════════════════════════════════════
   MENU RENDER WITH INLINE QTY CONTROLS
══════════════════════════════════════════ */
let activeCategory = 'all';

function renderMenu(cat) {
  activeCategory = cat;
  const grid  = document.getElementById('menuGrid');
  const items = cat === 'all' ? menuItems : menuItems.filter(m => m.cat === cat);

  grid.innerHTML = items.map(item => {
    const name = lang === 'fr' ? item.name_fr : item.name;
    const desc = lang === 'fr' ? item.desc_fr : item.desc;
    const cartItem = cart.find(c => c.id === item.id);
    const qty = cartItem ? cartItem.qty : 0;
    return `
      <div class="menu-card" data-id="${item.id}" data-qty="${qty}">
        <div class="menu-card-left">
          <div class="menu-card-emoji">${item.emoji}</div>
          <div class="menu-card-info">
            <h3>${name}</h3>
            <p>${desc}</p>
          </div>
        </div>
        <div class="menu-card-right">
          <div class="menu-price">$${item.price}</div>
          <div class="menu-card-qty-wrap">
            <button class="menu-qty-btn menu-qty-minus" onclick="menuChangeQty(${item.id}, -1)" aria-label="Remove one">−</button>
            <span class="menu-qty-num-el">${qty || ''}</span>
            <button class="menu-qty-btn add-btn" onclick="menuAddFromCard(${item.id})" aria-label="Add to list"><i class="fas fa-plus"></i></button>
          </div>
        </div>
      </div>`;
  }).join('');
}

document.getElementById('menuTabs')?.addEventListener('click', e => {
  const btn = e.target.closest('.tab-btn');
  if (!btn) return;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderMenu(btn.dataset.cat);
});

renderMenu('all');

/* ══════════════════════════════════════════
   CART SIDEBAR
══════════════════════════════════════════ */
function openSidebar() {
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartOverlay').classList.add('show');
  document.body.style.overflow = 'hidden';
}
function closeSidebar() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('show');
  document.body.style.overflow = '';
}
window.closeSidebar = closeSidebar;
document.getElementById('cartToggle')?.addEventListener('click', openSidebar);
document.getElementById('cartClose')?.addEventListener('click', closeSidebar);
document.getElementById('cartOverlay')?.addEventListener('click', closeSidebar);

/* ══════════════════════════════════════════
   HAMBURGER
══════════════════════════════════════════ */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

/* ══════════════════════════════════════════
   STICKY HEADER
══════════════════════════════════════════ */
window.addEventListener('scroll', () => {
  document.getElementById('header').classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ══════════════════════════════════════════
   HERO SLIDESHOW
══════════════════════════════════════════ */
const slides = document.querySelectorAll('.hero-slide');
let slideIdx = 0;
setInterval(() => {
  slides[slideIdx].classList.remove('active');
  slideIdx = (slideIdx + 1) % slides.length;
  slides[slideIdx].classList.add('active');
}, 5000);

/* ══════════════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════════════ */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ══════════════════════════════════════════
   GALLERY LIGHTBOX
══════════════════════════════════════════ */
const lightbox      = document.getElementById('lightbox');
const lightboxImg   = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    lightboxImg.src = item.querySelector('img').src;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});
lightboxClose?.addEventListener('click', () => { lightbox.classList.remove('open'); document.body.style.overflow = ''; });
lightbox?.addEventListener('click', e => { if (e.target === lightbox) { lightbox.classList.remove('open'); document.body.style.overflow = ''; } });

/* ══════════════════════════════════════════
   DEFAULT DATE
══════════════════════════════════════════ */
const resDate = document.getElementById('resDate');
if (resDate) resDate.value = new Date().toISOString().split('T')[0];

/* ══════════════════════════════════════════
   WHATSAPP PRE-INFORMED MENU
══════════════════════════════════════════ */
document.getElementById('whatsappBtn')?.addEventListener('click', () => {
  const name    = document.getElementById('fieldName')?.value.trim();
  const email   = document.getElementById('fieldEmail')?.value.trim();
  const phone   = document.getElementById('fieldPhone')?.value.trim();
  const party   = document.querySelector('[name="partySize"]')?.value;
  const date    = document.getElementById('resDate')?.value;
  const time    = document.querySelector('[name="ResTime"]')?.value;
  const special = document.getElementById('specialRequests')?.value.trim();

  if (!name || !phone) {
    alert('Please fill in at least your Name and Phone Number before sending via WhatsApp.');
    return;
  }

  let msg = `🍽️ *SOUTHFORK RESTAURANT — Table Reservation*\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `👤 *Name:* ${name}\n`;
  msg += `📞 *Phone:* ${phone}\n`;
  if (email)  msg += `📧 *Email:* ${email}\n`;
  if (party)  msg += `👥 *Party Size:* ${party}\n`;
  if (date)   msg += `📅 *Date:* ${date}\n`;
  if (time)   msg += `🕐 *Time:* ${time}\n`;

  if (cart.length > 0) {
    msg += `\n━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `🍴 *Pre-Informed Menu:*\n`;
    cart.forEach(item => {
      msg += `  • ${lang === 'fr' ? item.name_fr : item.name} × ${item.qty} — $${itemTotal(item)}\n`;
    });
    msg += `\n💰 *Estimated Total: $${cartTotal()}*\n`;
    msg += `\n⚠️ _Note: All food is freshly cooked upon arrival. Prices are approximate._\n`;
  }

  if (special) {
    msg += `\n📝 *Special Requests:* ${special}\n`;
  }

  msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `Thank you for choosing Southfork Restaurant! 🌟`;

  const encoded = encodeURIComponent(msg);
  const waUrl = `https://wa.me/14036522282?text=${encoded}`;
  window.open(waUrl, '_blank', 'noopener');

  // Also save to localStorage
  saveCustomerInfo(name, email, phone);
});

/* ══════════════════════════════════════════
   BOOKING CONFIRMATION POPUP
══════════════════════════════════════════ */
function getFormData() {
  return {
    name:    document.getElementById('fieldName')?.value.trim() || '',
    email:   document.getElementById('fieldEmail')?.value.trim() || '',
    phone:   document.getElementById('fieldPhone')?.value.trim() || '',
    party:   document.querySelector('[name="partySize"]')?.value || '',
    date:    document.getElementById('resDate')?.value || '',
    time:    document.querySelector('[name="ResTime"]')?.value || '',
    special: document.getElementById('specialRequests')?.value.trim() || '',
  };
}

function showConfirmationPopup(fd) {
  const overlay = document.getElementById('confirmOverlay');

  // Greeting
  const greeting = document.getElementById('confirmGreeting');
  if (fd.name) {
    greeting.textContent = `Dear ${fd.name}, we are truly delighted to welcome you to Southfork Restaurant and look forward to your arrival!`;
  }

  // Details grid
  const details = document.getElementById('confirmDetails');
  const dItems = [];
  if (fd.name)  dItems.push({ label:'Guest Name',   value: fd.name });
  if (fd.phone) dItems.push({ label:'Phone',         value: fd.phone });
  if (fd.date)  dItems.push({ label:'Date',          value: new Date(fd.date + 'T00:00:00').toLocaleDateString('en-CA', { weekday:'long', year:'numeric', month:'long', day:'numeric' }) });
  if (fd.time)  dItems.push({ label:'Time',          value: fd.time });
  if (fd.party) dItems.push({ label:'Party Size',    value: fd.party });
  if (fd.email) dItems.push({ label:'Email',         value: fd.email });

  details.innerHTML = dItems.map(d => `
    <div class="confirm-detail-item">
      <div class="detail-label">${d.label}</div>
      <div class="detail-value">${d.value}</div>
    </div>
  `).join('');

  // Pre-informed menu
  const menuSummary = document.getElementById('confirmMenuSummary');
  const menuList    = document.getElementById('confirmMenuList');
  if (cart.length > 0) {
    menuSummary.style.display = 'block';
    menuList.innerHTML = cart.map(i =>
      `<div class="confirm-menu-row">
        <span>${i.emoji} ${lang === 'fr' ? i.name_fr : i.name} × ${i.qty}</span>
        <span>$${itemTotal(i)}</span>
      </div>`
    ).join('') +
    `<div class="confirm-menu-row" style="border-top:1px solid rgba(201,168,76,.2);margin-top:.3rem;padding-top:.3rem;font-weight:700;color:#c9a84c">
      <span>Estimated Total</span><span>$${cartTotal()}</span>
    </div>`;
  } else {
    menuSummary.style.display = 'none';
  }

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeConfirmationPopup() {
  document.getElementById('confirmOverlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

/* Download invitation as PDF via browser print */
function downloadInvitation() {
  const fd = getFormData();

  const menuRows = cart.length > 0
    ? `<div style="margin:16px 0 8px;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:#c9a84c;">Pre-Informed Menu</div>` +
      cart.map(i => `<div style="display:flex;justify-content:space-between;font-size:13px;color:#b8b0a0;padding:3px 0">${i.emoji} ${lang === 'fr' ? i.name_fr : i.name} × ${i.qty}<span>$${itemTotal(i)}</span></div>`).join('') +
      `<div style="display:flex;justify-content:space-between;font-size:13px;font-weight:700;color:#c9a84c;border-top:1px solid rgba(201,168,76,.2);margin-top:6px;padding-top:6px"><span>Estimated Total</span><span>$${cartTotal()}</span></div>`
    : '';

  const dateStr = fd.date
    ? new Date(fd.date + 'T00:00:00').toLocaleDateString('en-CA', { weekday:'long', year:'numeric', month:'long', day:'numeric' })
    : '';

  const printEl = document.getElementById('printInvitation');
  printEl.innerHTML = `
    <div style="font-family:'Playfair Display',Georgia,serif;background:#0e0e0e;color:#f0ece4;width:100%;max-width:520px;margin:0 auto;border:2px solid #c9a84c;padding:0;border-radius:12px;overflow:hidden;">
      <div style="height:4px;background:linear-gradient(90deg,transparent,#c9a84c,#e8c97a,#c9a84c,transparent);"></div>
      <div style="background:linear-gradient(160deg,#1a1507,#0e0e0e);text-align:center;padding:30px 30px 20px;border-bottom:1px solid rgba(201,168,76,.2);">
        <div style="font-size:22px;font-weight:700;color:#c9a84c;letter-spacing:.04em;">Southfork Restaurant</div>
        <div style="font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#6e6558;margin-top:4px;">High River, Alberta · Canada</div>
        <div style="margin:18px auto 0;display:flex;align-items:center;justify-content:center;gap:10px;color:#c9a84c;font-size:13px;">
          <span style="flex:1;height:1px;background:linear-gradient(90deg,transparent,rgba(201,168,76,.4));display:block;"></span>
          ◆ &nbsp; ◆ &nbsp; ◆
          <span style="flex:1;height:1px;background:linear-gradient(90deg,rgba(201,168,76,.4),transparent);display:block;"></span>
        </div>
      </div>
      <div style="padding:24px 30px 8px;">
        <div style="font-size:20px;font-weight:700;text-align:center;margin-bottom:6px;color:#f0ece4;">Reservation Confirmed</div>
        <p style="text-align:center;font-style:italic;color:#b8b0a0;font-size:13px;margin-bottom:20px;line-height:1.6;">${fd.name ? `Dear ${fd.name}, we are truly delighted to welcome you and look forward to your arrival at Southfork!` : 'We are delighted to welcome you and look forward to your arrival!'}</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:16px;">
          ${fd.name  ? `<div style="background:rgba(201,168,76,.07);border:1px solid rgba(201,168,76,.14);border-radius:6px;padding:10px 12px;"><div style="font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#c9a84c;margin-bottom:3px;">Guest Name</div><div style="font-size:13px;font-weight:600;">${fd.name}</div></div>` : ''}
          ${fd.phone ? `<div style="background:rgba(201,168,76,.07);border:1px solid rgba(201,168,76,.14);border-radius:6px;padding:10px 12px;"><div style="font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#c9a84c;margin-bottom:3px;">Phone</div><div style="font-size:13px;font-weight:600;">${fd.phone}</div></div>` : ''}
          ${dateStr  ? `<div style="background:rgba(201,168,76,.07);border:1px solid rgba(201,168,76,.14);border-radius:6px;padding:10px 12px;"><div style="font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#c9a84c;margin-bottom:3px;">Date</div><div style="font-size:13px;font-weight:600;">${dateStr}</div></div>` : ''}
          ${fd.time  ? `<div style="background:rgba(201,168,76,.07);border:1px solid rgba(201,168,76,.14);border-radius:6px;padding:10px 12px;"><div style="font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#c9a84c;margin-bottom:3px;">Time</div><div style="font-size:13px;font-weight:600;">${fd.time}</div></div>` : ''}
          ${fd.party ? `<div style="background:rgba(201,168,76,.07);border:1px solid rgba(201,168,76,.14);border-radius:6px;padding:10px 12px;"><div style="font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#c9a84c;margin-bottom:3px;">Party Size</div><div style="font-size:13px;font-weight:600;">${fd.party}</div></div>` : ''}
          ${fd.email ? `<div style="background:rgba(201,168,76,.07);border:1px solid rgba(201,168,76,.14);border-radius:6px;padding:10px 12px;"><div style="font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#c9a84c;margin-bottom:3px;">Email</div><div style="font-size:13px;font-weight:600;">${fd.email}</div></div>` : ''}
        </div>
        ${menuRows}
        <p style="text-align:center;font-size:11px;color:#6e6558;margin-top:16px;line-height:1.7;font-style:italic;">★ All food is freshly prepared upon your arrival. Please arrive 5–10 minutes early.<br>★ This is your booking acknowledgement — please keep it for your reference.</p>
      </div>
      <div style="background:linear-gradient(160deg,#1a1507,#0e0e0e);text-align:center;padding:14px 30px 18px;border-top:1px solid rgba(201,168,76,.18);margin-top:8px;">
        <div style="font-size:11px;color:#6e6558;letter-spacing:.05em;">110 1 St SW, High River, AB T1V 1G4 · +1 403-652-2282</div>
        <div style="font-size:11px;color:#6e6558;margin-top:3px;">southforkrestaurant.ca · Mon–Sun 8:00 AM – 9:00 PM</div>
      </div>
    </div>
  `;

  // Use browser print — configured to look like a download
  window.print();
}

document.getElementById('confirmClose')?.addEventListener('click', closeConfirmationPopup);
document.getElementById('confirmOverlay')?.addEventListener('click', e => {
  if (e.target.id === 'confirmOverlay') closeConfirmationPopup();
});
document.getElementById('confirmDownload')?.addEventListener('click', downloadInvitation);

/* ══════════════════════════════════════════
   FORM SUBMIT — intercept, show popup, then submit
══════════════════════════════════════════ */
document.getElementById('booking-form')?.addEventListener('submit', function(e) {
  e.preventDefault(); // Intercept for popup first
  updateCartSummaryInForm();
  const fd = getFormData();
  if (!fd.name || !fd.phone) {
    alert('Please fill in at least your Full Name and Phone Number.');
    return;
  }
  // Save to localStorage
  saveCustomerInfo(fd.name, fd.email, fd.phone);
  // Show confirmation popup
  showConfirmationPopup(fd);
  // Submit form in background (no page reload)
  const data = new FormData(this);
  fetch(this.action, { method:'POST', body: data })
    .catch(() => { /* form may not have live backend in local dev */ });
});


/* ══════════════════════════════════════════
   LOCALSTORAGE — SAVE & SUGGEST CUSTOMER INFO
   (Browser-side only — no server storage)
══════════════════════════════════════════ */
const LS_KEY = 'southfork_customer_v1';

function saveCustomerInfo(name, email, phone) {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify({ name, email, phone, saved: Date.now() }));
  } catch(e) { /* storage unavailable */ }
}

function loadSavedInfo() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    // Only use if saved within last 90 days
    if (Date.now() - data.saved > 90 * 24 * 60 * 60 * 1000) {
      localStorage.removeItem(LS_KEY);
      return null;
    }
    return data;
  } catch(e) { return null; }
}

function applySavedInfo(data) {
  const nameEl  = document.getElementById('fieldName');
  const emailEl = document.getElementById('fieldEmail');
  const phoneEl = document.getElementById('fieldPhone');
  if (nameEl  && data.name)  nameEl.value  = data.name;
  if (emailEl && data.email) emailEl.value = data.email;
  if (phoneEl && data.phone) phoneEl.value = data.phone;
}

// Init — show banner if saved info exists
const saved = loadSavedInfo();
const banner = document.getElementById('savedBanner');
const header = document.getElementById('header');

if (saved && banner) {
  // Show banner
  banner.style.display = 'flex';
  header.classList.add('banner-open');
  document.getElementById('savedBannerText').textContent =
    `Welcome back, ${saved.name || 'Guest'}! Use your saved contact info?`;

  document.getElementById('savedYes')?.addEventListener('click', () => {
    applySavedInfo(saved);
    banner.style.display = 'none';
    header.classList.remove('banner-open');
    // Optionally scroll to form
    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  document.getElementById('savedNo')?.addEventListener('click', () => {
    banner.style.display = 'none';
    header.classList.remove('banner-open');
  });
}

/* ══════════════════════════════════════════
   NEWSLETTER
══════════════════════════════════════════ */
window.handleNewsletter = function(e) {
  e.preventDefault();
  const input = e.target.querySelector('input[type="email"]');
  const btn   = e.target.querySelector('button');
  const origText = btn.textContent;
  btn.textContent = '✓ Subscribed!';
  btn.style.background = '#2a7a2a';
  input.value = '';
  setTimeout(() => {
    btn.textContent = origText;
    btn.style.background = '';
  }, 3000);
};
