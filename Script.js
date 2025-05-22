// Custom script to change icons when accordion items are toggled
document.querySelectorAll(".accordion-button").forEach((button) => {
  button.addEventListener("click", function () {
    const icon = this.querySelector(".custom-icon i");
    if (this.classList.contains("collapsed")) {
      icon.classList.replace("bi-plus", "bi-dash");
    } else {
      icon.classList.replace("bi-dash", "bi-plus");
    }
  });
});
// ───── JS to bind all cards ───── -->
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".feature-card[data-modal]").forEach((card) => {
    card.addEventListener("click", () => {
      const target = card.getAttribute("data-modal");
      const modalEl = document.querySelector(target);
      if (modalEl) new bootstrap.Modal(modalEl).show();
    });
  });
});
// Circuit Lines Animation -->
document.addEventListener("DOMContentLoaded", function () {
  const circuitLines = document.querySelector(".circuit-lines");

  // Create random circuit lines
  for (let i = 0; i < 15; i++) {
    const line = document.createElement("div");
    line.classList.add("circuit-line");

    // Random positioning
    const top = Math.random() * 100;
    const width = 20 + Math.random() * 80;
    const right = Math.random() * 100;

    line.style.top = `${top}%`;
    line.style.width = `${width}px`;
    line.style.right = `${right}px`;

    circuitLines.appendChild(line);
  }
});
const testimonials = [
  {
    quote:
      "Production Online has helped me become a better musician and producer than I ever thought possible.",
    name: "Kyle Weznick",
    title: "Media Director, Turn Around Music Group",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3h4bGa6PwAujLnUU5b5Zb55hNxS21P.png",
  },
  {
    quote:
      "Their lessons are clear, practical, and instantly leveled-up my mixes.",
    name: "Olivia Ramirez",
    title: "Independent Producer",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    quote:
      "I landed two sync placements after applying what I learned last month!",
    name: "James “Jimmy” Lee",
    title: "Composer & Guitarist",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote: "The community feedback alone is worth the subscription price.",
    name: "Priya Shah",
    title: "Singer-Songwriter",
    avatar: "https://randomuser.me/api/portraits/women/48.jpg",
  },
];

let idx = 0;

/* Element refs */
const quoteEl = document.getElementById("testimonialQuote");
const nameEl = document.getElementById("testimonialName");
const titleEl = document.getElementById("testimonialTitle");
const avatarEl = document.getElementById("testimonialAvatar");

/* Swap helper */
function showTestimonial(i) {
  const t = testimonials[i];
  quoteEl.classList.add("opacity-0");
  setTimeout(() => {
    quoteEl.textContent = t.quote;
    nameEl.textContent = t.name;
    titleEl.textContent = t.title;
    avatarEl.src = t.avatar;
    avatarEl.alt = t.name;
    quoteEl.classList.remove("opacity-0");
  }, 150); /* sync with CSS transition */
}

/* Prev / next handlers */
document.getElementById("prevTestimonial").addEventListener("click", () => {
  idx = (idx - 1 + testimonials.length) % testimonials.length;
  showTestimonial(idx);
});
document.getElementById("nextTestimonial").addEventListener("click", () => {
  idx = (idx + 1) % testimonials.length;
  showTestimonial(idx);
});
/* one SR instance with common defaults */
const sr = ScrollReveal({
  distance: "40px",
  duration: 650,
  easing: "ease-out",
  opacity: 0,
  reset: true, // ⇦ animate again when you scroll back up
});

/* odd-numbered cards: slide in from the LEFT */
sr.reveal(".custom-feature-card:nth-child(odd)", {
  origin: "left",
  interval: 100, // 100 ms stagger
});

/* even-numbered cards: slide in from the RIGHT */
sr.reveal(".custom-feature-card:nth-child(even)", {
  origin: "right",
  interval: 100,
});
/* =====  CASE-STUDY SECTION  ===== */
sr.reveal(".case-card:nth-child(odd)", {
  // first & third column
  origin: "left",
  distance: "40px",
  interval: 100,
});
sr.reveal(".case-card:nth-child(even)", {
  // middle column
  origin: "right",
  distance: "40px",
  interval: 100,
});
/* =====  GPS SECTION  ===== */
sr.reveal(".gps-card:nth-child(odd)", {
  // left column (text)
  origin: "left",
  distance: "60px", // a bit more slide for variety
  interval: 80,
});
sr.reveal(".gps-card:nth-child(even)", {
  // right column (video)
  origin: "right",
  distance: "60px",
  interval: 80,
});
/* ── MANAGEMENT & SECURITY section ─────────────────────────── */
/* left-hand text column */
sr.reveal("#managementSecurity .col-lg-7", {
  origin: "left",
  distance: "60px",
  duration: 650,
  easing: "ease-out",
  opacity: 0,
  reset: true,
});

/* right-hand video column */
sr.reveal("#managementSecurity .col-lg-5", {
  origin: "right",
  distance: "60px",
  duration: 650,
  easing: "ease-out",
  opacity: 0,
  reset: true,
});
sr.reveal(".faq-section .col-lg-5", {
  origin: "left",
  distance: "60px",
});

/* right column (accordion wrapper) */
sr.reveal(".faq-section .col-lg-7", {
  origin: "right",
  distance: "60px",
});

/* each accordion item fades up one after another */
sr.reveal("#faqAccordion .accordion-item", {
  origin: "bottom",
  distance: "40px",
  interval: 100, // 100 ms stagger
});
sr.reveal(".testimonial-section .col-md-5", {
  origin: "left",
  distance: "60px",
});

/* right column – quote, avatar, name/title */
sr.reveal(".testimonial-section .col-md-7", {
  origin: "right",
  distance: "60px",
});

/* optional: stagger inner elements for a nicer entrance */
sr.reveal(
  ".testimonial-section .quote-mark, \
             .testimonial-section .testimonial-quote, \
             .testimonial-section .avatar, \
             .testimonial-section .person-name, \
             .testimonial-section .person-title",
  {
    origin: "bottom",
    distance: "30px",
    interval: 80,
  }
);
sr.reveal(".contact-card .contact-img", {
  origin: "left",
  distance: "60px",
});

/* right form pane (slides in from the right) */
sr.reveal(".contact-card .form-side", {
  origin: "right",
  distance: "60px",
});

/* optional: cascade each input / textarea / button upward */
sr.reveal(
  ".contact-card .input-group, \
             .contact-card textarea, \
             .contact-card .btn-brand",
  {
    origin: "bottom",
    distance: "30px",
    interval: 80, // 80 ms stagger
  }
);
