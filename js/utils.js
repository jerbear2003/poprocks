/**
 * Utilities and interactive enhancements for poprocks
 * Adds keyboard shortcuts and fun interactions
 */

/**
 * Keyboard shortcuts
 */
document.addEventListener('keydown', (event) => {
  // Press 'T' to cycle through themes
  if (event.key.toLowerCase() === 't' && event.ctrlKey) {
    event.preventDefault();
    if (typeof nextTheme === 'function') {
      nextTheme();
      showNotification('Theme cycled! 🎨');
    }
  }

  // Press 'R' to randomize theme (if randomizeTheme exists)
  if (event.key.toLowerCase() === 'r' && event.ctrlKey) {
    event.preventDefault();
    if (typeof randomizeTheme === 'function') {
      randomizeTheme();
      showNotification('Theme randomized! 🌈');
    }
  }
});

/**
 * Show temporary notification
 */
function showNotification(message) {
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    font-family: var(--font-display, sans-serif);
    z-index: 1000;
    animation: slideInUp 0.3s ease-out;
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'fadeOut 0.3s ease-out';
    notification.style.opacity = '0';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 2000);
}

/**
 * Add smooth page transitions
 */
document.addEventListener('DOMContentLoaded', () => {
  // Add fade-in animation to body
  document.body.style.opacity = '0';
  document.body.style.animation = 'fadeIn 0.5s ease-out forwards';

  // Add sticker wobble on click for extra fun
  const stickers = document.querySelectorAll('.sticker--bold');
  stickers.forEach((sticker) => {
    sticker.addEventListener('mouseenter', () => {
      if (!sticker.classList.contains('sticker--wobble')) {
        sticker.style.animation = 'wobble 0.5s ease-in-out';
      }
    });
  });

  // Easter egg: konami code
  let konamiCode = [];
  const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

  document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join(',') === konamiPattern.join(',')) {
      activateEasterEgg();
    }
  });
});

/**
 * Easter egg activation - psychedelic colors!
 */
function activateEasterEgg() {
  showNotification('🎉 PSYCHEDELIC MODE ACTIVATED! 🎉');

  // Rapidly cycle through themes
  const themes = ['warm-psychedelic', 'cool-neon', 'retro-digital', 'bubblegum-dream'];
  let index = 0;

  const interval = setInterval(() => {
    if (index >= themes.length) {
      clearInterval(interval);
      showNotification('Mode normal restored 😌');
      return;
    }

    document.documentElement.setAttribute('data-theme', themes[index]);
    index++;
  }, 200);

  // Add some fun CSS during easter egg
  document.body.style.filter = 'hue-rotate(360deg)';
  setTimeout(() => {
    document.body.style.filter = 'none';
  }, 2000);
}

/**
 * Fade out animation (add to base.css eventually)
 */
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  /* Smooth color transitions when theme changes */
  body * {
    transition-property: background-color, color, border-color, box-shadow;
    transition-duration: 0.3s;
    transition-timing-function: ease;
  }

  /* Prevent transition overrides on hover */
  button:hover,
  a:hover,
  .sticker:hover {
    transition-duration: 0.2s;
  }
`;
document.head.appendChild(style);
