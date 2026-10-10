/* ==========================================================================
   LUNARIA ATELIER — STUDIO GALLERY LIGHTBOX
   Smooth, High-Resolution Image Lightbox with Keyboard Navigation
   ========================================================================== */

export const studioGalleryData = [
  {
    src: '/images/studio_reception.jpg',
    title: 'The Reception Sanctuary',
    caption: 'Curved oak architecture, natural lime-wash walls, and acoustic serenity upon arrival.'
  },
  {
    src: '/images/studio_room.jpg',
    title: 'The Treatment Suite',
    caption: 'Unhurried atmosphere, layered raw oatmeal linens, and gentle warm ambient lighting.'
  },
  {
    src: '/images/studio_details.jpg',
    title: 'Tactile Rituals & Formulations',
    caption: 'Cold-pressed botanical oils in amber vessels, artisanal ceramics, and organic stone trays.'
  },
  {
    src: '/images/studio_consultation.jpg',
    title: 'The Consultation Lounge',
    caption: 'A dedicated space for dialogue, bespoke herbal tea infusions, and skin diagnostic mapping.'
  }
];

export function initStudioLightbox() {
  let currentIndex = 0;

  // Create lightbox DOM elements if not present
  let lightboxEl = document.getElementById('studio-lightbox-modal');
  if (!lightboxEl) {
    lightboxEl = document.createElement('div');
    lightboxEl.id = 'studio-lightbox-modal';
    lightboxEl.className = 'modal-overlay';
    lightboxEl.innerHTML = `
      <div class="lightbox-content">
        <button class="modal-close-btn" id="lightbox-close-btn" aria-label="Close Lightbox">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <button class="lightbox-nav-btn lightbox-prev" id="lightbox-prev-btn" aria-label="Previous Image">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div class="lightbox-img-wrapper">
          <img id="lightbox-active-img" src="" alt="Lunaria Atelier Space" />
        </div>

        <button class="lightbox-nav-btn lightbox-next" id="lightbox-next-btn" aria-label="Next Image">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        <div class="lightbox-caption" id="lightbox-caption-text"></div>
      </div>
    `;
    document.body.appendChild(lightboxEl);
  }

  const activeImg = document.getElementById('lightbox-active-img');
  const captionText = document.getElementById('lightbox-caption-text');
  const closeBtn = document.getElementById('lightbox-close-btn');
  const prevBtn = document.getElementById('lightbox-prev-btn');
  const nextBtn = document.getElementById('lightbox-next-btn');

  function openLightbox(index) {
    currentIndex = index;
    updateDisplay();
    lightboxEl.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightboxEl.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  function updateDisplay() {
    const item = studioGalleryData[currentIndex];
    if (!item) return;
    activeImg.src = item.src;
    activeImg.alt = item.title;
    captionText.innerHTML = `<strong>${item.title}</strong> — ${item.caption}`;
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + studioGalleryData.length) % studioGalleryData.length;
    updateDisplay();
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % studioGalleryData.length;
    updateDisplay();
  }

  // Bind clicks on gallery cards
  document.querySelectorAll('.studio-gallery-item').forEach((item, index) => {
    item.addEventListener('click', () => {
      openLightbox(index);
    });
  });

  closeBtn.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', (e) => { e.stopPropagation(); prevImage(); });
  nextBtn.addEventListener('click', (e) => { e.stopPropagation(); nextImage(); });

  lightboxEl.addEventListener('click', (e) => {
    if (e.target === lightboxEl) closeLightbox();
  });

  window.addEventListener('keydown', (e) => {
    if (!lightboxEl.classList.contains('is-active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
  });
}
