
document.addEventListener('DOMContentLoaded', function(){

  function setupBurger(burgerId, navId){
    const burger = document.getElementById(burgerId);
    const nav = document.getElementById(navId || 'nav');
    if(!burger || !nav) return;
    
    // Обработчик клика
    function handleBurgerClick(e) {
      e.preventDefault();
      e.stopPropagation();
      nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', nav.classList.contains('open'));
    }
    
    // Несколько типов событий для совместимости с Safari
    burger.addEventListener('click', handleBurgerClick);
    burger.addEventListener('touchend', handleBurgerClick);
    burger.style.userSelect = 'none';
    burger.style.webkitUserSelect = 'none';
  }
  setupBurger('burger','nav');
  setupBurger('burger2','nav2');
  setupBurger('burger3','nav3');
  setupBurger('burger4', 'nav4');
  setupBurger('burger5', 'nav5');


  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth'});
      }
    });
  });


  const search = document.getElementById('menuSearch');
  if(search){
    const grid = document.getElementById('menuGrid');
    const cards = grid.querySelectorAll('.menu-card');
    search.addEventListener('input', ()=>{
      const q = search.value.trim().toLowerCase();
      cards.forEach(c=>{
        const text = c.innerText.toLowerCase();
        c.style.display = text.includes(q) ? '' : 'none';
      });
    });
  }
});

let lastScroll = 0;
const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {

  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (window.innerWidth <= 900) {

    if (scrollTop > lastScroll && scrollTop > 100) {
      header.classList.add('hide');   // вниз
    } else {
      header.classList.remove('hide'); // вверх
    }

  }

  lastScroll = scrollTop <= 0 ? 0 : scrollTop;
});
