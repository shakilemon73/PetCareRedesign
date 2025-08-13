import { Rocket, MessageCircle, Check, Shield, Heart, Star, Zap, ArrowRight, Sparkles, Award, Users, Clock } from "lucide-react";

export default function PetHeroSection() {
  return (
    <section className="relative gradient-hero min-h-screen flex items-center overflow-hidden">
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl floating will-change-transform" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-success-500/10 rounded-full blur-3xl floating-delayed will-change-transform" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary-500/5 to-success-500/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="grid-responsive">
          {/* Content Section - Enhanced Typography & Hierarchy */}
          <div className="space-y-10 animate-fade-in will-change-opacity">
            {/* Premium Status Badge */}
            <div className="inline-flex items-center glass-card px-6 py-4 shadow-strong animate-scale-in">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-success-500 rounded-full animate-pulse-slow" />
                  <div className="absolute inset-0 w-3 h-3 bg-success-500 rounded-full animate-ping" />
                </div>
                <span className="text-sm font-semibold text-foreground">24/7 AI Veterinary Support</span>
                <div className="flex items-center gap-1 ml-2">
                  <Sparkles className="w-4 h-4 text-primary-500 animate-pulse-slow" />
                  <span className="text-xs font-medium text-success-600 bg-success-50 dark:bg-success-100 px-2 py-1 rounded-full">LIVE</span>
                </div>
              </div>
            </div>

            {/* Revolutionary Headline with Better Typography */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-[0.85] tracking-tight">
                  Pet Care Without the{" "}
                  <span className="relative inline-block">
                    <span className="gradient-text">Stress</span>
                    <div className="absolute -bottom-3 left-0 right-0 h-2 bg-gradient-to-r from-primary-500 via-purple-500 to-success-500 rounded-full opacity-70 blur-sm" />
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-purple-500 to-success-500 rounded-full" />
                  </span>
                </h1>
                
                <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground leading-relaxed max-w-3xl font-medium">
                  Revolutionary <span className="text-primary-600 font-bold relative">AI-powered veterinary care<span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500/30" /></span> with{" "}
                  <span className="text-success-600 font-bold relative">instant appointments<span className="absolute bottom-0 left-0 w-full h-0.5 bg-success-500/30" /></span>{" "}
                  and savings up to{" "}
                  <span className="text-2xl sm:text-3xl font-black text-success-600 relative">
                    80%
                    <div className="absolute -top-1 -right-1 text-xs font-bold text-success-500 animate-pulse-slow">OFF</div>
                  </span>
                </p>
              </div>

              {/* Susan Weinschenk - Social Proof & Recognition */}
              <div className="flex items-center gap-4 text-muted-foreground social-proof-subtle">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-success-500 border-2 border-white dark:border-background shadow-medium" />
                  ))}
                </div>
                <span className="text-sm font-medium recognition-over-recall">
                  <span className="text-primary-600 font-bold trust-building">50,000+</span> pet parents trust us
                </span>
                <div className="flex items-center gap-1 recognition-over-recall">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm font-semibold ml-1">4.9/5</span>
                </div>
              </div>
            </div>

            {/* Luke Wroblewski - Touch Targets & Alan Cooper - Goal-Oriented */}
            <div className="space-y-6 goal-focused">
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  data-testid="button-start-free-trial"
                  className="btn-primary group text-lg sm:text-xl px-8 py-5 sm:px-12 sm:py-6 hover-glow shadow-strong touch-friendly clickable feedback-immediate"
                >
                  <Rocket className="w-6 h-6 group-hover:rotate-12 transition-all duration-300" />
                  <span className="font-bold">Start Free Trial</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-all duration-300" />
                </button>
                <button 
                  data-testid="button-chat-dr-paw"
                  className="btn-secondary group text-lg sm:text-xl px-8 py-5 sm:px-12 sm:py-6 touch-friendly clickable feedback-immediate"
                >
                  <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-all duration-300" />
                  <span className="font-bold">Chat with Dr. Paw</span>
                </button>
              </div>
              
              {/* Don Norman - Constraints & Alan Cooper - Error Prevention */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 grid-16px">
                <div className="flex items-center gap-3 glass p-4 rounded-xl clean-edges touch-friendly recognition-over-recall">
                  <Check className="w-6 h-6 text-success-600 fill-current flex-shrink-0" />
                  <div className="memory-friendly">
                    <span className="font-bold text-foreground block aesthetic-minimal">No card required</span>
                    <span className="text-sm text-muted-foreground understandable-clear">Start instantly</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 glass p-4 rounded-xl clean-edges touch-friendly recognition-over-recall">
                  <Clock className="w-6 h-6 text-primary-600 flex-shrink-0" />
                  <div className="memory-friendly">
                    <span className="font-bold text-foreground block aesthetic-minimal">2-min setup</span>
                    <span className="text-sm text-muted-foreground understandable-clear">Cancel anytime</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 glass p-4 rounded-xl clean-edges touch-friendly recognition-over-recall">
                  <Shield className="w-6 h-6 text-success-600 flex-shrink-0" />
                  <div className="memory-friendly">
                    <span className="font-bold text-foreground block aesthetic-minimal">HIPAA secure</span>
                    <span className="text-sm text-muted-foreground understandable-clear">Your data protected</span>
                  </div>
                </div>
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
