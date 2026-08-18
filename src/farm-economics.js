import { initQnAAssistant } from "./ai-assistant.js";

document.addEventListener("DOMContentLoaded", () => {
  initQnAAssistant("economics");

  const yieldRange = document.getElementById("yield-range");
  const priceRange = document.getElementById("price-range");

  const yieldLabel = document.getElementById("yield-label");
  const priceLabel = document.getElementById("price-label");

  const statYield = document.getElementById("stat-yield");
  const statPrice = document.getElementById("stat-price");
  const statRevenue = document.getElementById("stat-revenue");
  const statLoss = document.getElementById("stat-loss");
  const statProtected = document.getElementById("stat-protected");

  function calculateEconomics() {
    const yieldKg = parseInt(yieldRange.value);
    const pricePerKg = parseInt(priceRange.value);

    const revenue = yieldKg * pricePerKg;
    const loss = Math.round(revenue * 0.22); // 22% disease damage
    const treatmentCost = 1200;
    const protectedVal = loss - treatmentCost;

    yieldLabel.textContent = `${yieldKg.toLocaleString()} kg`;
    priceLabel.textContent = `₹${pricePerKg} / kg`;

    statYield.textContent = `${yieldKg.toLocaleString()} kg`;
    statPrice.textContent = `₹${pricePerKg} / kg`;
    statRevenue.textContent = `₹${revenue.toLocaleString()}`;
    statLoss.textContent = `₹${loss.toLocaleString()}`;
    statProtected.textContent = `₹${protectedVal.toLocaleString()}`;
  }

  yieldRange?.addEventListener("input", calculateEconomics);
  priceRange?.addEventListener("input", calculateEconomics);

  calculateEconomics();
});
