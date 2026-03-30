/**
 * Theme system for poprocks
 * Supports multiple psychedelic/grungy color themes
 * Randomly selects a theme on page load
 */

const themes = [
  {
    name: 'warm-psychedelic',
    primary: '#ff006e',
    secondary: '#ffbe0b',
    accent: '#8338ec',
    background: '#fbf5e9',
    textDark: '#1a1a1a',
    textLight: '#ffffff',
  },
  {
    name: 'cool-neon',
    primary: '#00d9ff',
    secondary: '#ff006e',
    accent: '#b537f2',
    background: '#0a0a1a',
    textDark: '#00d9ff',
    textLight: '#ffffff',
  },
  {
    name: 'earthy-grungy',
    primary: '#8b4513',
    secondary: '#d4a574',
    accent: '#6b3410',
    background: '#e8dcc8',
    textDark: '#3e2723',
    textLight: '#ffffff',
  },
  {
    name: 'vibrant-sunset',
    primary: '#ff5733',
    secondary: '#ffc300',
    accent: '#c70039',
    background: '#fff5e6',
    textDark: '#2c1810',
    textLight: '#ffffff',
  },
  {
    name: 'retro-digital',
    primary: '#ff00ff',
    secondary: '#00ffff',
    accent: '#ffff00',
    background: '#1a1a2e',
    textDark: '#00ffff',
    textLight: '#ffffff',
  },
  {
    name: 'bubblegum-dream',
    primary: '#ff1493',
    secondary: '#ff69b4',
    accent: '#ba55d3',
    background: '#fff0f5',
    textDark: '#6b1b47',
    textLight: '#ffffff',
  },
  {
    name: 'forest-mystique',
    primary: '#2d6a4f',
    secondary: '#a8dadc',
    accent: '#f1faee',
    background: '#1b3a2e',
    textDark: '#a8dadc',
    textLight: '#ffffff',
  },
];

/**
 * Initialize theme on page load
 */
function initTheme() {
  // Always select a random theme on page load for variety
  const selectedTheme = themes[Math.floor(Math.random() * themes.length)];

  // Apply the theme
  applyTheme(selectedTheme);
}

/**
 * Apply a theme by setting CSS custom properties
 * @param {Object} theme - Theme object with color properties
 */
function applyTheme(theme) {
  const root = document.documentElement;

  root.style.setProperty('--primary', theme.primary);
  root.style.setProperty('--secondary', theme.secondary);
  root.style.setProperty('--accent', theme.accent);
  root.style.setProperty('--background', theme.background);
  root.style.setProperty('--text-dark', theme.textDark);
  root.style.setProperty('--text-light', theme.textLight);

  // For accessibility, update the data-theme attribute
  root.setAttribute('data-theme', theme.name);
}

/**
 * Cycle to the next theme (useful for adding a theme switcher button later)
 */
function nextTheme() {
  const currentThemeName = document.documentElement.getAttribute('data-theme');
  const currentIndex = themes.findIndex(t => t.name === currentThemeName);
  const nextIndex = (currentIndex + 1) % themes.length;

  applyTheme(themes[nextIndex]);
}

/**
 * Get a random theme (different from current)
 */
function randomizeTheme() {
  const currentThemeName = document.documentElement.getAttribute('data-theme');
  const availableThemes = themes.filter(t => t.name !== currentThemeName);

  if (availableThemes.length > 0) {
    const randomTheme = availableThemes[Math.floor(Math.random() * availableThemes.length)];
    applyTheme(randomTheme);
  }
}

// Initialize theme when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTheme);
} else {
  initTheme();
}
