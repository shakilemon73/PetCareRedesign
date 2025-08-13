import { Stethoscope, Brain, Users, Award, Clock, ArrowRight, Zap } from "lucide-react";

export default function VetNavigation() {
  return (
    <nav className="glass sticky top-0 z-40 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo Section */}
          <div className="flex items-center space-x-10">
            <div className="flex items-center group cursor-pointer">
              <div className="relative">
                <Stethoscope className="w-8 h-8 text-primary-500 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-indigo-500 rounded-full animate-pulse-slow" />
              </div>
              <span className="ml-3 text-2xl font-bold text-foreground font-display">Crest</span>
              <div className="ml-2 px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-xs font-semibold rounded-full">
                .vet
              </div>
            </div>
            
            {/* Enhanced Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              <a 
                href="#features" 
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-all duration-300 hover:scale-105"
              >
                <Award className="w-4 h-4" />
                Features
              </a>
              <a 
                href="#ai-tools" 
                className="relative flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-all duration-300 hover:scale-105"
              >
                <Brain className="w-4 h-4" />
                AI Tools
                <div className="absolute -top-1 -right-2 w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
              </a>
              <a 
                href="#demo" 
                className="text-muted-foreground hover:text-foreground font-medium transition-all duration-300 hover:scale-105"
              >
                Demo
              </a>
              <a 
                href="#pricing" 
                className="text-muted-foreground hover:text-foreground font-medium transition-all duration-300 hover:scale-105"
              >
                Pricing
              </a>
            </div>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Professional Trust Indicator */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium">
              <Users className="w-3 h-3" />
              2.5k+ Vets
            </div>
            
            <button 
              data-testid="button-vet-sign-in"
              className="btn-ghost text-sm font-medium"
            >
              Sign In
            </button>
            
            <button 
              data-testid="button-vet-join-waitlist"
              className="btn-primary group bg-gradient-to-r from-indigo-500 to-primary-500 hover:from-indigo-600 hover:to-primary-600"
            >
              <Clock className="w-4 h-4" />
              Join Early Access
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
