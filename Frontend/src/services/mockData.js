// Mock Data & Real-Time Engine for Sentivio Social Intelligence Dashboard

export const INITIAL_STATS = {
  totalProcessed: 548920,
  positivePercent: 54.2,
  negativePercent: 26.8,
  neutralPercent: 19.0,
  netSentimentScore: "+27.4",
  botQuarantineCount: 1423,
  botRatioPercent: 6.8,
  avgInferenceLatency: 45.2, // ms (as cited in synopsis Table 5.1)
  robertaAccuracy: 92.8, // % (as cited in Table 5.1)
  modelF1Score: 91.1, // %
  isolationForestFPR: 2.1, // % (as cited in Table 5.1)
  deepfakeDetections: 89,
  activeAlerts: 3
};

export const INITIAL_TWEETS = [
  {
    id: "tw-101",
    author: "Elena Rostova",
    handle: "@elena_tech",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    text: "The new decentralized AI consensus protocol is ridiculously fast! Completely stunned by the latency benchmarks. Major win for Web3 🚀🔥",
    timestamp: "Just now",
    sentiment: "POSITIVE",
    confidence: 0.96,
    emotion: "Joy",
    emotionScores: { Joy: 0.88, Surprise: 0.08, Anger: 0.01, Fear: 0.01, Sadness: 0.02 },
    isBot: false,
    botScore: 0.12,
    location: "San Francisco, USA",
    likes: 342,
    retweets: 89,
    reach: "48.2K"
  },
  {
    id: "tw-102",
    author: "CryptoBoost_9921",
    handle: "@bot_node_alpha",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
    text: "CLAIM FREE AIRDROP NOW!! 10000 TOKEN BONUS GUARANTEED CLICK LINK CLICK LINK FAST FAST NO KYC REQUIRED >>> bit.ly/airdrop-scam-39",
    timestamp: "12s ago",
    sentiment: "POSITIVE",
    confidence: 0.62,
    emotion: "Surprise",
    emotionScores: { Joy: 0.40, Surprise: 0.52, Anger: 0.02, Fear: 0.04, Sadness: 0.02 },
    isBot: true,
    botScore: 0.94,
    anomalyReason: "High posting frequency (42 posts/min), 0.98 content similarity",
    location: "Unknown Proxy",
    likes: 4,
    retweets: 154,
    reach: "1.2K"
  },
  {
    id: "tw-103",
    author: "Devon Chen",
    handle: "@devon_builds",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    text: "Our entire production database just suffered a 45-minute outage due to the cloud provider's DNS glitch. Unacceptable reliability for tier-1 enterprise SLA.",
    timestamp: "45s ago",
    sentiment: "NEGATIVE",
    confidence: 0.94,
    emotion: "Anger",
    emotionScores: { Anger: 0.82, Fear: 0.11, Sadness: 0.05, Joy: 0.01, Surprise: 0.01 },
    isBot: false,
    botScore: 0.05,
    location: "Singapore",
    likes: 1205,
    retweets: 412,
    reach: "128K"
  },
  {
    id: "tw-104",
    author: "Priya Sharma",
    handle: "@priyasharma_ai",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    text: "Deep learning models fine-tuned with RoBERTa embeddings represent a game changer for conversational nuance and sarcasm recognition. Super proud of our engineering research!",
    timestamp: "2m ago",
    sentiment: "POSITIVE",
    confidence: 0.98,
    emotion: "Joy",
    emotionScores: { Joy: 0.94, Surprise: 0.03, Anger: 0.01, Fear: 0.01, Sadness: 0.01 },
    isBot: false,
    botScore: 0.04,
    location: "Bengaluru, India",
    likes: 874,
    retweets: 189,
    reach: "62K"
  },
  {
    id: "tw-105",
    author: "Marcus Vance",
    handle: "@marcus_vance",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    text: "Rumors circulating about regulatory clampdowns on synthetic video generation models. Honestly terrified about the chilling effect on open-source innovation.",
    timestamp: "4m ago",
    sentiment: "NEGATIVE",
    confidence: 0.89,
    emotion: "Fear",
    emotionScores: { Fear: 0.79, Sadness: 0.12, Anger: 0.07, Joy: 0.01, Surprise: 0.01 },
    isBot: false,
    botScore: 0.08,
    location: "London, UK",
    likes: 531,
    retweets: 97,
    reach: "35K"
  },
  {
    id: "tw-106",
    author: "TrendPulseBot_44",
    handle: "@fastnews_hourly",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    text: "BREAKING: Stock surges 14% amid market rally! Click here to see our premium predictive newsletter signal! RT to enter 500$ giveaway!",
    timestamp: "6m ago",
    sentiment: "POSITIVE",
    confidence: 0.71,
    emotion: "Surprise",
    emotionScores: { Surprise: 0.65, Joy: 0.25, Anger: 0.04, Fear: 0.03, Sadness: 0.03 },
    isBot: true,
    botScore: 0.89,
    anomalyReason: "Repost ratio > 88%, Short Isolation Forest path length (3.1)",
    location: "Toronto, Canada",
    likes: 12,
    retweets: 243,
    reach: "8.5K"
  },
  {
    id: "tw-107",
    author: "Amina Al-Mansoor",
    handle: "@amina_data",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    text: "So apparently our legacy keyword scraper thought 'sick drop' on the sneaker release meant viral illness. This is why RoBERTa contextual NLP is mandatory.",
    timestamp: "8m ago",
    sentiment: "NEUTRAL",
    confidence: 0.91,
    emotion: "Surprise",
    emotionScores: { Surprise: 0.58, Joy: 0.28, Sadness: 0.08, Anger: 0.04, Fear: 0.02 },
    isBot: false,
    botScore: 0.03,
    location: "Dubai, UAE",
    likes: 412,
    retweets: 63,
    reach: "29K"
  }
];

