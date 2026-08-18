const weatherData = {
  current: {
    temp: "28°C",
    condition: "Partly Cloudy with Rain Risk",
    humidity: "72%",
    rainProbability: "80%",
    wind: "14 km/h SW",
    dewPoint: "23°C",
    leafWetness: "8.5 hrs estimated",
    location: "Nashik, Maharashtra (Plot A)"
  },
  hourly: [
    { time: "08:00 AM", temp: "25°C", rainProb: "10%", humidity: "65%", icon: "🌤️" },
    { time: "11:00 AM", temp: "28°C", rainProb: "30%", humidity: "68%", icon: "⛅" },
    { time: "02:00 PM", temp: "30°C", rainProb: "80%", humidity: "76%", icon: "🌧️" },
    { time: "05:00 PM", temp: "27°C", rainProb: "75%", humidity: "82%", icon: "🌧️" },
    { time: "08:00 PM", temp: "24°C", rainProb: "40%", humidity: "85%", icon: "☁️" },
    { time: "11:00 PM", temp: "23°C", rainProb: "20%", humidity: "88%", icon: "🌙" }
  ],
  engineRules: [
    {
      title: "Rule 1: High Rain Probability (>70%)",
      impact: "Irrigation Deferral",
      explanation: "Saves water and prevents root zone oversaturation since rain is expected between 2 PM and 6 PM."
    },
    {
      title: "Rule 2: Extended Leaf Wetness Window (>8 hrs)",
      impact: "Elevated Fungal Disease Risk",
      explanation: "High humidity and wet foliage create high risk conditions for Early Blight fungal spore germination."
    },
    {
      title: "Rule 3: Wind Speed < 15 km/h",
      impact: "Foliar Spray Window Open (if needed)",
      explanation: "Wind conditions are calm enough for targeted sprays if disease thresholds are crossed after rain."
    }
  ]
};

const summaryStrip = document.querySelector("#weather-summary-strip");
const heroCard = document.querySelector("#weather-hero-card");
const timelineGrid = document.querySelector("#hourly-timeline-grid");
const lwdCard = document.querySelector("#lwd-card");
const sprayCondCard = document.querySelector("#spray-cond-card");
const rulesStack = document.querySelector("#weather-rules-list");

function renderWeather() {
  const { current, hourly, engineRules } = weatherData;

  if (summaryStrip) {
    summaryStrip.innerHTML = `
      <div class="summary-chip">📍 Location: ${current.location}</div>
      <div class="summary-chip">🌧️ Rain Prob: ${current.rainProbability}</div>
      <div class="summary-chip">💧 Humidity: ${current.humidity}</div>
    `;
  }

  if (heroCard) {
    heroCard.innerHTML = `
      <div class="weather-hero-inner">
        <span class="eyebrow">Current Field Conditions</span>
        <div class="temp-display">
          <span class="temp">${current.temp}</span>
          <span class="cond">${current.condition}</span>
        </div>
        <div class="metrics-row">
          <div class="metric">
            <span class="label">Rain Probability</span>
            <span class="val text-warning">${current.rainProbability}</span>
          </div>
          <div class="metric">
            <span class="label">Humidity</span>
            <span class="val">${current.humidity}</span>
          </div>
          <div class="metric">
            <span class="label">Wind Speed</span>
            <span class="val">${current.wind}</span>
          </div>
        </div>
      </div>
    `;
  }

  if (timelineGrid) {
    timelineGrid.innerHTML = hourly
      .map(
        (h) => `
      <div class="timeline-card ${parseInt(h.rainProb) >= 70 ? "timeline-card--rain" : ""}">
        <span class="time">${h.time}</span>
        <span class="icon">${h.icon}</span>
        <span class="temp">${h.temp}</span>
        <span class="rain-pill">${h.rainProb} rain</span>
        <span class="humidity">${h.humidity} hum</span>
      </div>
    `
      )
      .join("");
  }

  if (lwdCard) {
    lwdCard.innerHTML = `
      <div class="lwd-display">
        <span class="metric-big">${current.leafWetness}</span>
        <p>Continuous leaf wetness creates favorable humidity for fungal pathogens like <em>Alternaria solani</em>.</p>
        <span class="risk-badge risk-badge--high">High Disease Potential</span>
      </div>
    `;
  }

  if (sprayCondCard) {
    sprayCondCard.innerHTML = `
      <ul class="cond-list">
        <li><strong>Dew Point:</strong> ${current.dewPoint} (High moisture saturation)</li>
        <li><strong>Wind Vector:</strong> ${current.wind} (Low drift risk)</li>
        <li><strong>Rain Window:</strong> 2:00 PM – 6:00 PM (Avoid foliar sprays before rain)</li>
      </ul>
    `;
  }

  if (rulesStack) {
    rulesStack.innerHTML = engineRules
      .map(
        (r) => `
      <div class="rule-card">
        <div class="rule-header">
          <h3>${r.title}</h3>
          <span class="impact-pill">${r.impact}</span>
        </div>
        <p>${r.explanation}</p>
      </div>
    `
      )
      .join("");
  }
}

renderWeather();
