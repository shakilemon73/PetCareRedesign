import { 
  Award, Shield, Clock, Zap, Heart, Brain, 
  Phone, MessageSquare, Video, Users, 
  CheckCircle2, Star, TrendingUp 
} from "lucide-react";

export default function PriorityFeaturesList() {
  // Organized priority list based on user's request
  const priorityFeatures = [
    {
      priority: 1,
      icon: Award,
      title: "Trusted Platform",
      description: "HIPAA-compliant security with SOC 2 certification",
      stats: "50,000+ pet parents trust us",
      color: "primary",
      status: "verified"
    },
    {
      priority: 2, 
      icon: Clock,
      title: "24/7 Emergency Support",
      description: "Always available emergency guidance and AI triage",
      stats: "Average response time <2min",
      color: "emergency",
      status: "live"
    },
    {
      priority: 3,
      icon: TrendingUp, 
      title: "Revolutionary Savings",
      description: "Dynamic pricing technology with up to 80% savings",
      stats: "$2.3M+ total member savings",
      color: "success",
      status: "active"
    },
    {
      priority: 4,
      icon: Heart,
      title: "Complete Pet Care Platform", 
      description: "Everything you need for comprehensive pet healthcare",
      stats: "100+ partner clinics nationwide",
      color: "pink",
      status: "comprehensive"
    },
    {
      priority: 5,
      icon: Brain,
      title: "Powered by Veterinary AI",
      description: "Advanced AI assistants with 95% diagnostic accuracy",
      stats: "2,500+ veterinarians using AI tools",
      color: "indigo", 
      status: "intelligent"
    },
    {
      priority: 6,
      icon: Video,
      title: "Complete Pet Care Coverage",
      description: "Through text, mobile, and video consultations",
      stats: "Available across all communication channels",
      color: "blue",
      status: "omnichannel"
    },
    {
      priority: 7,
      icon: Zap,
      title: "Revolutionary Automation",
      description: "AI agents handle everything - from bookings to insurance",
      stats: "Zero manual paperwork required",
      color: "warning",
      status: "automated"
    }
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      verified: "bg-primary-100 text-primary-700 border-primary-200",
      live: "bg-emergency-100 text-emergency-700 border-emergency-200", 
      active: "bg-success-100 text-success-700 border-success-200",
      comprehensive: "bg-pink-100 text-pink-700 border-pink-200",
      intelligent: "bg-indigo-100 text-indigo-700 border-indigo-200",
      omnichannel: "bg-blue-100 text-blue-700 border-blue-200",
      automated: "bg-warning-100 text-warning-700 border-warning-200"
    };
    return colors[status as keyof typeof colors] || "bg-gray-100 text-gray-700 border-gray-200";
  };

  const getIconColor = (color: string) => {
    const colors = {
      primary: "text-primary-500",
      emergency: "text-emergency-500", 
      success: "text-success-500",
      pink: "text-pink-500",
      indigo: "text-indigo-500",
      blue: "text-blue-500",
      warning: "text-warning-500"
    };
    return colors[color as keyof typeof colors] || "text-gray-500";
  };

  return (
    <section 
      className="py-20 sm:py-28 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden"
      aria-labelledby="priority-features-heading"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" aria-hidden="true" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary-500/5 to-success-500/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-indigo-500/5 to-pink-500/5 rounded-full blur-3xl" aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-8 animate-fade-in">
          <div className="inline-flex items-center glass-card px-8 py-4 shadow-strong animate-scale-in">
            <CheckCircle2 className="w-6 h-6 text-success-500 mr-3" />
            <span className="text-base font-bold text-foreground">Platform Priority Features</span>
            <Star className="w-5 h-5 text-warning-500 ml-3 fill-current" />
          </div>
          
          <div className="space-y-6">
            <h2 
              id="priority-features-heading" 
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight"
            >
              Why Pet Parents & Vets{" "}
              <span className="relative inline-block">
                <span className="gradient-text">Choose Us</span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-success-500 to-indigo-500 rounded-full" />
              </span>
            </h2>
            
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium">
              Our priority-driven approach ensures you get the most{" "}
              <span className="text-primary-600 font-bold relative">comprehensive care<span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500/30" /></span>,
              delivered through{" "}
              <span className="text-success-600 font-bold relative">revolutionary technology<span className="absolute bottom-0 left-0 w-full h-0.5 bg-success-500/30" /></span>
            </p>
          </div>
        </div>

        {/* Priority Features Grid */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {priorityFeatures.map((feature, index) => (
            <div 
              key={feature.priority}
              className="group glass-card p-8 shadow-strong hover:shadow-stronger transition-all duration-300 rounded-3xl border-2 border-transparent hover:border-primary-200 dark:hover:border-primary-800 animate-slide-in-left"
              style={{ animationDelay: `${index * 150}ms` }}
              role="article"
              aria-labelledby={`feature-title-${feature.priority}`}
            >
              <div className="flex items-start gap-6 sm:gap-8">
                {/* Priority Number */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-500 to-success-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl sm:text-3xl font-black text-white font-display">
                      {feature.priority}
                    </span>
                  </div>
                </div>

                {/* Feature Icon */}
                <div className="flex-shrink-0">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${feature.color === 'primary' ? 'from-primary-100 to-primary-50' : 
                    feature.color === 'emergency' ? 'from-emergency-100 to-emergency-50' :
                    feature.color === 'success' ? 'from-success-100 to-success-50' :
                    feature.color === 'pink' ? 'from-pink-100 to-pink-50' :
                    feature.color === 'indigo' ? 'from-indigo-100 to-indigo-50' :
                    feature.color === 'blue' ? 'from-blue-100 to-blue-50' :
                    'from-warning-100 to-warning-50'
                  } dark:from-slate-800 dark:to-slate-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-7 h-7 sm:w-8 sm:h-8 ${getIconColor(feature.color)}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 
                      id={`feature-title-${feature.priority}`}
                      className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary-600 transition-colors duration-300"
                    >
                      {feature.title}
                    </h3>
                    <div className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(feature.status)}`}>
                      {feature.status.charAt(0).toUpperCase() + feature.status.slice(1)}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <TrendingUp className="w-4 h-4 text-success-500" />
                    <span className="text-success-600">{feature.stats}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 space-y-6">
          <div className="inline-flex items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary-500" />
              <span className="font-semibold">50,000+ Happy Pet Parents</span>
            </div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full" />
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-success-500" />
              <span className="font-semibold">2,500+ Veterinarians</span>
            </div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full" />
            <div className="flex items-center gap-1" role="img" aria-label="4.9 out of 5 stars rating">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-warning-400 text-warning-400" />
              ))}
              <span className="ml-1 font-semibold">4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}