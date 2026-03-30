/**
 * Random Pop Tart image selector
 * Displays random Pop Tart images on load and on button click
 */

// Array of Pop Tart images and flavors
const popTarts = [
  { flavor: 'Strawberry', image: 'images/poptarts/strawberry.jpg' },
  { flavor: 'Brown Sugar Cinnamon', image: 'images/poptarts/brown-sugar-cinnamon.jpg' },
  { flavor: 'Blueberry', image: 'images/poptarts/blueberry.jpg' },
  { flavor: 'Frosted Chocolate', image: 'images/poptarts/frosted-chocolate.jpg' },
  { flavor: 'Cherry', image: 'images/poptarts/cherry.jpg' },
  { flavor: 'Raspberry', image: 'images/poptarts/raspberry.jpg' },
  { flavor: 'Unfrosted Strawberry', image: 'images/poptarts/unfrosted-strawberry.jpg' },
  { flavor: 'S\'mores', image: 'images/poptarts/smores.jpg' },
  { flavor: 'Wildlberry', image: 'images/poptarts/wildberry.jpg' },
  { flavor: 'French Toast', image: 'images/poptarts/french-toast.jpg' },
  { flavor: 'Brown Sugar', image: 'images/poptarts/brown-sugar.jpg' },
  { flavor: 'Cookies and Cream', image: 'images/poptarts/cookies-cream.jpg' },
];

let currentIndex = -1;

/**
 * Get a random Pop Tart entry (avoiding repeats)
 */
function getRandomPopTart() {
  let newIndex;

  // Ensure we don't get the same Pop Tart twice in a row
  do {
    newIndex = Math.floor(Math.random() * popTarts.length);
  } while (newIndex === currentIndex && popTarts.length > 1);

  currentIndex = newIndex;
  return popTarts[newIndex];
}

/**
 * Display a Pop Tart image and flavor name
 */
function displayPopTart(popTart) {
  const imageElement = document.getElementById('pop-tart-image');
  const captionElement = document.getElementById('flavor-caption');

  // Add loading state
  imageElement.closest('.image-container').classList.add('loading');

  // Fade out current content
  imageElement.style.opacity = '0';
  captionElement.style.opacity = '0';

  // Update image and caption
  setTimeout(() => {
    imageElement.src = popTart.image;
    captionElement.textContent = popTart.flavor;

    // Fade back in
    imageElement.style.opacity = '1';
    captionElement.style.opacity = '1';

    // Remove loading state
    imageElement.closest('.image-container').classList.remove('loading');
  }, 150);
}

/**
 * Initialize the random image display
 */
function initRandomImage() {
  // Display a random Pop Tart on page load
  const initialPopTart = getRandomPopTart();
  displayPopTart(initialPopTart);

  // Set up the "Show Me Another" button
  const nextButton = document.getElementById('next-button');
  if (nextButton) {
    nextButton.addEventListener('click', () => {
      const nextPopTart = getRandomPopTart();
      displayPopTart(nextPopTart);

      // Optional: Add a little animation to the button
      nextButton.style.transform = 'scale(0.95)';
      setTimeout(() => {
        nextButton.style.transform = 'scale(1)';
      }, 100);
    });
  }

  // Add smooth transitions to images
  const imageElement = document.getElementById('pop-tart-image');
  if (imageElement) {
    imageElement.style.transition = 'opacity 0.3s ease';
  }

  const captionElement = document.getElementById('flavor-caption');
  if (captionElement) {
    captionElement.style.transition = 'opacity 0.3s ease';
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initRandomImage);
} else {
  initRandomImage();
}

// Optional: Allow keyboard shortcut (spacebar) to get next Pop Tart
document.addEventListener('keydown', (e) => {
  if (e.code === 'Space' && document.getElementById('next-button')) {
    e.preventDefault();
    document.getElementById('next-button').click();
  }
});
