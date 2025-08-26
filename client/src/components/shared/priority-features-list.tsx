import { Award, Clock, DollarSign, Heart, Brain, Video, Zap, CheckCircle2, TrendingUp } from "lucide-react";

export default function PriorityFeaturesList() {
  const priorityFeatures = [
    {
      priority: 1,
      icon: Award,
      title: "Trusted Platform",
      status: "LIVE",
      statusColor: "success",
      description: "50,000+ happy pet parents trust us with their furry family",
      metric: "50k+ families",
      color: "primary"
    },
    {
      priority: 2,
      icon: Clock,
      title: "24/7 Emergency Support",
      status: "LIVE",
      statusColor: "success",
      description: "Instant AI triage and guidance when your pet needs help most",
      metric: "24/7 availability",
      color: "emergency"
    },
    {
      priority: 3,
      icon: DollarSign,
      title: "Revolutionary Savings",
      status: "LIVE",
      statusColor: "success",
      description: "Dynamic pricing delivers up to 80% savings on veterinary care",
      metric: "$2,000+/year saved",
      color: "warning"
    },
    {
      priority: 4,
      icon: Heart,
      title: "Complete Pet Care Platform",
      status: "LIVE",
      statusColor: "success",
      description: "Everything from booking to records in one beautiful app",
      metric: "All-in-one solution",
      color: "primary"
    },
    {
      priority: 5,
      icon: Brain,
      title: "Powered by Veterinary AI",
      status: "LIVE",
      statusColor: "success",
      description: "Dr. Paw & Marcia AI provide expert guidance instantly",
      metric: "95% accuracy",
      color: "indigo"
    },
    {
      priority: 6,
      icon: Video,
      title: "Complete Coverage",
      status: "LIVE",
      statusColor: "success",
      description: "Text, mobile, and video consultations available 24/7",
      metric: "Multi-channel access",
      color: "purple"
    },
    {
      priority: 7,
      icon: Zap,
      title: "Revolutionary Automation",
      status: "LAUNCHING 2025",
      statusColor: "warning",
      description: "AI agents handle all vet coordination and record management",
      metric: "Zero paperwork",
      color: "orange"
    }
  ];

  return (
    <section 
      className="py-16 sm:py-24 bg-gradient-to-br from-background via-primary-50/10 to-background relative overflow-hidden"
      aria-labelledby="priority-features-heading"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" aria-hidden="true" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl floating" aria-hidden="true" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-success-500/5 rounded-full blur-3xl floating-delayed" aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-6 animate-fade-in">
          <div className="inline-flex items-center glass rounded-full px-6 py-3 shadow-strong animate-scale-in" role="status">
            <TrendingUp className="w-5 h-5 text-primary-500 mr-2 animate-pulse-slow" aria-hidden="true" />
            <span className="text-base font-bold text-foreground">Platform Benefits</span>
          </div>
          <h2 id="priority-features-heading" className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
            Why Families Choose{" "}
            <span className="relative inline-block">
              <span className="gradient-text">Crest</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-success-500 rounded-full" />
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium">
            Join the revolution that's making pet healthcare{" "}
            <span className="text-primary-600 font-bold">accessible</span>,{" "}
            <span className="text-success-600 font-bold">affordable</span>, and{" "}
            <span className="text-warning-600 font-bold">stress-free</span>
          </p>
        </div>

        {/* Priority Features List */}
        <div className="space-y-4 sm:space-y-6 max-w-6xl mx-auto">
          {priorityFeatures.map((feature, index) => (
            <div 
              key={feature.priority}
              className="glass p-6 sm:p-8 rounded-2xl shadow-strong hover:shadow-glow-success transition-all duration-500 hover:scale-[1.02] group"
              style={{ animationDelay: `${index * 100}ms` }}
              role="listitem"
              aria-labelledby={`priority-feature-${feature.priority}`}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                {/* Priority Number & Icon */}
                <div className="flex items-center gap-4 flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-full flex items-center justify-center text-2xl font-black text-gray-600 dark:text-gray-300 shadow-medium">
                    {feature.priority}
                  </div>
                  <div className={`w-14 h-14 bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 rounded-2xl flex items-center justify-center shadow-strong group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <h3 id={`priority-feature-${feature.priority}`} className="text-2xl sm:text-3xl font-bold text-foreground font-display group-hover:text-primary-600 transition-colors">
                      {feature.title}
                    </h3>
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
                      feature.statusColor === 'success' 
                        ? 'bg-success-100 text-success-700 border border-success-200' 
                        : 'bg-warning-100 text-warning-700 border border-warning-200'
                    }`}>
                      {feature.statusColor === 'success' && <CheckCircle2 className="w-3 h-3 mr-1" />}
                      {feature.status}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                    {feature.description}
                  </p>
                </div>

                {/* Metric */}
                <div className="flex-shrink-0 text-right">
                  <div className={`text-2xl sm:text-3xl font-black text-${feature.color}-600 mb-1`}>
                    {feature.metric.split(' ')[0]}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {feature.metric.split(' ').slice(1).join(' ')}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="glass-card max-w-2xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground font-display">
                Ready to Transform Your Pet's Healthcare?
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Join 50,000+ families who've discovered stress-free, affordable pet care
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  data-testid="button-start-free-trial"
                  className="btn-primary text-lg px-10 py-5 group"
                >
                  <Heart className="w-5 h-5 fill-current group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-bold">Start Free Trial</span>
                  <span className="text-sm opacity-75">No card required</span>
                </button>
                <button 
                  data-testid="button-watch-demo"
                  className="btn-secondary text-lg px-10 py-5 group"
                >
                  <Video className="w-5 h-5" />
                  <span className="font-bold">Watch Demo</span>
                </button>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground pt-4">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-success-500" />
                  HIPAA compliant
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-success-500" />
                  Cancel anytime
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-success-500" />
                  24/7 AI support
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}