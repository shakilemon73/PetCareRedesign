import { Rocket, MessageCircle, Check, Shield, Heart, Star, Zap, ArrowRight, Sparkles } from "lucide-react";

export default function PetHeroSection() {
  return (
    <section className="relative gradient-hero dark:gradient-hero-dark min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl floating" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-success-500/10 rounded-full blur-3xl floating-delayed" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <div className="space-y-8 animate-fade-in">
            {/* Status Badge */}
            <div className="inline-flex items-center glass rounded-full px-6 py-3 shadow-medium">
              <div className="relative flex items-center">
                <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse-slow mr-3" />
                <span className="text-sm font-semibold text-foreground mr-2">24/7 AI Support Available</span>
                <Sparkles className="w-4 h-4 text-primary-500 animate-pulse-slow" />
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold text-foreground leading-[0.9] font-display">
                Pet Care Without the{" "}
                <span className="gradient-text relative">
                  Stress
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-success-500 rounded-full opacity-60" />
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                Revolutionary AI-powered veterinary care with{" "}
                <span className="text-primary-600 font-semibold">instant appointments</span>{" "}
                and{" "}
                <span className="text-success-600 font-semibold">up to 80% savings</span>.
                Your furry family deserves the best.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                data-testid="button-start-free-trial"
                className="btn-primary group text-lg px-10 py-5 hover-glow"
              >
                <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button 
                data-testid="button-chat-dr-paw"
                className="btn-secondary group text-lg px-10 py-5"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Chat with Dr. Paw
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-success-600">
                <Check className="w-5 h-5 fill-current" />
                <span className="font-medium">No card required</span>
              </div>
              <div className="flex items-center gap-2 text-success-600">
                <Check className="w-5 h-5 fill-current" />
                <span className="font-medium">Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2 text-primary-600">
                <Shield className="w-5 h-5" />
                <span className="font-medium">HIPAA compliant</span>
              </div>
            </div>

            {/* Social Proof */}
            <div className="glass-card">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div 
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-200 to-success-200 border-2 border-white shadow-sm"
                      />
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">50,000+ Happy Pet Parents</p>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 text-warning-500 fill-current" />
                      ))}
                      <span className="text-sm text-muted-foreground ml-2">4.9/5 Rating</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary-600">$2.3M+</p>
                  <p className="text-sm text-muted-foreground">Saved on Vet Bills</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Section */}
          <div className="relative animate-slide-up">
            {/* Main App Interface Mockup */}
            <div className="relative">
              <div className="glass-card p-8 shadow-strong">
                <div className="space-y-6">
                  {/* AI Chat Interface */}
                  <div className="flex items-center gap-3 pb-4 border-b border-border">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-success-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <Heart className="w-6 h-6 text-white fill-current" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">Dr. Paw AI</p>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse-slow" />
                        <span className="text-sm text-success-600 font-medium">Online & Ready</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="glass rounded-2xl p-4 text-sm">
                      <p className="text-foreground">👋 Hi! I'm Dr. Paw. How can I help your pet today?</p>
                    </div>
                    <div className="bg-primary-500 text-white rounded-2xl p-4 text-sm ml-8">
                      <p>My dog seems to be limping on his front paw</p>
                    </div>
                    <div className="glass rounded-2xl p-4 text-sm">
                      <p className="text-foreground mb-2">I understand your concern. Let me assess this:</p>
                      <div className="space-y-1 text-muted-foreground">
                        <p>• When did you notice the limping?</p>
                        <p>• Is there visible swelling?</p>
                        <p>• Any recent injuries?</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-4">
                    <div className="flex-1 glass rounded-full px-4 py-2">
                      <input 
                        type="text" 
                        placeholder="Type your response..." 
                        className="w-full bg-transparent text-sm placeholder:text-muted-foreground outline-none"
                        data-testid="input-chat-message"
                      />
                    </div>
                    <button 
                      data-testid="button-send-message"
                      className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors shadow-lg"
                    >
                      <ArrowRight className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Status Cards */}
              <div className="absolute -top-4 -right-4 glass-card animate-bounce-gentle">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-warning-500" />
                  <span className="text-sm font-medium text-foreground">Instant Response</span>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 glass-card">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-success-500 rounded-full animate-pulse-slow" />
                  <span className="text-sm font-medium text-foreground">Available 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
