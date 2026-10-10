/* ==========================================================================
   LUNARIA ATELIER — APPOINTMENT BOOKING ENGINE
   Interactive, Reassuring, Multi-Step Luxury Scheduler
   ========================================================================== */

export const treatmentsData = [
  {
    id: 'signature-facial',
    name: 'The Signature Facial',
    duration: '60 minutes',
    price: '$195',
    category: 'Advanced Facials',
    description: 'A personalized facial designed to refresh the skin and support a healthy-looking complexion with custom botanical infusions and gentle barrier therapy.'
  },
  {
    id: 'sculpting-ritual',
    name: 'The Sculpting Ritual',
    duration: '75 minutes',
    price: '$240',
    category: 'Facial Massage',
    description: 'A considered facial experience focused on deep tissue sculpting, lymphatic flow, and Bian stone release for an instantly sculpted, refreshed appearance.'
  },
  {
    id: 'skin-reset',
    name: 'The Skin Reset',
    duration: '45 minutes',
    price: '$165',
    category: 'Personalized Care',
    description: 'A tailored skincare treatment that begins with an assessment of your individual skin needs, gentle clarifying enzyme therapy, and deep cellular hydration.'
  },
  {
    id: 'restorative-escape',
    name: 'The Restorative Escape',
    duration: '90 minutes',
    price: '$310',
    category: 'Holistic Wellness',
    description: 'A slower, more immersive beauty ritual designed to create a moment of calm and care, integrating warm stone therapy, cranial release, and bespoke skin nourishment.'
  }
];

export const specialistsData = [
  { id: 'any', name: 'First Available Specialist', role: 'Lunaria Atelier Collective' },
  { id: 'elena', name: 'Elena Rostova', role: 'Founder & Master Aesthetician' },
  { id: 'camille', name: 'Camille Laurent', role: 'Sculptural Facialist & Gua Sha' },
  { id: 'marcus', name: 'Marcus Vance', role: 'Holistic Skincare Therapist' }
];

