let currentStep = 1;

const wizardState = {
  language: "English",
  farmerName: "Ramesh Patil",
  location: "Nashik, Maharashtra",
  crop: "Tomato",
  stage: "Flowering",
  variety: "Abhinav Hybrid",
  plotSize: "2.5 Acres",
  irrigationType: "Drip Irrigation",
  goal: "Max Quality & Prevent Disease"
};

const stepContainer = document.querySelector("#step-container");
const stepItems = document.querySelectorAll(".step-item");

function updateStepperUI() {
  stepItems.forEach((item) => {
    const s = parseInt(item.getAttribute("data-step") || "1");
    if (s === currentStep) {
      item.classList.add("active");
      item.classList.remove("completed");
    } else if (s < currentStep) {
      item.classList.remove("active");
      item.classList.add("completed");
    } else {
      item.classList.remove("active");
      item.classList.remove("completed");
    }
  });
}

function renderStep() {
  updateStepperUI();
  if (!stepContainer) return;

  if (currentStep === 1) {
    stepContainer.innerHTML = `
      <div class="step-content">
        <h2>Step 1: Language & Location</h2>
        <p class="muted">Select your preferred language and farm region for local weather integration.</p>

        <div class="form-group" style="margin-top: 16px;">
          <label>Farmer Full Name</label>
          <input type="text" id="ob-name" value="${wizardState.farmerName}" />
        </div>

        <div class="form-group" style="margin-top: 12px;">
          <label>Farm Location / District</label>
          <input type="text" id="ob-loc" value="${wizardState.location}" />
        </div>

        <div class="form-group" style="margin-top: 12px;">
          <label>Preferred Language</label>
          <select id="ob-lang">
            <option value="English" ${wizardState.language === "English" ? "selected" : ""}>English</option>
            <option value="Marathi" ${wizardState.language === "Marathi" ? "selected" : ""}>मराठी (Marathi)</option>
            <option value="Hindi" ${wizardState.language === "Hindi" ? "selected" : ""}>हिंदी (Hindi)</option>
          </select>
        </div>

        <div class="wizard-actions">
          <button class="button-primary" type="button" id="next-btn">Next: Crop Selection &rsaquo;</button>
        </div>
      </div>
    `;
  } else if (currentStep === 2) {
    stepContainer.innerHTML = `
      <div class="step-content">
        <h2>Step 2: Crop & Growth Stage</h2>
        <p class="muted">Choose your current active crop so KhetSaathi can tailor decision rules.</p>

        <div class="form-group" style="margin-top: 16px;">
          <label>Select Crop</label>
          <select id="ob-crop">
            <option value="Tomato" ${wizardState.crop === "Tomato" ? "selected" : ""}>Tomato</option>
            <option value="Cotton" ${wizardState.crop === "Cotton" ? "selected" : ""}>Cotton</option>
            <option value="Wheat" ${wizardState.crop === "Wheat" ? "selected" : ""}>Wheat</option>
            <option value="Chilli" ${wizardState.crop === "Chilli" ? "selected" : ""}>Chilli</option>
          </select>
        </div>

        <div class="form-group" style="margin-top: 12px;">
          <label>Growth Stage</label>
          <select id="ob-stage">
            <option value="Sowing / Nursery" ${wizardState.stage === "Sowing / Nursery" ? "selected" : ""}>Sowing / Nursery</option>
            <option value="Vegetative" ${wizardState.stage === "Vegetative" ? "selected" : ""}>Vegetative</option>
            <option value="Flowering" ${wizardState.stage === "Flowering" ? "selected" : ""}>Flowering</option>
            <option value="Fruiting / Harvest" ${wizardState.stage === "Fruiting / Harvest" ? "selected" : ""}>Fruiting / Harvest</option>
          </select>
        </div>

        <div class="wizard-actions">
          <button class="button-secondary" type="button" id="prev-btn">&lsaquo; Back</button>
          <button class="button-primary" type="button" id="next-btn">Next: Plot Details &rsaquo;</button>
        </div>
      </div>
    `;
  } else if (currentStep === 3) {
    stepContainer.innerHTML = `
      <div class="step-content">
        <h2>Step 3: Plot Details & Irrigation Setup</h2>
        <p class="muted">KhetSaathi uses irrigation type to calculate canopy humidity and water timing.</p>

        <div class="form-group" style="margin-top: 16px;">
          <label>Plot Area Size</label>
          <input type="text" id="ob-size" value="${wizardState.plotSize}" />
        </div>

        <div class="form-group" style="margin-top: 12px;">
          <label>Primary Irrigation Method</label>
          <select id="ob-irr">
            <option value="Drip Irrigation" ${wizardState.irrigationType === "Drip Irrigation" ? "selected" : ""}>Drip Irrigation</option>
            <option value="Flood / Furrow" ${wizardState.irrigationType === "Flood / Furrow" ? "selected" : ""}>Flood / Furrow</option>
            <option value="Sprinkler" ${wizardState.irrigationType === "Sprinkler" ? "selected" : ""}>Sprinkler</option>
            <option value="Rainfed" ${wizardState.irrigationType === "Rainfed" ? "selected" : ""}>Rainfed</option>
          </select>
        </div>

        <div class="wizard-actions">
          <button class="button-secondary" type="button" id="prev-btn">&lsaquo; Back</button>
          <button class="button-primary" type="button" id="next-btn">Next: Farming Goal &rsaquo;</button>
        </div>
      </div>
    `;
  } else if (currentStep === 4) {
    stepContainer.innerHTML = `
      <div class="step-content">
        <h2>Step 4: Primary Farming Goal</h2>
        <p class="muted">Set your focus area for today's decision companion.</p>

        <div class="form-group" style="margin-top: 16px;">
          <label>Goal Preference</label>
          <select id="ob-goal">
            <option value="Max Quality & Prevent Disease" ${wizardState.goal === "Max Quality & Prevent Disease" ? "selected" : ""}>Max Quality & Prevent Disease</option>
            <option value="Optimize Input Costs" ${wizardState.goal === "Optimize Input Costs" ? "selected" : ""}>Optimize Input Costs</option>
            <option value="Water Conservation" ${wizardState.goal === "Water Conservation" ? "selected" : ""}>Water Conservation</option>
          </select>
        </div>

        <div class="wizard-actions">
          <button class="button-secondary" type="button" id="prev-btn">&lsaquo; Back</button>
          <button class="button-primary" type="button" id="next-btn">Review Setup &rsaquo;</button>
        </div>
      </div>
    `;
  } else if (currentStep === 5) {
    stepContainer.innerHTML = `
      <div class="step-content">
        <h2>Step 5: Setup Summary & Baseline Ready</h2>
        <p class="muted">Verify your farm context before initializing the baseline decision engine.</p>

        <div class="summary-box">
          <p><strong>Farmer Name:</strong> ${wizardState.farmerName}</p>
          <p><strong>Location:</strong> ${wizardState.location} (${wizardState.language})</p>
          <p><strong>Crop & Stage:</strong> ${wizardState.crop} (${wizardState.stage})</p>
          <p><strong>Plot Size:</strong> ${wizardState.plotSize} with ${wizardState.irrigationType}</p>
          <p><strong>Goal:</strong> ${wizardState.goal}</p>
        </div>

        <div class="wizard-actions">
          <button class="button-secondary" type="button" id="prev-btn">&lsaquo; Back</button>
          <a class="button-primary" href="./initial-farm-analysis.html" id="finish-btn">Initialize Baseline Farm Analysis &rsaquo;</a>
        </div>
      </div>
    `;
  }

  // Attach handlers
  document.querySelector("#next-btn")?.addEventListener("click", () => {
    saveCurrentStepData();
    if (currentStep < 5) {
      currentStep++;
      renderStep();
    }
  });

  document.querySelector("#prev-btn")?.addEventListener("click", () => {
    if (currentStep > 1) {
      currentStep--;
      renderStep();
    }
  });

  // Persist the completed profile so the rest of the site (and the
  // chatbot widget) can read the farmer's real setup instead of demo data.
  document.querySelector("#finish-btn")?.addEventListener("click", () => {
    localStorage.setItem("khetsaathi_farm_profile", JSON.stringify(wizardState));
  });
}

function saveCurrentStepData() {
  if (currentStep === 1) {
    const name = document.querySelector("#ob-name")?.value;
    const loc = document.querySelector("#ob-loc")?.value;
    const lang = document.querySelector("#ob-lang")?.value;
    if (name) wizardState.farmerName = name;
    if (loc) wizardState.location = loc;
    if (lang) wizardState.language = lang;
  } else if (currentStep === 2) {
    const crop = document.querySelector("#ob-crop")?.value;
    const stage = document.querySelector("#ob-stage")?.value;
    if (crop) wizardState.crop = crop;
    if (stage) wizardState.stage = stage;
  } else if (currentStep === 3) {
    const size = document.querySelector("#ob-size")?.value;
    const irr = document.querySelector("#ob-irr")?.value;
    if (size) wizardState.plotSize = size;
    if (irr) wizardState.irrigationType = irr;
  } else if (currentStep === 4) {
    const goal = document.querySelector("#ob-goal")?.value;
    if (goal) wizardState.goal = goal;
  }
}

renderStep();
