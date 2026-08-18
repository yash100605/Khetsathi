import { collections, products } from "./store-data.js";

const collectionsGrid = document.querySelector("#collections-grid");
const productsGrid = document.querySelector("#products-grid");
const searchInput = document.querySelector("#store-search");
const categoryFilter = document.querySelector("#category-filter");

function renderCollections() {
  if (!collectionsGrid) return;
  collectionsGrid.innerHTML = collections
    .map(
      (col) => `
    <article class="collection-card" style="background-image: linear-gradient(180deg, rgba(36, 49, 38, 0.25), rgba(36, 49, 38, 0.85)), url('${col.heroImage}');">
      <div class="collection-card__content">
        <span class="collection-pill">${col.productIds.length} Products</span>
        <h3>${col.title}</h3>
        <p>${col.description}</p>
      </div>
    </article>
  `
    )
    .join("");
}

function createProductCard(product) {
  const primaryMedia = product.media.find((m) => m.isPrimary) || product.media[0];
  const defaultVariant = product.variants.find((v) => v.isDefault) || product.variants[0];

  return `
    <article class="product-card">
      <div class="product-card__image-wrap">
        <img src="${primaryMedia ? primaryMedia.url : ''}" alt="${product.title}" loading="lazy" />
        <div class="product-card__badges">
          ${product.badges.map((b) => `<span class="badge-tag">${b}</span>`).join("")}
        </div>
      </div>
      <div class="product-card__body">
        <p class="eyebrow">${product.category}</p>
        <h3>${product.title}</h3>
        <p class="product-card__sub">${product.subtitle}</p>
        <div class="product-card__meta">
          <span class="rating">★ ${product.rating} (${product.reviewCount})</span>
          <span class="pack-size">${defaultVariant ? defaultVariant.packSize : ''}</span>
        </div>
        <div class="product-card__footer">
          <div class="price-box">
            <span class="price-amount">${defaultVariant ? defaultVariant.price.formatted : ''}</span>
            ${
              defaultVariant && defaultVariant.compareAtPrice
                ? `<span class="compare-price">${defaultVariant.compareAtPrice.formatted}</span>`
                : ""
            }
          </div>
          <a class="button-primary button-sm" href="./product.html?id=${product.id}">View details</a>
        </div>
      </div>
    </article>
  `;
}

function renderProducts() {
  if (!productsGrid) return;
  const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
  const cat = categoryFilter ? categoryFilter.value : "all";

  const filtered = products.filter((p) => {
    const matchesSearch =
      !query ||
      p.title.toLowerCase().includes(query) ||
      p.subtitle.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query);
    const matchesCat = cat === "all" || p.category === cat;
    return matchesSearch && matchesCat;
  });

  if (filtered.length === 0) {
    productsGrid.innerHTML = `
      <div class="empty-state">
        <p>No products match your search query or filter criteria.</p>
        <button id="reset-filter" class="button-secondary" type="button">Reset Filters</button>
      </div>
    `;
    document.querySelector("#reset-filter")?.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      if (categoryFilter) categoryFilter.value = "all";
      renderProducts();
    });
  } else {
    productsGrid.innerHTML = filtered.map(createProductCard).join("");
  }
}

renderCollections();
renderProducts();

searchInput?.addEventListener("input", renderProducts);
categoryFilter?.addEventListener("change", renderProducts);
