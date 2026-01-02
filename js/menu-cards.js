const MENU_ITEMS = [
  {
    id: "b1",
    file: "b1.html",
    title: "Шаурма со свининой",
    img: "images/placeholder-1.jpg",
    price: 275,
    sizes: [
      { name: "Стандартная", price: 275 },
      { name: "Большая", price: 315 }
    ],
    desc: "Лаваш/Булка, сочная свинина, помидоры • Огурцы, капуста • 2 вида соуса",
    category: "shawarma",
    
  },
  {
    id: "b1",
    file: "b1.html",
    title: "Шаурма с курицей",
    img: "images/placeholder-1.jpg",
    price: 275,
    sizes: [
      { name: "Стандартная", price: 275 },
      { name: "Большая", price: 315 }
    ],
    desc: "Лаваш/Булка, сочная курица, помидоры • Огурцы, капуста • 2 вида соуса",
    category: "shawarma",

  },
  {
    id: "b2",
    file: "b2.html",
    title: "Комбо",
    img: "images/placeholder-2.jpg",
    price: 230,
    desc: "Картошка фри + корн дог 2 шт + соус на выбор",
    category: "dinner",
    
  },
  {
    id: "b3",
    file: "b3.html",
    title: "Вок лапша Свинина",
    img: "images/placeholder-3.jpg",
    price: 300,
    desc: "Лапша на выбор – Удон/Фунчоза Свинина, грибы, перец болгарский, фасоль стручковая, лук, имбирь, терияки соус, кунжут",
    category: "noodles",
    
  },
  {
    id: "b3",
    file: "b3.html",
    title: "Вок лапша Курица",
    img: "images/placeholder-3.jpg",
    price: 300,
    desc: "Лапша на выбор – Удон/Фунчоза Курятина, грибы, перец болгарский, фасоль стручковая, лук, имбирь, терияки соус, кунжут",
    category: "noodles",
    
  },
  {
    id: "b3",
    file: "b3.html",
    title: "Вок лапша Тунец",
    img: "images/placeholder-3.jpg",
    price: 400,
    desc: "Лапша на выбор – Удон/Фунчоза Тунец, грибы, перец болгарский, фасоль стручковая, лук, имбирь, терияки соус, кунжут",
    category: "noodles",
    
  },
   {
    id: "b3",
    file: "b3.html",
    title: "Вок Лапша Овощи",
    img: "images/placeholder-3.jpg",
    price: 250,
    desc: "Лапша на выбор – Удон/Фунчоза Вкусные Грибы, острый перец болгарский, фасоль стручковая, лук, имбирь, терияки соус, кунжут",
    category: "noodles",
    
  },
  {
    id: "b3",
    file: "b3.html",
    title: "Вок Лапша Морепродукты",
    img: "images/placeholder-3.jpg",
    price: 400,
    desc: "Лапша на выбор – Удон/Фунчоза Много креветок, кальмары, мидии, грибы, перец болгарский, фасоль стручковая, лук, имбирь, терияки соус, кунжут",
    category: "noodles",
    
  },
  {
    id: "b4",
    file: "b4.html",
    title: "Пельмени",
    img: "images/placeholder-4.jpg",
    price: 275,
    sizes: [
      { name: "Фирменные", price: 275 },
      { name: "Сибирские", price: 275 },
      { name: "Фри", price: 275 },
      
    ],
    desc: "Фирменные – секретный & фирменный вкус от Сытого Папика Сибирские – с сочным фаршом, насыщенный вкус Фри – жаренные во фритюре",
    category: "dinner",
    
  },
  {
    id: "b5",
    file: "b5.html",
    title: "Кофе и чай",
    img: "images/placeholder-5.jpg",
    price: 45,
    sizes: [
      { name: "Американо", price: 70 },
      { name: "Капучино", price: 90 },
      { name: "Латте", price: 100 },
      { name: "Эспрессо", price: 70 },
      { name: "Флет Уайт", price: 140},
      { name: "Чай зеленый/черный/травяной ", price: 45 },
    ],
    desc: "Американо – 70₽ Капучино – 90₽ Латте – 100₽ Эспрессо – 70₽ Флет Уайт – 140₽ Чай зеленый/черный/травяной – 45₽ Лимон или Молоко (+10₽)",
    category: "drinks",
    
  },
  // {
  //   id: "b6",
  //   file: "b6.html",
  //   title: "Корн-доги",
  //   img: "images/placeholder-6.jpg",
  //   price: 100,
  //   desc: "123",
  //   category: "bludo",
  //   noneDiscount: 300
  // },
  {
    id: "b7",
    file: "b7.html",
    title: "Картошка по деревенски",
    img: "images/placeholder-7.jpg",
    price: 100,
    desc: "Описание блюда",
    category: "dinner",
    
  },
  {
    id: "b8",
    file: "b8.html",
    title: "Креветки в кляре с соусом Терияки",
    img: "images/placeholder-8.jpg",
    price: 230,
    desc: "КРЕВЕТКИ в кляре с соусом ТЕРИЯКИ 6 штук (100 грамм)",
    category: "dinner",
    
  },
  // {
  //   id: "b9",
  //   file: "b9.html",
  //   title: "Шаурма в булке",
  //   img: "images/placeholder-9.jpg",
  //   price: 100,
  //   desc: "Описание блюда",
  //   category: "shawarma",
  //   noneDiscount: 300
  // },
  // {
  //   id: "b10",
  //   file: "b10.html",
  //   title: "Панини по-турецки",
  //   img: "images/placeholder-10.jpg",
  //   price: 100,
  //   desc: "Описание блюда",
  //   category: "panini",
  //   noneDiscount: 300
  // },
  {
    id: "b11",
    file: "b11.html",
    title: "Шаурма по-гречески",
    img: "images/placeholder-11.jpg",
    price: 275,
    sizes: [
      { name: "Стандартная", price: 275 },
      { name: "Большая", price: 325 }
    ],
    desc: "Хрустящая булка, поджаристая курица, сыр фета, маслины и вкусные овощи",
    category: "shawarma",
    
  },
  // {
  //   id: "b12",
  //   file: "b12.html",
  //   title: "Фахито",
  //   img: "images/placeholder-12.jpg",
  //   price: 100,
  //   desc: "Описание блюда",
  //   category: "shawarma",
  //   noneDiscount: 300
  // },
  // {
  //   id: "b13",
  //   file: "b13.html",
  //   title: "Буррито",
  //   img: "images/placeholder-13.jpg",
  //   price: 100,
  //   desc: "Описание блюда",
  //   category: "shawarma",
  //   noneDiscount: 300
  // },

  {
    id: "b14",
    file: "b14.html",
    title: "Ланч бокс",
    img: "images/placeholder-14.jpg",
    price: 275,
    sizes: [
      { name: "Стандартная", price: 275 },
      { name: "Большая", price: 325 }
    ],
    desc: "Курица или Свинина, Картошка по-деревенски, Огручики, Помидорчики, пекинская капуста, маринованный лучок, Свежий Лаваш, Вкусный соус",
    category: "dinner",
    
  },

  {
    id: "b15",
    file: "b15.html",
    title: "Мега шава",
    img: "images/placeholder-15.jpg",
    price: 375,
    desc: "Лаваш/Булка, Сочная свинина или курица, помидоры, огурцы, капуста, два вида вкусного соуса, картофель по деревенски",
    category: "shawarma",
    
  },

  {
    id: "b16",
    file: "b16.html",
    title: "Вареники Картофель/Творог",
    img: "images/placeholder-16.jpg",
    price: 225,
    sizes: [
      { name: "С картофелем", price: 225 },
      { name: "С творогом", price: 225 },
      
    ],
    desc: "Вареники с картофелем или творогом на выбор",
    category: "dinner",
    
  },

  {
    id: "b17",
    file: "b17.html",
    title: "Картошка по-деревенски",
    img: "images/placeholder-17.jpg",
    price: 125,

    desc: "Картошка по-деревенски (100 грамм) Соуса (+35₽) Чесночный, Томатный обычный/острый, Сырный, Кисло-Сладкий, Терияки",
    category: "dinner",
    
  },

  {
    id: "b18",
    file: "b18.html",
    title: "Соусы в наличии",
    img: "images/placeholder-18.jpg",
    price: 35,
    sizes: [
      { name: "Чесночный", price: 35 },
      { name: "Томатный обычный/острый", price: 35 },
      { name: "Сырный", price: 35 },
      { name: "Кисло-Сладкий", price: 35 },
      { name: "Терияки", price: 35 },
    ],

    desc: "Чесночный, Томатный обычный/острый, Сырный, Кисло-Сладкий, Терияки.",
    // category: "bludo",
    
  },

  {
    id: "b19",
    file: "b19.html",
    title: "Кола/Пепси",
    img: "images/placeholder-20.jpg",
    price: 100,

    desc: "Кола или Пепси 0,5 ПЭТ 0,33 ж/б",
    category: "drinks",
    
  },

  {
    id: "b20",
    file: "b20.html",
    title: "Вода",
    img: "images/placeholder-21.jpg",
    price: 50,

    desc: "Вода 0,5",
    category: "drinks",
    
  },

  {
    id: "b30",
    file: "b20.html",
    title: "Соки",
    img: "images/placeholder-22.jpg",
    price: 50,

    desc: "Соки 0,2 л., наличие уточняйте по телефону",
    category: "drinks",
    
  },
  
  {
    id: "b40",
    file: "b20.html",
    title: "Айран/Тан",
    img: "images/placeholder-23.jpg",
    price: 80,
    sizes: [
      { name: "Айран", price: 80 },
      { name: "Тан", price: 80 }
     
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

      // --- ЛОГИКА ЦЕНЫ ---
      let currentPriceDisplay = '';
      if (item.sizes && item.sizes.length > 1) {
        const prices = item.sizes.map(s => s.price);
        currentPriceDisplay = `${Math.min(...prices)}–${Math.max(...prices)} ₽`;
      } else if (item.sizes && item.sizes.length === 1) {
        currentPriceDisplay = `${item.sizes[0].price} ₽`;
      } else {
        currentPriceDisplay = `${item.price} ₽`;
      }

      // Формируем HTML для старой цены, если поле noneDiscount существует
      const oldPriceHtml = item.noneDiscount 
        ? `<div class="price-old">${item.noneDiscount} ₽</div>` 
        : '';
      // ------------------

      const cartQty = getItemQuantityInCart(item.id);

      card.innerHTML = `
        <a class="card-link" href="${productLink}">
          <div class="card-media">
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
//     ДОБАВЛЕНИЕ В КОРЗИНУ
// ===========================

function addToCart(id, title, price, img, size = null) {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  
  // Создаем уникальный ключ для товара с размером
  const itemKey = size ? `${id}_${size}` : id;
  const displayTitle = size ? `${title} (${size})` : title;
  
  const existing = cart.find(x => x.itemKey === itemKey);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({ 
      id, 
      itemKey,
      title: displayTitle, 
      price, 
      img, 
      size,
      qty: 1 
    });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartUI();
}

function removeFromCart(id, size = null) {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const itemKey = size ? `${id}_${size}` : id;
  const existing = cart.find(x => x.itemKey === itemKey);
  
  if (existing) {
    existing.qty--;
    if (existing.qty <= 0) {
      cart = cart.filter(x => x.itemKey !== itemKey);
    }
  }
  
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartUI();
}

function getItemQuantityInCart(id) {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  // Суммируем количество всех вариантов этого товара (разные размеры)
  return cart
    .filter(item => item.id === id)
    .reduce((sum, item) => sum + item.qty, 0);
}

function updateCartUI() {
  // Обновляем все карточки товаров
  MENU_ITEMS.forEach(item => {
    const cartControl = document.querySelector(`.cart-control[data-item-id="${item.id}"]`);
    if (!cartControl) return;
    
    const qty = getItemQuantityInCart(item.id);
    
    if (qty > 0) {
      cartControl.innerHTML = `
        <div class="quantity-control">
          <button class="qty-btn qty-minus" data-id="${item.id}">−</button>
          <span class="qty-display">${qty}</span>
          <button class="qty-btn qty-plus" data-id="${item.id}">+</button>
        </div>
      `;
    } else {
      cartControl.innerHTML = `
        <button class="btn-add" data-id="${item.id}">В корзину</button>
      `;
    }
  });
}

function showSizeModal(item) {
  const modal = document.createElement('div');
  modal.className = 'size-modal-overlay';
  modal.innerHTML = `
    <div class="size-modal">
      <div class="size-modal-header">
        <h3>Выберите размер</h3>
        <button class="size-modal-close">×</button>
      </div>
      <div class="size-modal-body">
        <h4>${item.title}</h4>
        <div class="size-options">
          ${item.sizes.map(size => `
            <button class="size-option" data-size="${size.name}" data-price="${size.price}">
              <span class="size-name">${size.name}</span>
              <span class="size-price">${size.price} ₽</span>
            </button>
          `).join('')}
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
  
  // Обработчики
  modal.querySelector('.size-modal-close').addEventListener('click', () => {
    modal.remove();
    document.body.style.overflow = '';
  });
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.remove();
      document.body.style.overflow = '';
    }
  });
  
  modal.querySelectorAll('.size-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const size = btn.dataset.size;
      const price = parseFloat(btn.dataset.price);
      addToCart(item.id, item.title, price, item.img, size);
      modal.remove();
      document.body.style.overflow = '';
    });
  });
}


