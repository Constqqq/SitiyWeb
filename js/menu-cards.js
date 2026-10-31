const MENU_ITEMS = [
  {
    id: "b22",
    file: "",
    title: "Гамбургер",
    img: "images/placeholder-burger.jpg",
    price: 360,
    desc: "Сочный гамбургер с говяжьей котлетой, красным луком, маринованными огурчиками, кетчупом и горчичным соусом",
    category: "burgers",
    video: "videos/video-burgerCheese.MOV",
  },
  {
    id: "b23",
    file: "",
    title: "Чизбургер",
    img: "images/placeholder-burger2.jpg",
    price: 385,
    desc: "Сочный чизбургер с говяжьей котлетой, красным луком, маринованными огурчиками, сыром чеддер, кетчупом и горчичным соусом",
    category: "burgers",
    video: "videos/video-burgerCheese.MOV",
  },
  {
    id: "b24",
    file: "",
    title: "Чикенбургер",
    img: "images/placeholder-burger3.jpg",
    price: 260,
    desc: "Бургер с куринной котлетой, помидором, салатом айсберг, красным луком, сыром чеддер и соусом тар-тар",
    category: "burgers",
    video: "videos/video-burgerCheese.MOV",
  },
  {
    id: "b25",
    file: "",
    title: "Мега бургер",
    img: "images/placeholder-burger4.jpg",
    price: 580,
    desc: "Сочный бургер с двумя говяжьими котлетами, сыром чеддер, салатом айсберг, маринованными огурчиками, кетчупом и горчичным соусом",
    category: "burgers",
    isHit: true,
    video: "videos/video-burgerCheese.MOV",
  },
  {
    id: "b26",
    file: "",
    title: "Пицца Пеперони",
    img: "images/placeholder-pizza.jpg",
    price: 460,
    sizes: [
      { name: "30 см", price: 460 },
      { name: "15 см", price: 200 }
    ],
    desc: "Классическая пицца с колбасками пеперони, томатным соусом, сыром моцарелла и маслинами",
    category: "pizza",
    isHit: true,
  },
  {
    id: "b27",
    file: "",
    title: "Пицца 4 сыра",
    img: "images/placeholder-fourcheese.jpg",
    price: 600,
    sizes: [
      { name: "30 см", price: 600 },
      { name: "15 см", price: 220 }
    ],
    desc: "Пицца с четырьмя видами сыра: моцарелла, фета, дор блю и гауда",
    category: "pizza",
  },
  {
    id: "b28",
    file: "",
    title: "Пицца \"Мясная\"",
    img: "images/placeholder-myasna.jpg",
    price: 560,
    sizes: [
      { name: "30 см", price: 560 },
      { name: "15 см", price: 220 }
    ],
    desc: "Пицца с ветчиной, беконом, куринным филе, пеперони, маринованными огурчиками, томатным соусом и сыром моцарелла",
    category: "pizza",
  },
  {
    id: "b32",
    file: "",
    title: "Пицца \"Гавайская\"",
    img: "images/placeholder-gavai.jpg",
    price: 500,
    sizes: [
      { name: "30 см", price: 500 },
      { name: "15 см", price: 200 }
    ],
    desc: "Пицца с куринным филе, ананасами, томатным соусом, орегано и сыром моцарелла",
    category: "pizza",
  },
  {
    id: "b1",
    file: "b1.html",
    title: "Шаурма со свининой",
    img: "images/placeholder-1.jpg",
    price: 330,
    sizes: [
      { name: "Стандартная", price: 330 },
      { name: "Большая", price: 385 }
    ],
    desc: "Лаваш/Булка, сочная свинина, помидоры, мариннованые огурцы, пекинская капуста и 2 вида соуса",
    category: "shawarma",
    isShawerma: true,
  },
  {
    id: "b2",
    file: "b1.html",
    title: "Шаурма с курицей",
    img: "images/placeholder-1.jpg",
    price: 330,
    sizes: [
      { name: "Стандартная", price: 330 },
      { name: "Большая", price: 385 }
    ],
    desc: "Лаваш/Булка, сочная курица, помидоры, мариннованые огурцы, пекинская капуста и 2 вида соуса",
    category: "shawarma",
    isShawerma: true,
  },
  {
    id: "b14",
    file: "b15.html",
    title: "МЕГА ШАВА",
    img: "images/placeholder-15.jpg",
    price: 440,
    desc: "Лаваш/Булка, Сочная свинина или курица, помидоры, маринованные огурцы, пекинская капуста, два вида вкусного соуса, картофель фри",
    category: "shawarma",
    isHit: true,
    video: "videos/video-megashava.mp4",
    isShawerma: true,
  },
  {
    id: "b12",
    file: "b11.html",
    title: "Шаурма по-гречески",
    img: "images/placeholder-11.jpg",
    price: 350,
    sizes: [
      { name: "Стандартная", price: 330 },
      { name: "Большая", price: 385 }
    ],
    desc: "Лаваш/Булка, поджаристая курица, сыр фета, маслины и вкусные овощи",
    category: "shawarma",
    video: "videos/video-panini.MOV",
    isShawerma: true,
    isHit: true,
  },
  
  {
    id: "b4",
    file: "b3.html",
    title: "Вок лапша Свинина",
    img: "images/placeholder-3.jpg",
    price: 385,
    desc: "Лапша на выбор – Удон/Фунчоза Свинина, грибы, перец болгарский, фасоль стручковая, лук, терияки соус, кунжут",
    category: "noodles",
    video: "videos/video-vok.MOV",
  },
  {
    id: "b5",
    file: "b3.html",
    title: "Вок лапша Курица",
    img: "images/placeholder-3.jpg",
    price: 385,
    desc: "Лапша на выбор – Удон/Фунчоза Курятина, грибы, перец болгарский, фасоль стручковая, лук, терияки соус, кунжут",
    category: "noodles",
     video: "videos/video-vok.MOV",
     isHit: true,
  },
  {
    id: "b8",
    file: "b3.html",
    title: "Вок Лапша Морепродукты",
    img: "images/placeholder-3.jpg",
    price: 465,
    desc: "Лапша на выбор – Удон/Фунчоза Много креветок, кальмары, мидии, грибы, перец болгарский, фасоль стручковая, лук, терияки соус, кунжут",
    category: "noodles",
    isHit: true,
     video: "videos/video-vok.MOV",
  },
  {
    id: "b30",
    file: "",
    title: "Том Ям",
    img: "images/placeholder-tom.jpg",
    price: 220,
    desc: "Острый тайский суп с креветками, грибами, лимонной травой, лапшой и курицей",
    category: "soups",
    video: "videos/placeholder-tom.MOV",
  },
  {
    id: "b31",
    file: "",
    title: "Суп-Лапша",
    img: "images/placeholder-lapsha.jpg",
    price: 165,
    desc: "Классический куриный суп с домашней лапшой, овощами, вареным яйцом, зеленью и специями",
    category: "soups",
  },
  
  {
    id: "b16",
    file: "b17.html",
    title: "Картошка по-деревенски",
    img: "images/placeholder-17.jpg",
    price: 150,
    desc: "Картошка по-деревенски (100 грамм) Соуса (+40₽) Чесночный, Томатный обычный/острый, Сырный, Кисло-Сладкий, Терияки",
    category: "snacks",
    suggestSauce: true,
  },
  {
    id: "b33",
    file: "b17.html",
    title: "Картошка Фри",
    img: "images/placeholder-fries.jpg",
    price: 150,
    desc: "Картошка фри (100 грамм) Соуса (+40₽) Чесночный, Томатный обычный/острый, Сырный, Кисло-Сладкий, Терияки",
    category: "snacks",
    suggestSauce: true,
  },
  {
    id: "b51",
    file: "b17.html",
    title: "Нагетсы",
    img: "images/placeholder-nuggets.jpg",
    price: 250,
    desc: "Нагетсы 6 штук Соуса (+40₽) Чесночный, Томатный обычный/острый, Сырный, Кисло-Сладкий, Терияки",
    category: "snacks",
    suggestSauce: true,
  },
   {
    id: "b47",
    file: "b47.html",
    title: "Крылья",
    img: "images/wings-placeholder.jpg",
    price: 350,
    desc: "4 шт.",
    category: "snacks",
  },
  {
    id: "b1243",
    file: "b8.html",
    title: "Креветки в темпуре",
    img: "images/placeholder-8.jpg",
    price: 400,
    desc: "Креветки в кляре темпура Соуса (+40₽) Чесночный, Томатный обычный/острый, Сырный, Кисло-Сладкий, Терияки ",
    category: "snacks",
    suggestSauce: true,
  },
  {
    id: "b13",
    file: "b14.html",
    title: "Ланч бокс с курицей",
    img: "images/placeholder-chicken.jpg",
    price: 330,
    sizes: [
      { name: "Стандартная", price: 330 },
      { name: "Большая", price: 410 }
    ],
    desc: "Курица, Картошка по-деревенски, Огручики, Помидорчики, пекинская капуста, маринованный лучок (можно заменить на болгарский перец), Свежий Лаваш, Вкусный соус",
    category: "dinner",
    video: "videos/video-lunch.MOV",
  },
  {
    id: "b123",
    file: "b14.html",
    title: "Ланч бокс со свининой",
    img: "images/placeholder-pork.jpg",
    price: 385,
    sizes: [
      { name: "Стандартная", price: 385 },
      { name: "Большая", price: 410 }
    ],
    desc: "Свинина, Картошка по-деревенски, Огручики, Помидорчики, пекинская капуста, маринованный лучок (можно заменить на болгарский перец), Свежий Лаваш, Вкусный соус",
    category: "dinner",
    video: "videos/video-lunch.MOV",
  },
   {
    id: "b100",
    file: "b100.html",
    title: "Чебурек c мясом",
    img: "images/cheburek.jpg",
    price: 90,
    variants: [
      { name: "Свинина", price: 90 },
      { name: "Курица", price: 90 }
    ],
    desc: "Чебурек с мясом. 140г",
    category: "chebureks",
  },
  {
    id: "b101",
    file: "b101.html",
    title: "Чебурек с сыром",
    img: "images/cheburek.jpg",
    price: 100,
    
    desc: "Чебурек с сыром. 140г",
    category: "chebureks",
  },
  {
    id: "b102",
    file: "b102.html",
    title: "Чебурек ассорти(сыр/мясо)",
    img: "images/cheburek.jpg",
    price: 90,
    variants: [
      { name: "Свинина", price: 90 },
      { name: "Курица", price: 90 }
    ],
    desc: "Чебурек ассорти(сыр/мясо). 140г",
    category: "chebureks",
  },
  {
    id: "b17",
    file: "b18.html",
    title: "Соусы в наличии",
    img: "images/placeholder-18.jpg",
    price: 40,
    variants: [
      { name: "Чесночный", price: 40 },
      { name: "Томатный обычный/острый", price: 40 },
      { name: "Сырный", price: 40 },
      { name: "Кисло-Сладкий", price: 40 },
      { name: "Терияки", price: 40 },
    ],
    desc: "Чесночный, Томатный обычный/острый, Сырный, Кисло-Сладкий, Терияки.",
    isSauce: true, // Пометка что это соус
  },
  {
    id: "b18",
    file: "b19.html",
    title: "Кола/Пепси",
    img: "images/placeholder-20.jpg",
    price: 110,
    desc: "Кола или Пепси 0,5 ПЭТ 0,33 ж/б",
    category: "drinks",
  },
 
  // {
  //   id: "b10",
  //   file: "b5.html",
  //   title: "Кофе и чай",
  //   img: "images/placeholder-5.jpg",
  //   price: 60,
  //   variants: [
  //     { name: "Американо", price: 100 },
  //     { name: "Капучино", price: 120 },
  //     { name: "Латте", price: 140 },
  //     { name: "Эспрессо", price: 100 },
  //     { name: "Флет Уайт", price: 165},
  //     { name: "Чай зеленый/черный/травяной", price: 60 },
  //   ],
  //   desc: "Американо – 100₽ Капучино – 120₽ Латте – 140₽ Эспрессо – 100₽ Флет Уайт – 165₽ Чай зеленый/черный/травяной – 60₽ Лимон или Молоко (+10₽)",
  //   category: "drinks",
  // },
  // {
  //   id: "b35",
  //   file: "",
  //   title: "Чай «SimpaTea»",
  //   img: "images/placeholder-zhele.jpg",
  //   price: 165,
  //   variants: [
  //     { name: "Брусника - каркаде", price: 165 },
  //     { name: "Манго - маракуйя", price: 165 },
  //     { name: "Клюква - апельсин", price: 165 },
  //     { name: "Имбирь - лимон", price: 165 },
  //     { name: "Глинтвейн", price: 165},
  //     { name: "Смородина-малина", price: 165 },
  //   ],
  //   desc: "Освежающий чайный напиток с натуральными фруктовыми и ягодными вкусами, вкусы в наличии уточняйте по телефону",
  //   category: "drinks",
  // },
  {
    id: "b19",
    file: "b20.html",
    title: "Вода",
    img: "images/placeholder-21.jpg",
    price: 60,
    desc: "Вода 0,5",
    category: "drinks",
  },
  {
    id: "b20",
    file: "b20.html",
    title: "Соки",
    img: "images/placeholder-22.jpg",
    price: 60,
    desc: "Соки 0,2 л., наличие уточняйте по телефону",
    category: "drinks",
  },
  {
    id: "b21",
    file: "b20.html",
    title: "Айран/Тан",
    img: "images/placeholder-23.jpg",
    price: 100,
    variants: [
      { name: "Айран", price: 100 },
      { name: "Тан", price: 100 }
    ],
    desc: "Айран или Тан",
    category: "drinks",
  },

 
];

