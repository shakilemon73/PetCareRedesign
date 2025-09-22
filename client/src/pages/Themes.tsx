import { useState } from 'react';
import { useLocation } from 'wouter';
import MobileHeader from '@/components/MobileHeader';
import ThemeCard from '@/components/ThemeCard';

//todo: remove mock functionality - replace with real theme data
const mockThemes = [
  {
    id: 'quantum-glow',
    name: '100th Anniversary Quantum Glow',
    description: 'Celebrates the centennial of quantum physics discovery with vibrant, glowing colors.',
    colors: ['#6931F4', '#1B9CFC', '#2ADBB9', '#F3CF25'],
    isUnlocked: true,
    isActive: true
  },
  {
    id: 'royal-edition',
    name: 'Year of Quantum Edition',
    description: 'Exclusive theme featuring royal purple, rich gold, and marine blue for Qubi "year of quantum edition" owners.',
    colors: ['#4C1D95', '#F59E0B', '#1E3A8A'],
    isUnlocked: false,
    isActive: false
  },
  {
    id: 'sunset-gradient',
    name: 'Quantum Sunset',
    description: 'Warm gradient inspired by quantum energy transitions at twilight.',
    colors: ['#ED3781', '#F46A1E', '#F3CF25'],
    isUnlocked: true,
    isActive: false
  },
  {
    id: 'ocean-depths',
    name: 'Deep Ocean Quantum',
    description: 'Cool blues and greens representing the mysterious depths of quantum mechanics.',
    colors: ['#1B9CFC', '#2ADBB9', '#0F172A'],
    isUnlocked: true,
    isActive: false
  },
  {
    id: 'cosmic-energy',
    name: 'Cosmic Energy Field',
    description: 'Unlock more themes through completing quantum lessons!',
    colors: ['#6931F4', '#ED3781', '#1B9CFC', '#2ADBB9'],
    isUnlocked: false,
    isActive: false
  }
];

export default function Themes() {
  const [themes, setThemes] = useState(mockThemes);
  const [activeThemeId, setActiveThemeId] = useState('quantum-glow');
  const [, setLocation] = useLocation();

  const handleBack = () => {
    setLocation('/profile');
  };

  const handleApplyTheme = (themeId: string) => {
    setThemes(prev => prev.map(theme => ({
      ...theme,
      isActive: theme.id === themeId
    })));
    setActiveThemeId(themeId);
  };

  return (
    <div className="min-h-screen bg-background">
      <MobileHeader 
        title="Your themes" 
        showBack={true}
        onBack={handleBack}
      />
      
      {/* Enhanced Hero Section - Emotional Design */}
      <div className="bg-gradient-to-r from-electric-indigo/5 via-quantum-pink/5 to-ion-green/5 px-4 py-6">
        <div className="max-w-md mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-electric-indigo/20 to-quantum-pink/20 flex items-center justify-center mx-auto mb-4 relative">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-electric-indigo via-quantum-pink to-ion-green animate-pulse" style={{borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'}} />
            <div className="absolute inset-0 border-2 border-electric-indigo/20 rounded-full animate-ping" />
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-electric-indigo to-quantum-pink bg-clip-text text-transparent mb-2" data-testid="text-themes-title">
            Visual Themes Collection
          </h1>
          <p className="text-sm text-muted-foreground" data-testid="text-themes-subtitle">
            {themes.filter(t => t.isUnlocked).length} of {themes.length} themes unlocked • Complete lessons for more
          </p>
        </div>
      </div>
      
      <div className="p-4 pb-20 max-w-md mx-auto">
        {/* Enhanced Theme Collection */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-foreground">Theme Gallery</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent ml-4" />
          </div>
        </div>
        
        {/* Active Theme Showcase */}
        {themes.find(t => t.isActive) && (
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">CURRENTLY ACTIVE</h3>
            <div className="p-4 rounded-2xl border-2 border-electric-indigo bg-gradient-to-r from-electric-indigo/5 to-quantum-pink/5">
              <div className="flex items-center space-x-4">
                <div className="flex space-x-1">
                  {themes.find(t => t.isActive)!.colors.map((color, i) => (
                    <div 
                      key={i}
                      className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-electric-indigo">
                    {themes.find(t => t.isActive)!.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Applied to all quantum visualizations
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="space-y-6">
          {themes.map((theme, index) => (
            <div key={theme.id} className="relative">
              <ThemeCard
                key={theme.id}
                id={theme.id}
                name={theme.name}
                description={theme.description}
                colors={theme.colors}
                isUnlocked={theme.isUnlocked}
                isActive={theme.isActive}
                onApply={handleApplyTheme}
              />
            </div>
          ))}
          
          {/* Progress indicator */}
          <div className="text-center py-8">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-electric-indigo/20 to-quantum-pink/20 flex items-center justify-center mx-auto mb-3">
              <div className="text-lg font-bold text-electric-indigo">{themes.filter(t => t.isUnlocked).length}/{themes.length}</div>
            </div>
            <p className="text-sm font-medium text-electric-indigo mb-2">
              {themes.filter(t => t.isUnlocked).length === themes.length 
                ? 'Collection Complete!' 
                : `${themes.length - themes.filter(t => t.isUnlocked).length} More to Unlock`
              }
            </p>
            <p className="text-xs text-muted-foreground">
              {themes.filter(t => t.isUnlocked).length === themes.length
                ? 'You\'ve unlocked all available themes through quantum learning'
                : 'Complete more quantum lessons to unlock additional themes'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}