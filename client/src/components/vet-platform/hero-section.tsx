import { Stethoscope, Play, UserPlus, TrendingUp, Clock, Users, Award, Sparkles, Brain, Zap, ArrowRight, Star, CheckCircle2 } from "lucide-react";

export default function VetHeroSection() {
  return (
    <section 
      className="relative gradient-hero min-h-screen flex items-center overflow-hidden"
      aria-labelledby="vet-hero-heading"
      role="banner"
    >
      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="skip-link">Skip to main content</a>
      
      {/* Enhanced Background Elements - Reduced for mobile performance */}
      <div className="absolute inset-0 bg-dots-pattern opacity-15" aria-hidden="true" />
      <div className="hidden lg:block absolute top-20 right-10 w-80 h-80 bg-primary-500/8 rounded-full blur-3xl floating will-change-transform" aria-hidden="true" />
      <div className="hidden lg:block absolute bottom-20 left-10 w-96 h-96 bg-indigo-500/8 rounded-full blur-3xl floating-delayed will-change-transform" aria-hidden="true" />
      <div className="hidden xl:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-primary-500/2 to-indigo-500/2 rounded-full blur-3xl" aria-hidden="true" />
      
      <div className="container-custom relative z-10 pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="grid-responsive">
          {/* Content Section */}
          <div className="content-center space-y-8 sm:space-y-10 animate-fade-in will-change-opacity lg:pr-8 xl:pr-12">
            {/* Premium Launch Badge */}
            <div 
              className="inline-flex items-center glass p-4 sm:p-6 shadow-strong animate-scale-in rounded-2xl"
              role="status"
              aria-label="Early access launching Q2 2025"
            >
              <div className="flex items-center gap-3">
                <div className="relative" aria-hidden="true">
                  <div className="w-3 h-3 bg-warning-500 rounded-full animate-pulse-slow" />
                  <div className="absolute inset-0 w-3 h-3 bg-warning-500 rounded-full animate-ping" />
                </div>
                <span className="text-sm sm:text-base font-semibold text-foreground">Launching Q2 2025</span>
                <div className="flex items-center gap-1 ml-2">
                  <Sparkles className="w-4 h-4 text-primary-500 animate-pulse-slow" aria-hidden="true" />
                  <span className="text-xs font-medium text-warning-600 bg-warning-50 dark:bg-warning-900/30 px-2 py-1 rounded-full border border-warning-200 dark:border-warning-700">EARLY ACCESS</span>
                </div>
              </div>
            </div>

            {/* Revolutionary Headline */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 
                  id="vet-hero-heading"
                  className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight sm:leading-[0.85] tracking-tight contrast-enhanced"
                >
                  The Future of{" "}
                  <span className="relative inline-block">
                    <span className="gradient-text">Veterinary Intelligence</span>
                    <div className="hidden sm:block absolute -bottom-3 left-0 right-0 h-2 bg-gradient-to-r from-primary-500 via-indigo-500 to-purple-500 rounded-full opacity-70 blur-sm" aria-hidden="true" />
                    <div className="hidden sm:block absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-indigo-500 to-purple-500 rounded-full" aria-hidden="true" />
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed hero-text-balance font-medium contrast-enhanced">
                  Transform your veterinary practice with <span className="text-primary-600 font-bold relative">AI-powered tools<span className="hidden sm:block absolute bottom-0 left-0 w-full h-0.5 bg-primary-500/30" aria-hidden="true" /></span> that save{" "}
                  <span className="text-success-600 font-bold relative">75% of documentation time<span className="hidden sm:block absolute bottom-0 left-0 w-full h-0.5 bg-success-500/30" aria-hidden="true" /></span>, improve patient care, and{" "}
                  <span className="text-xl sm:text-2xl lg:text-3xl font-black text-indigo-600 relative">
                    2x
                    <span className="absolute -top-1 -right-1 text-xs font-bold text-indigo-500 animate-pulse-slow" aria-label="2x more">MORE</span>
                  </span>{" "}
                  daily capacity
                </p>
              </div>

              {/* Professional Social Proof */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-muted-foreground" role="group" aria-label="Professional testimonials">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2" aria-hidden="true">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-indigo-500 border-2 border-white dark:border-background flex items-center justify-center">
                        <Stethoscope className="w-4 h-4 text-white" />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-medium">
                    <span className="text-primary-600 font-bold">2,500+</span> veterinarians pre-registered
                  </span>
                </div>
                <div className="flex items-center gap-1" role="img" aria-label="Highest rated in beta testing">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                  ))}
                  <span className="text-sm font-semibold ml-1">Highest rated in beta</span>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Section */}
            <div className="space-y-6">
              <div className="hero-button-group">
                <button 
                  data-testid="button-vet-watch-demo"
                  className="btn-primary group text-base sm:text-lg font-semibold px-6 sm:px-8 py-4 sm:py-5 hover-glow shadow-strong focus-ring"
                  type="button"
                  aria-describedby="demo-description"
                >
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-all duration-300 fill-current" aria-hidden="true" />
                  <span>Watch Demo</span>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-all duration-300" aria-hidden="true" />
                </button>
                <button 
                  data-testid="button-vet-join-waitlist-hero"
                  className="btn-secondary group text-base sm:text-lg font-semibold px-6 sm:px-8 py-4 sm:py-5 focus-ring"
                  type="button"
                  aria-label="Join early access waitlist for Q2 2025 launch"
                >
                  <UserPlus className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-all duration-300" aria-hidden="true" />
                  <span>Join Early Access</span>
                </button>
              </div>
              
              {/* Professional Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" role="list" aria-label="Platform benefits">
                <div className="flex items-center gap-3 glass p-4 rounded-xl" role="listitem">
                  <Clock className="w-6 h-6 text-success-600 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <span className="font-bold text-foreground block">Save 3+ hrs/day</span>
                    <span className="text-sm text-muted-foreground">Auto documentation</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 glass p-4 rounded-xl" role="listitem">
                  <Brain className="w-6 h-6 text-primary-600 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <span className="font-bold text-foreground block">AI diagnostics</span>
                    <span className="text-sm text-muted-foreground">95% accuracy</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 glass p-4 rounded-xl" role="listitem">
                  <TrendingUp className="w-6 h-6 text-indigo-600 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <span className="font-bold text-foreground block">2x capacity</span>
                    <span className="text-sm text-muted-foreground">More patients daily</span>
                  </div>
                </div>
              </div>
              
              {/* Hidden description for screen readers */}
              <div id="demo-description" className="sr-only">
                Watch a demonstration of the AI-powered veterinary tools that save 3+ hours per day with automated documentation, provide 95% accurate AI diagnostics, and double your daily patient capacity.
              </div>
            </div>

            {/* Key Stats - Professional Focused */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 glass p-6 sm:p-8 rounded-2xl" role="region" aria-labelledby="key-stats-heading">
              <div className="text-center">
                <div data-testid="stat-time-saved" className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary-600 mb-2">75%</div>
                <div className="text-sm text-muted-foreground font-medium">Less documentation time</div>
              </div>
              <div className="text-center sm:border-l sm:border-r border-border">
                <div data-testid="stat-patients-daily" className="text-2xl sm:text-3xl lg:text-4xl font-black text-success-600 mb-2">2x</div>
                <div className="text-sm text-muted-foreground font-medium">Patient throughput</div>
              </div>
              <div className="text-center">
                <div data-testid="stat-satisfaction" className="text-2xl sm:text-3xl lg:text-4xl font-black text-indigo-600 mb-2">98%</div>
                <div className="text-sm text-muted-foreground font-medium">Satisfaction rate</div>
              </div>
              <h3 id="key-stats-heading" className="sr-only">Key platform statistics</h3>
            </div>
          </div>

          {/* Professional Dashboard Preview */}
          <div className="visual-center relative animate-slide-in-right will-change-transform mt-12 lg:mt-0">
            <div className="relative w-full max-w-lg xl:max-w-xl mx-auto lg:mx-0">
              {/* Floating Analytics Cards - Hidden on mobile */}
              <div className="hidden lg:block absolute -top-8 -left-8 glass p-4 rounded-2xl shadow-strong floating" aria-hidden="true">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">+40% Revenue</p>
                    <p className="text-xs text-primary-600">This month</p>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block absolute -bottom-8 -right-8 glass p-4 rounded-2xl shadow-strong floating-delayed" aria-hidden="true">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-success-500 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">32 Patients</p>
                    <p className="text-xs text-success-600">Today's record</p>
                  </div>
                </div>
              </div>

              {/* Main Dashboard Interface */}
              <div className="glass p-6 sm:p-8 shadow-strong rounded-3xl" role="img" aria-label="VetAI dashboard interface preview">
                <div className="space-y-6">
                  {/* Dashboard Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-border">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-indigo-500 rounded-3xl flex items-center justify-center shadow-lg" aria-hidden="true">
                        <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-foreground">VetAI Dashboard</h4>
                        <div className="flex items-center gap-2">
                          <div className="relative" aria-hidden="true">
                            <div className="w-3 h-3 bg-success-500 rounded-full animate-pulse-slow" />
                            <div className="absolute inset-0 w-3 h-3 bg-success-500 rounded-full animate-ping" />
                          </div>
                          <span className="text-sm text-success-600 font-semibold">All Systems Operational</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="text-xl sm:text-2xl font-bold text-primary-600">24</p>
                      <p className="text-sm text-muted-foreground">Patients Today</p>
                    </div>
                  </div>

                  {/* AI Suggestions Panel */}
                  <div className="glass rounded-2xl p-4 sm:p-6 space-y-4 min-h-[240px] flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <Sparkles className="w-5 h-5 text-primary-500" aria-hidden="true" />
                      <h5 className="font-bold text-foreground text-base sm:text-lg">AI Recommendations</h5>
                    </div>
                    
                    <div className="space-y-3" role="list" aria-label="AI recommendations">
                      <div className="flex items-start gap-3 p-3 bg-success-50 dark:bg-success-900/20 rounded-xl" role="listitem">
                        <CheckCircle2 className="w-5 h-5 text-success-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-sm font-medium text-foreground">Patient #247: Consider bloodwork for elevated symptoms</span>
                      </div>
                      
                      <div className="flex items-start gap-3 p-3 bg-warning-50 dark:bg-warning-900/20 rounded-xl" role="listitem">
                        <Clock className="w-5 h-5 text-warning-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-sm font-medium text-foreground">Schedule follow-up: Max (Golden Retriever) - Post-surgery check</span>
                      </div>
                      
                      <div className="flex items-start gap-3 p-3 bg-primary-50 dark:bg-primary-900/20 rounded-xl" role="listitem">
                        <Brain className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-sm font-medium text-foreground">Inventory alert: Rabies vaccine running low (3 days remaining)</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button 
                      className="flex items-center gap-3 p-4 glass rounded-xl hover:bg-accent transition-colors focus-ring text-left" 
                      type="button"
                      aria-label="View patient queue with 6 patients waiting"
                    >
                      <Users className="w-5 h-5 text-primary-600 flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm font-medium text-foreground">Patient Queue (6)</span>
                    </button>
                    <button 
                      className="flex items-center gap-3 p-4 glass rounded-xl hover:bg-accent transition-colors focus-ring text-left" 
                      type="button"
                      aria-label="Access AI generated reports"
                    >
                      <Award className="w-5 h-5 text-success-600 flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm font-medium text-foreground">AI Reports</span>
                    </button>
                  </div>
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
