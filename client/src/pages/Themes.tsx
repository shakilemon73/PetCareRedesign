import { useState } from 'react';
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

  const handleBack = () => {
    window.location.href = '/profile';
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
      
      <div className="p-4 pb-20 max-w-md mx-auto">
        <div className="mb-4">
          <p className="text-sm text-muted-foreground">
            Unlock more through the lessons!
          </p>
        </div>
        
        <div className="space-y-4">
          {themes.map((theme) => (
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
          ))}
        </div>
      </div>
    </div>
  );
}