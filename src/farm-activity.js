let activities = [
  {
    id: "act-1",
    title: "Irrigation Deferral Executed",
    category: "Irrigation Deferral",
    note: "Deferred evening drip irrigation due to 80% rain forecast and moderate Early Blight risk.",
    timestamp: "Today · 10:30 AM",
    status: "pending_sync",
    outcome: "Under Evaluation"
  },
  {
    id: "act-2",
    title: "Crop Scan Completed",
    category: "Crop Health Scan",
    note: "Leaf scan returned Early Blight with 87% confidence.",
    timestamp: "Today · 9:45 AM",
    status: "synced",
    outcome: "Decision Followed"
  },
  {
    id: "act-3",
    title: "Canopy Monitoring Note",
    category: "Canopy Inspection",
    note: "Checked lower leaf canopy for yellow spot expansion. Moisture visible.",
    timestamp: "Yesterday · 4:15 PM",
    status: "synced",
    outcome: "Logged"
  }
];

const logsContainer = document.querySelector("#logs-container");
const activityForm = document.querySelector("#activity-form");
const syncBtn = document.querySelector("#sync-now-btn");
const syncStatusText = document.querySelector("#sync-status-indicator");
const queueCountText = document.querySelector("#queue-count-text");
const filterPills = document.querySelectorAll("#act-filter-pills .pill-btn");

let activeFilter = "all";

function updateSyncUI() {
  const pendingCount = activities.filter((a) => a.status === "pending_sync").length;
  if (syncStatusText) {
    syncStatusText.textContent = pendingCount > 0 ? `Sync Status: ${pendingCount} Pending Offline Log(s)` : "Sync Status: All Logged Actions Synced";
  }
  if (queueCountText) {
    queueCountText.textContent = pendingCount > 0 ? `${pendingCount} Action(s) Waiting to Sync` : "Cloud Sync Complete";
  }
}

function renderLogs() {
  if (!logsContainer) return;

  const filtered = activities.filter((a) => {
    if (activeFilter === "all") return true;
    return a.category.toLowerCase().includes(activeFilter.toLowerCase());
  });

  if (filtered.length === 0) {
    logsContainer.innerHTML = `<div class="empty-state"><p>No activity logs found for this filter.</p></div>`;
    return;
  }

  logsContainer.innerHTML = filtered
    .map(
      (a) => `
    <article class="activity-card-item ${a.status === "pending_sync" ? "activity-card-item--pending" : ""}">
      <div class="card-top">
        <div>
          <span class="category-pill">${a.category}</span>
          <h3>${a.title}</h3>
        </div>
        <span class="sync-badge sync-badge--${a.status}">
          ${a.status === "pending_sync" ? "⏳ Pending Offline Sync" : "✓ Synced to Cloud"}
        </span>
      </div>
      <p class="card-note">${a.note}</p>
      <div class="card-footer">
        <span class="time">${a.timestamp}</span>
        <span class="outcome-tag">${a.outcome}</span>
      </div>
    </article>
  `
    )
    .join("");
}

activityForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const typeEl = document.querySelector("#act-type");
  const noteEl = document.querySelector("#act-note");

  if (!typeEl || !noteEl || !noteEl.value.trim()) return;

  const newAct = {
    id: `act-${Date.now()}`,
    title: `${typeEl.value} Recorded`,
    category: typeEl.value,
    note: noteEl.value.trim(),
    timestamp: "Just Now · Offline Saved",
    status: "pending_sync",
    outcome: "Under Evaluation"
  };

  activities.unshift(newAct);
  noteEl.value = "";
  updateSyncUI();
  renderLogs();
});

syncBtn?.addEventListener("click", () => {
  activities.forEach((a) => {
    a.status = "synced";
  });
  updateSyncUI();
  renderLogs();
});

filterPills.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterPills.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.getAttribute("data-filter") || "all";
    renderLogs();
  });
});

updateSyncUI();
renderLogs();