export const MOCK_STREAM_POOL = [
  {
    author: "Zara Sterling",
    handle: "@zara_crypto",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    text: "Watching the live telemetry charts update via WebSockets on Sentivio right now. Sub-second latency is genuinely mindblowing!",
    sentiment: "POSITIVE",
    confidence: 0.97,
    emotion: "Joy",
    emotionScores: { Joy: 0.92, Surprise: 0.05, Anger: 0.01, Fear: 0.01, Sadness: 0.01 },
    isBot: false,
    botScore: 0.06,
    location: "Sydney, Australia"
  },
  {
    author: "SpamMatrix_X",
    handle: "@matrix_promo_01",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
    text: "INVEST IN COIN $PUMP 500x MOON GUARANTEE! JOIN TELEGRAM GROUP NOW @PumpCoinOfficial",
    sentiment: "POSITIVE",
    confidence: 0.65,
    emotion: "Surprise",
    emotionScores: { Surprise: 0.60, Joy: 0.30, Anger: 0.05, Fear: 0.02, Sadness: 0.03 },
    isBot: true,
    botScore: 0.98,
    anomalyReason: "Isolation Forest Anomaly: Repost velocity 94/hr, account age 2 days",
    location: "Proxy Server #7"
  },
  {
    author: "Kenji Sato",
    handle: "@kenji_ux",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
    text: "Disappointed by the recent software update. The mobile battery drain is noticeably worse and navigation lags.",
    sentiment: "NEGATIVE",
    confidence: 0.93,
    emotion: "Sadness",
    emotionScores: { Sadness: 0.74, Anger: 0.18, Fear: 0.05, Joy: 0.01, Surprise: 0.02 },
    isBot: false,
    botScore: 0.04,
    location: "Tokyo, Japan"
  },
  {
    author: "Sophia Muller",
    handle: "@sophia_ethics",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    text: "Just verified a suspicious viral video with Sentivio's deepfake detection. 94% synthetic frame probability confirmed. Stay alert out there!",
    sentiment: "NEUTRAL",
    confidence: 0.92,
    emotion: "Fear",
    emotionScores: { Fear: 0.68, Surprise: 0.22, Anger: 0.05, Joy: 0.02, Sadness: 0.03 },
    isBot: false,
    botScore: 0.05,
    location: "Berlin, Germany"
  }
];

