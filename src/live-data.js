// Central Live Production Data Store for KhetSaathi Demo Engine

export const farmPlots = {
  "Plot A": {
    name: "Plot A - Tomato",
    crop: "Tomato (Hybrid)",
    acres: 2.5,
    days: 45,
    stage: "Flowering Stage",
    irrigationType: "Drip Irrigation",
    soilType: "Black Loam Soil",
    moisture: 34,
    moistureStatus: "Optimal",
    temperature: 28,
    diseaseRisk: "Medium",
    diseaseBadge: "Early Blight Risk",
    diseaseName: "Early Blight Detected",
    pathogen: "Alternaria solani",
    confidence: 87,
    severity: 68,
    growthStatus: "Good",
    growthDetail: "Flowering On Track",
    lastIrrigation: "2 days ago",
    lastSpray: "5 days ago",
    suggestedAction: "Check Crop Today",
    imgUrl: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=400&q=80",
    rainForecast: "Rain expected in 18 hrs",
    soilDetail: "34% (Sufficient)",
    recommendation: "Avoid irrigation today. Apply recommended protective treatment after the rain window. Monitor affected area and upload follow-up photo in 2–3 days.",
    avoidIrrigationReason: "Rain forecast of 18mm in next 18 hrs will bring soil moisture to 85%. Additional irrigation will cause root asphyxiation.",
    chemicalSpray: "Mancozeb 75% WP @ 2g/L or Copper Oxychloride 50% WP @ 2.5g/L immediately after rain stops.",
    economics: {
      expectedYield: 1200,
      marketPrice: 32,
      expectedRevenue: 38400,
      potentialLoss: 8500,
      treatmentCost: 1200,
      protectedValue: 7300
    }
  },
  "Plot B": {
    name: "Plot B - Onion",
    crop: "Red Onion (N-53)",
    acres: 1.5,
    days: 60,
    stage: "Bulb Development",
    irrigationType: "Sprinkler Irrigation",
    soilType: "Alluvial Soil",
    moisture: 48,
    moistureStatus: "Sufficient",
    temperature: 27,
    diseaseRisk: "Low",
    diseaseBadge: "Thrips Risk Low",
    diseaseName: "Healthy Crop",
    pathogen: "No active pathogen detected",
    confidence: 94,
    severity: 12,
    growthStatus: "Excellent",
    growthDetail: "Bulb Sizing Normal",
    lastIrrigation: "1 day ago",
    lastSpray: "8 days ago",
    suggestedAction: "Regular Inspection",
    imgUrl: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cf?auto=format&fit=crop&w=400&q=80",
    rainForecast: "Light drizzle expected in 36 hrs",
    soilDetail: "48% (Optimal)",
    recommendation: "Moisture levels are optimal for bulb growth. Maintain current sprinkler schedule. Next irrigation due in 3 days.",
    avoidIrrigationReason: "Soil moisture is already at 48% optimal level. No stress detected.",
    chemicalSpray: "No chemical spray needed. Preventive Neem oil (10000 ppm) @ 2ml/L recommended.",
    economics: {
      expectedYield: 2400,
      marketPrice: 24,
      expectedRevenue: 57600,
      potentialLoss: 2400,
      treatmentCost: 800,
      protectedValue: 1600
    }
  },
  "Plot C": {
    name: "Plot C - Chilli",
    crop: "Green Chilli (G-4)",
    acres: 1.0,
    days: 30,
    stage: "Vegetative Growth",
    irrigationType: "Drip Irrigation",
    soilType: "Red Clay Soil",
    moisture: 22,
    moistureStatus: "Low",
    temperature: 30,
    diseaseRisk: "High",
    diseaseBadge: "Leaf Curl Alert",
    diseaseName: "Chilli Leaf Curl Virus",
    pathogen: "Begomovirus (Whitefly Vector)",
    confidence: 91,
    severity: 54,
    growthStatus: "Needs Attention",
    growthDetail: "Moisture Stress Detected",
    lastIrrigation: "4 days ago",
    lastSpray: "12 days ago",
    suggestedAction: "Irrigate & Spray Vector Control",
    imgUrl: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=400&q=80",
    rainForecast: "No rain expected in next 5 days",
    soilDetail: "22% (Deficient)",
    recommendation: "Immediate drip irrigation required (2 hours). Spray Imidacloprid 17.8% SL @ 0.5ml/L to control whitefly vector causing leaf curl.",
    avoidIrrigationReason: "Crop is under moisture stress. Irrigation MUST NOT be delayed.",
    chemicalSpray: "Imidacloprid 17.8% SL @ 0.5ml/L for whitefly control + Seaweed biostimulant @ 2ml/L for recovery.",
    economics: {
      expectedYield: 800,
      marketPrice: 65,
      expectedRevenue: 52000,
      potentialLoss: 14000,
      treatmentCost: 1500,
      protectedValue: 12500
    }
  },
  "Plot D": {
    name: "Plot D - Cotton",
    crop: "Bt Cotton",
    acres: 3.0,
    days: 75,
    stage: "Boll Formation",
    irrigationType: "Rainfed",
    soilType: "Black Cotton Soil",
    moisture: 40,
    moistureStatus: "Good",
    temperature: 29,
    diseaseRisk: "Medium",
    diseaseBadge: "Bollworm Monitoring",
    diseaseName: "Pink Bollworm Larvae Risk",
    pathogen: "Pectinophora gossypiella",
    confidence: 82,
    severity: 38,
    growthStatus: "Good",
    growthDetail: "Boll Count Normal",
    lastIrrigation: "Rainfed (3 days ago)",
    lastSpray: "6 days ago",
    suggestedAction: "Install Pheromone Traps",
    imgUrl: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=400&q=80",
    rainForecast: "Rain expected in 24 hrs",
    soilDetail: "40% (Sufficient)",
    recommendation: "Soil moisture is good. Install 5 Pheromone traps per acre to monitor pink bollworm moth catches before spraying.",
    avoidIrrigationReason: "Soil moisture retention in black cotton soil is adequate.",
    chemicalSpray: "Profenofos 50% EC @ 2ml/L if moth catches exceed 8 moths/trap/night.",
    economics: {
      expectedYield: 1500,
      marketPrice: 72,
      expectedRevenue: 108000,
      potentialLoss: 18000,
      treatmentCost: 2200,
      protectedValue: 15800
    }
  }
};

