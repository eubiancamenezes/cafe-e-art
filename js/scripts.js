// ===== Menu Hambúrguer =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// ===== Modal Feedback =====
const form = document.getElementById('form-contato');
const modal = document.getElementById('modal-feedback');
const closeBtn = document.querySelector('.close');

form.addEventListener('submit', e => {
  e.preventDefault();
  modal.style.display = 'flex';
  form.reset();
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target === modal) modal.style.display = 'none';
});
