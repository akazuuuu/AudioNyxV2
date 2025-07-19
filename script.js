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

  const video = document.getElementById('scrollVideo');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScroll;

    const duration = video.duration || 1; // Prevent NaN before video loads
    video.currentTime = scrollFraction * duration;
  });

  // Wait for metadata to ensure duration is known
  video.addEventListener('loadedmetadata', () => {
    video.pause(); // Pause to prevent autoplay
  });