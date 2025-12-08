import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { WelcomeCard } from './components/WelcomeCard';
import { VersionHistory } from './components/VersionHistory';
import { Tutorial } from './components/Tutorial';
import { ControlPanel } from './components/ControlPanel';
import { FavoritesManager } from './components/FavoritesManager';
import { Button } from './components/ui/button';
import { ChevronLeft } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [showVersionHistory, setShowVersionHistory] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [isPanelCollapsed, setIsPanelCollapsed] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <Navbar theme={theme} onThemeToggle={toggleTheme} />
      
      <div className={`container mx-auto px-4 py-12 ${isPanelCollapsed ? '' : 'pr-[516px]'} transition-all duration-300`}>
        <WelcomeCard 
          theme={theme}
          onShowVersionHistory={() => setShowVersionHistory(true)}
          onShowTutorial={() => setShowTutorial(true)}
        />
      </div>

      <ControlPanel
        theme={theme}
        isCollapsed={isPanelCollapsed}
        onToggleCollapse={() => setIsPanelCollapsed(!isPanelCollapsed)}
        onShowFavorites={() => setShowFavorites(true)}
        onShowVersionHistory={() => setShowVersionHistory(true)}
        onShowTutorial={() => setShowTutorial(true)}
      />

      {showVersionHistory && (
        <VersionHistory 
          theme={theme} 
          onClose={() => setShowVersionHistory(false)} 
        />
      )}

      {showTutorial && (
        <Tutorial 
          theme={theme} 
          onClose={() => setShowTutorial(false)} 
        />
      )}

      {showFavorites && (
        <FavoritesManager 
          theme={theme} 
          onClose={() => setShowFavorites(false)} 
        />
      )}
    </div>
  );
}