function getCart(){ return JSON.parse(localStorage.getItem('cart')||'[]'); }
function saveCart(c){ localStorage.setItem('cart', JSON.stringify(c)); }

document.addEventListener('DOMContentLoaded', function(){
  const updateBadge = ()=>{
    const badge = document.querySelector('.cart-badge');
    if(!badge) return;
    const cart = getCart();
    const sum = cart.reduce((s,i)=>s+i.qty,0);
    badge.textContent = sum || '';
  };
  updateBadge();
});
