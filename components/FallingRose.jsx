'use client'

// components/FallingRoseAnimation.js
import { useEffect } from 'react';

const FallingRoseAnimation = () => {
  useEffect(() => {
    const roseContainer = document.querySelector('.rose-container');

    function createRosePetals() {
      const petalCount = 20; // Number of rose petals
      for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.classList.add('rose-petal');
        roseContainer.appendChild(petal);
        animateRosePetal(petal);
      }
    }

    function animateRosePetal(petal) {
      const startX = Math.random() * window.innerWidth; // Random horizontal position
      const startY = -10; // Start from above the screen
      const endY = window.innerHeight; // End at the bottom of the screen
      const duration = Math.random() * 3000 + 3000; // Random duration between 3 to 6 seconds

      petal.style.left = startX + 'px';
      petal.style.top = startY + 'px';

      function step(timestamp) {
        if (!petal.start) {
          petal.start = timestamp;
        }
        const elapsed = timestamp - petal.start;
        const progress = elapsed / duration;

        petal.style.top = startY + progress * (endY - startY) + 'px';

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          petal.remove(); // Remove petal after animation completes
        }
      }

      requestAnimationFrame(step);
    }

    createRosePetals();
  }, []);

  return <div className="rose-container" />;
};

export default FallingRoseAnimation;
