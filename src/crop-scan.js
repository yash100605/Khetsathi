document.addEventListener("DOMContentLoaded", () => {
  const shutterBtn = document.querySelector(".shutter-btn");
  const galleryBtn = document.querySelectorAll(".cam-sub-btn")[0];

  function runAIScanAnimation(e) {
    e.preventDefault();

    // Create modal overlay for live AI scanning simulation
    const modal = document.createElement("div");
    modal.style.cssText = `
      position: fixed; inset: 0; background: rgba(0,0,0,0.85); backdrop-filter: blur(8px);
      z-index: 3000; display: flex; flex-direction: column; align-items: center; justify-content: center;
      color: #ffffff; font-family: var(--font-body); padding: 20px; text-align: center;
    `;

    modal.innerHTML = `
      <div style="width: 80px; height: 80px; border-radius: 50%; border: 4px solid #15803d; border-top-color: transparent; animation: spin 1s linear infinite; margin-bottom: 20px;"></div>
      <style>@keyframes spin { 100% { transform: rotate(360deg); } }</style>
      <h2 style="font-family: var(--font-heading); margin: 0 0 8px;">KhetSaathi Vision Engine</h2>
      <p id="ai-scan-step" style="font-size: 16px; color: #86efac; font-weight: 700; margin: 0;">Step 1/3: Segmenting leaf canopy...</p>
    `;

    document.body.appendChild(modal);

    const stepLabel = document.getElementById("ai-scan-step");

    setTimeout(() => {
      if (stepLabel) stepLabel.textContent = "Step 2/3: Identifying pathogen spore patterns...";
    }, 700);

    setTimeout(() => {
      if (stepLabel) stepLabel.textContent = "Step 3/3: Diagnostic result ready! 87% Early Blight.";
    }, 1400);

    setTimeout(() => {
      window.location.href = "./analysis.html";
    }, 2000);
  }

  shutterBtn?.addEventListener("click", runAIScanAnimation);
  galleryBtn?.addEventListener("click", runAIScanAnimation);
});
