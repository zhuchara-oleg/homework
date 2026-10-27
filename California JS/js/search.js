  document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.search__button-item');
  const input = document.querySelector('.search__input');

  if (!input) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.textContent.trim();
      input.value = text;
      input.focus();
    });
  });
});
