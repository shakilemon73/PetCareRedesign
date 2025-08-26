import { usePlatform } from "@/hooks/use-platform";
import { Heart, Stethoscope, Sparkles } from "lucide-react";

export default function PlatformToggle() {
  const { currentPlatform, setPlatform } = usePlatform();

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40 animate-fade-in will-change-transform">
      {/* Julie Zhuo - Systems Thinking & Jonathan Ive - Simplicity */}
      <div className="glass-card p-3 shadow-strong backdrop-blur-xl clean-edges">
        <div className="relative flex items-center rounded-2xl p-1 systematic-spacing">
          {/* Don Norman - Clear Feedback & Aarron Walter - Emotional Design */}
          <div 
            className={`absolute top-1 bottom-1 w-1/2 rounded-xl shadow-strong feedback-gentle will-change-transform ${
              currentPlatform === 'pet' ? 'left-1' : 'left-1/2'
            }`}
            style={{
              background: currentPlatform === 'pet' 
                ? 'linear-gradient(135deg, hsl(235, 89%, 64%) 0%, hsl(147, 100%, 41%) 100%)'
                : 'linear-gradient(135deg, hsl(235, 89%, 64%) 0%, hsl(220, 100%, 70%) 100%)',
              boxShadow: currentPlatform === 'pet' 
                ? '0 8px 32px -8px rgba(16, 185, 129, 0.4)' 
                : '0 8px 32px -8px rgba(99, 102, 241, 0.4)'
            }}
          />
          
          {/* Luke Wroblewski - Touch Targets & Alan Cooper - Goal Oriented */}
          <button
            data-testid="button-pet-platform"
            onClick={() => setPlatform('pet')}
            className={`relative z-10 flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
              currentPlatform === 'pet'
                ? 'text-white'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Heart className={`w-5 h-5 transition-all duration-300 ${
              currentPlatform === 'pet' ? 'fill-current scale-110 personality-warm' : ''
            }`} />
            {/* Steve Krug - Scannable labels */}
            <span className="aesthetic-minimal">Pet Parents</span>
            {/* Aarron Walter - Delight signifier */}
            {currentPlatform === 'pet' && (
              <Sparkles className="w-4 h-4 animate-pulse-slow text-white/80 delight-bounce" />
            )}
          </button>
          
          <button
            data-testid="button-vet-platform"
            onClick={() => setPlatform('vet')}
            className={`relative z-10 flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
              currentPlatform === 'vet'
                ? 'text-white'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Stethoscope className={`w-5 h-5 transition-all duration-300 ${
              currentPlatform === 'vet' ? 'scale-110 trust-building' : ''
            }`} />
            {/* Steve Krug - Scannable labels */}
            <span className="aesthetic-minimal">Veterinarians</span>
            {/* Aarron Walter - Delight signifier */}
            {currentPlatform === 'vet' && (
              <Sparkles className="w-4 h-4 animate-pulse-slow text-white/80 delight-bounce" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