export const mandiData = {
  "Nashik Mandi": {
    Tomato: { price: 32, change: "+12%", trend: "up", history: [28, 29, 30, 31, 31, 32, 32] },
    Onion: { price: 24, change: "+5%", trend: "up", history: [21, 22, 22, 23, 23, 24, 24] },
    Chilli: { price: 65, change: "-2%", trend: "down", history: [68, 67, 67, 66, 66, 65, 65] },
    Potato: { price: 18, change: "0%", trend: "stable", history: [18, 18, 18, 18, 18, 18, 18] }
  },
  "Pune Mandi": {
    Tomato: { price: 34, change: "+15%", trend: "up", history: [29, 30, 31, 32, 33, 34, 34] },
    Onion: { price: 26, change: "+8%", trend: "up", history: [23, 24, 24, 25, 25, 26, 26] },
    Chilli: { price: 68, change: "+1%", trend: "up", history: [66, 67, 67, 67, 68, 68, 68] },
    Potato: { price: 20, change: "+3%", trend: "up", history: [19, 19, 19, 20, 20, 20, 20] }
  },
  "Lasalgaon Mandi": {
    Tomato: { price: 31, change: "+10%", trend: "up", history: [27, 28, 29, 30, 30, 31, 31] },
    Onion: { price: 25, change: "+6%", trend: "up", history: [22, 23, 23, 24, 24, 25, 25] },
    Chilli: { price: 64, change: "-1%", trend: "down", history: [66, 65, 65, 65, 64, 64, 64] },
    Potato: { price: 17, change: "-1%", trend: "down", history: [18, 18, 17, 17, 17, 17, 17] }
  }
};

