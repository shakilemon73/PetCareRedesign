import { Rocket, MessageCircle, Check, Shield, Heart, Star, Zap, ArrowRight, Sparkles, Award, Users, Clock } from "lucide-react";

export default function PetHeroSection() {
  return (
    <section 
      className="relative gradient-hero min-h-screen flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
      role="banner"
    >
      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="skip-link">Skip to main content</a>
      
      {/* Enhanced Background Elements - Reduced for mobile performance */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" aria-hidden="true" />
      <div className="hidden lg:block absolute top-20 left-10 w-72 h-72 bg-primary-500/8 rounded-full blur-3xl floating will-change-transform" aria-hidden="true" />
      <div className="hidden lg:block absolute bottom-20 right-10 w-96 h-96 bg-success-500/8 rounded-full blur-3xl floating-delayed will-change-transform" aria-hidden="true" />
      <div className="hidden xl:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-500/3 to-success-500/3 rounded-full blur-3xl" aria-hidden="true" />
      
      <div className="container-custom relative z-10 pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="grid-responsive">
          {/* Content Section - Enhanced Typography & Hierarchy */}
          <div className="space-y-8 sm:space-y-10 animate-fade-in will-change-opacity">
            {/* Premium Status Badge */}
            <div 
              className="inline-flex items-center glass p-4 sm:p-6 shadow-strong animate-scale-in rounded-2xl"
              role="status"
              aria-label="24/7 AI Veterinary Support is currently live"
            >
              <div className="flex items-center gap-3">
                <div className="relative" aria-hidden="true">
                  <div className="w-3 h-3 bg-success-500 rounded-full animate-pulse-slow" />
                  <div className="absolute inset-0 w-3 h-3 bg-success-500 rounded-full animate-ping" />
                </div>
                <span className="text-sm sm:text-base font-semibold text-foreground">24/7 AI Veterinary Support</span>
                <div className="flex items-center gap-1 ml-2">
                  <Sparkles className="w-4 h-4 text-primary-500 animate-pulse-slow" aria-hidden="true" />
                  <span className="text-xs font-medium text-success-600 bg-success-50 dark:bg-success-900/30 px-2 py-1 rounded-full border border-success-200 dark:border-success-700">LIVE</span>
                </div>
              </div>
            </div>

            {/* Revolutionary Headline with Better Typography */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 
                  id="hero-heading"
                  className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight sm:leading-[0.85] tracking-tight contrast-enhanced"
                >
                  Pet Care Without the{" "}
                  <span className="relative inline-block">
                    <span className="gradient-text">Stress</span>
                    <div className="hidden sm:block absolute -bottom-3 left-0 right-0 h-2 bg-gradient-to-r from-primary-500 via-purple-500 to-success-500 rounded-full opacity-70 blur-sm" aria-hidden="true" />
                    <div className="hidden sm:block absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-purple-500 to-success-500 rounded-full" aria-hidden="true" />
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl font-medium contrast-enhanced">
                  Revolutionary <span className="text-primary-600 font-bold relative">AI-powered veterinary care<span className="hidden sm:block absolute bottom-0 left-0 w-full h-0.5 bg-primary-500/30" aria-hidden="true" /></span> with{" "}
                  <span className="text-success-600 font-bold relative">instant appointments<span className="hidden sm:block absolute bottom-0 left-0 w-full h-0.5 bg-success-500/30" aria-hidden="true" /></span>{" "}
                  and savings up to{" "}
                  <span className="text-xl sm:text-2xl lg:text-3xl font-black text-success-600 relative">
                    80%
                    <div className="absolute -top-1 -right-1 text-xs font-bold text-success-500 animate-pulse-slow" aria-label="80 percent off">OFF</div>
                  </span>
                </p>
              </div>

              {/* Social Proof & Recognition */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-muted-foreground" role="group" aria-label="Customer testimonials">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2" aria-hidden="true">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-success-500 border-2 border-white dark:border-background shadow-medium" />
                    ))}
                  </div>
                  <span className="text-sm font-medium">
                    <span className="text-primary-600 font-bold">50,000+</span> pet parents trust us
                  </span>
                </div>
                <div className="flex items-center gap-1" role="img" aria-label="4.9 out of 5 stars rating">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                  ))}
                  <span className="text-sm font-semibold ml-1">4.9/5</span>
                </div>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  data-testid="button-start-free-trial"
                  className="btn-primary group text-base sm:text-lg font-semibold px-6 sm:px-8 py-4 sm:py-5 hover-glow shadow-strong focus-ring"
                  type="button"
                  aria-describedby="trial-description"
                >
                  <Rocket className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-all duration-300" aria-hidden="true" />
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-all duration-300" aria-hidden="true" />
                </button>
                <button 
                  data-testid="button-chat-dr-paw"
                  className="btn-secondary group text-base sm:text-lg font-semibold px-6 sm:px-8 py-4 sm:py-5 focus-ring"
                  type="button"
                  aria-label="Start a chat conversation with Dr. Paw AI assistant"
                >
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-all duration-300" aria-hidden="true" />
                  <span>Chat with Dr. Paw</span>
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" role="list" aria-label="Service benefits">
                <div className="flex items-center gap-3 glass p-4 rounded-xl" role="listitem">
                  <Check className="w-6 h-6 text-success-600 fill-current flex-shrink-0" aria-hidden="true" />
                  <div>
                    <span className="font-bold text-foreground block">No card required</span>
                    <span className="text-sm text-muted-foreground">Start instantly</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 glass p-4 rounded-xl" role="listitem">
                  <Clock className="w-6 h-6 text-primary-600 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <span className="font-bold text-foreground block">2-min setup</span>
                    <span className="text-sm text-muted-foreground">Cancel anytime</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 glass p-4 rounded-xl" role="listitem">
                  <Shield className="w-6 h-6 text-success-600 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <span className="font-bold text-foreground block">HIPAA secure</span>
                    <span className="text-sm text-muted-foreground">Your data protected</span>
                  </div>
                </div>
              </div>
              
              {/* Hidden description for screen readers */}
              <div id="trial-description" className="sr-only">
                Start your free trial with no credit card required. Setup takes only 2 minutes and you can cancel anytime. All data is HIPAA secure and protected.
              </div>
            </div>

            {/* Enhanced Social Proof */}
            <div className="glass p-6 sm:p-8 rounded-2xl" role="region" aria-labelledby="social-proof-heading">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex -space-x-2" aria-hidden="true">
                    {[1, 2, 3, 4].map((i) => (
                      <div 
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-200 to-success-200 border-2 border-white shadow-sm"
                      />
                    ))}
                  </div>
                  <div>
                    <h3 id="social-proof-heading" className="font-semibold text-foreground text-base sm:text-lg">50,000+ Happy Pet Parents</h3>
                    <div className="flex items-center gap-1" role="img" aria-label="4.9 out of 5 stars rating">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 text-warning-500 fill-current" aria-hidden="true" />
                      ))}
                      <span className="text-sm text-muted-foreground ml-2">4.9/5 Rating</span>
                    </div>
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-xl sm:text-2xl font-bold text-primary-600">$2.3M+</p>
                  <p className="text-sm text-muted-foreground">Saved on Vet Bills</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Section */}
          <div className="relative animate-slide-up mt-8 lg:mt-0">
            {/* Main App Interface Mockup */}
            <div className="relative">
              <div className="glass p-6 sm:p-8 rounded-3xl shadow-strong" role="img" aria-label="Dr. Paw AI chat interface preview">
                <div className="space-y-6">
                  {/* AI Chat Interface Header */}
                  <div className="flex items-center gap-3 pb-4 border-b border-border">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-success-500 rounded-2xl flex items-center justify-center shadow-lg" aria-hidden="true">
                      <Heart className="w-6 h-6 text-white fill-current" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-base sm:text-lg">Dr. Paw AI</h4>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse-slow" aria-hidden="true" />
                        <span className="text-sm text-success-600 font-medium">Online & Ready</span>
                      </div>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="space-y-4" role="log" aria-label="Chat conversation example">
                    <div className="glass rounded-2xl p-4 text-sm max-w-sm">
                      <p className="text-foreground">👋 Hi! I'm Dr. Paw. How can I help your pet today?</p>
                    </div>
                    <div className="bg-primary-500 text-white rounded-2xl p-4 text-sm ml-8 max-w-sm">
                      <p>My dog seems to be limping on his front paw</p>
                    </div>
                    <div className="glass rounded-2xl p-4 text-sm max-w-sm">
                      <p className="text-foreground mb-2">I understand your concern. Let me assess this:</p>
                      <ul className="space-y-1 text-muted-foreground list-disc list-inside">
                        <li>When did you notice the limping?</li>
                        <li>Is there visible swelling?</li>
                        <li>Any recent injuries?</li>
                      </ul>
                    </div>
                  </div>

                  {/* Chat Input */}
                  <div className="flex items-center gap-2 pt-4">
                    <div className="flex-1 glass rounded-full px-4 py-2">
                      <label htmlFor="chat-input" className="sr-only">Type your response to Dr. Paw</label>
                      <input 
                        id="chat-input"
                        type="text" 
                        placeholder="Type your response..." 
                        className="w-full bg-transparent text-sm placeholder:text-muted-foreground outline-none focus:outline-none"
                        data-testid="input-chat-message"
                        aria-label="Chat message input"
                      />
                    </div>
                    <button 
                      data-testid="button-send-message"
                      className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors shadow-lg focus-ring"
                      type="button"
                      aria-label="Send message"
                    >
                      <ArrowRight className="w-4 h-4 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Status Cards - Hidden on mobile for better UX */}
              <div className="hidden lg:block absolute -top-4 -right-4 glass p-3 rounded-xl animate-bounce-gentle" aria-hidden="true">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-warning-500" />
                  <span className="text-sm font-medium text-foreground">Instant Response</span>
                </div>
              </div>

              <div className="hidden lg:block absolute -bottom-6 -left-6 glass p-3 rounded-xl" aria-hidden="true">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-success-500 rounded-full animate-pulse-slow" />
                  <span className="text-sm font-medium text-foreground">Available 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content landmark for skip link */}
      <div id="main-content" className="sr-only">Main content starts after hero section</div>
    </section>
  );
}
