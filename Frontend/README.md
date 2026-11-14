# SENTIVIO — AI Social Intelligence Dashboard (Frontend)
### Unifying Social Media Platforms & Real-Time Trusted Insights

**Project Team ID**: BC2026TID03  
**Institution**: Samrat Ashok Technological Institute, Vidisha (M.P.)  
**Affiliation**: Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal  
**Department**: Computer Science & Engineering (Blockchain)  
**Project Guide**: Prof. Sheena Kumar (Assistant Professor)  
**Team Members**:
- **Om Gehlot** (0108BC231044) — Frontend Architecture & System Integration
- **Utsav Kumar** (0108BC231064) — NLP & RoBERTa Modeling
- **Mayank Singh** (0108BC231037) — Isolation Forest Anomaly Detection
- **Ravindra Yadav** (0108BC231052) — Real-Time Streaming & WebSocket Pipeline

---

## 🚀 Overview

**Sentivio** is an AI-powered social intelligence platform that turns noisy, bot-manipulated social feeds into authenticated, actionable public sentiment intelligence.

This package contains the **complete React frontend application** structured around an enterprise-grade **vertical side menu navigation bar (Navbar)**.

### Key Architecture Modules

1. **Vertical Side Menu Navigation Bar (`Sidebar.jsx`)**:
   - Collapsible desktop & mobile layout with active pill markers.
   - Live stream status indicator, real-time latency telemetry (45.2ms), and model status badge.
   - Role-Based Access Control (RBAC) switcher directly implementing **Fig. 1** from the synopsis:
     - `Administrator`
     - `Analyst`
     - `Business User`
     - `General User`
   - Navigation groups: Core Intelligence, Advanced Analytics, Operations & Tools.

2. **Dashboard Overview (`DashboardOverview.jsx`)**:
   - Macro KPIs: Total volume, RoBERTa net sentiment (+27.4), Quarantined bots (1,423), average inference latency (45.2ms).
   - Interactive 24-hour sentiment timeline with anomaly crisis drop marker (14:00 incident).
   - Tri-polarity progress gauge (Positive 54.2%, Negative 26.8%, Neutral 19.0%).
   - 5-class psychological emotion radar.

3. **Real-Time Stream & Interactive Analyzer (`LiveStreamView.jsx`)**:
   - Bi-directional simulated WebSocket ticker pushing live posts.
   - Pause / Resume feed controls, sentiment filters, and bot filters.
   - **Interactive RoBERTa & Isolation Forest Inference Lab**: Test any custom post or tweet (such as sarcasm, bot scams, or outage rants) with immediate subword BPE tokenization, confidence scoring, and tree path length.

4. **Trend Explorer & Astroturfing Scanner (`TrendExplorerView.jsx`)**:
   - Viral hashtag tracking with velocity and percentage growth.
   - Isolation Forest astroturfing flags (detecting if a trend is organically driven or bot-farm boosted).
   - Visual topic cluster and category filters.

5. **Emotion Engine & Sarcasm Decoder (`EmotionAnalysisView.jsx`)**:
   - 5-Class multi-label spectrum: **Joy, Anger, Surprise, Sadness, Fear**.
   - Contextual attention comparison against legacy VADER lexicon.
   - Interactive emotion inspector with representative post samples.

6. **Bot & Anomaly Shield (`BotDetectionView.jsx`)**:
   - Unsupervised Isolation Forest implementation based on anomaly scoring equation:
     $$s(x, n) = 2^{-\frac{E(h(x))}{c(n)}}$$
   - Monitored accounts table with feature vectors: Account age, post frequency, repost ratio, path length, and quarantine toggles.
   - Low False Positive Rate (2.1% FPR).

7. **Synthetic Media & AI Deepfake Video Scan (`SyntheticMediaView.jsx`)**:
   - Computer vision video authenticity inspector.
   - Upload URL or video clip scanner.
   - Forensic metrics: Facial boundary warping, spectral inconsistency, biological blink rate, and lip-sync alignment.

8. **Geo-Spatial Sentiment Heatmaps (`GeoAnalyticsView.jsx`)**:
   - Regional sentiment density nodes (India, USA, UK, Germany, Japan, Brazil, UAE, Australia).
   - Localized sentiment polarity and volume breakdowns.

9. **Competitor Benchmarking (`CompetitorAnalysisView.jsx`)**:
   - Comparative intelligence against legacy tools (Sentivio vs ApexPulse vs VaderSense vs BrandWatch).
   - Share of voice, net sentiment score, and bot contamination comparison.

10. **Crisis Alert Center (`AlertsCenterView.jsx`)**:
    - Automated threshold rule builder (e.g. Negative Sentiment > 65% in 15 minutes).
    - Active crisis incidents stream with severity badges (Critical, Warning, Info).

11. **Conversational AI Assistant (`AIAssistantView.jsx`)**:
    - LLM social copilot for plain English querying ("Why is sentiment negative today?", "Which bot networks are active?").
    - Preset executive suggestion chips and real-time streaming answers.

12. **Cognitive IQ Challenge Game (`IQGameView.jsx`)**:
    - Embedded gamified cognitive module mentioned in the abstract.
    - Sarcasm detection test, bot pattern puzzles, and streak scoring to keep analysts engaged.

13. **Executive Audit Reports (`ReportsGeneratorView.jsx`)**:
    - Customizable report parameters (Executive Summary, Bot Audit, Deepfake Log).
    - PDF, CSV, and JSON preview and export simulator.

14. **Developer API Docs (`ApiDocsView.jsx`)**:
    - REST & WebSocket interactive endpoint tester with 200 OK responses.

15. **User Profile & RBAC Matrix (`UserProfileView.jsx`)**:
    - Team roster, guide credits, and dynamic privilege tables for each user role.

---

## 💻 How to Run the Frontend Locally

```bash
# 1. Navigate to the client directory
cd "C:\Users\omgeh\.gemini\antigravity\scratch\sentivio\client"

# 2. Start the Vite development server
npm run dev

# 3. Open your browser at the displayed local URL (default: http://localhost:5173)
```

To build for production:
```bash
npm run build
```

---

## 🛠️ Tech Stack
- **Framework**: React 18
- **Bundler**: Vite 6
- **Styling**: Tailwind CSS + Custom Glassmorphism Theme (`index.css`)
- **Icons**: Lucide React
- **Typography**: Plus Jakarta Sans & JetBrains Mono