// ===========================
//     РЕНДЕР МЕНЮ
// ===========================

function renderMenu(category = "all") {
  const grid = document.querySelector('.menu-grid');
  if (!grid) return;

  grid.innerHTML = '';

  MENU_ITEMS
    .filter(item => category === "all" ? true : item.category === category)
    .forEach(item => {

      const card = document.createElement('article');
      card.className = 'menu-card';
      card.dataset.itemId = item.id;

      const productLink = `product.html?id=${item.id}`;

      let currentPriceDisplay = '';
      
      if (item.sizes && item.sizes.length > 1) {
        const prices = item.sizes.map(s => s.price);
        // currentPriceDisplay = `${Math.min(...prices)} / ${Math.max(...prices)} ₽`;
        currentPriceDisplay = `от ${Math.min(...prices)} ₽`;
      } else if (item.sizes && item.sizes.length === 1) {
        currentPriceDisplay = `${item.sizes[0].price} ₽`;
      }
      else if (item.variants && item.variants.length > 1) {
        const prices = item.variants.map(v => v.price);
        const uniquePrices = [...new Set(prices)];
        currentPriceDisplay = uniquePrices.length === 1
          ? `${uniquePrices[0]} ₽`
          // : `${Math.min(...prices)}–${Math.max(...prices)} ₽`;
          : `от ${Math.min(...prices)} ₽`;
      } else if (item.variants && item.variants.length === 1) {
        currentPriceDisplay = `${item.variants[0].price} ₽`;
      }
      else {
        currentPriceDisplay = `${item.price} ₽`;
      }

      const oldPriceHtml = item.noneDiscount 
        ? `<div class="price-old">${item.noneDiscount} ₽</div>` 
        : '';

      const cartQty = getItemQuantityInCart(item.id);

      card.innerHTML = `
        <a class="card-link" href="${productLink}">
          <div class="card-media">
            ${item.isHit ? '<span class="hit-badge">ХИТ</span>' : ''}
            <img src="${item.img}" alt="${item.title}">
          </div>
        </a>

        <div class="card-body">
          <h3 class="card-title">${item.title}</h3>
          <p class="card-desc">${item.desc || '&nbsp;'}</p>

          <div class="card-bottom">
            <div class="card-price-container">
              ${oldPriceHtml}
              <div class="price-current">${currentPriceDisplay}</div>
            </div>

            <div class="card-actions">
              <a class="btn-secondary" href="${productLink}">Подробнее</a>
              <div class="cart-control" data-item-id="${item.id}">
                ${cartQty > 0 ? 
                  `<div class="quantity-control">
                    <button class="qty-btn qty-minus" data-id="${item.id}">−</button>
                    <span class="qty-display">${cartQty}</span>
                    <button class="qty-btn qty-plus" data-id="${item.id}">+</button>
                  </div>` :
                  `<button class="btn-add" data-id="${item.id}">В корзину</button>`
                }
              </div>
            </div>
          </div>
        </div>
      `;

      grid.appendChild(card);
    });
}

