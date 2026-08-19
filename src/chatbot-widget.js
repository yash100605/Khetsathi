// Reusable KhetSaathi chatbot widget.
// Injects a floating toggle button + panel on every page, and lazy-loads
// the Botpress scripts only the first time the user opens the chat.

import { farmPlots } from "./live-data.js";

const BOTPRESS_INJECT_SRC = "https://cdn.botpress.cloud/webchat/v5.0/inject.js";

// Fallback profile used only if the visitor hasn't completed onboarding yet
// (so the chat still has something reasonable to work with on first visit).
const DEMO_FARM_PROFILE = {
  farmerName: "Ramesh Patil",
  location: "Nashik, Maharashtra",
  language: "English",
  crop: "Tomato",
  stage: "Flowering",
  plotSize: "2.5 Acres",
  irrigationType: "Drip Irrigation",
  goal: "Max Quality & Prevent Disease",
};

// Reads the farmer's real profile saved by the onboarding wizard
// (src/onboarding.js), falling back to demo data if none exists yet.
function getFarmProfile() {
  try {
    const saved = localStorage.getItem("khetsaathi_farm_profile");
    if (saved) return JSON.parse(saved);
  } catch (err) {
    console.warn("Could not read saved farm profile, using demo data.", err);
  }
  return DEMO_FARM_PROFILE;
}

// Mirrors the bot's hosted config (originally served from
// files.bpcontent.cloud), with the "footer" field cleared up front.
// We init with this ourselves instead of loading the hosted config script,
// so the branded footer never renders even for a split second on first open.
// NOTE: if bot settings (welcome text, botId, etc.) are changed later in
// the Botpress dashboard, this object needs to be updated to match.
const BOTPRESS_INIT_CONFIG = {
  botId: "0b3043ce-6e9a-4bcc-9fb8-e256eab89d8c",
  configuration: {
    version: "v2",
    botName: "KhetSaathi",
    website: {},
    email: {},
    phone: {},
    termsOfService: {},
    privacyPolicy: {},
    feedbackEnabled: true,
    footer: "",
    allowFileUpload: true,
    soundEnabled: true,
    embeddedChatId: "botpress-webchat",
    conversationHistory: true,
    homePageEnabled: true,
    welcomeHeading: "Hi there, how can we help?",
    welcomeSubtitle: "Tap a starting point or ask in your own words.",
    citationsEnabled: true,
    agentPresenceEnabled: true,
  },
  clientId: "fe65c0ca-9ee3-414d-bbb4-f74a657b3f4d",
};

const CHAT_ICON = `
  <svg class="icon-chat" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4h16v12H7l-3 3V4z" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  </svg>`;

const CLOSE_ICON = `
  <svg class="icon-close" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

let botpressLoaded = false;
let botpressLoading = false;
let footerObserver = null;

function loadScript(src, { defer = false } = {}) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    if (defer) script.defer = true;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

async function ensureBotpressLoaded() {
  if (botpressLoaded || botpressLoading) return;
  botpressLoading = true;
  try {
    await loadScript(BOTPRESS_INJECT_SRC);
    window.botpress.init(BOTPRESS_INIT_CONFIG);

    // Push the farm profile to Botpress as user data ("Push" method) as
    // soon as the webchat finishes initializing, so KhetSaathi already
    // has farm context and doesn't need to ask for it again.
    window.botpress.on("webchat:initialized", () => {
      const profile = getFarmProfile();
      window.botpress.updateUser({
        data: {
          farmerName: profile.farmerName,
          location: profile.location,
          language: profile.language,
          crop: profile.crop,
          stage: profile.stage,
          plotSize: profile.plotSize,
          irrigationType: profile.irrigationType,
          goal: profile.goal,
          // Full profile + live plot data as a JSON string — parse this in
          // a Botpress "Execute Code" card if you need programmatic access.
          farmProfileJson: JSON.stringify({ ...profile, plots: farmPlots }),
        },
      });
    });

    botpressLoaded = true;
  } finally {
    botpressLoading = false;
  }
}

// Force-hides Botpress's own "by Botpress" branding footer, searching both
// regular DOM and any shadow roots (Botpress may render inside one).
function hideBotpressFooter(root) {
  root.querySelectorAll(".bpComposerFooter").forEach((el) => {
    el.style.setProperty("display", "none", "important");
  });
  root.querySelectorAll("*").forEach((el) => {
    if (el.shadowRoot) hideBotpressFooter(el.shadowRoot);
  });
}

// Starts watching the chat panel for any DOM change (Botpress re-rendering,
// toggling its own footer visible, etc.) and re-hides the footer instantly.
function startFooterWatch(panel) {
  hideBotpressFooter(panel);
  if (footerObserver) return; // already watching
  footerObserver = new MutationObserver(() => hideBotpressFooter(panel));
  footerObserver.observe(panel, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["style", "class"],
  });
}

function buildWidget() {
  // Chat panel + Botpress embed target
  const panel = document.createElement("div");
  panel.id = "botpress-webchat-panel";
  panel.innerHTML = `<div id="botpress-webchat"></div>`;
  document.body.appendChild(panel);

  // Floating toggle button
  const toggleBtn = document.createElement("button");
  toggleBtn.id = "chatbot-toggle-btn";
  toggleBtn.type = "button";
  toggleBtn.setAttribute("aria-label", "Open KhetSaathi chat");
  toggleBtn.innerHTML = CHAT_ICON + CLOSE_ICON;
  document.body.appendChild(toggleBtn);

  let isOpen = false;

  const setOpen = async (open) => {
    isOpen = open;
    toggleBtn.classList.toggle("is-open", isOpen);
    toggleBtn.setAttribute(
      "aria-label",
      isOpen ? "Close KhetSaathi chat" : "Open KhetSaathi chat"
    );

    if (isOpen) {
      await ensureBotpressLoaded();
      panel.classList.add("is-open");
      startFooterWatch(panel);
    } else {
      panel.classList.remove("is-open");
    }
  };

  toggleBtn.addEventListener("click", () => setOpen(!isOpen));
}

document.addEventListener("DOMContentLoaded", buildWidget);
