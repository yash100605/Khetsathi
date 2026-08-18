export const collections = [
  {
    id: "collection-soil-health",
    slug: "soil-health",
    title: "Soil Health",
    description: "Inputs for resilient soil nutrition and root support.",
    heroImage:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80",
    productIds: ["product-seaweed", "product-micronutrient"],
    featuredProductIds: ["product-seaweed"],
    parentCollectionId: undefined,
    sortOptions: ["featured", "price_low_to_high", "price_high_to_low", "newest"],
    filterOptions: {
      categories: ["Biostimulants", "Micronutrients"],
      packSizes: ["500 ml", "1 L", "5 kg"],
      priceRanges: [
        { min: 0, max: 499, label: "Under Rs 499" },
        { min: 500, max: 999, label: "Rs 500 - Rs 999" }
      ],
      availability: ["in_stock", "out_of_stock"]
    },
    seo: {
      title: "Soil Health | KhetSaathi",
      description: "Support soil performance with dependable farm inputs."
    }
  },
  {
    id: "collection-monsoon-ready",
    slug: "monsoon-ready",
    title: "Monsoon Ready",
    description: "Field-ready picks for nutrient resilience during heavy rain windows.",
    heroImage:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    productIds: ["product-protect", "product-seaweed"],
    featuredProductIds: ["product-protect"],
    parentCollectionId: undefined,
    sortOptions: ["featured", "price_low_to_high", "price_high_to_low", "newest"],
    filterOptions: {
      categories: ["Crop Protection", "Biostimulants"],
      packSizes: ["250 ml", "500 ml", "1 L"],
      priceRanges: [
        { min: 0, max: 699, label: "Under Rs 699" },
        { min: 700, max: 1499, label: "Rs 700 - Rs 1499" }
      ],
      availability: ["in_stock", "out_of_stock"]
    },
    seo: {
      title: "Monsoon Ready | KhetSaathi",
      description: "Shop dependable rainy-season farm essentials."
    }
  },
  {
    id: "collection-best-value",
    slug: "best-value",
    title: "Best Value Packs",
    description: "Higher-volume options for repeat-use growers.",
    heroImage:
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80",
    productIds: ["product-micronutrient", "product-protect"],
    featuredProductIds: ["product-micronutrient"],
    parentCollectionId: undefined,
    sortOptions: ["featured", "price_low_to_high", "price_high_to_low", "newest"],
    filterOptions: {
      categories: ["Micronutrients", "Protection"],
      packSizes: ["1 kg", "5 kg", "1 L"],
      priceRanges: [
        { min: 0, max: 999, label: "Under Rs 999" },
        { min: 1000, max: 1999, label: "Rs 1000 - Rs 1999" }
      ],
      availability: ["in_stock", "out_of_stock"]
    },
    seo: {
      title: "Best Value Packs | KhetSaathi",
      description: "Efficient farm inputs for steady replenishment."
    }
  }
];