// ===========================
//     КОРЗИНА
// ===========================

function addToCart(id, title, price, img, size = null, addon = null, addonPrice = 0) {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  
  const itemKey = size ? `${id}_${size}` : id;
  const displayTitle = size ? `${title} (${size})` : title;
  const finalTitle = addon ? `${displayTitle} (${addon})` : displayTitle;
  const finalPrice = price + addonPrice;
  
  const existing = cart.find(x => x.itemKey === itemKey && x.addon === addon);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id, itemKey, title: finalTitle, price: finalPrice, img, size, addon, addonPrice, qty: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartUI();
  return cart.find(x => x.itemKey === itemKey && x.addon === addon);
}

function removeFromCart(id, size = null, addon = null) {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const itemKey = size ? `${id}_${size}` : id;
  const existing = cart.find(x => x.itemKey === itemKey && x.addon === addon);
  
  if (existing) {
    existing.qty--;
    if (existing.qty <= 0) {
      cart = cart.filter(x => x.itemKey !== itemKey || x.addon !== addon);
    }
  }
  
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartUI();
}

function getItemQuantityInCart(id) {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  return cart.filter(item => item.id === id).reduce((sum, item) => sum + item.qty, 0);
}

function updateCartUI() {
  MENU_ITEMS.forEach(item => {
    const cartControl = document.querySelector(`.cart-control[data-item-id="${item.id}"]`);
    if (!cartControl) return;
    
    const qty = getItemQuantityInCart(item.id);
    
    if (qty > 0 && !cartControl.querySelector('.quantity-control')) {
      cartControl.innerHTML = `
        <div class="quantity-control">
          <button class="qty-btn qty-minus" data-id="${item.id}">−</button>
          <span class="qty-display">${qty}</span>
          <button class="qty-btn qty-plus" data-id="${item.id}">+</button>
        </div>
      `;
    } else if (qty === 0 && !cartControl.querySelector('.btn-add')) {
      cartControl.innerHTML = `<button class="btn-add" data-id="${item.id}">В корзину</button>`;
    } else if (qty > 0) {
      cartControl.querySelector('.qty-display').textContent = qty;
    }
  });
}

