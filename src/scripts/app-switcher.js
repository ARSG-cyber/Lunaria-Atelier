/* ==========================================================================
   LUNARIA ATELIER — APP SWITCHER & MOBILE BOTTOM BAR NAVIGATION
   Enables dual experience: Editorial Website & Luxury Mobile App
   ========================================================================== */

import { showToast } from './booking.js';

export function initAppSwitcher() {
  let isSimulator = false;

  // Create the desktop floating simulator button
  const toggleBtn = document.createElement('button');
  toggleBtn.className = 'app-simulator-toggle-btn';
  toggleBtn.id = 'app-view-toggle-btn';
  toggleBtn.setAttribute('aria-label', 'Toggle Mobile App Simulator View');
  toggleBtn.innerHTML = `
    <span class="pulse-dot"></span>
    <span id="app-toggle-label">✦ Preview Mobile App</span>
  `;
  document.body.appendChild(toggleBtn);

  const toggleLabel = document.getElementById('app-toggle-label');

  function toggleMode() {
    isSimulator = !isSimulator;
    const frameWrapper = document.getElementById('app-viewport-container');

    if (isSimulator) {
      document.body.classList.add('is-app-simulator');
      toggleLabel.innerText = '✦ Back to Desktop Web';
      showToast('Switched to Luxury Mobile App Mode');
    } else {
      document.body.classList.remove('is-app-simulator');
      toggleLabel.innerText = '✦ Preview Mobile App';
      showToast('Switched to Editorial Desktop Web');
    }
  }

  toggleBtn.addEventListener('click', toggleMode);

  // Also bind any in-header "✦ App View" toggle
  document.querySelectorAll('.view-mode-toggle').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      toggleMode();
    });
  });

  // Mobile Bottom App Bar Tab Interactions
  const tabs = document.querySelectorAll('.mobile-app-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-target');
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      if (targetId) {
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Highlight bottom bar tabs during scroll
  const sections = ['hero', 'treatments', 'the-studio', 'journal', 'booking'];
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 200;
    sections.forEach(secId => {
      const el = document.getElementById(secId);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          tabs.forEach(t => {
            if (t.getAttribute('data-target') === secId) {
              t.classList.add('active');
            } else if (!t.classList.contains('mobile-app-tab-book')) {
              t.classList.remove('active');
            }
          });
        }
      }
    });
  }, { passive: true });
}
