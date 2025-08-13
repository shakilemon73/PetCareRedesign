import { Stethoscope, Play, UserPlus, TrendingUp, Clock, Users, Award, Sparkles, Brain, Zap, ArrowRight, Star, CheckCircle2 } from "lucide-react";

export default function VetHeroSection() {
  return (
    <section className="relative gradient-hero min-h-screen flex items-center overflow-hidden">
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 bg-dots-pattern opacity-15" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl floating will-change-transform" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl floating-delayed will-change-transform" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-primary-500/3 to-indigo-500/3 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="grid-responsive">
          {/* Content Section */}
          <div className="space-y-10 animate-fade-in will-change-opacity">
            {/* Premium Launch Badge */}
            <div className="inline-flex items-center glass-card px-6 py-4 shadow-strong animate-scale-in">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-warning-500 rounded-full animate-pulse-slow" />
                  <div className="absolute inset-0 w-3 h-3 bg-warning-500 rounded-full animate-ping" />
                </div>
                <span className="text-sm font-semibold text-foreground">Launching Q2 2025</span>
                <div className="flex items-center gap-1 ml-2">
                  <Sparkles className="w-4 h-4 text-primary-500 animate-pulse-slow" />
                  <span className="text-xs font-medium text-warning-600 bg-warning-50 dark:bg-warning-900 px-2 py-1 rounded-full">EARLY ACCESS</span>
                </div>
              </div>
            </div>

            {/* Revolutionary Headline */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-[0.85] tracking-tight">
                  The Future of{" "}
                  <span className="relative inline-block">
                    <span className="gradient-text">Veterinary Intelligence</span>
                    <div className="absolute -bottom-3 left-0 right-0 h-2 bg-gradient-to-r from-primary-500 via-indigo-500 to-purple-500 rounded-full opacity-70 blur-sm" />
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-indigo-500 to-purple-500 rounded-full" />
                  </span>
                </h1>
                
                <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground leading-relaxed max-w-3xl font-medium">
                  Transform your veterinary practice with <span className="text-primary-600 font-bold relative">AI-powered tools<span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500/30" /></span> that save{" "}
                  <span className="text-success-600 font-bold relative">75% of documentation time<span className="absolute bottom-0 left-0 w-full h-0.5 bg-success-500/30" /></span>, improve patient care, and{" "}
                  <span className="text-2xl sm:text-3xl font-black text-indigo-600 relative">
                    2x
                    <div className="absolute -top-1 -right-1 text-xs font-bold text-indigo-500 animate-pulse-slow">MORE</div>
                  </span>{" "}
                  daily capacity
                </p>
              </div>

              {/* Professional Social Proof */}
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-indigo-500 border-2 border-white dark:border-background flex items-center justify-center">
                      <Stethoscope className="w-4 h-4 text-white" />
                    </div>
                  ))}
                </div>
                <span className="text-sm font-medium">
                  <span className="text-primary-600 font-bold">2,500+</span> veterinarians pre-registered
                </span>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm font-semibold ml-1">Highest rated in beta</span>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Section */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  data-testid="button-vet-watch-demo"
                  className="btn-primary group text-lg sm:text-xl px-8 py-5 sm:px-12 sm:py-6 hover-glow shadow-strong will-change-transform"
                >
                  <Play className="w-6 h-6 group-hover:scale-110 transition-all duration-300 fill-current" />
                  <span className="font-bold">Watch Demo</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-all duration-300" />
                </button>
                <button 
                  data-testid="button-vet-join-waitlist-hero"
                  className="btn-secondary group text-lg sm:text-xl px-8 py-5 sm:px-12 sm:py-6 will-change-transform"
                >
                  <UserPlus className="w-6 h-6 group-hover:scale-110 transition-all duration-300" />
                  <span className="font-bold">Join Early Access</span>
                </button>
              </div>
              
              {/* Professional Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 glass p-4 rounded-xl">
                  <Clock className="w-6 h-6 text-success-600 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-foreground block">Save 3+ hrs/day</span>
                    <span className="text-sm text-muted-foreground">Auto documentation</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 glass p-4 rounded-xl">
                  <Brain className="w-6 h-6 text-primary-600 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-foreground block">AI diagnostics</span>
                    <span className="text-sm text-muted-foreground">95% accuracy</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 glass p-4 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-foreground block">2x capacity</span>
                    <span className="text-sm text-muted-foreground">More patients daily</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Stats - Professional Focused */}
            <div className="grid grid-cols-3 gap-8 glass-card p-6 rounded-2xl">
              <div className="text-center">
                <div data-testid="stat-time-saved" className="text-3xl sm:text-4xl font-black text-primary-600 mb-2">75%</div>
                <div className="text-sm text-muted-foreground font-medium">Less documentation time</div>
              </div>
              <div className="text-center border-l border-r border-border">
                <div data-testid="stat-patients-daily" className="text-3xl sm:text-4xl font-black text-success-600 mb-2">2x</div>
                <div className="text-sm text-muted-foreground font-medium">Patient throughput</div>
              </div>
              <div className="text-center">
                <div data-testid="stat-satisfaction" className="text-3xl sm:text-4xl font-black text-indigo-600 mb-2">98%</div>
                <div className="text-sm text-muted-foreground font-medium">Satisfaction rate</div>
              </div>
            </div>
          </div>

          {/* Professional Dashboard Preview */}
          <div className="relative animate-slide-in-right will-change-transform">
            <div className="relative">
              {/* Floating Analytics Cards */}
              <div className="absolute -top-8 -left-8 glass-card p-4 rounded-2xl shadow-strong floating">
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

              <div className="absolute -bottom-8 -right-8 glass-card p-4 rounded-2xl shadow-strong floating-delayed">
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
              <div className="glass-card p-8 shadow-strong rounded-3xl">
                <div className="space-y-6">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between pb-6 border-b border-border">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-indigo-500 rounded-3xl flex items-center justify-center shadow-lg">
                        <Brain className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">VetAI Dashboard</h3>
                        <div className="flex items-center gap-2">
                          <div className="relative">
                            <div className="w-3 h-3 bg-success-500 rounded-full animate-pulse-slow" />
                            <div className="absolute inset-0 w-3 h-3 bg-success-500 rounded-full animate-ping" />
                          </div>
                          <span className="text-sm text-success-600 font-semibold">All Systems Operational</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary-600">24</p>
                      <p className="text-sm text-muted-foreground">Patients Today</p>
                    </div>
                  </div>

                  {/* AI Suggestions Panel */}
                  <div className="glass rounded-2xl p-6 space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <Sparkles className="w-5 h-5 text-primary-500" />
                      <h4 className="font-bold text-foreground">AI Recommendations</h4>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-success-50 dark:bg-success-900/20 rounded-xl">
                        <CheckCircle2 className="w-5 h-5 text-success-600" />
                        <span className="text-sm font-medium text-foreground">Patient #247: Consider bloodwork for elevated symptoms</span>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-warning-50 dark:bg-warning-900/20 rounded-xl">
                        <Clock className="w-5 h-5 text-warning-600" />
                        <span className="text-sm font-medium text-foreground">Schedule follow-up: Max (Golden Retriever) - Post-surgery check</span>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-primary-50 dark:bg-primary-900/20 rounded-xl">
                        <Brain className="w-5 h-5 text-primary-600" />
                        <span className="text-sm font-medium text-foreground">Inventory alert: Rabies vaccine running low (3 days remaining)</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="grid grid-cols-2 gap-3">
                    <button className="flex items-center gap-3 p-4 glass rounded-xl hover:bg-accent transition-colors">
                      <Users className="w-5 h-5 text-primary-600" />
                      <span className="text-sm font-medium text-foreground">Patient Queue (6)</span>
                    </button>
                    <button className="flex items-center gap-3 p-4 glass rounded-xl hover:bg-accent transition-colors">
                      <Award className="w-5 h-5 text-success-600" />
                      <span className="text-sm font-medium text-foreground">AI Reports</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