export const HOURLY_SENTIMENT_TRENDS = [
  { time: "00:00", positive: 58, negative: 22, neutral: 20, volume: 1420 },
  { time: "02:00", positive: 55, negative: 24, neutral: 21, volume: 980 },
  { time: "04:00", positive: 52, negative: 25, neutral: 23, volume: 720 },
  { time: "06:00", positive: 61, negative: 18, neutral: 21, volume: 2100 },
  { time: "08:00", positive: 64, negative: 20, neutral: 16, volume: 4600 },
  { time: "10:00", positive: 59, negative: 26, neutral: 15, volume: 8200 },
  { time: "12:00", positive: 50, negative: 34, neutral: 16, volume: 12400 },
  { time: "14:00", positive: 38, negative: 48, neutral: 14, volume: 16800 }, // Anomaly crisis spike
  { time: "16:00", positive: 45, negative: 39, neutral: 16, volume: 14500 },
  { time: "18:00", positive: 56, negative: 28, neutral: 16, volume: 11200 },
  { time: "20:00", positive: 62, negative: 22, neutral: 16, volume: 9400 },
  { time: "22:00", positive: 60, negative: 21, neutral: 19, volume: 6300 }
];

export const EMOTIONS_DISTRIBUTION = [
  { name: "Joy", percentage: 38, count: "208,589", color: "#10b981", bg: "rgba(16, 185, 129, 0.15)", icon: "Smile" },
  { name: "Anger", percentage: 22, count: "120,762", color: "#ef4444", bg: "rgba(239, 68, 68, 0.15)", icon: "Flame" },
  { name: "Surprise", percentage: 16, count: "87,827", color: "#f59e0b", bg: "rgba(245, 158, 11, 0.15)", icon: "Sparkles" },
  { name: "Sadness", percentage: 14, count: "76,848", color: "#6366f1", bg: "rgba(99, 102, 241, 0.15)", icon: "Frown" },
  { name: "Fear", percentage: 10, count: "54,892", color: "#a855f7", bg: "rgba(168, 85, 247, 0.15)", icon: "ShieldAlert" }
];

export const TRENDING_TOPICS = [
  {
    id: 1,
    tag: "#AIRevolution2026",
    category: "Technology",
    volume: "182.4K",
    growth: "+48.2%",
    sentimentScore: 84, // 0 to 100
    dominantSentiment: "POSITIVE",
    dominantEmotion: "Joy",
    botPresence: "3.2%",
    status: "VIRAL"
  },
  {
    id: 2,
    tag: "#CloudOutageIncident",
    category: "Infrastructure",
    volume: "94.6K",
    growth: "+142.0%",
    sentimentScore: 18,
    dominantSentiment: "NEGATIVE",
    dominantEmotion: "Anger",
    botPresence: "4.1%",
    status: "CRISIS"
  },
  {
    id: 3,
    tag: "#QuantumSupremacy",
    category: "Science",
    volume: "76.1K",
    growth: "+29.5%",
    sentimentScore: 78,
    dominantSentiment: "POSITIVE",
    dominantEmotion: "Surprise",
    botPresence: "1.9%",
    status: "TRENDING"
  },
  {
    id: 4,
    tag: "#CryptoBonusGiveaway",
    category: "Web3",
    volume: "61.3K",
    growth: "+84.1%",
    sentimentScore: 42,
    dominantSentiment: "NEUTRAL",
    dominantEmotion: "Surprise",
    botPresence: "72.4%", // Flagged as bot astroturfing
    status: "ASTROTURFING"
  },
  {
    id: 5,
    tag: "#GreenEnergyGrid",
    category: "Climate",
    volume: "45.8K",
    growth: "+14.3%",
    sentimentScore: 71,
    dominantSentiment: "POSITIVE",
    dominantEmotion: "Joy",
    botPresence: "2.5%",
    status: "STABLE"
  }
];

