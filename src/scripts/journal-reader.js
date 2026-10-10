/* ==========================================================================
   LUNARIA ATELIER — JOURNAL ARTICLE READER MODAL
   Editorial Reading Experience with Magazine Typography
   ========================================================================== */

export const journalArticles = [
  {
    id: 'building-ritual',
    category: 'RITUALS',
    title: 'Building a skincare ritual that works for you',
    readTime: '4 min read',
    author: 'Elena Rostova, Founder & Master Aesthetician',
    date: 'Autumn Edition',
    image: '/images/journal_ritual.jpg',
    lead: 'In a culture saturated with twelve-step regimens and fleeting trends, the most radical act for your skin is deliberate reduction.',
    content: `
      <p>True dermal vitality is rarely achieved by piling on conflicting active ingredients. In our atelier, we observe daily how skin barriers flourish when given space, respectful nourishment, and rhythmic consistency.</p>
      
      <h4 style="font-family: var(--font-serif); font-size: 1.4rem; margin: 1.5rem 0 0.75rem; color: var(--color-espresso);">The Principle of Daily Cadence</h4>
      <p>Begin with the temperature of your water: lukewarm, never steaming. Cleanse not to strip, but to prepare. Massage your botanical cleanser for a full sixty seconds with the pads of your fingers, tracing the natural contour of your facial muscles.</p>

      <blockquote style="border-left: 2px solid var(--color-terracotta); padding-left: 1.25rem; margin: 1.5rem 0; font-family: var(--font-serif); font-size: 1.15rem; font-style: italic; color: var(--color-espresso);">
        "Your skin is not an inert canvas to be sanded down; it is a breathing sensory organ that reflects your nervous system."
      </blockquote>

      <h4 style="font-family: var(--font-serif); font-size: 1.4rem; margin: 1.5rem 0 0.75rem; color: var(--color-espresso);">Listening Before Applying</h4>
      <p>Observe how your complexion responds to weather shifts, sleep quality, and monthly cycles. Some mornings demand merely a cold splash and pure squalane oil; other evenings invite slow lymphatic draining and ceramide-rich creams.</p>
    `
  },
  {
    id: 'first-facial',
    category: 'ATELIER GUIDE',
    title: 'What to expect from your first facial',
    readTime: '6 min read',
    author: 'Camille Laurent, Sculptural Facialist',
    date: 'Studio Journal',
    image: '/images/journal_first_facial.jpg',
    lead: 'Entering a bespoke atelier for the first time should feel like stepping into an unhurried sanctuary where every expectation is gently met.',
    content: `
      <p>A premier facial is fundamentally different from a commercial clinical extraction. At Lunaria Atelier, the experience begins thirty minutes before your treatment bed is even approached.</p>

      <h4 style="font-family: var(--font-serif); font-size: 1.4rem; margin: 1.5rem 0 0.75rem; color: var(--color-espresso);">The Sensory Consultation</h4>
      <p>We invite you to savor warm herbal tisane in our consultation lounge while your specialist maps your skin’s hydration depth, barrier integrity, and tension patterns. We listen to what you want to feel, not just what you want to treat.</p>

      <h4 style="font-family: var(--font-serif); font-size: 1.4rem; margin: 1.5rem 0 0.75rem; color: var(--color-espresso);">The Treatment Arc</h4>
      <p>During the ritual, communication is entirely on your terms. Whether you prefer a silent meditation or curious conversation about botanical formulation, our therapists move in tune with your rhythm.</p>

      <h4 style="font-family: var(--font-serif); font-size: 1.4rem; margin: 1.5rem 0 0.75rem; color: var(--color-espresso);">Post-Ritual Radiance</h4>
      <p>Expect no harsh post-treatment redness. You step out into the world with glowing, calm, nourished skin and a detailed home care prescription tailored to your bathroom cabinet.</p>
    `
  },
  {
    id: 'skin-understanding',
    category: 'DERMAL SCIENCE',
    title: 'Why personalized skincare begins with understanding your skin',
    readTime: '5 min read',
    author: 'Marcus Vance, Holistic Dermal Therapist',
    date: 'Science & Nature',
    image: '/images/journal_skincare.jpg',
    lead: 'Your lipid barrier has an architectural intelligence that standard categorization fails to grasp.',
    content: `
      <p>The traditional dichotomy of "oily" versus "dry" skin is obsolete. Modern corneotherapy and dermal biology recognize the skin as an intricate micro-ecosystem continually interacting with hormones, stress, climate, and circadian rhythms.</p>

      <h4 style="font-family: var(--font-serif); font-size: 1.4rem; margin: 1.5rem 0 0.75rem; color: var(--color-espresso);">The Acid Mantle as Shield</h4>
      <p>When the delicate microbiome is preserved with biomimetic lipids—ceramides, free fatty acids, and cholesterol in precise ratios—the skin naturally regulates its own sebum and retains deep cellular water.</p>

      <h4 style="font-family: var(--font-serif); font-size: 1.4rem; margin: 1.5rem 0 0.75rem; color: var(--color-espresso);">Customization in Practice</h4>
      <p>At Lunaria, we blend cold-pressed plant fractions and clinical actives at the moment of application. This ensures unparalleled bio-availability and avoids the heavy synthetic preservatives required in mass market formulations.</p>
    `
  }
];

