
document.addEventListener('DOMContentLoaded', function(){

  function setupBurger(burgerId, navId){
    const burger = document.getElementById(burgerId);
    const nav = document.getElementById(navId || 'nav');
    if(!burger || !nav) return;
    burger.addEventListener('click', () => {
      nav.classList.toggle('open');

      burger.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
  }
  setupBurger('burger','nav');
  setupBurger('burger2','nav2');
  setupBurger('burger3','nav3');


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