export const BOT_ACCOUNTS_ISOLATION_FOREST = [
  {
    id: "bot-001",
    handle: "@airdrop_master_77",
    accountAgeDays: 4,
    postingFrequencyPerHour: 88,
    repostRatio: 0.94,
    contentSimilarityScore: 0.96,
    avgPathLength: 2.8,
    anomalyScore: 0.92, // > 0.6 is anomalous in Isolation Forest
    flaggedReason: "High Repost Frequency & Short Tree Path",
    status: "Quarantined"
  },
  {
    id: "bot-002",
    handle: "@crypto_pump_signal_9",
    accountAgeDays: 1,
    postingFrequencyPerHour: 142,
    repostRatio: 0.98,
    contentSimilarityScore: 0.99,
    avgPathLength: 2.1,
    anomalyScore: 0.97,
    flaggedReason: "Mass Sybil Token Spamming",
    status: "Quarantined"
  },
  {
    id: "bot-003",
    handle: "@viral_news_loop_0",
    accountAgeDays: 12,
    postingFrequencyPerHour: 45,
    repostRatio: 0.82,
    contentSimilarityScore: 0.88,
    avgPathLength: 3.4,
    anomalyScore: 0.78,
    flaggedReason: "Automated RSS Headline Loop",
    status: "Monitoring"
  },
  {
    id: "bot-004",
    handle: "@discount_link_bot4",
    accountAgeDays: 8,
    postingFrequencyPerHour: 60,
    repostRatio: 0.91,
    contentSimilarityScore: 0.93,
    avgPathLength: 3.1,
    anomalyScore: 0.85,
    flaggedReason: "Affiliate Link Cloaking Network",
    status: "Quarantined"
  }
];

export const GEO_ANALYTICS_DATA = [
  { country: "United States", code: "US", sentimentScore: 68, positive: 58, negative: 26, neutral: 16, volume: "184.2K", primaryEmotion: "Joy" },
  { country: "India", code: "IN", sentimentScore: 76, positive: 65, negative: 20, neutral: 15, volume: "142.9K", primaryEmotion: "Joy" },
  { country: "United Kingdom", code: "GB", sentimentScore: 52, positive: 45, negative: 36, neutral: 19, volume: "68.4K", primaryEmotion: "Anger" },
  { country: "Germany", code: "DE", sentimentScore: 61, positive: 52, negative: 28, neutral: 20, volume: "44.1K", primaryEmotion: "Surprise" },
  { country: "Japan", code: "JP", sentimentScore: 64, positive: 54, negative: 24, neutral: 22, volume: "39.8K", primaryEmotion: "Joy" },
  { country: "Brazil", code: "BR", sentimentScore: 72, positive: 62, negative: 23, neutral: 15, volume: "35.2K", primaryEmotion: "Joy" },
  { country: "Australia", code: "AU", sentimentScore: 59, positive: 50, negative: 31, neutral: 19, volume: "24.6K", primaryEmotion: "Sadness" },
  { country: "United Arab Emirates", code: "AE", sentimentScore: 81, positive: 72, negative: 14, neutral: 14, volume: "19.3K", primaryEmotion: "Joy" }
];

