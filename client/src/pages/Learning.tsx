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
      
      <div className="p-4 pb-20 max-w-md mx-auto">
        <div className="space-y-4">
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