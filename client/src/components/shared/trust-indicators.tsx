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
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center glass rounded-full px-6 py-2 shadow-medium">
            <Award className="w-4 h-4 text-primary-500 mr-2" />
            <span className="text-sm font-semibold text-foreground">Trusted Platform</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground font-display">
            Revolutionizing Pet Care
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join the community that's transforming how pets receive healthcare across the nation
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="glass-card hover-lift group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div data-testid={`stat-${stat.label.toLowerCase().replace(' ', '-')}`} className={`text-4xl font-bold ${stat.color} mb-2 font-display`}>
                {stat.value}
              </div>
              <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.growth}</div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
          <div className="flex items-center gap-3 glass rounded-2xl px-6 py-4 shadow-medium">
            <Shield className="w-6 h-6 text-primary-500" />
            <div>
              <p className="font-semibold text-foreground">HIPAA Compliant</p>
              <p className="text-xs text-muted-foreground">Healthcare Grade Security</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 glass rounded-2xl px-6 py-4 shadow-medium">
            <Award className="w-6 h-6 text-success-500" />
            <div>
              <p className="font-semibold text-foreground">SOC 2 Certified</p>
              <p className="text-xs text-muted-foreground">Enterprise Security Standards</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 glass rounded-2xl px-6 py-4 shadow-medium">
            <Zap className="w-6 h-6 text-warning-500" />
            <div>
              <p className="font-semibold text-foreground">99.9% Uptime</p>
              <p className="text-xs text-muted-foreground">Always Available</p>
            </div>
          </div>
        </div>

        {/* Growth Indicator */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 shadow-medium">
            <TrendingUp className="w-5 h-5 text-success-500" />
            <span className="font-semibold text-foreground">Growing by 1,000+ new pet parents weekly</span>
          </div>
        </div>
      </div>
    </section>
  );
}
