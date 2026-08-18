import { initQnAAssistant } from "./ai-assistant.js";

document.addEventListener("DOMContentLoaded", () => {
  initQnAAssistant("tracking");

  const form = document.getElementById("log-obs-form");
  const noteInput = document.getElementById("obs-note");
  const timelineStack = document.getElementById("timeline-stack");

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = noteInput.value.trim();
    if (!text) return;

    const newCard = document.createElement("div");
    newCard.className = "timeline-card timeline-card--latest";
    newCard.innerHTML = `
      <div class="t-check active">✓</div>
      <div class="t-info">
        <div class="t-date-row">
          <strong>Today - 18 Aug</strong>
          <span class="t-sev-badge t-sev-badge--low">Logged</span>
        </div>
        <p class="muted">${text}</p>
      </div>
      <div class="t-thumb">
        <img src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=200&q=80" alt="Observation scan" />
      </div>
    `;

    timelineStack.appendChild(newCard);
    noteInput.value = "";
  });
});
