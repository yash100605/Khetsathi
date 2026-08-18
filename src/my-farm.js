import { farmPlots } from "./live-data.js";
import { initQnAAssistant } from "./ai-assistant.js";

document.addEventListener("DOMContentLoaded", () => {
  initQnAAssistant("myfarm");

  const plotTabs = document.querySelectorAll(".plot-tab");

  const heroTitle = document.querySelector(".plot-hero-info h2");
  const heroMeta = document.querySelector(".plot-hero-info p");
  const heroSubmeta = document.querySelector(".plot-hero-info .muted");
  const heroImg = document.querySelector(".plot-hero-img img");

  const moistureVal = document.querySelectorAll(".cond-val")[0];
  const tempVal = document.querySelectorAll(".cond-val")[1];
  const riskVal = document.querySelectorAll(".cond-val")[2];
  const growthVal = document.querySelectorAll(".cond-val")[3];

  const moistureBadge = document.querySelectorAll(".cond-badge")[0];
  const riskBadge = document.querySelectorAll(".cond-badge")[2];
  const growthBadge = document.querySelectorAll(".cond-badge")[3];

  const lastIrrigation = document.querySelectorAll(".summary-line strong")[0];
  const lastSpray = document.querySelectorAll(".summary-line strong")[1];

  function updatePlotView(plotKey) {
    const data = farmPlots[plotKey];
    if (!data) return;

    plotTabs.forEach((tab) => {
      tab.classList.toggle("active", tab.getAttribute("data-plot") === plotKey);
    });

    if (heroTitle) heroTitle.textContent = data.name;
    if (heroMeta) heroMeta.textContent = `${data.acres} Acres · ${data.days} Days · ${data.stage}`;
    if (heroSubmeta) heroSubmeta.textContent = `${data.irrigationType} · ${data.soilType}`;
    if (heroImg) heroImg.src = data.imgUrl;

    if (moistureVal) moistureVal.textContent = `${data.moisture}%`;
    if (tempVal) tempVal.textContent = `${data.temperature}°C`;
    if (riskVal) riskVal.textContent = data.diseaseRisk;
    if (growthVal) growthVal.textContent = data.growthStatus;

    if (moistureBadge) moistureBadge.textContent = data.moistureStatus;
    if (riskBadge) riskBadge.textContent = data.diseaseBadge;
    if (growthBadge) growthBadge.textContent = data.growthDetail;

    if (lastIrrigation) lastIrrigation.textContent = data.lastIrrigation;
    if (lastSpray) lastSpray.textContent = data.lastSpray;
  }

  plotTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const plotKey = tab.getAttribute("data-plot");
      updatePlotView(plotKey);
    });
  });
});