// ===========================
//     МОДАЛКА РАЗМЕРА
// ===========================

function showSizeModal(item) {
  const modal = document.createElement('div');
  modal.className = 'size-modal-overlay';
  
  const options = item.sizes || item.variants;
  const modalTitle = item.sizes ? 'Выберите размер' : `Выберите вариант`;
  
  modal.innerHTML = `
    <div class="size-modal">
      <div class="size-modal-header">
        <h3>${modalTitle}</h3>
        <button class="size-modal-close">×</button>
      </div>
      <div class="size-modal-body">
        <h4>${item.title}</h4>
        <div class="size-options">
          ${options.map(option => `
            <button class="size-option" data-size="${option.name}" data-price="${option.price}">
              <span>${option.name}</span>
              <span>${option.price} ₽</span>
            </button>
          `).join('')}
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
  
  const close = () => {
    modal.remove();
    document.body.style.overflow = '';
  };

  modal.querySelector('.size-modal-close').onclick = close;
  modal.onclick = e => { if (e.target === modal) close(); };
  
  modal.querySelectorAll('.size-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const size = btn.dataset.size;
      const price = parseFloat(btn.dataset.price);
      addToCart(item.id, item.title, price, item.img, size);
      close();

      if (item.isShawerma) {
        maybeOfferShawerma(item.id);
      } else {
        maybeOfferSauce(item.id);
      }
    });
  });
}

// ===========================
//     ШАУРМА — ДОБАВКИ ЛОГИКА
// ===========================

let shawermaModalOpen = false;
const shawermaPromptedItems = new Set();

function maybeOfferShawerma(itemId) {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item || !item.isShawerma) return;

  shawermaPromptedItems.add(itemId);
  setTimeout(() => showShawermaModal(item), 10);
}

function showShawermaModal(item) {
  if (shawermaModalOpen) return;

  shawermaModalOpen = true;

  const shawermaAddons = [
    { name: "Бекон", price: 140 },
    { name: "Сыр", price: 40 },
    { name: "Грибы", price: 40 }
  ];

  const modal = document.createElement('div');
  modal.className = 'shawerma-modal-overlay';
  
  modal.innerHTML = `
    <div class="shawerma-modal">
      <div class="shawerma-modal-header">
        <h3>Хотите добавки?</h3>
        <button class="shawerma-modal-close">×</button>
      </div>
      <div class="shawerma-modal-body">
        <p>Сделайте шаурму ещё вкуснее</p>
        <div class="shawerma-options">
          ${shawermaAddons.map(addon => `
            <button class="shawerma-option" data-name="${addon.name}" data-price="${addon.price}">
              ${addon.name} — ${addon.price} ₽
            </button>
          `).join('')}
        </div>
        <button class="shawerma-skip">Нет, спасибо</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
  
  const close = () => {
    modal.remove();
    document.body.style.overflow = '';
    shawermaModalOpen = false;
  };

  modal.querySelector('.shawerma-modal-close').onclick = close;
  modal.querySelector('.shawerma-skip').onclick = () => {
    close();
   
  };
  modal.onclick = e => { if (e.target === modal) close(); };
  
  modal.querySelectorAll('.shawerma-option').forEach(btn => {
    btn.addEventListener('click', () => {
      // Получаем последний товар в корзине и обновляем его добавкой
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      if (cart.length > 0) {
        const lastItem = cart[cart.length - 1];
        lastItem.addon = btn.dataset.name;
        lastItem.addonPrice = parseFloat(btn.dataset.price);
        lastItem.title = `${lastItem.title} (${lastItem.addon})`;
        lastItem.price = lastItem.price + parseFloat(btn.dataset.price);
        localStorage.setItem('cart', JSON.stringify(cart));
      }
      
      close();
      updateFloatingCartBadge();
      updateCartUI();
      showNotification('Добавка добавлена!');
      
      
    });
  });
}