// ===========================
//     ВЫЗОВЫ
// ===========================

document.addEventListener('DOMContentLoaded', () => {

  renderMenu();

  // Фильтры
  document.querySelectorAll('.menu-filters .filter').forEach(btn => {
    btn.addEventListener('click', () => {

      document
        .querySelectorAll('.menu-filters .filter')
        .forEach(b => b.classList.remove('active'));

      btn.classList.add('active');

      const category = btn.dataset.cat;
      renderMenu(category);
    });
  });

  // Обработка кликов
  document.body.addEventListener('click', e => {
    // Кнопка "В корзину"
    if (e.target.classList.contains('btn-add')) {
      const id = e.target.dataset.id;
      const item = MENU_ITEMS.find(i => i.id === id);
      
      if (!item) return;
      
      // Если есть размеры - показываем модалку выбора
      if (item.sizes && item.sizes.length > 1) {
        showSizeModal(item);
      } else {
        // Иначе добавляем сразу
        const price = item.sizes ? item.sizes[0].price : item.price;
        addToCart(item.id, item.title, price, item.img);
      }
    }
    
    // Кнопка "+"
    if (e.target.classList.contains('qty-plus')) {
      const id = e.target.dataset.id;
      const item = MENU_ITEMS.find(i => i.id === id);
      
      if (!item) return;
      
      // Если есть размеры - показываем модалку
      if (item.sizes && item.sizes.length > 1) {
        showSizeModal(item);
      } else {
        const price = item.sizes ? item.sizes[0].price : item.price;
        addToCart(item.id, item.title, price, item.img);
      }
    }
    
    // Кнопка "−"
    if (e.target.classList.contains('qty-minus')) {
      const id = e.target.dataset.id;
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      
      // Находим первый товар с этим ID и уменьшаем
      const firstItem = cart.find(item => item.id === id);
      if (firstItem) {
        removeFromCart(id, firstItem.size);
      }
    }
  });

});