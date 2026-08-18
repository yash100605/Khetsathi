import { qnaKnowledgeBase } from "./live-data.js";

export function initQnAAssistant(pageKey) {
  const container = document.getElementById("ai-qna-widget");
  if (!container) return;

  const pagePrompts = qnaKnowledgeBase[pageKey] || qnaKnowledgeBase["analysis"];

  // Render Trigger Banner & Chips
  container.innerHTML = `
    <div class="ai-qna-trigger-card">
      <div class="ai-qna-trigger-info">
        <span class="icon">💬</span>
        <div>
          <h4>Ask KhetSaathi AI</h4>
          <p>Have questions about this recommendation?</p>
        </div>
      </div>
      <button class="ai-qna-trigger-btn" id="open-ai-chat-btn" type="button">Ask AI &rsaquo;</button>
    </div>

    <div class="suggested-prompts-strip">
      ${pagePrompts
        .map(
          (item, idx) =>
            `<button class="prompt-chip" data-idx="${idx}">${item.q}</button>`
        )
        .join("")}
    </div>

    <!-- Slide-out Drawer Modal -->
    <div class="ai-drawer-overlay" id="ai-drawer-overlay">
      <div class="ai-drawer-panel">
        <div class="ai-drawer-header">
          <div class="ai-drawer-title-wrap">
            <span>🤖</span>
            <div>
              <h3>KhetSaathi Agronomist AI</h3>
              <span>Decision Insight Companion</span>
            </div>
          </div>
          <button class="ai-close-btn" id="close-ai-chat-btn" type="button">&times;</button>
        </div>

        <div class="ai-messages-body" id="ai-messages-body">
          <div class="msg-bubble msg-bubble--bot">
            Hello Ramesh! 👋 I am your KhetSaathi decision assistant. Ask me anything about today's diagnostic recommendation, spray chemicals, or market ROI.
          </div>
        </div>

        <div class="ai-drawer-footer">
          <form class="ai-input-form" id="ai-input-form">
            <input type="text" class="ai-input-field" id="ai-user-input" placeholder="Ask any question about your crop..." required />
            <button class="ai-send-btn" type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  `;

  // Attach Event Listeners
  const overlay = document.getElementById("ai-drawer-overlay");
  const openBtn = document.getElementById("open-ai-chat-btn");
  const closeBtn = document.getElementById("close-ai-chat-btn");
  const chatBody = document.getElementById("ai-messages-body");
  const inputForm = document.getElementById("ai-input-form");
  const userInput = document.getElementById("ai-user-input");

  const openDrawer = () => overlay.classList.add("open");
  const closeDrawer = () => overlay.classList.remove("open");

  openBtn?.addEventListener("click", openDrawer);
  closeBtn?.addEventListener("click", closeDrawer);
  overlay?.addEventListener("click", (e) => {
    if (e.target === overlay) closeDrawer();
  });

  // Prompt Chips Click
  const chips = container.querySelectorAll(".prompt-chip");
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const idx = parseInt(chip.getAttribute("data-idx"));
      const promptObj = pagePrompts[idx];
      if (promptObj) {
        openDrawer();
        appendUserMessage(promptObj.q);
        simulateBotResponse(promptObj.a);
      }
    });
  });

  // User Form Submit
  inputForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = userInput.value.trim();
    if (!query) return;

    appendUserMessage(query);
    userInput.value = "";

    // Match query in knowledge base or return generic smart response
    const match = pagePrompts.find((p) =>
      query.toLowerCase().includes(p.q.toLowerCase().slice(0, 10))
    );
    const response = match
      ? match.a
      : `Based on your Plot A data (Tomato 2.5 Acres, Flowering Stage), our decision engine advises strictly following the recommended post-rain spray window with Mancozeb 75% WP. Moisture is currently 34% optimal.`;

    simulateBotResponse(response);
  });

  function appendUserMessage(text) {
    const msg = document.createElement("div");
    msg.className = "msg-bubble msg-bubble--user";
    msg.textContent = text;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function simulateBotResponse(text) {
    const loader = document.createElement("div");
    loader.className = "msg-bubble msg-bubble--bot";
    loader.textContent = "KhetSaathi AI is thinking...";
    chatBody.appendChild(loader);
    chatBody.scrollTop = chatBody.scrollHeight;

    setTimeout(() => {
      loader.textContent = text;
      chatBody.scrollTop = chatBody.scrollHeight;
    }, 600);
  }
}