// ===========================
//     СОУС — УМНАЯ ЛОГИКА
// ===========================

let sauceModalOpen = false;
const saucePromptedItems = new Set(); // запоминаем, кому уже предлагали

function maybeOfferSauce(itemId) {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item || !item.suggestSauce) return;
  // if (saucePromptedItems.has(itemId)) return;

  saucePromptedItems.add(itemId);
  setTimeout(() => showSauceModal(), 10);
}

function showSauceModal() {
  if (sauceModalOpen) return;

  const sauceItem = MENU_ITEMS.find(item => item.isSauce);
  if (!sauceItem || !sauceItem.variants) return;

  sauceModalOpen = true; // ✅ только теперь

  const modal = document.createElement('div');
  modal.className = 'sauce-modal-overlay';
  
  modal.innerHTML = `
    <div class="sauce-modal">
      <div class="sauce-modal-header">
        <h3>Добавить соус?</h3>
        <button class="sauce-modal-close">×</button>
      </div>
      <div class="sauce-modal-body">
        <p>Сделайте блюдо ещё вкуснее</p>
        <div class="sauce-options">
          ${sauceItem.variants.map(sauce => `
            <button class="sauce-option" data-name="${sauce.name}" data-price="${sauce.price}">
              ${sauce.name} — ${sauce.price} ₽
            </button>
          `).join('')}
        </div>
        <button class="sauce-skip">Нет, спасибо</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
  
  const close = () => {
    modal.remove();
    document.body.style.overflow = '';
    sauceModalOpen = false; // ✅ всегда сбрасываем
  };

  modal.querySelector('.sauce-modal-close').onclick = close;
  modal.querySelector('.sauce-skip').onclick = () => {
    close();
    // Даже если пропустили соус, предлагаем напиток
    setTimeout(() => showDrinkModal(), 300);
  };
  modal.onclick = e => { if (e.target === modal) close(); };
  
  modal.querySelectorAll('.sauce-option').forEach(btn => {
    btn.addEventListener('click', () => {
      addToCart(
        sauceItem.id,
        sauceItem.title,
        parseFloat(btn.dataset.price),
        sauceItem.img,
        btn.dataset.name
      );
      close();
      updateFloatingCartBadge()
      showNotification('Соус добавлен!');
      
      // После добавления соуса предлагаем напиток
      setTimeout(() => showDrinkModal(), 300);
    });
  });
}

// ===========================
//     НАПИТОК — УМНАЯ ЛОГИКА
// ===========================

let drinkModalOpen = false;

function showDrinkModal() {
  if (drinkModalOpen) return;

  // Получаем популярные напитки из категории drinks
  const drinkItems = MENU_ITEMS.filter(item => item.category === 'drinks');
  if (!drinkItems || drinkItems.length === 0) return;

  drinkModalOpen = true;

  const modal = document.createElement('div');
  modal.className = 'drink-modal-overlay';
  
  modal.innerHTML = `
    <div class="drink-modal">
      <div class="drink-modal-header">
        <h3>Добавить напиток?</h3>
        <button class="drink-modal-close">×</button>
      </div>
      <div class="drink-modal-body">
        <p>Утолите жажду!</p>
        <div class="drink-options">
          ${drinkItems.map(drink => {
            // Если у напитка есть варианты, показываем первый вариант как пример
            if (drink.variants && drink.variants.length > 0) {
              return `
                <button class="drink-option" data-id="${drink.id}" data-has-variants="true">
                  <span>${drink.title}</span>
                  <span>от ${drink.variants[0].price} ₽</span>
                </button>
              `;
            } else {
              return `
                <button class="drink-option" data-id="${drink.id}" data-price="${drink.price}">
                  <span>${drink.title}</span>
                  <span>${drink.price} ₽</span>
                </button>
              `;
            }
          }).join('')}
        </div>
        <button class="drink-skip">Нет, спасибо</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
  
  const close = () => {
    modal.remove();
    document.body.style.overflow = '';
    drinkModalOpen = false;
  };

  modal.querySelector('.drink-modal-close').onclick = close;
  modal.querySelector('.drink-skip').onclick = close;
  modal.onclick = e => { if (e.target === modal) close(); };
  
  modal.querySelectorAll('.drink-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const drinkId = btn.dataset.id;
      const drink = MENU_ITEMS.find(item => item.id === drinkId);
      
      if (!drink) return;
      
      // Если у напитка есть варианты, показываем модалку выбора
      if (btn.dataset.hasVariants === 'true' && drink.variants) {
        close();
        showSizeModal(drink);
      } else {
        // Иначе просто добавляем в корзину
        const price = parseFloat(btn.dataset.price);
        addToCart(drink.id, drink.title, price, drink.img);
        updateFloatingCartBadge();
        close();
        
        showNotification('Напиток добавлен!');
      }
    });
  });
}

