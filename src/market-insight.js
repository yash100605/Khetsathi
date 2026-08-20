import { mandiData } from "./live-data.js";
// initQnAAssistant removed: replaced by Botpress webchat widget

document.addEventListener("DOMContentLoaded", () => {
  // initQnAAssistant(...) removed: replaced by Botpress webchat widget

  const mandiSelect = document.getElementById("mandi-select");
  const cropSelect = document.getElementById("crop-select");
  const cIcon = document.getElementById("c-icon");
  const cName = document.getElementById("c-name");
  const cPrice = document.getElementById("c-price");
  const cTrend = document.getElementById("c-trend");
  const svg = document.getElementById("market-svg");
  const insightText = document.getElementById("m-insight-text");
  const latestDateLabel = document.getElementById("latest-price-date");

  const cropIcons = { Tomato: "🍅", Onion: "🧅", Chilli: "🌶️", Potato: "🥔" };

  function renderMarketData() {
    const selectedMandi = mandiSelect.value;
    const selectedCrop = cropSelect.value;
    const cropObj = mandiData[selectedMandi]?.[selectedCrop];
    if (!cropObj) return;

    cIcon.textContent = cropIcons[selectedCrop] || "🌾";
    cName.textContent = selectedCrop;
    cPrice.textContent = `₹${cropObj.price} / kg`;
    cTrend.textContent = `▲ ${cropObj.change} (Last 7 Days)`;
    latestDateLabel.textContent = `18 May (Today: ₹${cropObj.price})`;

    if (cropObj.trend === "up") {
      insightText.textContent = `Price is increasing in ${selectedMandi}. You can hold for a few days for higher market realization.`;
    } else if (cropObj.trend === "down") {
      insightText.textContent = `Price is softening slightly in ${selectedMandi}. Consider harvesting ready crop to avoid further drop.`;
    } else {
      insightText.textContent = `Prices are stable at ₹${cropObj.price}/kg in ${selectedMandi}. Regular market supply.`;
    }

    renderSVGChart(cropObj.history);
  }

  function renderSVGChart(history) {
    if (!history || history.length === 0) return;
    const minP = Math.min(...history) - 2;
    const maxP = Math.max(...history) + 2;
    const width = 500;
    const height = 180;

    const points = history.map((val, idx) => {
      const x = 20 + (idx / (history.length - 1)) * (width - 40);
      const y = height - 20 - ((val - minP) / (maxP - minP)) * (height - 40);
      return { x, y, val };
    });

    const polylinePoints = points.map((p) => `${p.x},${p.y}`).join(" ");
    const areaPoints = `${points[0].x},${height} ${polylinePoints} ${points[points.length - 1].x},${height}`;

    svg.innerHTML = `
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#15803d" stop-opacity="0.35" />
          <stop offset="100%" stop-color="#15803d" stop-opacity="0.0" />
        </linearGradient>
      </defs>
      <line x1="0" y1="40" x2="${width}" y2="40" stroke="#e5e7eb" stroke-dasharray="4" />
      <line x1="0" y1="90" x2="${width}" y2="90" stroke="#e5e7eb" stroke-dasharray="4" />
      <line x1="0" y1="140" x2="${width}" y2="140" stroke="#e5e7eb" stroke-dasharray="4" />
      <polygon points="${areaPoints}" fill="url(#chartGrad)" />
      <polyline points="${polylinePoints}" fill="none" stroke="#15803d" stroke-width="4" stroke-linecap="round" />
      ${points
        .map(
          (p, i) =>
            `<circle cx="${p.x}" cy="${p.y}" r="${i === points.length - 1 ? 7 : 5}" fill="#15803d" stroke="#ffffff" stroke-width="2" />`
        )
        .join("")}
    `;
  }

  mandiSelect?.addEventListener("change", renderMarketData);
  cropSelect?.addEventListener("change", renderMarketData);

  const timeTabs = document.querySelectorAll(".t-tab");
  timeTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      timeTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      renderMarketData();
    });
  });

  renderMarketData();
});