export function initJournalReader() {
  let modalEl = document.getElementById('journal-reader-modal');
  if (!modalEl) {
    modalEl = document.createElement('div');
    modalEl.id = 'journal-reader-modal';
    modalEl.className = 'modal-overlay';
    modalEl.innerHTML = `
      <div class="modal-card" style="max-width: 820px;">
        <button class="modal-close-btn" id="journal-modal-close-btn" aria-label="Close Article">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <article id="journal-modal-article-body"></article>
      </div>
    `;
    document.body.appendChild(modalEl);
  }

  const articleBody = document.getElementById('journal-modal-article-body');
  const closeBtn = document.getElementById('journal-modal-close-btn');

  function openArticle(id) {
    const item = journalArticles.find(a => a.id === id) || journalArticles[0];
    articleBody.innerHTML = `
      <div style="margin-bottom: 1.5rem;">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
          <span class="badge badge-terracotta">${item.category}</span>
          <span style="font-size: var(--text-xs); color: var(--color-taupe-light);">${item.readTime} · ${item.date}</span>
        </div>
        <h2 style="font-size: clamp(2rem, 3.8vw, 2.8rem); line-height: 1.15; margin-bottom: 1rem;">
          ${item.title}
        </h2>
        <div style="font-size: var(--text-xs); letter-spacing: 0.08em; text-transform: uppercase; color: var(--color-taupe); margin-bottom: 1.5rem;">
          Words by <strong>${item.author}</strong>
        </div>
      </div>

      <div style="margin-bottom: 2rem; border-radius: 2px; overflow: hidden;">
        <img src="${item.image}" alt="${item.title}" style="width: 100%; height: 320px; object-fit: cover;" />
      </div>

      <p class="lead" style="font-family: var(--font-serif); font-size: 1.3rem; font-style: italic; line-height: 1.55; color: var(--color-espresso); margin-bottom: 1.5rem;">
        "${item.lead}"
      </p>

      <div style="color: var(--color-taupe); font-size: var(--text-base); line-height: 1.8;">
        ${item.content}
      </div>

      <div style="margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid var(--color-sand); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
        <span style="font-size: var(--text-xs); text-transform: uppercase; letter-spacing: 0.12em; color: var(--color-taupe-light);">
          LUNARIA ATELIER JOURNAL · ISSUE NO. 04
        </span>
        <button class="btn btn-secondary" id="journal-modal-inner-close">Close Article</button>
      </div>
    `;

    modalEl.classList.add('is-active');
    document.body.style.overflow = 'hidden';

    document.getElementById('journal-modal-inner-close')?.addEventListener('click', closeArticle);
  }

  function closeArticle() {
    modalEl.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeArticle);
  modalEl.addEventListener('click', (e) => {
    if (e.target === modalEl) closeArticle();
  });

  window.addEventListener('keydown', (e) => {
    if (modalEl.classList.contains('is-active') && e.key === 'Escape') closeArticle();
  });

  document.querySelectorAll('.journal-card[data-article-id]').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-article-id');
      openArticle(id);
    });
  });

  window.openJournalArticle = openArticle;
}
