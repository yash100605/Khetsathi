import { products } from "./store-data.js";

const params = new URLSearchParams(window.location.search);
const productId = params.get("id") || "product-seaweed";

const product = products.find((p) => p.id === productId) || products[0];

const breadcrumbCategory = document.querySelector("#breadcrumb-category");
const breadcrumbTitle = document.querySelector("#breadcrumb-title");
const productDetailEl = document.querySelector("#product-detail");
const productSpecsEl = document.querySelector("#product-specs");
const productUsageEl = document.querySelector("#product-usage");
const relatedGridEl = document.querySelector("#related-grid");

let selectedVariant = product.variants.find((v) => v.isDefault) || product.variants[0];

function renderBreadcrumb() {
  if (breadcrumbCategory) breadcrumbCategory.textContent = product.category;
  if (breadcrumbTitle) breadcrumbTitle.textContent = product.title;
}

function renderProductDetail() {
  if (!productDetailEl) return;
  const primaryMedia = product.media.find((m) => m.isPrimary) || product.media[0];

  productDetailEl.innerHTML = `
    <div class="product-gallery">
      <div class="main-image">
        <img id="main-product-img" src="${primaryMedia ? primaryMedia.url : ''}" alt="${product.title}" />
      </div>
      <div class="thumbnail-strip">
        ${product.media
          .map(
            (m) => `
          <button class="thumb-btn ${m.id === primaryMedia?.id ? "active" : ""}" type="button" data-src="${m.url}">
            <img src="${m.url}" alt="${m.alt}" />
          </button>
        `
          )
          .join("")}
      </div>
    </div>

    <div class="product-info-card">
      <div class="product-badges">
        ${product.badges.map((b) => `<span class="badge-tag">${b}</span>`).join("")}
        <span class="stock-status stock-status--${selectedVariant.stockStatus}">
          ${selectedVariant.stockStatus === "in_stock" ? "In Stock" : "Low Stock (" + selectedVariant.inventoryQty + " left)"}
        </span>
      </div>
      
      <h1>${product.title}</h1>
      <p class="subtitle">${product.subtitle}</p>
      
      <div class="rating-row">
        <span class="stars">★ ${product.rating}</span>
        <span class="review-count">(${product.reviewCount} verified ratings)</span>
        <span class="category-chip">${product.category}</span>
      </div>

      <div class="price-display">
        <span id="variant-price" class="price">${selectedVariant.price.formatted}</span>
        ${
          selectedVariant.compareAtPrice
            ? `<span id="variant-compare" class="compare">${selectedVariant.compareAtPrice.formatted}</span>`
            : ""
        }
        <span class="tax-note">Inclusive of all local taxes</span>
      </div>

      <div class="variant-section">
        <label class="eyebrow">Select Pack Size / Quantity</label>
        <div class="variant-options">
          ${product.variants
            .map(
              (v) => `
            <button class="variant-btn ${v.id === selectedVariant.id ? "active" : ""}" type="button" data-id="${v.id}">
              <strong>${v.packSize}</strong>
              <span>${v.price.formatted}</span>
            </button>
          `
            )
            .join("")}
        </div>
      </div>

      <p class="description">${product.description}</p>

      <div class="action-row">
        <button id="add-to-log-btn" class="button-primary" type="button">Log Product Usage to Farm Activity</button>
        <a class="button-secondary" href="./store.html">Back to Catalog</a>
      </div>
      <p id="log-status-msg" class="muted" style="margin-top: 8px; display: none; color: var(--color-success); font-weight: 700;">
        ✓ Logged to local farm activity history.
      </p>
    </div>
  `;

  // Gallery click handlers
  document.querySelectorAll(".thumb-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".thumb-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const mainImg = document.querySelector("#main-product-img");
      if (mainImg) mainImg.src = btn.getAttribute("data-src");
    });
  });

  // Variant click handlers
  document.querySelectorAll(".variant-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const vId = btn.getAttribute("data-id");
      const v = product.variants.find((varItem) => varItem.id === vId);
      if (v) {
        selectedVariant = v;
        renderProductDetail();
      }
    });
  });

  // Log action handler
  document.querySelector("#add-to-log-btn")?.addEventListener("click", () => {
    const msg = document.querySelector("#log-status-msg");
    if (msg) msg.style.display = "block";
  });
}

function renderSpecsAndUsage() {
  if (productSpecsEl) {
    productSpecsEl.innerHTML = `
      <ul class="spec-list">
        ${product.specifications
          .map((s) => `<li><strong>${s.label}:</strong> <span>${s.value}</span></li>`)
          .join("")}
        <li><strong>SKU Code:</strong> <span>${selectedVariant.sku}</span></li>
        <li><strong>Packaging Unit:</strong> <span>${selectedVariant.unitLabel} (${selectedVariant.packSize})</span></li>
      </ul>
    `;
  }

  if (productUsageEl) {
    productUsageEl.innerHTML = `
      <ol class="usage-list">
        ${product.usageInstructions.map((step) => `<li>${step}</li>`).join("")}
      </ol>
      <div class="safety-box">
        <p class="eyebrow">Safety Boundary</p>
        <p>Always perform a jar-test before tank-mixing with other products. Wear protective gloves during foliar application.</p>
      </div>
    `;
  }
}

function renderRelatedProducts() {
  if (!relatedGridEl) return;
  const related = products.filter((p) => p.id !== product.id && (product.relatedProductIds || []).includes(p.id));
  const itemsToDisplay = related.length > 0 ? related : products.filter((p) => p.id !== product.id);

  relatedGridEl.innerHTML = itemsToDisplay
    .slice(0, 2)
    .map((p) => {
      const v = p.variants[0];
      return `
      <article class="product-card">
        <div class="product-card__body">
          <p class="eyebrow">${p.category}</p>
          <h3>${p.title}</h3>
          <p class="product-card__sub">${p.shortDescription}</p>
          <div class="product-card__footer">
            <span class="price-amount">${v.price.formatted}</span>
            <a class="button-primary button-sm" href="./product.html?id=${p.id}">View product</a>
          </div>
        </div>
      </article>
    `;
    })
    .join("");
}

renderBreadcrumb();
renderProductDetail();
renderSpecsAndUsage();
renderRelatedProducts();
