(function() {
  if (document.getElementById('particles-js')) {
    document.querySelector('.toggle-section').addEventListener('click', function() {
      toggleTheme();
    });
  }
})();

function toggleTheme() {
  const canvas = document.getElementById('particles-js');
  const header = canvas.nextSibling.nextSibling;
  header.classList.toggle('light-theme');
  header.classList.toggle('dark-theme');
  canvas.classList.toggle('light-theme');
  canvas.classList.toggle('dark-theme');
  document.querySelector('.toggle-btn').classList.toggle('light-theme');
  document.querySelector('.toggle-switch').classList.toggle('light-theme');
}