export function initBookingEngine() {
  const container = document.getElementById('booking-app-root');
  if (!container) return;

  // Booking State
  const state = {
    step: 1,
    selectedTreatment: treatmentsData[0],
    selectedSpecialist: specialistsData[0],
    selectedDate: getFormattedDate(1), // Tomorrow
    selectedTime: '11:00 AM',
    guest: {
      name: '',
      email: '',
      phone: '',
      notes: ''
    },
    referenceCode: ''
  };

  function getFormattedDate(offsetDays = 0) {
    const d = new Date();
    d.setDate(d.getDate() + offsetDays);
    return d.toISOString().split('T')[0];
  }

  function render() {
    container.innerHTML = `
      <div class="booking-shell" id="booking-box">
        <!-- Stepper Navigation -->
        <div class="booking-stepper-nav">
          <div class="step-indicator ${state.step >= 1 ? 'active' : ''} ${state.step > 1 ? 'completed' : ''}">
            <div class="step-circle">${state.step > 1 ? '✓' : '1'}</div>
            <span>Ritual</span>
          </div>
          <div class="step-indicator ${state.step >= 2 ? 'active' : ''} ${state.step > 2 ? 'completed' : ''}">
            <div class="step-circle">${state.step > 2 ? '✓' : '2'}</div>
            <span>Specialist</span>
          </div>
          <div class="step-indicator ${state.step >= 3 ? 'active' : ''} ${state.step > 3 ? 'completed' : ''}">
            <div class="step-circle">${state.step > 3 ? '✓' : '3'}</div>
            <span>Date & Time</span>
          </div>
          <div class="step-indicator ${state.step >= 4 ? 'active' : ''} ${state.step > 4 ? 'completed' : ''}">
            <div class="step-circle">${state.step > 4 ? '✓' : '4'}</div>
            <span>Your Details</span>
          </div>
          <div class="step-indicator ${state.step === 5 ? 'active' : ''}">
            <div class="step-circle">5</div>
            <span>Confirmation</span>
          </div>
        </div>

        <!-- Step Content -->
        <div class="booking-step-body">
          ${renderStepContent()}
        </div>
      </div>
    `;

    bindStepEvents();
  }

  function renderStepContent() {
    if (state.step === 1) {
      return `
        <div class="step-section">
          <div style="margin-bottom: 1.5rem;">
            <h3 style="font-size: 1.6rem; margin-bottom: 0.35rem;">Select your ritual</h3>
            <p style="font-size: var(--text-sm);">Choose a signature treatment tailored to your skin's unique needs.</p>
          </div>
          
          <div class="booking-treatments-picker">
            ${treatmentsData.map(t => `
              <div class="booking-service-option ${state.selectedTreatment.id === t.id ? 'selected' : ''}" data-treatment-id="${t.id}">
                <div class="service-name-row">
                  <span>${t.name}</span>
                  <span style="color: var(--color-espresso);">${t.price}</span>
                </div>
                <div class="service-subtext">
                  <span>⏱ ${t.duration}</span>
                  <span>·</span>
                  <span>${t.category}</span>
                </div>
                <p style="font-size: 0.8rem; color: var(--color-taupe); margin-top: 0.6rem; line-height: 1.45;">${t.description}</p>
              </div>
            `).join('')}
          </div>

          <div style="display: flex; justify-content: flex-end; margin-top: 2.25rem;">
            <button class="btn btn-primary" id="btn-next-step">
              Continue to Specialist Selection →
            </button>
          </div>
        </div>
      `;
    }

    if (state.step === 2) {
      return `
        <div class="step-section">
          <div style="margin-bottom: 1.5rem;">
            <h3 style="font-size: 1.6rem; margin-bottom: 0.35rem;">Choose your specialist</h3>
            <p style="font-size: var(--text-sm);">Our dedicated team brings personalized care and mindful craftsmanship to every session.</p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem;">
            ${specialistsData.map(s => `
              <div class="booking-service-option ${state.selectedSpecialist.id === s.id ? 'selected' : ''}" data-specialist-id="${s.id}">
                <div class="service-name-row">
                  <span>${s.name}</span>
                </div>
                <div class="service-subtext">
                  <span>${s.role}</span>
                </div>
              </div>
            `).join('')}
          </div>

          <div style="display: flex; justify-content: space-between; margin-top: 2.25rem;">
            <button class="btn btn-secondary" id="btn-prev-step">← Back</button>
            <button class="btn btn-primary" id="btn-next-step">Continue to Date & Time →</button>
          </div>
        </div>
      `;
    }

    if (state.step === 3) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const days = [];
      for (let i = 1; i <= 14; i++) {
        const d = new Date();
        d.setDate(d.getDate() + i);
        const dayName = d.toLocaleDateString('en-US', { weekday: 'short' });
        const dayNum = d.getDate();
        const dateStr = d.toISOString().split('T')[0];
        days.push({ dayName, dayNum, dateStr, isSunday: d.getDay() === 0 });
      }

      const timeSlots = [
        '10:00 AM', '11:15 AM', '01:00 PM', '02:30 PM',
        '04:00 PM', '05:15 PM', '06:30 PM', '07:45 PM'
      ];

      return `
        <div class="step-section">
          <div style="margin-bottom: 1.5rem;">
            <h3 style="font-size: 1.6rem; margin-bottom: 0.35rem;">Select your preferred time</h3>
            <p style="font-size: var(--text-sm);">Select a date and available appointment slot for ${state.selectedTreatment.name}.</p>
          </div>

          <div class="calendar-widget">
            <div class="calendar-header">
              <span class="calendar-month-name">Available Dates (Upcoming 2 Weeks)</span>
              <span style="font-size: var(--text-xs); color: var(--color-taupe); letter-spacing: 0.08em; text-transform: uppercase;">Atelier Open Tue–Sat</span>
            </div>

            <div style="display: flex; gap: 0.5rem; overflow-x: auto; padding-bottom: 0.75rem;">
              ${days.map(d => `
                <button class="calendar-day-btn ${state.selectedDate === d.dateStr ? 'selected' : ''} ${d.isSunday ? 'disabled' : ''}" 
                        style="flex: 0 0 68px; height: 74px; border-radius: 4px; display: flex; flex-direction: column; justify-content: center;"
                        data-date="${d.dateStr}" ${d.isSunday ? 'disabled' : ''}>
                  <span style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.8;">${d.dayName}</span>
                  <span style="font-size: 1.25rem; font-family: var(--font-serif); font-weight: 500;">${d.dayNum}</span>
                </button>
              `).join('')}
            </div>

            <div class="time-slots-container">
              <p style="font-size: var(--text-xs); font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-taupe); margin-top: 1rem;">
                Available Slots for Selected Date:
              </p>
              <div class="time-slots-grid">
                ${timeSlots.map(time => `
                  <button class="time-slot-btn ${state.selectedTime === time ? 'selected' : ''}" data-time="${time}">
                    ${time}
                  </button>
                `).join('')}
              </div>
            </div>
          </div>

          <div style="display: flex; justify-content: space-between; margin-top: 2.25rem;">
            <button class="btn btn-secondary" id="btn-prev-step">← Back</button>
            <button class="btn btn-primary" id="btn-next-step">Continue to Guest Details →</button>
          </div>
        </div>
      `;
    }

    if (state.step === 4) {
      return `
        <div class="step-section">
          <div style="margin-bottom: 1.5rem;">
            <h3 style="font-size: 1.6rem; margin-bottom: 0.35rem;">Guest details & skin notes</h3>
            <p style="font-size: var(--text-sm);">Please provide your contact details so we can prepare your personalized welcome.</p>
          </div>

          <!-- Selection Summary Bar -->
          <div class="booking-summary-box">
            <div class="booking-summary-item">
              <span style="color: var(--color-taupe);">Selected Ritual:</span>
              <span style="font-weight: 600;">${state.selectedTreatment.name} (${state.selectedTreatment.duration})</span>
            </div>
            <div class="booking-summary-item">
              <span style="color: var(--color-taupe);">Specialist:</span>
              <span>${state.selectedSpecialist.name}</span>
            </div>
            <div class="booking-summary-item">
              <span style="color: var(--color-taupe);">Date & Time:</span>
              <span>${formatDatePretty(state.selectedDate)} at ${state.selectedTime}</span>
            </div>
            <div class="booking-summary-item">
              <span style="color: var(--color-taupe);">Starting Price:</span>
              <span style="color: var(--color-terracotta);">${state.selectedTreatment.price}</span>
            </div>
          </div>

          <form id="booking-guest-form" class="booking-form-grid">
            <div class="form-group">
              <label class="form-label" for="guest-name">Full Name *</label>
              <input class="form-input" id="guest-name" type="text" placeholder="e.g. Eleanor Vance" required value="${state.guest.name}" />
            </div>

            <div class="form-group">
              <label class="form-label" for="guest-email">Email Address *</label>
              <input class="form-input" id="guest-email" type="email" placeholder="eleanor@atelier.com" required value="${state.guest.email}" />
            </div>

            <div class="form-group">
              <label class="form-label" for="guest-phone">Phone Number *</label>
              <input class="form-input" id="guest-phone" type="tel" placeholder="+1 (555) 234-5678" required value="${state.guest.phone}" />
            </div>

            <div class="form-group">
              <label class="form-label" for="guest-allergies">Skin Sensitivities / Focus Areas</label>
              <input class="form-input" id="guest-allergies" type="text" placeholder="e.g. Dryness, barrier sensitivity, wedding prep" />
            </div>

            <div class="form-group full-width">
              <label class="form-label" for="guest-notes">Special Requests or Quiet Treatment Preference</label>
              <textarea class="form-textarea" id="guest-notes" rows="3" placeholder="Let us know if you prefer a silent ritual or have any preferences.">${state.guest.notes}</textarea>
            </div>
          </form>

          <div style="display: flex; justify-content: space-between; margin-top: 2.25rem;">
            <button class="btn btn-secondary" id="btn-prev-step">← Back</button>
            <button class="btn btn-accent" id="btn-submit-booking">Confirm Reservation</button>
          </div>
        </div>
      `;
    }

    if (state.step === 5) {
      return `
        <div class="booking-success-card">
          <div class="booking-success-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
          </div>
          <span class="eyebrow" style="margin-bottom: 0.5rem;">APPOINTMENT RESERVED</span>
          <h2 style="font-size: 2.4rem; margin-bottom: 1rem;">We look forward to welcoming you.</h2>
          <p style="max-width: 520px; margin: 0 auto 2rem; font-size: var(--text-base); color: var(--color-taupe);">
            Your reservation has been confirmed. A personalized confirmation email with preparation guidance has been sent to <strong>${state.guest.email || 'your email'}</strong>.
          </p>

          <div class="booking-summary-box" style="max-width: 520px; margin: 0 auto 2.5rem; text-align: left;">
            <div class="booking-summary-item">
              <span style="color: var(--color-taupe);">Confirmation Ref:</span>
              <strong style="letter-spacing: 0.08em; color: var(--color-espresso);">${state.referenceCode}</strong>
            </div>
            <div class="booking-summary-item">
              <span style="color: var(--color-taupe);">Ritual:</span>
              <span>${state.selectedTreatment.name} (${state.selectedTreatment.duration})</span>
            </div>
            <div class="booking-summary-item">
              <span style="color: var(--color-taupe);">Specialist:</span>
              <span>${state.selectedSpecialist.name}</span>
            </div>
            <div class="booking-summary-item">
              <span style="color: var(--color-taupe);">Date & Time:</span>
              <span>${formatDatePretty(state.selectedDate)} at ${state.selectedTime}</span>
            </div>
            <div class="booking-summary-item">
              <span style="color: var(--color-taupe);">Atelier Location:</span>
              <span>48 Rue de Grenelle, 75007 Paris</span>
            </div>
          </div>

          <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
            <button class="btn btn-secondary" id="btn-add-calendar">
              🗓 Add to Calendar
            </button>
            <button class="btn btn-primary" id="btn-book-another">
              Book Another Visit
            </button>
          </div>
        </div>
      `;
    }
  }

  function formatDatePretty(dateStr) {
    if (!dateStr) return '';
    const parts = dateStr.split('-');
    const d = new Date(parts[0], parts[1] - 1, parts[2]);
    return d.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' });
  }

  function bindStepEvents() {
    // Step 1: Treatment options
    document.querySelectorAll('.booking-service-option[data-treatment-id]').forEach(el => {
      el.addEventListener('click', () => {
        const id = el.getAttribute('data-treatment-id');
        state.selectedTreatment = treatmentsData.find(t => t.id === id) || treatmentsData[0];
        render();
      });
    });

    // Step 2: Specialist options
    document.querySelectorAll('.booking-service-option[data-specialist-id]').forEach(el => {
      el.addEventListener('click', () => {
        const id = el.getAttribute('data-specialist-id');
        state.selectedSpecialist = specialistsData.find(s => s.id === id) || specialistsData[0];
        render();
      });
    });

    // Step 3: Date calendar
    document.querySelectorAll('.calendar-day-btn[data-date]').forEach(el => {
      el.addEventListener('click', () => {
        state.selectedDate = el.getAttribute('data-date');
        render();
      });
    });

    // Step 3: Time slot
    document.querySelectorAll('.time-slot-btn').forEach(el => {
      el.addEventListener('click', () => {
        state.selectedTime = el.getAttribute('data-time');
        render();
      });
    });

    // Navigation buttons
    const nextBtn = document.getElementById('btn-next-step');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        state.step++;
        render();
        scrollBookingIntoView();
      });
    }

    const prevBtn = document.getElementById('btn-prev-step');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        state.step--;
        render();
        scrollBookingIntoView();
      });
    }

    // Step 4: Submission
    const submitBtn = document.getElementById('btn-submit-booking');
    if (submitBtn) {
      submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const nameInput = document.getElementById('guest-name');
        const emailInput = document.getElementById('guest-email');
        const phoneInput = document.getElementById('guest-phone');
        const notesInput = document.getElementById('guest-notes');

        if (!nameInput.value.trim() || !emailInput.value.trim() || !phoneInput.value.trim()) {
          showToast('Please fill in your name, email, and phone number.');
          return;
        }

        state.guest.name = nameInput.value.trim();
        state.guest.email = emailInput.value.trim();
        state.guest.phone = phoneInput.value.trim();
        if (notesInput) state.guest.notes = notesInput.value.trim();

        // Generate luxury reference code
        const rand = Math.floor(1000 + Math.random() * 9000);
        state.referenceCode = `LUN-2026-${rand}`;
        state.step = 5;
        render();
        scrollBookingIntoView();
        showToast(`Reservation ${state.referenceCode} Confirmed`);
      });
    }

    // Step 5: Calendar export & restart
    const addCalBtn = document.getElementById('btn-add-calendar');
    if (addCalBtn) {
      addCalBtn.addEventListener('click', () => {
        showToast('Calendar event created (.ics downloaded)');
      });
    }

    const resetBtn = document.getElementById('btn-book-another');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        state.step = 1;
        state.guest = { name: '', email: '', phone: '', notes: '' };
        render();
        scrollBookingIntoView();
      });
    }
  }

  function scrollBookingIntoView() {
    const box = document.getElementById('booking');
    if (box) {
      box.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Allow external triggering with preset treatment
  window.selectTreatmentAndBook = function(treatmentId) {
    const found = treatmentsData.find(t => t.id === treatmentId);
    if (found) {
      state.selectedTreatment = found;
      state.step = 2; // Jump directly to specialist / time
      render();
      scrollBookingIntoView();
    }
  };

  render();
}

export function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A85A43" stroke-width="2.2">
      <path d="M20 6L9 17l-5-5"/>
    </svg>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast-exit');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
