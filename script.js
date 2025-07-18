document.addEventListener('DOMContentLoaded', () => {
  const openButtons = document.querySelectorAll('a[id^="openModal"]');
  const modals = document.querySelectorAll('.modal');
  const closeButtons = document.querySelectorAll('.close');

  openButtons.forEach(button => {
    button.addEventListener('click', e => {
      e.preventDefault();
      const modalId = button.id.replace('openModal', 'myModal');
      const modal = document.getElementById(modalId);
      if (modal) modal.style.display = 'block';
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) modal.style.display = 'none';
    });
  });

  window.addEventListener('click', e => {
    modals.forEach(modal => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
});
