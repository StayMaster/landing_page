function setTheme(dark: boolean) {
  document.documentElement.classList.toggle('dark', dark);
  localStorage.setItem('theme', dark ? 'dark' : 'light');
  document.querySelectorAll('[data-theme-icon="sun"]').forEach((el) => {
    el.classList.toggle('hidden', !dark);
  });
  document.querySelectorAll('[data-theme-icon="moon"]').forEach((el) => {
    el.classList.toggle('hidden', dark);
  });
}

document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
  btn.addEventListener('click', () => {
    setTheme(!document.documentElement.classList.contains('dark'));
  });
});

// Sync icons on load
setTheme(document.documentElement.classList.contains('dark'));
