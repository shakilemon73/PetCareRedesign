import { useState } from 'react';
import { Circle, Book, User, Settings, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationTab {
  id: string;
  label: string;
  icon: React.ReactNode;
  path: string;
}

interface MobileNavigationProps {
  currentTab?: string;
  onTabChange?: (tabId: string) => void;
}

const navigationTabs: NavigationTab[] = [
  { id: 'qubis', label: 'Qubis', icon: <Circle className="h-5 w-5" />, path: '/' },
  { id: 'learn', label: 'Learn', icon: <Book className="h-5 w-5" />, path: '/learn' },
  { id: 'profile', label: 'Profile', icon: <User className="h-5 w-5" />, path: '/profile' },
];

export default function MobileNavigation({ 
  currentTab = 'qubis',
  onTabChange = (tabId) => console.log(`Navigate to ${tabId}`)
}: MobileNavigationProps) {
  const [activeTab, setActiveTab] = useState(currentTab);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    onTabChange(tabId);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
      <div className="flex items-center justify-around px-4 py-2 max-w-md mx-auto">
        {navigationTabs.map((tab) => (
          <Button
            key={tab.id}
            variant="ghost"
            className={`flex flex-col items-center space-y-1 h-14 px-3 ${
              activeTab === tab.id 
                ? 'text-electric-indigo bg-electric-indigo/10' 
                : 'text-muted-foreground hover-elevate'
            }`}
            onClick={() => handleTabClick(tab.id)}
            data-testid={`button-nav-${tab.id}`}
          >
            {tab.icon}
            <span className="text-xs font-medium">{tab.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}