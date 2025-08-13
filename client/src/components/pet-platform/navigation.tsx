import { Heart, Sparkles, Shield, Clock, ArrowRight } from "lucide-react";

export default function PetNavigation() {
  return (
    <nav className="glass sticky top-0 z-40 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-10">
            <div className="flex items-center group cursor-pointer">
              <div className="relative">
                <Heart className="w-8 h-8 text-primary-500 fill-current group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-success-500 rounded-full animate-pulse-slow" />
              </div>
              <span className="ml-3 text-2xl font-bold text-foreground font-display">Crest</span>
              <div className="ml-2 px-2 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
                .pet
              </div>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              <a 
                href="#features" 
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-all duration-300 hover:scale-105"
              >
                <Sparkles className="w-4 h-4" />
                Features
              </a>
              <a 
                href="#pricing" 
                className="text-muted-foreground hover:text-foreground font-medium transition-all duration-300 hover:scale-105"
              >
                Pricing
              </a>
              <a 
                href="#ai-assistant" 
                className="relative text-muted-foreground hover:text-foreground font-medium transition-all duration-300 hover:scale-105"
              >
                Dr. Paw AI
                <div className="absolute -top-1 -right-2 w-2 h-2 bg-success-500 rounded-full animate-pulse" />
              </a>
              <a 
                href="#emergency" 
                className="flex items-center gap-2 text-emergency-500 hover:text-emergency-600 font-medium transition-all duration-300 hover:scale-105"
              >
                <Shield className="w-4 h-4" />
                Emergency
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Trust Indicator */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-success-50 text-success-700 rounded-full text-sm font-medium">
              <Clock className="w-3 h-3" />
              24/7 Available
            </div>
            
            <button 
              data-testid="button-sign-in"
              className="btn-ghost text-sm font-medium"
            >
              Sign In
            </button>
            
            <button 
              data-testid="button-get-started"
              className="btn-primary group"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Indicator */}
        <div className="lg:hidden pb-4">
          <div className="flex justify-center">
            <div className="w-12 h-1 bg-primary-200 rounded-full" />
          </div>
        </div>
      </div>
      
      {/* Subtle Glow Effect */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
    </nav>
  );
}
