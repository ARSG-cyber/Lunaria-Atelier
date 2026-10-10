/* ==========================================================================
   LUNARIA ATELIER — TREATMENTS MODAL & CATALOGUE
   Editorial Ritual Deep-Dive and Menu Drawer
   ========================================================================== */

export const extendedTreatments = [
  {
    id: 'signature-facial',
    name: 'The Signature Facial',
    tagline: 'Refreshed complexion & customized barrier therapy',
    duration: '60 minutes',
    price: '$195',
    image: '/images/treatment_facial.jpg',
    description: 'A personalized facial designed to refresh the skin and support a healthy-looking complexion. Every step is curated following your initial consultation and skin diagnostic.',
    steps: [
      'Warm botanical compress & aromatic welcome ritual',
      'Gentle double-oil cleanse with cold-pressed camellia & jojoba',
      'Ultrasonic enzymatic exfoliation tailored to your sensitivity',
      'Customized phyto-nutrient facial massage with warm stone therapy',
      'Antioxidant rich restorative mask and bespoke barrier finish'
    ],
    recommendedFor: 'Seasonal dehydration, dullness, tired skin seeking effortless radiance and gentle restoration.'
  },
  {
    id: 'sculpting-ritual',
    name: 'The Sculpting Ritual',
    tagline: 'Deep tissue facial release & lymphatic contouring',
    duration: '75 minutes',
    price: '$240',
    image: '/images/treatment_sculpting.jpg',
    description: 'A considered facial experience focused on massage, relaxation, and a refreshed appearance. Combining traditional buccal massage techniques, Bian stone gua sha, and lymphatic stimulation.',
    steps: [
      'Cervical and shoulder tension release with warm herbal oils',
      'Manual lymphatic drainage to reduce facial puffiness',
      'Sculptural intra-oral & deep muscle lifting massage',
      'Cool jade & Bian stone sculpting along cheekbones and jawline',
      'Cryo-toning botanical mist and firming peptide seal'
    ],
    recommendedFor: 'Facial tension, jaw clenching, fluid retention, or preparing for an important occasion.'
  },
  {
    id: 'skin-reset',
    name: 'The Skin Reset',
    tagline: 'Clarifying cellular renewal & microbiome balancing',
    duration: '45 minutes',
    price: '$165',
    image: '/images/treatment_reset.jpg',
    description: 'A tailored skincare treatment that begins with an assessment of your individual skin needs. Focused on clearing congestion, calming redness, and fortifying your skin’s natural lipid barrier.',
    steps: [
      'Micro-biome assessment and hydration mapping',
      'Gentle enzymatic clarifying peel (non-irritating, plant-derived)',
      'High-frequency purifying therapy and targeted blemish soothing',
      'Ceramide & centella soothing compress',
      'Weightless zinc and prebiotic defense emulsion'
    ],
    recommendedFor: 'Sensitive, reactive skin, blemish-prone complexions, or recovery after seasonal climate shifts.'
  },
  {
    id: 'restorative-escape',
    name: 'The Restorative Escape',
    tagline: 'Slow immersive ritual for nervous system and skin',
    duration: '90 minutes',
    price: '$310',
    image: '/images/treatment_escape.jpg',
    description: 'A slower, more immersive beauty ritual designed to create a moment of calm and care. Integrates holistic head-to-toe sensory relaxation, extended cranial massage, and advanced facial rejuvenation.',
    steps: [
      'Foot bath welcome with magnesium salts and dried organic botanicals',
      'Full facial ritual including double cleanse, deep hydration and LED light therapy',
      'Aromatic scalp and neck massage with warm rosemary-infused botanical oil',
      'Warm heated stone placement over thoracic energy points',
      'Herbal infusion tasting and unhurried transition back to the day'
    ],
    recommendedFor: 'Chronic stress, nervous system fatigue, deep grounding, and multi-sensory rejuvenation.'
  }
];

