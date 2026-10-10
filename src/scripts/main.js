/* ==========================================================================
   LUNARIA ATELIER — MAIN APPLICATION ENTRY
   ========================================================================== */

import { initBookingEngine, showToast } from './booking.js';
import { initStudioLightbox } from './lightbox.js';
import { initTreatmentsModal } from './treatments-modal.js';
import { initJournalReader } from './journal-reader.js';
import { initAppSwitcher } from './app-switcher.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize sub-modules
  initBookingEngine();
  initStudioLightbox();
  initTreatmentsModal();
  initJournalReader();
  initAppSwitcher();

  // 1. Sticky Header Transition on Scroll
  const header = document.querySelector('.header');
  const scrollThreshold = 40;

  function handleScroll() {
    if (window.scrollY > scrollThreshold) {
      header?.classList.add('is-scrolled');
    } else {
      header?.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 2. Mobile Navigation Drawer Toggle
  const toggleBtn = document.querySelector('.nav-toggle-btn');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const drawerLinks = document.querySelectorAll('.mobile-nav-link');

  function toggleDrawer() {
    const isOpen = drawer?.classList.toggle('is-open');
    toggleBtn?.classList.toggle('is-active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  function closeDrawer() {
    drawer?.classList.remove('is-open');
    toggleBtn?.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  toggleBtn?.addEventListener('click', toggleDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // 3. Smooth Anchor Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href')?.substring(1);
      if (!targetId) return;

      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 90;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // 4. Newsletter Form Handling
  const newsletterForm = document.getElementById('newsletter-form');
  newsletterForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('newsletter-email');
    if (input && input.value) {
      showToast('Thank you for subscribing to Notes on Beauty.');
      input.value = '';
    }
  });

  // 5. Discover All Treatments button
  const discoverTreatmentsBtn = document.getElementById('discover-treatments-link');
  discoverTreatmentsBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    if (window.openTreatmentModal) {
      window.openTreatmentModal('signature-facial');
    }
  });

  // 6. Explore Studio button
  const exploreStudioBtn = document.getElementById('btn-explore-studio');
  exploreStudioBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    const firstGalleryItem = document.querySelector('.studio-gallery-item');
    firstGalleryItem?.click();
  });

  // 7. Meet The Team button
  const meetTeamBtn = document.getElementById('btn-meet-team');
  meetTeamBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    showToast('Elena, Camille, & Marcus are welcoming appointments this week.');
  });
});
