(function() {
  // Loads particles js
  if (document.getElementById('particles-js')) {
    particlesJS.load('particles-js', '../particlesjs-config.json', function() {
      // console.log('callback - particles.js config loaded');
    });
  };
})();
