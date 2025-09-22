import ThemeCard from '../ThemeCard';

export default function ThemeCardExample() {
  return (
    <div className="space-y-4 p-4">
      <ThemeCard 
        id="quantum-glow"
        name="100th Anniversary Quantum Glow"
        description="Celebrates the centennial of quantum physics discovery with vibrant, glowing colors."
        colors={['#6931F4', '#1B9CFC', '#2ADBB9', '#F3CF25']}
        isUnlocked={true}
        isActive={true}
      />
      <ThemeCard 
        id="royal-edition"
        name="Year of Quantum Edition"
        description="Exclusive theme featuring royal purple, rich gold, and marine blue."
        colors={['#4C1D95', '#F59E0B', '#1E3A8A']}
        isUnlocked={false}
      />
      <ThemeCard 
        id="sunset-gradient"
        name="Quantum Sunset"
        description="Warm gradient inspired by quantum energy transitions."
        colors={['#ED3781', '#F46A1E', '#F3CF25']}
        isUnlocked={true}
      />
    </div>
  );
}