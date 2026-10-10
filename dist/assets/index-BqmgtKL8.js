(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function p(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=p(o);fetch(o.href,s)}})();const b=[{id:"signature-facial",name:"The Signature Facial",duration:"60 minutes",price:"$195",category:"Advanced Facials",description:"A personalized facial designed to refresh the skin and support a healthy-looking complexion with custom botanical infusions and gentle barrier therapy."},{id:"sculpting-ritual",name:"The Sculpting Ritual",duration:"75 minutes",price:"$240",category:"Facial Massage",description:"A considered facial experience focused on deep tissue sculpting, lymphatic flow, and Bian stone release for an instantly sculpted, refreshed appearance."},{id:"skin-reset",name:"The Skin Reset",duration:"45 minutes",price:"$165",category:"Personalized Care",description:"A tailored skincare treatment that begins with an assessment of your individual skin needs, gentle clarifying enzyme therapy, and deep cellular hydration."},{id:"restorative-escape",name:"The Restorative Escape",duration:"90 minutes",price:"$310",category:"Holistic Wellness",description:"A slower, more immersive beauty ritual designed to create a moment of calm and care, integrating warm stone therapy, cranial release, and bespoke skin nourishment."}],h=[{id:"any",name:"First Available Specialist",role:"Lunaria Atelier Collective"},{id:"elena",name:"Elena Rostova",role:"Founder & Master Aesthetician"},{id:"camille",name:"Camille Laurent",role:"Sculptural Facialist & Gua Sha"},{id:"marcus",name:"Marcus Vance",role:"Holistic Skincare Therapist"}];function $(){const i=document.getElementById("booking-app-root");if(!i)return;const e={step:1,selectedTreatment:b[0],selectedSpecialist:h[0],selectedDate:p(1),selectedTime:"11:00 AM",guest:{name:"",email:"",phone:"",notes:""},referenceCode:""};function p(t=0){const l=new Date;return l.setDate(l.getDate()+t),l.toISOString().split("T")[0]}function r(){i.innerHTML=`
      <div class="booking-shell" id="booking-box">
        <!-- Stepper Navigation -->
        <div class="booking-stepper-nav">
          <div class="step-indicator ${e.step>=1?"active":""} ${e.step>1?"completed":""}">
            <div class="step-circle">${e.step>1?"✓":"1"}</div>
            <span>Ritual</span>
          </div>
          <div class="step-indicator ${e.step>=2?"active":""} ${e.step>2?"completed":""}">
            <div class="step-circle">${e.step>2?"✓":"2"}</div>
            <span>Specialist</span>
          </div>
          <div class="step-indicator ${e.step>=3?"active":""} ${e.step>3?"completed":""}">
            <div class="step-circle">${e.step>3?"✓":"3"}</div>
            <span>Date & Time</span>
          </div>
          <div class="step-indicator ${e.step>=4?"active":""} ${e.step>4?"completed":""}">
            <div class="step-circle">${e.step>4?"✓":"4"}</div>
            <span>Your Details</span>
          </div>
          <div class="step-indicator ${e.step===5?"active":""}">
            <div class="step-circle">5</div>
            <span>Confirmation</span>
          </div>
        </div>

        <!-- Step Content -->
        <div class="booking-step-body">
          ${o()}
        </div>
      </div>
    `,a()}function o(){if(e.step===1)return`
        <div class="step-section">
          <div style="margin-bottom: 1.5rem;">
            <h3 style="font-size: 1.6rem; margin-bottom: 0.35rem;">Select your ritual</h3>
            <p style="font-size: var(--text-sm);">Choose a signature treatment tailored to your skin's unique needs.</p>
          </div>
          
          <div class="booking-treatments-picker">
            ${b.map(t=>`
              <div class="booking-service-option ${e.selectedTreatment.id===t.id?"selected":""}" data-treatment-id="${t.id}">
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
            `).join("")}
          </div>

          <div style="display: flex; justify-content: flex-end; margin-top: 2.25rem;">
            <button class="btn btn-primary" id="btn-next-step">
              Continue to Specialist Selection →
            </button>
          </div>
        </div>
      `;if(e.step===2)return`
        <div class="step-section">
          <div style="margin-bottom: 1.5rem;">
            <h3 style="font-size: 1.6rem; margin-bottom: 0.35rem;">Choose your specialist</h3>
            <p style="font-size: var(--text-sm);">Our dedicated team brings personalized care and mindful craftsmanship to every session.</p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem;">
            ${h.map(t=>`
              <div class="booking-service-option ${e.selectedSpecialist.id===t.id?"selected":""}" data-specialist-id="${t.id}">
                <div class="service-name-row">
                  <span>${t.name}</span>
                </div>
                <div class="service-subtext">
                  <span>${t.role}</span>
                </div>
              </div>
            `).join("")}
          </div>

          <div style="display: flex; justify-content: space-between; margin-top: 2.25rem;">
            <button class="btn btn-secondary" id="btn-prev-step">← Back</button>
            <button class="btn btn-primary" id="btn-next-step">Continue to Date & Time →</button>
          </div>
        </div>
      `;if(e.step===3){const t=new Date;t.setDate(t.getDate()+1);const l=[];for(let c=1;c<=14;c++){const n=new Date;n.setDate(n.getDate()+c);const d=n.toLocaleDateString("en-US",{weekday:"short"}),g=n.getDate(),v=n.toISOString().split("T")[0];l.push({dayName:d,dayNum:g,dateStr:v,isSunday:n.getDay()===0})}const u=["10:00 AM","11:15 AM","01:00 PM","02:30 PM","04:00 PM","05:15 PM","06:30 PM","07:45 PM"];return`
        <div class="step-section">
          <div style="margin-bottom: 1.5rem;">
            <h3 style="font-size: 1.6rem; margin-bottom: 0.35rem;">Select your preferred time</h3>
            <p style="font-size: var(--text-sm);">Select a date and available appointment slot for ${e.selectedTreatment.name}.</p>
          </div>

          <div class="calendar-widget">
            <div class="calendar-header">
              <span class="calendar-month-name">Available Dates (Upcoming 2 Weeks)</span>
              <span style="font-size: var(--text-xs); color: var(--color-taupe); letter-spacing: 0.08em; text-transform: uppercase;">Atelier Open Tue–Sat</span>
            </div>

            <div style="display: flex; gap: 0.5rem; overflow-x: auto; padding-bottom: 0.75rem;">
              ${l.map(c=>`
                <button class="calendar-day-btn ${e.selectedDate===c.dateStr?"selected":""} ${c.isSunday?"disabled":""}" 
                        style="flex: 0 0 68px; height: 74px; border-radius: 4px; display: flex; flex-direction: column; justify-content: center;"
                        data-date="${c.dateStr}" ${c.isSunday?"disabled":""}>
                  <span style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.8;">${c.dayName}</span>
                  <span style="font-size: 1.25rem; font-family: var(--font-serif); font-weight: 500;">${c.dayNum}</span>
                </button>
              `).join("")}
            </div>

            <div class="time-slots-container">
              <p style="font-size: var(--text-xs); font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-taupe); margin-top: 1rem;">
                Available Slots for Selected Date:
              </p>
              <div class="time-slots-grid">
                ${u.map(c=>`
                  <button class="time-slot-btn ${e.selectedTime===c?"selected":""}" data-time="${c}">
                    ${c}
                  </button>
                `).join("")}
              </div>
            </div>
          </div>

          <div style="display: flex; justify-content: space-between; margin-top: 2.25rem;">
            <button class="btn btn-secondary" id="btn-prev-step">← Back</button>
            <button class="btn btn-primary" id="btn-next-step">Continue to Guest Details →</button>
          </div>
        </div>
      `}if(e.step===4)return`
        <div class="step-section">
          <div style="margin-bottom: 1.5rem;">
            <h3 style="font-size: 1.6rem; margin-bottom: 0.35rem;">Guest details & skin notes</h3>
            <p style="font-size: var(--text-sm);">Please provide your contact details so we can prepare your personalized welcome.</p>
          </div>

          <!-- Selection Summary Bar -->
          <div class="booking-summary-box">
            <div class="booking-summary-item">
              <span style="color: var(--color-taupe);">Selected Ritual:</span>
              <span style="font-weight: 600;">${e.selectedTreatment.name} (${e.selectedTreatment.duration})</span>
            </div>
            <div class="booking-summary-item">
              <span style="color: var(--color-taupe);">Specialist:</span>
              <span>${e.selectedSpecialist.name}</span>
            </div>
            <div class="booking-summary-item">
              <span style="color: var(--color-taupe);">Date & Time:</span>
              <span>${s(e.selectedDate)} at ${e.selectedTime}</span>
            </div>
            <div class="booking-summary-item">
              <span style="color: var(--color-taupe);">Starting Price:</span>
              <span style="color: var(--color-terracotta);">${e.selectedTreatment.price}</span>
            </div>
          </div>

          <form id="booking-guest-form" class="booking-form-grid">
            <div class="form-group">
              <label class="form-label" for="guest-name">Full Name *</label>
              <input class="form-input" id="guest-name" type="text" placeholder="e.g. Eleanor Vance" required value="${e.guest.name}" />
            </div>

            <div class="form-group">
              <label class="form-label" for="guest-email">Email Address *</label>
              <input class="form-input" id="guest-email" type="email" placeholder="eleanor@atelier.com" required value="${e.guest.email}" />
            </div>

            <div class="form-group">
              <label class="form-label" for="guest-phone">Phone Number *</label>
              <input class="form-input" id="guest-phone" type="tel" placeholder="+1 (555) 234-5678" required value="${e.guest.phone}" />
            </div>

            <div class="form-group">
              <label class="form-label" for="guest-allergies">Skin Sensitivities / Focus Areas</label>
              <input class="form-input" id="guest-allergies" type="text" placeholder="e.g. Dryness, barrier sensitivity, wedding prep" />
            </div>

            <div class="form-group full-width">
              <label class="form-label" for="guest-notes">Special Requests or Quiet Treatment Preference</label>
              <textarea class="form-textarea" id="guest-notes" rows="3" placeholder="Let us know if you prefer a silent ritual or have any preferences.">${e.guest.notes}</textarea>
            </div>
          </form>

          <div style="display: flex; justify-content: space-between; margin-top: 2.25rem;">
            <button class="btn btn-secondary" id="btn-prev-step">← Back</button>
            <button class="btn btn-accent" id="btn-submit-booking">Confirm Reservation</button>
          </div>
        </div>
      `;if(e.step===5)return`
        <div class="booking-success-card">
          <div class="booking-success-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
          </div>
          <span class="eyebrow" style="margin-bottom: 0.5rem;">APPOINTMENT RESERVED</span>
          <h2 style="font-size: 2.4rem; margin-bottom: 1rem;">We look forward to welcoming you.</h2>
          <p style="max-width: 520px; margin: 0 auto 2rem; font-size: var(--text-base); color: var(--color-taupe);">
            Your reservation has been confirmed. A personalized confirmation email with preparation guidance has been sent to <strong>${e.guest.email||"your email"}</strong>.
          </p>

          <div class="booking-summary-box" style="max-width: 520px; margin: 0 auto 2.5rem; text-align: left;">
            <div class="booking-summary-item">
              <span style="color: var(--color-taupe);">Confirmation Ref:</span>
              <strong style="letter-spacing: 0.08em; color: var(--color-espresso);">${e.referenceCode}</strong>
            </div>
            <div class="booking-summary-item">
              <span style="color: var(--color-taupe);">Ritual:</span>
              <span>${e.selectedTreatment.name} (${e.selectedTreatment.duration})</span>
            </div>
            <div class="booking-summary-item">
              <span style="color: var(--color-taupe);">Specialist:</span>
              <span>${e.selectedSpecialist.name}</span>
            </div>
            <div class="booking-summary-item">
              <span style="color: var(--color-taupe);">Date & Time:</span>
              <span>${s(e.selectedDate)} at ${e.selectedTime}</span>
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
      `}function s(t){if(!t)return"";const l=t.split("-");return new Date(l[0],l[1]-1,l[2]).toLocaleDateString("en-US",{weekday:"long",month:"short",day:"numeric",year:"numeric"})}function a(){document.querySelectorAll(".booking-service-option[data-treatment-id]").forEach(d=>{d.addEventListener("click",()=>{const g=d.getAttribute("data-treatment-id");e.selectedTreatment=b.find(v=>v.id===g)||b[0],r()})}),document.querySelectorAll(".booking-service-option[data-specialist-id]").forEach(d=>{d.addEventListener("click",()=>{const g=d.getAttribute("data-specialist-id");e.selectedSpecialist=h.find(v=>v.id===g)||h[0],r()})}),document.querySelectorAll(".calendar-day-btn[data-date]").forEach(d=>{d.addEventListener("click",()=>{e.selectedDate=d.getAttribute("data-date"),r()})}),document.querySelectorAll(".time-slot-btn").forEach(d=>{d.addEventListener("click",()=>{e.selectedTime=d.getAttribute("data-time"),r()})});const t=document.getElementById("btn-next-step");t&&t.addEventListener("click",()=>{e.step++,r(),m()});const l=document.getElementById("btn-prev-step");l&&l.addEventListener("click",()=>{e.step--,r(),m()});const u=document.getElementById("btn-submit-booking");u&&u.addEventListener("click",d=>{d.preventDefault();const g=document.getElementById("guest-name"),v=document.getElementById("guest-email"),y=document.getElementById("guest-phone"),k=document.getElementById("guest-notes");if(!g.value.trim()||!v.value.trim()||!y.value.trim()){f("Please fill in your name, email, and phone number.");return}e.guest.name=g.value.trim(),e.guest.email=v.value.trim(),e.guest.phone=y.value.trim(),k&&(e.guest.notes=k.value.trim());const x=Math.floor(1e3+Math.random()*9e3);e.referenceCode=`LUN-2026-${x}`,e.step=5,r(),m(),f(`Reservation ${e.referenceCode} Confirmed`)});const c=document.getElementById("btn-add-calendar");c&&c.addEventListener("click",()=>{f("Calendar event created (.ics downloaded)")});const n=document.getElementById("btn-book-another");n&&n.addEventListener("click",()=>{e.step=1,e.guest={name:"",email:"",phone:"",notes:""},r(),m()})}function m(){const t=document.getElementById("booking");t&&t.scrollIntoView({behavior:"smooth",block:"start"})}window.selectTreatmentAndBook=function(t){const l=b.find(u=>u.id===t);l&&(e.selectedTreatment=l,e.step=2,r(),m())},r()}function f(i){let e=document.getElementById("toast-container");e||(e=document.createElement("div"),e.id="toast-container",e.className="toast-container",document.body.appendChild(e));const p=document.createElement("div");p.className="toast",p.innerHTML=`
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A85A43" stroke-width="2.2">
      <path d="M20 6L9 17l-5-5"/>
    </svg>
    <span>${i}</span>
  `,e.appendChild(p),setTimeout(()=>{p.classList.add("toast-exit"),setTimeout(()=>p.remove(),300)},4e3)}const w=[{src:"/images/studio_reception.jpg",title:"The Reception Sanctuary",caption:"Curved oak architecture, natural lime-wash walls, and acoustic serenity upon arrival."},{src:"/images/studio_room.jpg",title:"The Treatment Suite",caption:"Unhurried atmosphere, layered raw oatmeal linens, and gentle warm ambient lighting."},{src:"/images/studio_details.jpg",title:"Tactile Rituals & Formulations",caption:"Cold-pressed botanical oils in amber vessels, artisanal ceramics, and organic stone trays."},{src:"/images/studio_consultation.jpg",title:"The Consultation Lounge",caption:"A dedicated space for dialogue, bespoke herbal tea infusions, and skin diagnostic mapping."}];function A(){let i=0,e=document.getElementById("studio-lightbox-modal");e||(e=document.createElement("div"),e.id="studio-lightbox-modal",e.className="modal-overlay",e.innerHTML=`
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
    `,document.body.appendChild(e));const p=document.getElementById("lightbox-active-img"),r=document.getElementById("lightbox-caption-text"),o=document.getElementById("lightbox-close-btn"),s=document.getElementById("lightbox-prev-btn"),a=document.getElementById("lightbox-next-btn");function m(n){i=n,l(),e.classList.add("is-active"),document.body.style.overflow="hidden"}function t(){e.classList.remove("is-active"),document.body.style.overflow=""}function l(){const n=w[i];n&&(p.src=n.src,p.alt=n.title,r.innerHTML=`<strong>${n.title}</strong> — ${n.caption}`)}function u(){i=(i-1+w.length)%w.length,l()}function c(){i=(i+1)%w.length,l()}document.querySelectorAll(".studio-gallery-item").forEach((n,d)=>{n.addEventListener("click",()=>{m(d)})}),o.addEventListener("click",t),s.addEventListener("click",n=>{n.stopPropagation(),u()}),a.addEventListener("click",n=>{n.stopPropagation(),c()}),e.addEventListener("click",n=>{n.target===e&&t()}),window.addEventListener("keydown",n=>{e.classList.contains("is-active")&&(n.key==="Escape"&&t(),n.key==="ArrowLeft"&&u(),n.key==="ArrowRight"&&c())})}const E=[{id:"signature-facial",name:"The Signature Facial",tagline:"Refreshed complexion & customized barrier therapy",duration:"60 minutes",price:"$195",image:"/images/treatment_facial.jpg",description:"A personalized facial designed to refresh the skin and support a healthy-looking complexion. Every step is curated following your initial consultation and skin diagnostic.",steps:["Warm botanical compress & aromatic welcome ritual","Gentle double-oil cleanse with cold-pressed camellia & jojoba","Ultrasonic enzymatic exfoliation tailored to your sensitivity","Customized phyto-nutrient facial massage with warm stone therapy","Antioxidant rich restorative mask and bespoke barrier finish"],recommendedFor:"Seasonal dehydration, dullness, tired skin seeking effortless radiance and gentle restoration."},{id:"sculpting-ritual",name:"The Sculpting Ritual",tagline:"Deep tissue facial release & lymphatic contouring",duration:"75 minutes",price:"$240",image:"/images/treatment_sculpting.jpg",description:"A considered facial experience focused on massage, relaxation, and a refreshed appearance. Combining traditional buccal massage techniques, Bian stone gua sha, and lymphatic stimulation.",steps:["Cervical and shoulder tension release with warm herbal oils","Manual lymphatic drainage to reduce facial puffiness","Sculptural intra-oral & deep muscle lifting massage","Cool jade & Bian stone sculpting along cheekbones and jawline","Cryo-toning botanical mist and firming peptide seal"],recommendedFor:"Facial tension, jaw clenching, fluid retention, or preparing for an important occasion."},{id:"skin-reset",name:"The Skin Reset",tagline:"Clarifying cellular renewal & microbiome balancing",duration:"45 minutes",price:"$165",image:"/images/treatment_reset.jpg",description:"A tailored skincare treatment that begins with an assessment of your individual skin needs. Focused on clearing congestion, calming redness, and fortifying your skin’s natural lipid barrier.",steps:["Micro-biome assessment and hydration mapping","Gentle enzymatic clarifying peel (non-irritating, plant-derived)","High-frequency purifying therapy and targeted blemish soothing","Ceramide & centella soothing compress","Weightless zinc and prebiotic defense emulsion"],recommendedFor:"Sensitive, reactive skin, blemish-prone complexions, or recovery after seasonal climate shifts."},{id:"restorative-escape",name:"The Restorative Escape",tagline:"Slow immersive ritual for nervous system and skin",duration:"90 minutes",price:"$310",image:"/images/treatment_escape.jpg",description:"A slower, more immersive beauty ritual designed to create a moment of calm and care. Integrates holistic head-to-toe sensory relaxation, extended cranial massage, and advanced facial rejuvenation.",steps:["Foot bath welcome with magnesium salts and dried organic botanicals","Full facial ritual including double cleanse, deep hydration and LED light therapy","Aromatic scalp and neck massage with warm rosemary-infused botanical oil","Warm heated stone placement over thoracic energy points","Herbal infusion tasting and unhurried transition back to the day"],recommendedFor:"Chronic stress, nervous system fatigue, deep grounding, and multi-sensory rejuvenation."}];function T(){let i=document.getElementById("treatment-detail-modal");i||(i=document.createElement("div"),i.id="treatment-detail-modal",i.className="modal-overlay",i.innerHTML=`
      <div class="modal-card">
        <button class="modal-close-btn" id="treatment-modal-close-btn" aria-label="Close Modal">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div id="treatment-modal-inner-content"></div>
      </div>
    `,document.body.appendChild(i));const e=document.getElementById("treatment-modal-inner-content"),p=document.getElementById("treatment-modal-close-btn");function r(s){var m,t;const a=E.find(l=>l.id===s)||E[0];e.innerHTML=`
      <div style="margin-bottom: 1.5rem;">
        <span class="eyebrow" style="margin-bottom: 0.5rem;">SIGNATURE RITUAL</span>
        <h2 style="font-size: 2.2rem; margin-bottom: 0.5rem;">${a.name}</h2>
        <p style="font-family: var(--font-serif); font-size: 1.15rem; font-style: italic; color: var(--color-terracotta);">
          ${a.tagline}
        </p>
      </div>

      <div style="display: flex; gap: 1.5rem; margin-bottom: 1.5rem; padding: 0.85rem 1.25rem; background-color: var(--color-champagne-subtle); border-radius: 4px; border: 1px solid var(--color-sand);">
        <div>
          <span style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-taupe); display: block;">Duration</span>
          <strong style="color: var(--color-espresso);">${a.duration}</strong>
        </div>
        <div style="width: 1px; background-color: var(--color-sand);"></div>
        <div>
          <span style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-taupe); display: block;">Investment</span>
          <strong style="color: var(--color-espresso);">${a.price}</strong>
        </div>
      </div>

      <div style="margin-bottom: 1.75rem;">
        <img src="${a.image}" alt="${a.name}" style="width: 100%; height: 260px; object-fit: cover; border-radius: 2px;" />
      </div>

      <p style="font-size: var(--text-base); line-height: 1.7; color: var(--color-taupe); margin-bottom: 1.5rem;">
        ${a.description}
      </p>

      <div style="margin-bottom: 1.75rem;">
        <h4 style="font-size: var(--text-sm); text-transform: uppercase; letter-spacing: 0.12em; color: var(--color-espresso); margin-bottom: 0.85rem;">
          The Experience Steps:
        </h4>
        <ul style="display: flex; flex-direction: column; gap: 0.6rem;">
          ${a.steps.map((l,u)=>`
            <li style="display: flex; align-items: baseline; gap: 0.75rem; font-size: 0.9rem; color: var(--color-taupe);">
              <span style="font-family: var(--font-serif); color: var(--color-terracotta); font-weight: 600;">0${u+1}</span>
              <span>${l}</span>
            </li>
          `).join("")}
        </ul>
      </div>

      <div style="padding: 1.15rem; background-color: var(--color-ivory); border-left: 3px solid var(--color-terracotta); margin-bottom: 2rem; border-radius: 2px;">
        <span style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.12em; font-weight: 600; color: var(--color-espresso); display: block; margin-bottom: 0.25rem;">
          Recommended For:
        </span>
        <p style="font-size: 0.85rem; color: var(--color-taupe); margin: 0;">${a.recommendedFor}</p>
      </div>

      <div style="display: flex; justify-content: flex-end; gap: 1rem;">
        <button class="btn btn-secondary" id="modal-close-trigger">Close</button>
        <button class="btn btn-primary" id="modal-book-trigger">Reserve This Ritual →</button>
      </div>
    `,i.classList.add("is-active"),document.body.style.overflow="hidden",(m=document.getElementById("modal-close-trigger"))==null||m.addEventListener("click",o),(t=document.getElementById("modal-book-trigger"))==null||t.addEventListener("click",()=>{o(),window.selectTreatmentAndBook&&window.selectTreatmentAndBook(a.id)})}function o(){i.classList.remove("is-active"),document.body.style.overflow=""}p.addEventListener("click",o),i.addEventListener("click",s=>{s.target===i&&o()}),window.addEventListener("keydown",s=>{i.classList.contains("is-active")&&s.key==="Escape"&&o()}),document.querySelectorAll(".treatment-card[data-treatment-id]").forEach(s=>{s.addEventListener("click",()=>{const a=s.getAttribute("data-treatment-id");r(a)})}),window.openTreatmentModal=r}const L=[{id:"building-ritual",category:"RITUALS",title:"Building a skincare ritual that works for you",readTime:"4 min read",author:"Elena Rostova, Founder & Master Aesthetician",date:"Autumn Edition",image:"/images/journal_ritual.jpg",lead:"In a culture saturated with twelve-step regimens and fleeting trends, the most radical act for your skin is deliberate reduction.",content:`
      <p>True dermal vitality is rarely achieved by piling on conflicting active ingredients. In our atelier, we observe daily how skin barriers flourish when given space, respectful nourishment, and rhythmic consistency.</p>
      
      <h4 style="font-family: var(--font-serif); font-size: 1.4rem; margin: 1.5rem 0 0.75rem; color: var(--color-espresso);">The Principle of Daily Cadence</h4>
      <p>Begin with the temperature of your water: lukewarm, never steaming. Cleanse not to strip, but to prepare. Massage your botanical cleanser for a full sixty seconds with the pads of your fingers, tracing the natural contour of your facial muscles.</p>

      <blockquote style="border-left: 2px solid var(--color-terracotta); padding-left: 1.25rem; margin: 1.5rem 0; font-family: var(--font-serif); font-size: 1.15rem; font-style: italic; color: var(--color-espresso);">
        "Your skin is not an inert canvas to be sanded down; it is a breathing sensory organ that reflects your nervous system."
      </blockquote>

      <h4 style="font-family: var(--font-serif); font-size: 1.4rem; margin: 1.5rem 0 0.75rem; color: var(--color-espresso);">Listening Before Applying</h4>
      <p>Observe how your complexion responds to weather shifts, sleep quality, and monthly cycles. Some mornings demand merely a cold splash and pure squalane oil; other evenings invite slow lymphatic draining and ceramide-rich creams.</p>
    `},{id:"first-facial",category:"ATELIER GUIDE",title:"What to expect from your first facial",readTime:"6 min read",author:"Camille Laurent, Sculptural Facialist",date:"Studio Journal",image:"/images/journal_first_facial.jpg",lead:"Entering a bespoke atelier for the first time should feel like stepping into an unhurried sanctuary where every expectation is gently met.",content:`
      <p>A premier facial is fundamentally different from a commercial clinical extraction. At Lunaria Atelier, the experience begins thirty minutes before your treatment bed is even approached.</p>

      <h4 style="font-family: var(--font-serif); font-size: 1.4rem; margin: 1.5rem 0 0.75rem; color: var(--color-espresso);">The Sensory Consultation</h4>
      <p>We invite you to savor warm herbal tisane in our consultation lounge while your specialist maps your skin’s hydration depth, barrier integrity, and tension patterns. We listen to what you want to feel, not just what you want to treat.</p>

      <h4 style="font-family: var(--font-serif); font-size: 1.4rem; margin: 1.5rem 0 0.75rem; color: var(--color-espresso);">The Treatment Arc</h4>
      <p>During the ritual, communication is entirely on your terms. Whether you prefer a silent meditation or curious conversation about botanical formulation, our therapists move in tune with your rhythm.</p>

      <h4 style="font-family: var(--font-serif); font-size: 1.4rem; margin: 1.5rem 0 0.75rem; color: var(--color-espresso);">Post-Ritual Radiance</h4>
      <p>Expect no harsh post-treatment redness. You step out into the world with glowing, calm, nourished skin and a detailed home care prescription tailored to your bathroom cabinet.</p>
    `},{id:"skin-understanding",category:"DERMAL SCIENCE",title:"Why personalized skincare begins with understanding your skin",readTime:"5 min read",author:"Marcus Vance, Holistic Dermal Therapist",date:"Science & Nature",image:"/images/journal_skincare.jpg",lead:"Your lipid barrier has an architectural intelligence that standard categorization fails to grasp.",content:`
      <p>The traditional dichotomy of "oily" versus "dry" skin is obsolete. Modern corneotherapy and dermal biology recognize the skin as an intricate micro-ecosystem continually interacting with hormones, stress, climate, and circadian rhythms.</p>

      <h4 style="font-family: var(--font-serif); font-size: 1.4rem; margin: 1.5rem 0 0.75rem; color: var(--color-espresso);">The Acid Mantle as Shield</h4>
      <p>When the delicate microbiome is preserved with biomimetic lipids—ceramides, free fatty acids, and cholesterol in precise ratios—the skin naturally regulates its own sebum and retains deep cellular water.</p>

      <h4 style="font-family: var(--font-serif); font-size: 1.4rem; margin: 1.5rem 0 0.75rem; color: var(--color-espresso);">Customization in Practice</h4>
      <p>At Lunaria, we blend cold-pressed plant fractions and clinical actives at the moment of application. This ensures unparalleled bio-availability and avoids the heavy synthetic preservatives required in mass market formulations.</p>
    `}];function B(){let i=document.getElementById("journal-reader-modal");i||(i=document.createElement("div"),i.id="journal-reader-modal",i.className="modal-overlay",i.innerHTML=`
      <div class="modal-card" style="max-width: 820px;">
        <button class="modal-close-btn" id="journal-modal-close-btn" aria-label="Close Article">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <article id="journal-modal-article-body"></article>
      </div>
    `,document.body.appendChild(i));const e=document.getElementById("journal-modal-article-body"),p=document.getElementById("journal-modal-close-btn");function r(s){var m;const a=L.find(t=>t.id===s)||L[0];e.innerHTML=`
      <div style="margin-bottom: 1.5rem;">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
          <span class="badge badge-terracotta">${a.category}</span>
          <span style="font-size: var(--text-xs); color: var(--color-taupe-light);">${a.readTime} · ${a.date}</span>
        </div>
        <h2 style="font-size: clamp(2rem, 3.8vw, 2.8rem); line-height: 1.15; margin-bottom: 1rem;">
          ${a.title}
        </h2>
        <div style="font-size: var(--text-xs); letter-spacing: 0.08em; text-transform: uppercase; color: var(--color-taupe); margin-bottom: 1.5rem;">
          Words by <strong>${a.author}</strong>
        </div>
      </div>

      <div style="margin-bottom: 2rem; border-radius: 2px; overflow: hidden;">
        <img src="${a.image}" alt="${a.title}" style="width: 100%; height: 320px; object-fit: cover;" />
      </div>

      <p class="lead" style="font-family: var(--font-serif); font-size: 1.3rem; font-style: italic; line-height: 1.55; color: var(--color-espresso); margin-bottom: 1.5rem;">
        "${a.lead}"
      </p>

      <div style="color: var(--color-taupe); font-size: var(--text-base); line-height: 1.8;">
        ${a.content}
      </div>

      <div style="margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid var(--color-sand); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
        <span style="font-size: var(--text-xs); text-transform: uppercase; letter-spacing: 0.12em; color: var(--color-taupe-light);">
          LUNARIA ATELIER JOURNAL · ISSUE NO. 04
        </span>
        <button class="btn btn-secondary" id="journal-modal-inner-close">Close Article</button>
      </div>
    `,i.classList.add("is-active"),document.body.style.overflow="hidden",(m=document.getElementById("journal-modal-inner-close"))==null||m.addEventListener("click",o)}function o(){i.classList.remove("is-active"),document.body.style.overflow=""}p.addEventListener("click",o),i.addEventListener("click",s=>{s.target===i&&o()}),window.addEventListener("keydown",s=>{i.classList.contains("is-active")&&s.key==="Escape"&&o()}),document.querySelectorAll(".journal-card[data-article-id]").forEach(s=>{s.addEventListener("click",()=>{const a=s.getAttribute("data-article-id");r(a)})}),window.openJournalArticle=r}function I(){let i=!1;const e=document.createElement("button");e.className="app-simulator-toggle-btn",e.id="app-view-toggle-btn",e.setAttribute("aria-label","Toggle Mobile App Simulator View"),e.innerHTML=`
    <span class="pulse-dot"></span>
    <span id="app-toggle-label">✦ Preview Mobile App</span>
  `,document.body.appendChild(e);const p=document.getElementById("app-toggle-label");function r(){i=!i,document.getElementById("app-viewport-container"),i?(document.body.classList.add("is-app-simulator"),p.innerText="✦ Back to Desktop Web",f("Switched to Luxury Mobile App Mode")):(document.body.classList.remove("is-app-simulator"),p.innerText="✦ Preview Mobile App",f("Switched to Editorial Desktop Web"))}e.addEventListener("click",r),document.querySelectorAll(".view-mode-toggle").forEach(a=>{a.addEventListener("click",m=>{m.preventDefault(),r()})});const o=document.querySelectorAll(".mobile-app-tab");o.forEach(a=>{a.addEventListener("click",()=>{const m=a.getAttribute("data-target");if(o.forEach(t=>t.classList.remove("active")),a.classList.add("active"),m){const t=document.getElementById(m);t&&t.scrollIntoView({behavior:"smooth"})}})});const s=["hero","treatments","the-studio","journal","booking"];window.addEventListener("scroll",()=>{const a=window.scrollY+200;s.forEach(m=>{const t=document.getElementById(m);if(t){const l=t.offsetTop,u=t.offsetHeight;a>=l&&a<l+u&&o.forEach(c=>{c.getAttribute("data-target")===m?c.classList.add("active"):c.classList.contains("mobile-app-tab-book")||c.classList.remove("active")})}})},{passive:!0})}document.addEventListener("DOMContentLoaded",()=>{$(),A(),T(),B(),I();const i=document.querySelector(".header"),e=40;function p(){window.scrollY>e?i==null||i.classList.add("is-scrolled"):i==null||i.classList.remove("is-scrolled")}window.addEventListener("scroll",p,{passive:!0}),p();const r=document.querySelector(".nav-toggle-btn"),o=document.querySelector(".mobile-nav-drawer"),s=document.querySelectorAll(".mobile-nav-link");function a(){const n=o==null?void 0:o.classList.toggle("is-open");r==null||r.classList.toggle("is-active",n),document.body.style.overflow=n?"hidden":""}function m(){o==null||o.classList.remove("is-open"),r==null||r.classList.remove("is-active"),document.body.style.overflow=""}r==null||r.addEventListener("click",a),s.forEach(n=>{n.addEventListener("click",()=>{m()})}),document.querySelectorAll('a[href^="#"]').forEach(n=>{n.addEventListener("click",d=>{var y;const g=(y=n.getAttribute("href"))==null?void 0:y.substring(1);if(!g)return;const v=document.getElementById(g);if(v){d.preventDefault();const S=v.getBoundingClientRect().top+window.pageYOffset-90;window.scrollTo({top:S,behavior:"smooth"})}})});const t=document.getElementById("newsletter-form");t==null||t.addEventListener("submit",n=>{n.preventDefault();const d=document.getElementById("newsletter-email");d&&d.value&&(f("Thank you for subscribing to Notes on Beauty."),d.value="")});const l=document.getElementById("discover-treatments-link");l==null||l.addEventListener("click",n=>{n.preventDefault(),window.openTreatmentModal&&window.openTreatmentModal("signature-facial")});const u=document.getElementById("btn-explore-studio");u==null||u.addEventListener("click",n=>{n.preventDefault();const d=document.querySelector(".studio-gallery-item");d==null||d.click()});const c=document.getElementById("btn-meet-team");c==null||c.addEventListener("click",n=>{n.preventDefault(),f("Elena, Camille, & Marcus are welcoming appointments this week.")})});
