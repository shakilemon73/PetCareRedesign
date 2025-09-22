import { useState } from 'react';
import MobileHeader from '@/components/MobileHeader';
import LearningModule from '@/components/LearningModule';

//todo: remove mock functionality - replace with real learning data
const mockLearningModules = [
  {
    id: 'quantum-laws',
    title: 'Discover the laws of quantum',
    level: 'Beginner' as const,
    progress: 26,
    skinsUnlocked: 0,
    totalSkins: 2,
    isLocked: false
  },
  {
    id: 'quantum-algorithms',
    title: 'Learn the first Quantum Algorithms',
    level: 'Intermediate' as const,
    progress: 0,
    skinsUnlocked: 0,
    totalSkins: 1,
    isLocked: true
  },
  {
    id: 'bit-commitment',
    title: 'Bit commitment',
    level: 'Advanced' as const,
    progress: 0,
    skinsUnlocked: 0,
    totalSkins: 1,
    isLocked: true
  }
];

export default function Learning() {
  const [modules] = useState(mockLearningModules);

  return (
    <div className="min-h-screen bg-background">
      <MobileHeader title="Learn Quantum" />
      
      {/* Enhanced Hero Section - Emotional Design */}
      <div className="bg-gradient-to-r from-electric-indigo/5 via-quantum-pink/5 to-ion-green/5 px-4 py-6">
        <div className="max-w-md mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-electric-indigo/20 to-quantum-pink/20 flex items-center justify-center mx-auto mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric-indigo to-quantum-pink animate-pulse" />
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-electric-indigo to-quantum-pink bg-clip-text text-transparent mb-2" data-testid="text-learning-title">
            Quantum Learning Journey
          </h1>
          <p className="text-sm text-muted-foreground" data-testid="text-learning-progress">
            {modules.filter(m => !m.isLocked).length} of {modules.length} modules unlocked • Build quantum intuition
          </p>
        </div>
      </div>
      
      <div className="p-4 pb-20 max-w-md mx-auto">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-foreground">Learning Modules</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent ml-4" />
          </div>
        </div>
        
        <div className="space-y-6">
          {modules.map((module) => (
            <LearningModule
              key={module.id}
              id={module.id}
              title={module.title}
              level={module.level}
              progress={module.progress}
              skinsUnlocked={module.skinsUnlocked}
              totalSkins={module.totalSkins}
              isLocked={module.isLocked}
            />
          ))}
        </div>
      </div>
    </div>
  );
}