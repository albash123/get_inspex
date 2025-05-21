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