export const qnaKnowledgeBase = {
  home: [
    {
      q: "What is my top priority action today?",
      a: "Your top priority today is checking Plot A (Tomato). Soil moisture is optimal at 34%, but 18mm rain is forecast in 18 hrs, creating an Early Blight risk window. Avoid irrigation and prepare post-rain spray."
    },
    {
      q: "How does KhetSaathi generate recommendations?",
      a: "KhetSaathi combines real-time IoT soil sensor telemetry, local APMC mandi price feeds, hyper-local weather radar, and crop growth stages inside our AI Decision Engine."
    },
    {
      q: "What is today's weather outlook?",
      a: "Today is 28°C with 65% Humidity. Rain window starts in 18 hours (expected 18mm rainfall). Wind speed is 12 km/h NE."
    }
  ],
  myfarm: [
    {
      q: "Why is Plot A at Medium Disease Risk while Plot B is Low?",
      a: "Plot A (Tomato) is in Flowering Stage with high canopy leaf wetness duration (8.5h), making it susceptible to fungal Early Blight. Plot B (Onion) is in Bulb Stage with lower foliage density."
    },
    {
      q: "How can I add a new farm plot?",
      a: "Click the '+ Add Farm' button in the top header bar. Enter your plot acreage, crop variety, and soil type to initialize real-time sensor tracking."
    },
    {
      q: "What soil type is registered for Plot A?",
      a: "Plot A is registered with Black Loam Soil under Drip Irrigation, which retains moisture efficiently up to 3 days."
    }
  ],
  analysis: [
    {
      q: "Why should I avoid irrigation today?",
      a: "Our decision engine analyzed 18mm rain forecast in the next 18 hours alongside your current 34% soil moisture. Irrigating today will over-saturate soil to >90%, suffocating tomato root hairs and accelerating Early Blight spore germination."
    },
    {
      q: "What spray chemical is recommended for Early Blight?",
      a: "Apply Mancozeb 75% WP @ 2g/L or Copper Oxychloride 50% WP @ 2.5g/L. Ensure spray coverage on canopy undersides immediately after the rain window passes."
    },
    {
      q: "Is Early Blight contagious to my other plots?",
      a: "Yes! Fungal spores (Alternaria solani) are airborne and can spread via wind to Plot B/C. We recommend spraying a preventive bio-fungicide (Trichoderma viride) on adjacent plots."
    }
  ],
  irrigation: [
    {
      q: "Why is 34% optimal for flowering stage?",
      a: "During flowering, tomato plants need consistent aeration in the root zone. 30-40% moisture allows maximum nutrient uptake without inducing flower drop caused by waterlogging."
    },
    {
      q: "When will the next irrigation be required?",
      a: "Based on tomorrow's expected 18mm rainfall, soil moisture will stay optimal until Thursday morning. Next drip cycle is scheduled for Thursday at 7:00 AM for 90 minutes."
    }
  ],
  market: [
    {
      q: "Should I sell my harvest now or hold for 5 days?",
      a: "APMC Nashik trends show bullish momentum (+12% this week) driven by reduced supply from Southern mandis. Holding Grade A tomatoes for 4-5 days could fetch ₹36–₹38/kg."
    },
    {
      q: "What is the price difference between Grade A and Grade C?",
      a: "Grade A (unblemished, firm) commands ₹32/kg. Grade C (spotted/disease affected) drops to ₹14/kg—a 56% economic penalty! Treating Early Blight protects Grade A quality."
    }
  ],
  economics: [
    {
      q: "How was the ₹7,300 protected value calculated?",
      a: "Expected yield is 1,200 kg @ ₹32/kg = ₹38,400 revenue. Untreated Early Blight causes 22% yield destruction (₹8,500 loss). Treatment cost is ₹1,200. Net protected value = ₹8,500 - ₹1,200 = ₹7,300 ROI!"
    },
    {
      q: "What if tomato market price drops to ₹25/kg?",
      a: "Even at ₹25/kg, protecting 1,200 kg yields ₹30,000 revenue and saves ₹5,400 from disease damage—still yielding a 4.5x return on your ₹1,200 treatment cost."
    }
  ],
  tracking: [
    {
      q: "How fast should Early Blight severity reduce?",
      a: "With Mancozeb treatment, severity should drop from 68% (Day 1) to ~45% (Day 4) and <20% (Day 7). New foliage should emerge clear of brown concentric spots."
    },
    {
      q: "When should I upload the next follow-up photo?",
      a: "Upload your next leaf photo in 2 days (Day 9 follow-up) to verify zero pathogen recurrence before fruit setting phase."
    }
  ]
};
