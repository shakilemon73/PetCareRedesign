import { CheckCircle2, Award, Shield, Clock, Heart, Zap, Bot, TrendingUp, Users, Smartphone, Sparkles } from 'lucide-react';

interface Benefit {
  priority: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  status: 'live' | 'launching' | 'available';
  highlight?: string;
}

const platformBenefits: Benefit[] = [
  {
    priority: 1,
    title: "Trusted Platform",
    description: "50,000+ pet parents and 2,500+ veterinarians already trust our HIPAA-compliant, SOC 2 certified platform",
    icon: Award,
    status: 'live',
    highlight: "Bank-level security"
  },
  {
    priority: 2,
    title: "24/7 Emergency Support",
    description: "Always-available AI triage and emergency guidance with <2min response time and 99.9% uptime guarantee",
    icon: Clock,
    status: 'live',
    highlight: "Immediate response"
  },
  {
    priority: 3,
    title: "Revolutionary Savings",
    description: "Dynamic pricing technology delivering up to 80% savings without compromising quality care",
    icon: TrendingUp,
    status: 'live',
    highlight: "Up to $2,000/year saved"
  },
  {
    priority: 4,
    title: "Complete Pet Care Platform",
    description: "Everything you need in one place: instant booking, health tracking, medication management, and family sharing",
    icon: Heart,
    status: 'live',
    highlight: "All-in-one solution"
  },
  {
    priority: 5,
    title: "Powered by Veterinary AI",
    description: "Advanced AI providing 95% accurate diagnostics, instant symptom assessment, and personalized care plans",
    icon: Bot,
    status: 'live',
    highlight: "95% accuracy rate"
  },
  {
    priority: 6,
    title: "Complete Pet Care Coverage Through Text, Mobile, and Video",
    description: "Seamless communication across all channels with AI-powered video consultations and smart messaging",
    icon: Smartphone,
    status: 'live',
    highlight: "Multi-channel support"
  },
  {
    priority: 7,
    title: "Revolutionary Automation",
    description: "AI agents handle everything: record transfers, insurance claims, appointment scheduling, and vet communications",
    icon: Zap,
    status: 'launching',
    highlight: "Zero manual work"
  }
];

export default function PlatformBenefitsList() {
  return (
    <section 
      className="section-padding bg-background relative overflow-hidden"
      aria-labelledby="benefits-list-heading"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" aria-hidden="true" />
      <div className="hidden lg:block absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl floating" aria-hidden="true" />
      <div className="hidden lg:block absolute bottom-1/4 right-1/4 w-80 h-80 bg-success-500/5 rounded-full blur-3xl floating-delayed" aria-hidden="true" />
      
      <div className="container-custom relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16 sm:mb-20 space-y-6 sm:space-y-8 animate-fade-in">
          <div className="inline-flex items-center glass p-4 sm:p-6 rounded-2xl shadow-strong animate-scale-in" role="status">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-primary-500 mr-3 animate-pulse-slow" aria-hidden="true" />
            <span className="text-sm sm:text-base font-bold text-foreground">Platform Benefits</span>
            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-success-500 ml-3" aria-hidden="true" />
          </div>
          
          <div className="space-y-6">
            <h2 id="benefits-list-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight tracking-tight contrast-enhanced">
              Why Choose{" "}
              <span className="relative inline-block">
                <span className="gradient-text">Crest</span>
                <div className="hidden sm:block absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-success-500 rounded-full" aria-hidden="true" />
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium contrast-enhanced">
              Our platform delivers comprehensive pet care with{" "}
              <span className="text-primary-600 font-bold relative">revolutionary technology<span className="hidden sm:block absolute bottom-0 left-0 w-full h-0.5 bg-primary-500/30" aria-hidden="true" /></span>{" "}
              and proven results
            </p>
          </div>
        </div>

        {/* Priority Benefits List */}
        <div className="max-w-5xl mx-auto space-y-6" role="list" aria-label="Platform benefits in priority order">
          {platformBenefits.map((benefit, index) => (
            <div 
              key={benefit.priority}
              className="glass p-6 sm:p-8 rounded-2xl hover:shadow-strong transition-all duration-300 group animate-fade-in border border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
              role="listitem"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                {/* Priority Number */}
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-primary-500 to-success-500 flex items-center justify-center text-white font-black text-lg sm:text-xl shadow-strong">
                  {benefit.priority}
                </div>
                
                {/* Icon */}
                <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-500" />
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground leading-tight">
                      {benefit.title}
                    </h3>
                    
                    <div className="flex items-center gap-3 flex-shrink-0">
                      {/* Status Badge */}
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                        benefit.status === 'live' 
                          ? 'bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-300' 
                          : 'bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-300'
                      }`}>
                        <div className={`w-2 h-2 rounded-full mr-2 ${
                          benefit.status === 'live' ? 'bg-success-500 animate-pulse-slow' : 'bg-warning-500 animate-pulse-slow'
                        }`} />
                        {benefit.status === 'live' ? 'LIVE' : 'LAUNCHING Q2'}
                      </div>
                      
                      {/* Highlight Badge */}
                      {benefit.highlight && (
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 text-xs font-semibold">
                          {benefit.highlight}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 pt-12 border-t border-border/50">
          <div className="text-center space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
              Platform Growth & Trust Metrics
            </h3>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center space-y-2">
                <div className="text-2xl sm:text-3xl font-black text-primary-600">50,000+</div>
                <div className="text-sm text-muted-foreground font-medium">Happy Pet Parents</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl sm:text-3xl font-black text-success-600">2,500+</div>
                <div className="text-sm text-muted-foreground font-medium">Veterinarians</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl sm:text-3xl font-black text-warning-600">80%</div>
                <div className="text-sm text-muted-foreground font-medium">Average Savings</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl sm:text-3xl font-black text-emergency-600">24/7</div>
                <div className="text-sm text-muted-foreground font-medium">AI Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}