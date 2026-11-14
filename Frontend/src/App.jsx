import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import LoginModal from './components/LoginModal';
import DashboardOverview from './pages/DashboardOverview';
import LiveStreamView from './pages/LiveStreamView';
import TrendExplorerView from './pages/TrendExplorerView';
import EmotionAnalysisView from './pages/EmotionAnalysisView';
import BotDetectionView from './pages/BotDetectionView';
import SyntheticMediaView from './pages/SyntheticMediaView';
import GeoAnalyticsView from './pages/GeoAnalyticsView';
import CompetitorAnalysisView from './pages/CompetitorAnalysisView';
import AlertsCenterView from './pages/AlertsCenterView';
import AIAssistantView from './pages/AIAssistantView';
import IQGameView from './pages/IQGameView';
import ReportsGeneratorView from './pages/ReportsGeneratorView';
import ApiDocsView from './pages/ApiDocsView';
import UserProfileView from './pages/UserProfileView';
import { INITIAL_TWEETS, MOCK_STREAM_POOL, SYSTEM_ALERTS } from './services/mockData';
import { CheckCircle2, UserCheck } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [userRole, setUserRole] = useState('General User'); // Default to General User when not logged in
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isStreaming, setIsStreaming] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [tweets, setTweets] = useState(INITIAL_TWEETS);
  const [alerts, setAlerts] = useState(SYSTEM_ALERTS);

  // Authentication State: Not logged in by default unless user signs in
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [authNotification, setAuthNotification] = useState(null);

  const handleLogin = (user) => {
    setCurrentUser(user);
    setUserRole(user.role);
    setAuthNotification(`Signed in successfully as ${user.name} (${user.role})`);
    setTimeout(() => setAuthNotification(null), 3500);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setUserRole('General User');
    setAuthNotification("Signed out successfully.");
    setTimeout(() => setAuthNotification(null), 3500);
  };

  // Simulated WebSocket Live Stream Ticker
  useEffect(() => {
    if (!isStreaming) return;

    let poolIdx = 0;
    const interval = setInterval(() => {
      const sample = MOCK_STREAM_POOL[poolIdx % MOCK_STREAM_POOL.length];
      poolIdx++;

      const newPost = {
        id: `stream-${Date.now()}`,
        ...sample,
        timestamp: 'Just now',
        likes: Math.floor(Math.random() * 50) + 1,
        retweets: Math.floor(Math.random() * 20) + 1,
        reach: `${(Math.random() * 5 + 1).toFixed(1)}K`
      };

      setTweets((prev) => [newPost, ...prev.slice(0, 49)]); // Keep buffer to 50
    }, 4500);

    return () => clearInterval(interval);
  }, [isStreaming]);

  const tabTitles = {
    dashboard: "Dashboard Overview",
    "live-stream": "Live Feed & Tester",
    trends: "Trending Topics",
    emotions: "Emotions & Sarcasm Decoder",
    bots: "Bot Shield (Isolation Forest)",
    "synthetic-media": "Synthetic Media & Video Deepfake",
    "geo-analytics": "Geo-Spatial Heatmaps",
    competitors: "Competitor Intelligence & Share",
    alerts: "Crisis Alerts Center",
    "ai-assistant": "Conversational AI Assistant",
    "iq-game": "Cognitive IQ Challenge Game",
    reports: "Executive Audit Reports",
    "api-docs": "REST & WebSocket API Docs",
    profile: "User Profile & Role Privileges"
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <DashboardOverview
            tweets={tweets}
            onNavigateTab={setActiveTab}
            userRole={userRole}
            isStreaming={isStreaming}
          />
        );
      case 'live-stream':
        return (
          <LiveStreamView
            tweets={tweets}
            isStreaming={isStreaming}
            setIsStreaming={setIsStreaming}
          />
        );
      case 'trends':
        return <TrendExplorerView />;
      case 'emotions':
        return <EmotionAnalysisView />;
      case 'bots':
        return <BotDetectionView />;
      case 'synthetic-media':
        return <SyntheticMediaView />;
      case 'geo-analytics':
        return <GeoAnalyticsView />;
      case 'competitors':
        return <CompetitorAnalysisView />;
      case 'alerts':
        return <AlertsCenterView />;
      case 'ai-assistant':
        return <AIAssistantView />;
      case 'iq-game':
        return <IQGameView />;
      case 'reports':
        return <ReportsGeneratorView />;
      case 'api-docs':
        return <ApiDocsView />;
      case 'profile':
        return (
          <UserProfileView
            userRole={userRole}
            setUserRole={setUserRole}
            currentUser={currentUser}
            onOpenLoginModal={() => setIsLoginModalOpen(true)}
          />
        );
      default:
        return (
          <DashboardOverview
            tweets={tweets}
            onNavigateTab={setActiveTab}
            userRole={userRole}
            isStreaming={isStreaming}
          />
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-[#090d16] text-slate-100 font-sans antialiased overflow-hidden">
      {/* Side Menu Navbar with Login Option at Bottom Left */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        userRole={userRole}
        setUserRole={setUserRole}
        currentUser={currentUser}
        onOpenLoginModal={() => setIsLoginModalOpen(true)}
        onLogout={handleLogout}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        livePostCount={tweets.length}
        activeAlertCount={alerts.length}
      />

      {/* Main Content Pane */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto">
        <Header
          activeTabTitle={tabTitles[activeTab] || "Sentivio Dashboard"}
          isStreaming={isStreaming}
          setIsStreaming={setIsStreaming}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onOpenAIAssistant={() => setActiveTab('ai-assistant')}
          alerts={alerts}
          userRole={userRole}
          currentUser={currentUser}
          onOpenLoginModal={() => setIsLoginModalOpen(true)}
        />

        {/* Global Toast Notification */}
        {authNotification && (
          <div className="mx-6 md:mx-8 mt-4 p-3 rounded-xl bg-indigo-950/80 border border-indigo-500/50 text-indigo-200 text-xs font-mono flex items-center justify-between animate-in fade-in">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>{authNotification}</span>
            </div>
            <button
              onClick={() => setAuthNotification(null)}
              className="text-slate-400 hover:text-white"
            >
              ✕
            </button>
          </div>
        )}

        <main className="flex-1 p-6 md:p-8 max-w-7xl mx-auto w-full">
          {renderActiveView()}
        </main>
      </div>

      {/* Bottom Left Connected Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        currentUser={currentUser}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
    </div>
  );
}