export const products = [
  {
    id: "product-seaweed",
    slug: "seaweed-growth-elixir",
    title: "Seaweed Growth Elixir",
    subtitle: "Biostimulant for stronger early-stage development",
    shortDescription: "Improves root vigor and crop resilience.",
    description: "A seaweed-based growth support formula designed for repeated seasonal use.",
    specifications: [
      { label: "Application", value: "Foliar spray" },
      { label: "Crop stage", value: "Vegetative" }
    ],
    usageInstructions: ["Mix as per label guidance", "Spray in cooler hours"],
    category: "Biostimulants",
    tags: ["featured", "monsoon"],
    media: [
      {
        id: "media-seaweed-primary",
        type: "image",
        url: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=1200&q=80",
        alt: "Seaweed product bottle",
        isPrimary: true
      }
    ],
    variants: [
      {
        id: "variant-seaweed-500ml",
        sku: "KS-SWE-500",
        name: "500 ml",
        packSize: "500 ml",
        unitLabel: "Bottle",
        price: { amount: 449, currency: "INR", formatted: "Rs 449" },
        compareAtPrice: { amount: 499, currency: "INR", formatted: "Rs 499" },
        stockStatus: "in_stock",
        inventoryQty: 22,
        isDefault: true
      }
    ],
    defaultVariantId: "variant-seaweed-500ml",
    rating: 4.7,
    reviewCount: 182,
    badges: ["Best Seller"],
    isFeatured: true,
    isBestSeller: true,
    relatedProductIds: ["product-protect"],
    collectionIds: ["collection-soil-health", "collection-monsoon-ready"],
    seo: {
      title: "Seaweed Growth Elixir | KhetSaathi",
      description: "Growth support with clear pack pricing."
    }
  },
  {
    id: "product-protect",
    slug: "rain-guard-protect",
    title: "Rain Guard Protect",
    subtitle: "Preventive crop care support for wet spells",
    shortDescription: "Built for monsoon-sensitive field conditions.",
    description: "A practical protection support product designed for repeated seasonal coverage.",
    specifications: [
      { label: "Application", value: "Spray" },
      { label: "Crop stage", value: "Pre-flowering" }
    ],
    usageInstructions: ["Use according to agronomy guidance"],
    category: "Crop Protection",
    tags: ["seasonal"],
    media: [
      {
        id: "media-protect-primary",
        type: "image",
        url: "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?auto=format&fit=crop&w=1200&q=80",
        alt: "Crop protection bottle",
        isPrimary: true
      }
    ],
    variants: [
      {
        id: "variant-protect-1l",
        sku: "KS-RGP-1L",
        name: "1 L",
        packSize: "1 L",
        unitLabel: "Bottle",
        price: { amount: 829, currency: "INR", formatted: "Rs 829" },
        compareAtPrice: undefined,
        stockStatus: "low_stock",
        inventoryQty: 6,
        isDefault: true
      }
    ],
    defaultVariantId: "variant-protect-1l",
    rating: 4.5,
    reviewCount: 96,
    badges: ["Low Stock"],
    isFeatured: true,
    isBestSeller: true,
    relatedProductIds: ["product-seaweed"],
    collectionIds: ["collection-monsoon-ready", "collection-best-value"],
    seo: {
      title: "Rain Guard Protect | KhetSaathi",
      description: "Monsoon-aligned crop care with structured pricing."
    }
  },
  {
    id: "product-micronutrient",
    slug: "micro-nutrient-boost",
    title: "Micro Nutrient Boost",
    subtitle: "Balanced micronutrient support for repeat feeding cycles",
    shortDescription: "Supports steady plant nutrition.",
    description: "A value-focused nutrient support product with larger pack options.",
    specifications: [
      { label: "Application", value: "Soil / drip" },
      { label: "Crop stage", value: "Multi-stage" }
    ],
    usageInstructions: ["Apply per crop and acreage guidance"],
    category: "Micronutrients",
    tags: ["value"],
    media: [
      {
        id: "media-micro-primary",
        type: "image",
        url: "https://images.unsplash.com/photo-1463123081488-789f998ac9c4?auto=format&fit=crop&w=1200&q=80",
        alt: "Micronutrient pack",
        isPrimary: true
      }
    ],
    variants: [
      {
        id: "variant-micro-5kg",
        sku: "KS-MNB-5KG",
        name: "5 kg",
        packSize: "5 kg",
        unitLabel: "Bag",
        price: { amount: 1149, currency: "INR", formatted: "Rs 1,149" },
        compareAtPrice: { amount: 1299, currency: "INR", formatted: "Rs 1,299" },
        stockStatus: "in_stock",
        inventoryQty: 18,
        isDefault: true
      }
    ],
    defaultVariantId: "variant-micro-5kg",
    rating: 4.8,
    reviewCount: 208,
    badges: ["Featured"],
    isFeatured: true,
    isBestSeller: false,
    relatedProductIds: ["product-seaweed"],
    collectionIds: ["collection-soil-health", "collection-best-value"],
    seo: {
      title: "Micro Nutrient Boost | KhetSaathi",
      description: "Value pack micronutrient support."
    }
  }
];