export const COMPETITOR_DATA = [
  {
    name: "Sentivio Platform",
    shareOfVoice: "36.4%",
    netSentimentScore: 74,
    positivePct: 68,
    negativePct: 12,
    neutralPct: 20,
    botContamination: "1.8%",
    totalMentions: "142,300"
  },
  {
    name: "ApexPulse Analytics",
    shareOfVoice: "28.1%",
    netSentimentScore: 48,
    positivePct: 51,
    negativePct: 29,
    neutralPct: 20,
    botContamination: "8.4%",
    totalMentions: "109,800"
  },
  {
    name: "VaderSense Legacy",
    shareOfVoice: "19.5%",
    netSentimentScore: 32,
    positivePct: 42,
    negativePct: 38,
    neutralPct: 20,
    botContamination: "14.2%",
    totalMentions: "76,200"
  },
  {
    name: "BrandWatch Static",
    shareOfVoice: "16.0%",
    netSentimentScore: 41,
    positivePct: 47,
    negativePct: 33,
    neutralPct: 20,
    botContamination: "11.6%",
    totalMentions: "62,500"
  }
];

export const SYNTHETIC_MEDIA_RECORDS = [
  {
    id: "vid-881",
    title: "Viral CEO Press Announcement Clip",
    sourcePlatform: "Twitter/X Video",
    uploader: "@finance_leak_insider",
    deepfakeScore: 94.6, // %
    verdict: "DEEPFAKE DETECTED",
    confidence: "High (0.95)",
    fpsAnalyzed: 720,
    metrics: {
      facialArtifacts: 91,
      spectralInconsistency: 87,
      eyeBlinkAnomaly: 96,
      audioVisualSyncError: 82
    },
    flaggedTimestamp: "00:14 - 00:28 (Mouth boundary warping)",
    thumbnail: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "vid-882",
    title: "Live Tech Conference Keynote Stream",
    sourcePlatform: "YouTube Feed",
    uploader: "@devcon_official",
    deepfakeScore: 4.2,
    verdict: "AUTHENTIC MEDIA",
    confidence: "High (0.98)",
    fpsAnalyzed: 1440,
    metrics: {
      facialArtifacts: 3,
      spectralInconsistency: 5,
      eyeBlinkAnomaly: 4,
      audioVisualSyncError: 2
    },
    flaggedTimestamp: "None (Consistent physical lighting & motion)",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "vid-883",
    title: "Politician Speech Extracted Reel",
    sourcePlatform: "TikTok Re-upload",
    uploader: "@politi_viral_clip",
    deepfakeScore: 88.1,
    verdict: "DEEPFAKE DETECTED",
    confidence: "High (0.89)",
    fpsAnalyzed: 450,
    metrics: {
      facialArtifacts: 85,
      spectralInconsistency: 89,
      eyeBlinkAnomaly: 79,
      audioVisualSyncError: 92
    },
    flaggedTimestamp: "00:03 - 00:18 (Synthetic voice cloned dubbing)",
    thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80"
  }
];

export const SYSTEM_ALERTS = [
  {
    id: "alt-01",
    severity: "CRITICAL",
    title: "Sudden Negative Sentiment Surge (> 65%)",
    topic: "#CloudOutageIncident",
    timestamp: "14:12 UTC",
    detail: "Negative sentiment surged from 24% to 68% within a 15-minute window following reported data center failure.",
    status: "Active",
    actionRequired: "Review crisis escalation protocol"
  },
  {
    id: "alt-02",
    severity: "WARNING",
    title: "Coordinated Bot Astroturfing Detected",
    topic: "#CryptoBonusGiveaway",
    timestamp: "13:45 UTC",
    detail: "Isolation Forest flagged 128 new accounts posting identical content vectors with path length < 3.0.",
    status: "Quarantined",
    actionRequired: "Excluded 4,200 posts from baseline stats"
  },
  {
    id: "alt-03",
    severity: "INFO",
    title: "RoBERTa Inference Speed Optimization",
    topic: "Model Telemetry",
    timestamp: "12:00 UTC",
    detail: "TensorRT INT8 subword engine active. Inference latency dropped to 45.2ms per token sequence.",
    status: "Resolved",
    actionRequired: "None"
  }
];

