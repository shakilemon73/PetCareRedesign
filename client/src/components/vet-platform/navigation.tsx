import { Stethoscope, Brain, Users, Award, Clock, ArrowRight, Menu, X, Play, UserPlus } from "lucide-react";
import { useState, useEffect } from "react";

export default function VetNavigation() {
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
        className={`glass sticky top-0 z-40 border-b border-border/50 transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Enhanced Logo Section */}
            <div className="flex items-center space-x-10">
              <a 
                href="/" 
                className="flex items-center group focus-ring rounded-lg p-2 -m-2"
                aria-label="Crest Veterinary - Home"
              >
                <div className="relative" aria-hidden="true">
                  <Stethoscope className="w-6 h-6 sm:w-8 sm:h-8 text-primary-500 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-indigo-500 rounded-full animate-pulse-slow" />
                </div>
                <span className="ml-3 text-xl sm:text-2xl font-bold text-foreground font-display">Crest</span>
                <div className="ml-2 px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-xs font-semibold rounded-full">
                  .vet
                </div>
              </a>
              
              {/* Enhanced Navigation Links */}
              <div className="hidden lg:flex items-center space-x-8" role="menubar">
                <a 
                  href="#features" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-all duration-300 focus-ring rounded-lg px-3 py-2"
                  role="menuitem"
                  tabIndex={0}
                >
                  <Award className="w-4 h-4" aria-hidden="true" />
                  Features
                </a>
                <a 
                  href="#ai-tools" 
                  className="relative flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-all duration-300 focus-ring rounded-lg px-3 py-2"
                  role="menuitem"
                  tabIndex={0}
                >
                  <Brain className="w-4 h-4" aria-hidden="true" />
                  AI Tools
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-500 rounded-full animate-pulse" aria-label="New feature" />
                </a>
                <a 
                  href="#demo" 
                  className="text-muted-foreground hover:text-foreground font-medium transition-all duration-300 focus-ring rounded-lg px-3 py-2"
                  role="menuitem"
                  tabIndex={0}
                >
                  Demo
                </a>
                <a 
                  href="#pricing" 
                  className="text-muted-foreground hover:text-foreground font-medium transition-all duration-300 focus-ring rounded-lg px-3 py-2"
                  role="menuitem"
                  tabIndex={0}
                >
                  Pricing
                </a>
              </div>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex items-center space-x-4">
              {/* Professional Trust Indicator */}
              <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium" role="status" aria-label="2,500+ veterinarians registered">
                <Users className="w-3 h-3" aria-hidden="true" />
                2.5k+ Vets
              </div>
              
              <button 
                data-testid="button-vet-sign-in"
                className="hidden sm:inline-flex btn-ghost text-sm font-medium focus-ring"
                type="button"
                aria-label="Sign in to your account"
              >
                Sign In
              </button>
              
              <button 
                data-testid="button-vet-join-waitlist"
                className="hidden sm:inline-flex btn-primary group bg-gradient-to-r from-indigo-500 to-primary-500 hover:from-indigo-600 hover:to-primary-600 text-sm sm:text-base focus-ring"
                type="button"
                aria-label="Join early access waitlist"
              >
                <Clock className="w-4 h-4" aria-hidden="true" />
                <span className="hidden sm:inline">Join Early Access</span>
                <span className="sm:hidden">Join</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
              </button>
              
              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors focus-ring"
                onClick={toggleMobileMenu}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                type="button"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Subtle Glow Effect */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" aria-hidden="true" />
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={toggleMobileMenu}
          aria-hidden="true"
        />
        
        {/* Menu Panel */}
        <div
          className={`fixed top-0 right-0 h-full w-80 max-w-[90vw] glass p-6 rounded-l-3xl transform transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-heading"
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-border">
            <h2 id="mobile-menu-heading" className="text-lg font-bold text-foreground">Menu</h2>
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors focus-ring"
              aria-label="Close menu"
              type="button"
            >
              <X className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          
          {/* Menu Content */}
          <div className="space-y-6">
            {/* Navigation Links */}
            <nav className="space-y-4" role="menu" aria-label="Mobile navigation">
              <a 
                href="#features" 
                className="flex items-center gap-3 p-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-accent transition-colors focus-ring"
                role="menuitem"
                onClick={toggleMobileMenu}
                tabIndex={isMobileMenuOpen ? 0 : -1}
              >
                <Award className="w-5 h-5 text-primary-500" aria-hidden="true" />
                <span className="font-medium">Features</span>
              </a>
              
              <a 
                href="#ai-tools" 
                className="flex items-center gap-3 p-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-accent transition-colors focus-ring relative"
                role="menuitem"
                onClick={toggleMobileMenu}
                tabIndex={isMobileMenuOpen ? 0 : -1}
              >
                <Brain className="w-5 h-5 text-indigo-500" aria-hidden="true" />
                <span className="font-medium">AI Tools</span>
                <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" aria-label="New feature" />
              </a>
              
              <a 
                href="#demo" 
                className="flex items-center gap-3 p-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-accent transition-colors focus-ring"
                role="menuitem"
                onClick={toggleMobileMenu}
                tabIndex={isMobileMenuOpen ? 0 : -1}
              >
                <Play className="w-5 h-5 text-primary-500" aria-hidden="true" />
                <span className="font-medium">Demo</span>
              </a>
              
              <a 
                href="#pricing" 
                className="flex items-center gap-3 p-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-accent transition-colors focus-ring"
                role="menuitem"
                onClick={toggleMobileMenu}
                tabIndex={isMobileMenuOpen ? 0 : -1}
              >
                <Clock className="w-5 h-5 text-primary-500" aria-hidden="true" />
                <span className="font-medium">Pricing</span>
              </a>
            </nav>
            
            {/* Professional Trust Indicator */}
            <div className="flex items-center gap-2 p-3 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-xl" role="status" aria-label="2,500+ veterinarians registered">
              <Users className="w-4 h-4" aria-hidden="true" />
              <span className="font-medium">2.5k+ Vets Registered</span>
            </div>
            
            {/* Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-border">
              <button 
                data-testid="mobile-button-vet-sign-in"
                className="w-full btn-ghost justify-center focus-ring"
                type="button"
                onClick={toggleMobileMenu}
                tabIndex={isMobileMenuOpen ? 0 : -1}
                aria-label="Sign in to your account"
              >
                Sign In
              </button>
              
              <button 
                data-testid="mobile-button-vet-join-waitlist"
                className="w-full btn-primary justify-center group bg-gradient-to-r from-indigo-500 to-primary-500 hover:from-indigo-600 hover:to-primary-600 focus-ring"
                type="button"
                onClick={toggleMobileMenu}
                tabIndex={isMobileMenuOpen ? 0 : -1}
                aria-label="Join early access waitlist"
              >
                <UserPlus className="w-4 h-4" aria-hidden="true" />
                Join Early Access
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}