import { Users, Building2, DollarSign, Clock, TrendingUp, Award, Shield, Zap } from "lucide-react";

export default function TrustIndicators() {
  const stats = [
    {
      icon: Users,
      value: "50,000+",
      label: "Happy Pet Parents",
      color: "text-primary-500",
      bgColor: "bg-primary-50",
      growth: "+127% this year"
    },
    {
      icon: Building2,
      value: "100+",
      label: "Partner Clinics",
      color: "text-success-500",
      bgColor: "bg-success-50",
      growth: "In 32 states"
    },
    {
      icon: DollarSign,
      value: "80%",
      label: "Average Savings",
      color: "text-warning-500",
      bgColor: "bg-warning-50",
      growth: "Up to $2,000/year"
    },
    {
      icon: Clock,
      value: "24/7",
      label: "AI Support",
      color: "text-emergency-500",
      bgColor: "bg-emergency-50",
      growth: "Always available"
    }
  ];

  return (
    <section 
      className="py-16 sm:py-24 bg-background relative overflow-hidden"
      aria-labelledby="trust-indicators-heading"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center glass rounded-full px-6 py-2 shadow-medium" role="status">
            <Award className="w-4 h-4 text-primary-500 mr-2" aria-hidden="true" />
            <span className="text-sm font-semibold text-foreground">Trusted Platform</span>
          </div>
          <h2 id="trust-indicators-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-display contrast-enhanced">
            Revolutionizing Pet Care
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto contrast-enhanced">
            Join the community that's transforming how pets receive healthcare across the nation
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16" role="region" aria-labelledby="platform-statistics">
          <h3 id="platform-statistics" className="sr-only">Platform Statistics</h3>
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="glass p-6 sm:p-8 rounded-2xl hover:scale-105 transition-all duration-300 group focus-within:ring-2 focus-within:ring-primary-500"
              style={{ animationDelay: `${index * 100}ms` }}
              role="img"
              aria-labelledby={`stat-label-${index}`}
              aria-describedby={`stat-description-${index}`}
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`} aria-hidden="true">
                <stat.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color}`} />
              </div>
              <div 
                data-testid={`stat-${stat.label.toLowerCase().replace(' ', '-')}`} 
                className={`text-2xl sm:text-4xl font-bold ${stat.color} mb-2 font-display`}
                id={`stat-label-${index}`}
              >
                {stat.value}
              </div>
              <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground" id={`stat-description-${index}`}>{stat.growth}</div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 mb-12 sm:mb-16" role="list" aria-label="Security certifications and reliability metrics">
          <div className="flex items-center gap-3 glass rounded-2xl px-4 sm:px-6 py-4 shadow-medium" role="listitem">
            <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary-500" aria-hidden="true" />
            <div>
              <p className="font-semibold text-foreground text-sm sm:text-base">HIPAA Compliant</p>
              <p className="text-xs text-muted-foreground">Healthcare Grade Security</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 glass rounded-2xl px-4 sm:px-6 py-4 shadow-medium" role="listitem">
            <Award className="w-5 h-5 sm:w-6 sm:h-6 text-success-500" aria-hidden="true" />
            <div>
              <p className="font-semibold text-foreground text-sm sm:text-base">SOC 2 Certified</p>
              <p className="text-xs text-muted-foreground">Enterprise Security Standards</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 glass rounded-2xl px-4 sm:px-6 py-4 shadow-medium" role="listitem">
            <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-warning-500" aria-hidden="true" />
            <div>
              <p className="font-semibold text-foreground text-sm sm:text-base">99.9% Uptime</p>
              <p className="text-xs text-muted-foreground">Always Available</p>
            </div>
          </div>
        </div>

        {/* Growth Indicator */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 sm:px-6 py-3 shadow-medium" role="status" aria-live="polite">
            <TrendingUp className="w-5 h-5 text-success-500" aria-hidden="true" />
            <span className="font-semibold text-foreground text-sm sm:text-base">Growing by 1,000+ new pet parents weekly</span>
          </div>
        </div>
      </div>
    </section>
  );
}
