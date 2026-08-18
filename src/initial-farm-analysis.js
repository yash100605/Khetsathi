const analysisData = {
  baselineScore: "84 / 100",
  healthStatus: "Optimal Setup Context",
  farmer: "Ramesh Patil",
  crop: "Tomato (Flowering Stage)",
  soil: {
    type: "Black Cotton Loam",
    ph: "6.8 (Neutral - Optimal)",
    organicCarbon: "0.65% (Moderate)",
    drainage: "Good drip layout with slope"
  },
  vulnerabilities: [
    { title: "Fungal Leaf Wetness", level: "Moderate", note: "Dense canopy during flowering holds moisture after rain." },
    { title: "Nutrient Draw during Flowering", level: "High", note: "Requires steady potassium and micronutrient support." }
  ],
  engineParams: [
    { param: "Irrigation Rain Trigger", value: "80% Rain Prob -> Defer Water", status: "Active" },
    { param: "Disease Scan Threshold", value: ">85% Confidence -> Issue Alert", status: "Active" },
    { param: "Economic Protective Spray", value: "APMC Rate > Rs 25/kg -> Recommend Action", status: "Active" }
  ]
};

const summaryEl = document.querySelector("#baseline-summary");
const heroCardEl = document.querySelector("#baseline-hero-card");
const soilCardEl = document.querySelector("#soil-card");
const vulnCardEl = document.querySelector("#vulnerability-card");
const paramsStackEl = document.querySelector("#params-stack");

function renderInitialAnalysis() {
  if (summaryEl) {
    summaryEl.innerHTML = `
      <div class="summary-chip">Farmer: ${analysisData.farmer}</div>
      <div class="summary-chip">Crop: ${analysisData.crop}</div>
      <div class="summary-chip">Score: ${analysisData.baselineScore}</div>
    `;
  }

  if (heroCardEl) {
    heroCardEl.innerHTML = `
      <div class="baseline-score-box">
        <span class="eyebrow">Baseline Readiness Score</span>
        <span class="score-num">${analysisData.baselineScore}</span>
        <span class="score-status">${analysisData.healthStatus}</span>
        <p class="muted" style="margin-top: 12px;">Plot A is fully calibrated for automated decision companion logic.</p>
      </div>
    `;
  }

  if (soilCardEl) {
    soilCardEl.innerHTML = `
      <ul class="spec-list">
        <li><strong>Soil Type:</strong> <span>${analysisData.soil.type}</span></li>
        <li><strong>pH Level:</strong> <span>${analysisData.soil.ph}</span></li>
        <li><strong>Organic Carbon:</strong> <span>${analysisData.soil.organicCarbon}</span></li>
        <li><strong>Field Drainage:</strong> <span>${analysisData.soil.drainage}</span></li>
      </ul>
    `;
  }

  if (vulnCardEl) {
    vulnCardEl.innerHTML = analysisData.vulnerabilities
      .map(
        (v) => `
      <div class="vuln-item">
        <div class="vuln-header">
          <strong>${v.title}</strong>
          <span class="vuln-level vuln-level--${v.level.toLowerCase()}">${v.level} Risk</span>
        </div>
        <p>${v.note}</p>
      </div>
    `
      )
      .join("");
  }

  if (paramsStackEl) {
    paramsStackEl.innerHTML = analysisData.engineParams
      .map(
        (p) => `
      <div class="param-row">
        <div>
          <strong>${p.param}</strong>
          <span class="param-val">${p.value}</span>
        </div>
        <span class="status-chip">${p.status}</span>
      </div>
    `
      )
      .join("");
  }
}

renderInitialAnalysis();
