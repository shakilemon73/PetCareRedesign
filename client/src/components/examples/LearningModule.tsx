import LearningModule from '../LearningModule';

export default function LearningModuleExample() {
  return (
    <div className="space-y-4 p-4">
      <LearningModule
        id="quantum-laws"
        title="Discover the laws of quantum"
        level="Beginner"
        progress={26}
        skinsUnlocked={0}
        totalSkins={2}
        isLocked={false}
      />
      <LearningModule
        id="quantum-algorithms"
        title="Learn the first Quantum Algorithms"
        level="Intermediate"
        progress={0}
        skinsUnlocked={0}
        totalSkins={1}
        isLocked={true}
      />
      <LearningModule
        id="bit-commitment"
        title="Bit commitment"
        level="Advanced"
        progress={0}
        skinsUnlocked={0}
        totalSkins={1}
        isLocked={true}
      />
    </div>
  );
}