export const AI_ASSISTANT_KNOWLEDGE = [
  {
    query: "Why is public sentiment suddenly negative today?",
    response: "Public sentiment experienced an abrupt negative dip between 12:00 and 14:00 UTC, driven primarily by topic #CloudOutageIncident. Analysis of 16,800 posts revealed 82% Anger and 11% Fear emotions regarding a multi-region DNS outage. Sentiment dropped from 59% Positive to 38% Positive, triggering Alert ALT-01. Filtering with Isolation Forest ensured that the reaction is 95.9% genuine human feedback."
  },
  {
    query: "Which bot networks are active right now?",
    response: "Isolation Forest Anomaly detection has flagged 4 primary clusters astroturfing #CryptoBonusGiveaway. Key anomalous indicators include an average path length of 2.1 (vs 6.8 for humans), repost ratios exceeding 94%, and posting frequencies above 60 tweets/hour. 1,423 bot accounts have been quarantined from the public sentiment metrics."
  },
  {
    query: "Compare Sentivio RoBERTa model with VADER",
    response: "According to empirical benchmarks (Table 5.1): RoBERTa + Isolation Forest achieves 92.8% Accuracy and 91.1% F1-score with 2.1% Bot False Positive Rate, whereas VADER achieves only 62.4% Accuracy and fails to recognize sarcasm, deep emotions (Joy, Anger, Fear), or spam bots. RoBERTa takes 45.2ms inference latency compared to VADER's 4.2ms, which is easily fast enough for real-time streaming."
  },
  {
    query: "Summarize global sentiment by region",
    response: "The United Arab Emirates currently holds the highest positive sentiment index at 81/100 (72% Positive), followed by India at 76/100 (65% Positive) and Brazil at 72/100. The lowest sentiment is registered in the United Kingdom (52/100) due to economic inflation discourse and the US (68/100) driven by technological discourse."
  }
];

export const IQ_GAME_QUESTIONS = [
  {
    id: 1,
    type: "Sentiment Sarcasm Test",
    question: "Analyze the tone: 'Oh brilliant, another software update that restarts my system right during my presentation. Just what I needed today!'",
    options: [
      "Genuinely Positive (Grateful for update)",
      "Sarcastic Negative (Frustrated by forced reboot)",
      "Strictly Neutral (Informational log)",
      "Uncertain Bot Spam"
    ],
    correctAnswer: 1,
    explanation: "RoBERTa multi-head attention identifies contrastive cues ('Oh brilliant' followed by disrupted workflow) to flag sarcastic negative intent."
  },
  {
    id: 2,
    type: "Bot Pattern Recognition",
    question: "An account created 3 hours ago has posted 240 identical tweets containing a shortened bit.ly URL. What is its Isolation Forest verdict?",
    options: [
      "Authentic Organic User",
      "Low Anomaly Score (<0.2)",
      "High Anomaly Bot (Path length < 3.0)",
      "Verified Influencer"
    ],
    correctAnswer: 2,
    explanation: "Extreme posting frequency and zero account longevity lead to early partition isolation, producing an anomaly score of >0.90."
  },
  {
    id: 3,
    type: "Emotion Classifier",
    question: "Identify the primary emotion: 'I cannot believe we just secured first prize at the national AI hackathon! My heart is racing!'",
    options: [
      "Fear",
      "Anger",
      "Joy",
      "Sadness"
    ],
    correctAnswer: 2,
    explanation: "Semantic tokens 'first prize', 'hackathon', and 'heart is racing' in triumph correspond to high confidence Joy (0.94)."
  },
  {
    id: 4,
    type: "Deepfake Forensic Clue",
    question: "Which of the following is the most definitive indicator of an AI-synthesized deepfake video?",
    options: [
      "1080p resolution",
      "Facial boundary warping & irregular blink frequency",
      "Audio played at 44.1 kHz",
      "Subtitles in English"
    ],
    correctAnswer: 1,
    explanation: "Generative adversarial artifacting creates boundary distortion around jawlines and fails to reproduce physiological spontaneous blinking."
  }
];
