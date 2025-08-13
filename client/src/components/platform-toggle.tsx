import { usePlatform } from "@/hooks/use-platform";
import { Heart, Stethoscope, Sparkles } from "lucide-react";

export default function PlatformToggle() {
  const { currentPlatform, setPlatform } = usePlatform();

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in">
      <div className="glass-card p-2 shadow-strong">
        <div className="relative flex items-center bg-muted/50 rounded-2xl p-1">
          {/* Sliding Background */}
          <div 
            className={`absolute top-1 bottom-1 w-1/2 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl shadow-lg transition-all duration-500 ease-out ${
              currentPlatform === 'pet' ? 'left-1' : 'left-1/2'
            }`}
            style={{
              boxShadow: '0 4px 20px -2px rgba(99, 102, 241, 0.4)'
            }}
          />
          
          {/* Buttons */}
          <button
            data-testid="button-pet-platform"
            onClick={() => setPlatform('pet')}
            className={`relative z-10 flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 ${
              currentPlatform === 'pet'
                ? 'text-white'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Heart className={`w-4 h-4 transition-all duration-300 ${
              currentPlatform === 'pet' ? 'fill-current' : ''
            }`} />
            Pet Parents
            {currentPlatform === 'pet' && (
              <Sparkles className="w-3 h-3 animate-pulse-slow" />
            )}
          </button>
          
          <button
            data-testid="button-vet-platform"
            onClick={() => setPlatform('vet')}
            className={`relative z-10 flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 ${
              currentPlatform === 'vet'
                ? 'text-white'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Stethoscope className="w-4 h-4" />
            Veterinarians
            {currentPlatform === 'vet' && (
              <Sparkles className="w-3 h-3 animate-pulse-slow" />
            )}
          </button>
        </div>
        
        {/* Floating Indicator */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
          <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse-slow shadow-glow" />
        </div>
      </div>
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="w-full h-full bg-grid-pattern" />
      </div>
    </div>
  );
}
