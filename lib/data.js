export const categories = [
  {
    id: 1,
    name: "Chat/Assistants",
    description: "AI-powered conversational agents for various tasks",
    icon: "💬"
  },
  {
    id: 2,
    name: "Image Generation",
    description: "AI tools for creating and editing images",
    icon: "🎨"
  },
  {
    id: 3,
    name: "Video",
    description: "AI tools for video creation and editing",
    icon: "🎥"
  },
  {
    id: 4,
    name: "Coding",
    description: "AI assistants for programming and development",
    icon: "💻"
  }
];

export const tools = [
  {
    id: 1,
    categoryId: 1,
    name: "GPT-4",
    url: "https://openai.com/gpt-4",
    description: "OpenAI's most advanced system, producing safer and more useful responses."
  },
  {
    id: 2,
    categoryId: 1,
    name: "Claude 2",
    url: "https://www.anthropic.com/index/claude-2",
    description: "AI assistant with improved reasoning and reduced harmful outputs."
  },
  {
    id: 3,
    categoryId: 1,
    name: "Gemini Pro",
    url: "https://bard.google.com/",
    description: "Google's conversational AI model with multimodal capabilities."
  },
  {
    id: 4,
    categoryId: 1,
    name: "Mistral Large",
    url: "https://mistral.ai/news/la-plateforme/",
    description: "High-performance open-source language model."
  }
];

export const pricingTiers = [
  {
    id: 1,
    toolId: 1,
    tierName: "Free",
    price: "0",
    features: ["Basic access", "Limited usage", "Standard response speed"]
  },
  {
    id: 2,
    toolId: 1,
    tierName: "Plus",
    price: "20",
    features: ["Priority access", "Faster response speed", "Advanced features"]
  },
  {
    id: 3,
    toolId: 1,
    tierName: "API",
    price: "0.03",
    features: ["Per 1K tokens", "Full access", "Customizable"]
  },
  {
    id: 4,
    toolId: 2,
    tierName: "Free",
    price: "0",
    features: ["Basic access", "Limited usage", "Standard response speed"]
  },
  {
    id: 5,
    toolId: 2,
    tierName: "Pro",
    price: "20",
    features: ["Priority access", "Faster response speed", "Advanced features"]
  },
  {
    id: 6,
    toolId: 2,
    tierName: "API",
    price: "0.08",
    features: ["Per 1K tokens", "Full access", "Customizable"]
  },
  {
    id: 7,
    toolId: 3,
    tierName: "Free",
    price: "0",
    features: ["Basic access", "Limited usage", "Standard response speed"]
  },
  {
    id: 8,
    toolId: 3,
    tierName: "Advanced",
    price: "20",
    features: ["Priority access", "Faster response speed", "Advanced features"]
  },
  {
    id: 9,
    toolId: 3,
    tierName: "API",
    price: "0.0005",
    features: ["Per 1K tokens", "Full access", "Customizable"]
  },
  {
    id: 10,
    toolId: 4,
    tierName: "Free",
    price: "0",
    features: ["Basic access", "Limited usage", "Standard response speed"]
  },
  {
    id: 11,
    toolId: 4,
    tierName: "Pro",
    price: "15",
    features: ["Priority access", "Faster response speed", "Advanced features"]
  },
  {
    id: 12,
    toolId: 4,
    tierName: "API",
    price: "0.008",
    features: ["Per 1K tokens", "Full access", "Customizable"]
  }
];

export const benchmarks = [
  {
    id: 1,
    toolId: 1,
    sourceName: "MT-Bench",
    scoreName: "Score",
    scoreValue: 8.99,
    rank: 1,
    lastUpdated: "2023-10-15"
  },
  {
    id: 2,
    toolId: 1,
    sourceName: "LMSYS Chatbot Arena",
    scoreName: "Elo Rating",
    scoreValue: 1251,
    rank: 1,
    lastUpdated: "2023-10-15"
  },
  {
    id: 3,
    toolId: 2,
    sourceName: "MT-Bench",
    scoreName: "Score",
    scoreValue: 8.06,
    rank: 4,
    lastUpdated: "2023-10-15"
  },
  {
    id: 4,
    toolId: 2,
    sourceName: "LMSYS Chatbot Arena",
    scoreName: "Elo Rating",
    scoreValue: 1187,
    rank: 3,
    lastUpdated: "2023-10-15"
  },
  {
    id: 5,
    toolId: 3,
    sourceName: "MT-Bench",
    scoreName: "Score",
    scoreValue: 8.83,
    rank: 2,
    lastUpdated: "2023-10-15"
  },
  {
    id: 6,
    toolId: 3,
    sourceName: "LMSYS Chatbot Arena",
    scoreName: "Elo Rating",
    scoreValue: 1201,
    rank: 2,
    lastUpdated: "2023-10-15"
  },
  {
    id: 7,
    toolId: 4,
    sourceName: "MT-Bench",
    scoreName: "Score",
    scoreValue: 8.3,
    rank: 3,
    lastUpdated: "2023-10-15"
  },
  {
    id: 8,
    toolId: 4,
    sourceName: "LMSYS Chatbot Arena",
    scoreName: "Elo Rating",
    scoreValue: 1156,
    rank: 4,
    lastUpdated: "2023-10-15"
  }
];

// Helper functions
export const getCategoryById = (id) => categories.find(c => c.id === parseInt(id));
export const getToolsByCategory = (categoryId) => tools.filter(t => t.categoryId === parseInt(categoryId));
export const getToolById = (id) => tools.find(t => t.id === parseInt(id));
export const getPricingByTool = (toolId) => pricingTiers.filter(p => p.toolId === parseInt(toolId));
export const getBenchmarksByTool = (toolId) => benchmarks.filter(b => b.toolId === parseInt(toolId));
export const getAllBenchmarksForCategory = (categoryId) => {
  const categoryTools = getToolsByCategory(categoryId);
  return benchmarks.filter(b => categoryTools.some(t => t.id === b.toolId));
};