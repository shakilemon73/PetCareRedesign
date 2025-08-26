import { Users, Building2, DollarSign, Clock, TrendingUp, Award, Shield, Zap, Star, Heart, Bot } from "lucide-react";

export default function TrustIndicators() {
  const stats = [
    {
      icon: Users,
      value: "50K+",
      label: "Pet Parents",
      description: "Growing family",
      color: "purple",
      growth: "+127% this year"
    },
    {
      icon: Building2,
      value: "100+",
      label: "Partner Clinics",
      description: "Trusted network",
      color: "emerald",
      growth: "In 32 states"
    },
    {
      icon: Heart,
      value: "80%",
      label: "Cost Savings",
      description: "Average per family",
      color: "pink",
      growth: "Up to $2,000/year"
    },
    {
      icon: Bot,
      value: "24/7",
      label: "AI Support",
      description: "Always available",
      color: "blue",
      growth: "Instant responses"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      purple: {
        bg: "bg-purple-100",
        text: "text-purple-600",
        icon: "text-purple-600",
        gradient: "from-purple-500 to-indigo-600"
      },
      emerald: {
        bg: "bg-emerald-100",
        text: "text-emerald-600",
        icon: "text-emerald-600",
        gradient: "from-emerald-500 to-teal-600"
      },
      pink: {
        bg: "bg-pink-100",
        text: "text-pink-600",
        icon: "text-pink-600",
        gradient: "from-pink-500 to-rose-600"
      },
      blue: {
        bg: "bg-blue-100",
        text: "text-blue-600",
        icon: "text-blue-600",
        gradient: "from-blue-500 to-cyan-600"
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section 
      className="space-section bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
      aria-labelledby="trust-indicators-heading"
    >
      {/* Modern Background Pattern */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(99,102,241,0.05)_1px,transparent_0)] bg-[length:60px_60px]" />
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        {/* Header Section - Gen-Z Style */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center glass-modern rounded-full px-6 py-3 shadow-lg" role="status">
            <Award className="w-5 h-5 text-purple-600 mr-3" aria-hidden="true" />
            <span className="text-sm font-bold text-gray-800">Trusted by Thousands</span>
            <div className="ml-3 flex gap-1">
              {[1,2,3,4,5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          
          <h2 id="trust-indicators-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 font-display leading-tight">
            Revolutionizing Pet Care
            <br />
            <span className="gradient-text-primary">One Family at a Time</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Join thousands of pet parents who've discovered stress-free, affordable healthcare for their furry family members
          </p>
        </div>

        {/* Stats Grid - Modern Card Design */}
        <div className="grid-responsive-4 mb-16" role="region" aria-labelledby="platform-statistics">
          <h3 id="platform-statistics" className="sr-only">Platform Statistics</h3>
          {stats.map((stat, index) => {
            const colors = getColorClasses(stat.color);
            return (
              <div 
                key={index}
                className="card-modern group cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
                role="img"
                aria-labelledby={`stat-label-${index}`}
                aria-describedby={`stat-description-${index}`}
              >
                <div className="text-center space-y-4">
                  <div className={`w-16 h-16 ${colors.bg} rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`} aria-hidden="true">
                    <stat.icon className={`w-8 h-8 ${colors.icon}`} />
                  </div>
                  
                  <div>
                    <div 
                      className={`text-3xl font-bold bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent mb-2 font-display`}
                      id={`stat-label-${index}`}
                    >
                      {stat.value}
                    </div>
                    <div className="font-bold text-gray-900 text-lg mb-1">{stat.label}</div>
                    <div className="text-sm text-gray-600 mb-2">{stat.description}</div>
                    <div className="text-xs font-medium text-gray-500" id={`stat-description-${index}`}>
                      {stat.growth}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Badges - Modern Row Layout */}
        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8" role="list" aria-label="Security certifications and reliability metrics">
          <div className="card-feature flex items-center gap-4 min-w-[200px]" role="listitem">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-blue-600" aria-hidden="true" />
            </div>
            <div>
              <div className="font-bold text-gray-900">HIPAA Compliant</div>
              <div className="text-sm text-gray-600">Healthcare grade security</div>
            </div>
          </div>
          
          <div className="card-feature flex items-center gap-4 min-w-[200px]" role="listitem">
            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center">
              <Award className="w-6 h-6 text-emerald-600" aria-hidden="true" />
            </div>
            <div>
              <div className="font-bold text-gray-900">SOC 2 Certified</div>
              <div className="text-sm text-gray-600">Enterprise security standards</div>
            </div>
          </div>
          
          <div className="card-feature flex items-center gap-4 min-w-[200px]" role="listitem">
            <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-purple-600" aria-hidden="true" />
            </div>
            <div>
              <div className="font-bold text-gray-900">99.9% Uptime</div>
              <div className="text-sm text-gray-600">Always available when needed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}