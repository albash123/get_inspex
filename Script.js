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
