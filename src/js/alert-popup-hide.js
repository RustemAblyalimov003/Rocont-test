document.addEventListener('DOMContentLoaded', () => {
  const alertPopup = document.getElementById('alert-popup');
  const closeBtn = document.getElementById('alert-popup-cross');

  if (!alertPopup || !closeBtn) return;

  closeBtn.addEventListener('click', () => {
    alertPopup.classList.remove('show');

    setTimeout(() => {
      alertPopup.style.display = 'none';
    }, 400);
  });

});