function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'cart-notification';
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.classList.add('show');
  }, 10);
  
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 2000);
}
// ===========================
//     УВЕДОМЛЕНИЕ
// ===========================

function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'cart-notification';
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => notification.classList.add('show'), 10);
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 2000);
}
// ===========================
//     ПЛАВАЮЩАЯ КНОПКА КОРЗИНЫ
// ===========================

function updateFloatingCartBadge() {
  const badge = document.querySelector('.floating-cart-badge');
  if (!badge) return;
  
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  
  badge.textContent = totalQty || '';
  
  if (totalQty > 0) {
    badge.style.display = 'flex';
  } else {
    badge.style.display = 'none';
  }
}
// ===========================
//     СОБЫТИЯ
// ===========================
function getInitialCategory() {
  const params = new URLSearchParams(window.location.search);
  const fromQuery = params.get('cat');
  const fromHash = window.location.hash.replace('#', '');
  return fromQuery || fromHash || 'all';
}

function setCategory(category) {
  const filters = Array.from(document.querySelectorAll('.menu-filters .filter'));
  const target = filters.find(btn => btn.dataset.cat === category);
  const nextCategory = target ? category : 'all';

  filters.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === nextCategory);
  });

  renderMenu(nextCategory);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.menu-filters .filter').forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.cat;
      setCategory(category);
      window.location.hash = category;
    });
  });

  setCategory(getInitialCategory());

  document.body.addEventListener('click', e => {
    if (e.target.classList.contains('btn-add')) {
      const id = e.target.dataset.id;
      const item = MENU_ITEMS.find(i => i.id === id);
      if (!item) return;

      if ((item.sizes && item.sizes.length > 1) || (item.variants && item.variants.length > 1)) {
        showSizeModal(item);
      } else {
        const price = item.sizes ? item.sizes[0].price :
                     item.variants ? item.variants[0].price :
                     item.price;
        addToCart(item.id, item.title, price, item.img);
        maybeOfferSauce(item.id);
         updateFloatingCartBadge();
      }
    }

    if (e.target.classList.contains('qty-plus')) {
      const id = e.target.dataset.id;
      const item = MENU_ITEMS.find(i => i.id === id);
      if (!item) return;

      if ((item.sizes && item.sizes.length > 1) || (item.variants && item.variants.length > 1)) {
        showSizeModal(item);
      } else {
        const price = item.sizes ? item.sizes[0].price : item.price;
        addToCart(item.id, item.title, price, item.img);
        
        if (item.isShawerma) {
          maybeOfferShawerma(item.id);
        } else {
          maybeOfferSauce(item.id);
        }
        updateFloatingCartBadge();
      }
    }

    if (e.target.classList.contains('qty-minus')) {
      const id = e.target.dataset.id;
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const firstItem = cart.find(item => item.id === id);
      if (firstItem) removeFromCart(id, firstItem.size, firstItem.addon);
       updateFloatingCartBadge();
    }
      
  });
   updateFloatingCartBadge();
});
