import { Heart, Sparkles, Shield, Clock, ArrowRight, Menu, X, Bot, Video, Smartphone } from "lucide-react";
import { useState, useEffect } from "react";

export default function PetNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll behavior
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav 
        className={`glass-modern sticky top-0 z-40 border-b border-gray-200/50 transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-18 sm:h-20">
            {/* Logo Section - Modern Gen-Z Design */}
            <div className="flex items-center space-x-12">
              <a 
                href="/" 
                className="flex items-center group focus-ring rounded-2xl p-3 -m-3"
                aria-label="Crest Pet Care - Home"
              >
                <div className="relative" aria-hidden="true">
                  <Heart className="w-8 h-8 text-purple-600 fill-current group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                </div>
                <span className="ml-3 text-2xl font-bold text-gray-900 font-display">Crest</span>
                <div className="ml-2 px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full">
                  .pet
                </div>
              </a>
            
              {/* Desktop Navigation Links - Simplified for Gen-Z */}
              <div className="hidden lg:flex items-center space-x-8" role="menubar">
                <a 
                  href="#features" 
                  className="btn-genz-ghost"
                  role="menuitem"
                  tabIndex={0}
                >
                  <Sparkles className="w-4 h-4" aria-hidden="true" />
                  Features
                </a>
                <a 
                  href="#pricing" 
                  className="btn-genz-ghost"
                  role="menuitem"
                  tabIndex={0}
                >
                  Pricing
                </a>
                <a 
                  href="#ai-assistant" 
                  className="btn-genz-ghost relative"
                  role="menuitem"
                  tabIndex={0}
                >
                  <Bot className="w-4 h-4" aria-hidden="true" />
                  Dr. Paw AI
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full animate-pulse" aria-label="Available" />
                </a>
                <a 
                  href="#emergency" 
                  className="btn-genz-ghost text-red-600 hover:text-red-700 font-bold"
                  role="menuitem"
                  tabIndex={0}
                >
                  <Shield className="w-4 h-4" aria-hidden="true" />
                  Emergency
                </a>
              </div>
            </div>

            {/* Action Buttons - Modern Design */}
            <div className="flex items-center space-x-4">
              {/* Status Indicator */}
              <div 
                className="hidden sm:flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold shadow-sm" 
                role="status" 
                aria-label="Service available 24/7"
              >
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" aria-hidden="true" />
                24/7 Live
              </div>
              
              <button 
                data-testid="button-sign-in"
                className="hidden sm:inline-flex btn-genz-ghost text-sm font-semibold focus-ring"
                type="button"
                aria-label="Sign in to your account"
              >
                Sign In
              </button>
              
              <button 
                data-testid="button-get-started"
                className="hidden sm:inline-flex btn-genz-primary focus-ring"
                type="button"
                aria-label="Get started with free trial"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </button>

              {/* Mobile Menu Button */}
              <button 
                data-testid="button-mobile-menu"
                onClick={toggleMobileMenu}
                className="lg:hidden w-12 h-12 rounded-2xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors focus-ring"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Gen-Z Design */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50">
            <div className="px-6 py-6 space-y-5">
              <div className="space-y-4">
                <a 
                  href="#features" 
                  className="flex items-center gap-3 text-gray-700 hover:text-purple-600 font-medium text-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Sparkles className="w-5 h-5" aria-hidden="true" />
                  Features
                </a>
                <a 
                  href="#pricing" 
                  className="flex items-center gap-3 text-gray-700 hover:text-purple-600 font-medium text-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </a>
                <a 
                  href="#ai-assistant" 
                  className="flex items-center gap-3 text-gray-700 hover:text-purple-600 font-medium text-lg transition-colors relative"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Bot className="w-5 h-5" aria-hidden="true" />
                  Dr. Paw AI
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" aria-label="Available" />
                </a>
                <a 
                  href="#emergency" 
                  className="flex items-center gap-3 text-red-600 hover:text-red-700 font-bold text-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Shield className="w-5 h-5" aria-hidden="true" />
                  Emergency
                </a>
              </div>
              
              <div className="pt-5 border-t border-gray-200 space-y-3">
                <button 
                  data-testid="button-mobile-sign-in"
                  className="w-full btn-genz-secondary text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In
                </button>
                <button 
                  data-testid="button-mobile-get-started"
                  className="w-full btn-genz-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
              
              {/* Simplified Mobile Trust */}
              <div className="pt-4 text-center">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="font-medium">24/7 Support • HIPAA Secure</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}