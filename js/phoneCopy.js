const toast = document.getElementById('copyToast');
let toastTimeout;

document.querySelectorAll('.phone-copy').forEach(el => {
  el.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(el.dataset.phone);

      // press-анимация
      el.classList.remove('copied'); // перезапуск
      void el.offsetWidth;
      el.classList.add('copied');

      // toast
      clearTimeout(toastTimeout);
      toast.classList.add('show');

      toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
      }, 1600);

    } catch (e) {
      console.error('Clipboard error', e);
    }
  });
});