export function initTreatmentsModal() {
  let modalEl = document.getElementById('treatment-detail-modal');
  if (!modalEl) {
    modalEl = document.createElement('div');
    modalEl.id = 'treatment-detail-modal';
    modalEl.className = 'modal-overlay';
    modalEl.innerHTML = `
      <div class="modal-card">
        <button class="modal-close-btn" id="treatment-modal-close-btn" aria-label="Close Modal">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div id="treatment-modal-inner-content"></div>
      </div>
    `;
    document.body.appendChild(modalEl);
  }

  const innerContent = document.getElementById('treatment-modal-inner-content');
  const closeBtn = document.getElementById('treatment-modal-close-btn');

  function openTreatment(id) {
    const item = extendedTreatments.find(t => t.id === id) || extendedTreatments[0];
    innerContent.innerHTML = `
      <div style="margin-bottom: 1.5rem;">
        <span class="eyebrow" style="margin-bottom: 0.5rem;">SIGNATURE RITUAL</span>
        <h2 style="font-size: 2.2rem; margin-bottom: 0.5rem;">${item.name}</h2>
        <p style="font-family: var(--font-serif); font-size: 1.15rem; font-style: italic; color: var(--color-terracotta);">
          ${item.tagline}
        </p>
      </div>

      <div style="display: flex; gap: 1.5rem; margin-bottom: 1.5rem; padding: 0.85rem 1.25rem; background-color: var(--color-champagne-subtle); border-radius: 4px; border: 1px solid var(--color-sand);">
        <div>
          <span style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-taupe); display: block;">Duration</span>
          <strong style="color: var(--color-espresso);">${item.duration}</strong>
        </div>
        <div style="width: 1px; background-color: var(--color-sand);"></div>
        <div>
          <span style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-taupe); display: block;">Investment</span>
          <strong style="color: var(--color-espresso);">${item.price}</strong>
        </div>
      </div>

      <div style="margin-bottom: 1.75rem;">
        <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 260px; object-fit: cover; border-radius: 2px;" />
      </div>

      <p style="font-size: var(--text-base); line-height: 1.7; color: var(--color-taupe); margin-bottom: 1.5rem;">
        ${item.description}
      </p>

      <div style="margin-bottom: 1.75rem;">
        <h4 style="font-size: var(--text-sm); text-transform: uppercase; letter-spacing: 0.12em; color: var(--color-espresso); margin-bottom: 0.85rem;">
          The Experience Steps:
        </h4>
        <ul style="display: flex; flex-direction: column; gap: 0.6rem;">
          ${item.steps.map((s, idx) => `
            <li style="display: flex; align-items: baseline; gap: 0.75rem; font-size: 0.9rem; color: var(--color-taupe);">
              <span style="font-family: var(--font-serif); color: var(--color-terracotta); font-weight: 600;">0${idx + 1}</span>
              <span>${s}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div style="padding: 1.15rem; background-color: var(--color-ivory); border-left: 3px solid var(--color-terracotta); margin-bottom: 2rem; border-radius: 2px;">
        <span style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.12em; font-weight: 600; color: var(--color-espresso); display: block; margin-bottom: 0.25rem;">
          Recommended For:
        </span>
        <p style="font-size: 0.85rem; color: var(--color-taupe); margin: 0;">${item.recommendedFor}</p>
      </div>

      <div style="display: flex; justify-content: flex-end; gap: 1rem;">
        <button class="btn btn-secondary" id="modal-close-trigger">Close</button>
        <button class="btn btn-primary" id="modal-book-trigger">Reserve This Ritual →</button>
      </div>
    `;

    modalEl.classList.add('is-active');
    document.body.style.overflow = 'hidden';

    // Hook up internal buttons
    document.getElementById('modal-close-trigger')?.addEventListener('click', closeModal);
    document.getElementById('modal-book-trigger')?.addEventListener('click', () => {
      closeModal();
      if (window.selectTreatmentAndBook) {
        window.selectTreatmentAndBook(item.id);
      }
    });
  }

  function closeModal() {
    modalEl.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  modalEl.addEventListener('click', (e) => {
    if (e.target === modalEl) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (modalEl.classList.contains('is-active') && e.key === 'Escape') closeModal();
  });

  // Bind clicks from cards
  document.querySelectorAll('.treatment-card[data-treatment-id]').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-treatment-id');
      openTreatment(id);
    });
  });

  // Expose to window
  window.openTreatmentModal = openTreatment;
}
