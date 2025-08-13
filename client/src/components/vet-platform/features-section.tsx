import { Brain, Calendar, FileText, BarChart3, UserCheck, Smartphone, Stethoscope, Zap, Award, TrendingUp, Clock, CheckCircle2, Heart, ArrowRight } from "lucide-react";

export default function VetFeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Consultations",
      description: "Leverage advanced AI to enhance consultation quality, automate documentation, and provide real-time clinical insights.",
      color: "primary",
      highlight: "95% accuracy"
    },
    {
      icon: Calendar,
      title: "Smart Scheduling", 
      description: "Optimize appointments with AI-driven capacity management and automated waitlist handling.",
      color: "success",
      highlight: "40% more efficient"
    },
    {
      icon: FileText,
      title: "Auto Documentation",
      description: "Generate comprehensive notes with a single click using voice recognition and AI transcription.",
      color: "warning",
      highlight: "75% time saved"
    },
    {
      icon: BarChart3,
      title: "Practice Analytics",
      description: "Real-time insights into performance, patient trends, and revenue optimization with predictive analytics.",
      color: "purple",
      highlight: "Data-driven insights"
    },
    {
      icon: UserCheck,
      title: "Clinical Support",
      description: "Evidence-based recommendations in real-time with access to veterinary databases and research.",
      color: "emergency",
      highlight: "Evidence-based"
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Access your practice anywhere, anytime with native mobile apps and responsive web interface.",
      color: "indigo",
      highlight: "Native apps"
    }
  ];

  return (
    <section id="features" className="section-padding bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl floating" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl floating-delayed" />
      
      <div className="container-custom relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20 space-y-8 animate-fade-in">
          <div className="inline-flex items-center glass-card px-8 py-4 shadow-strong animate-scale-in">
            <Stethoscope className="w-6 h-6 text-primary-500 mr-3" />
            <span className="text-base font-bold text-foreground">Built for Modern Veterinary Practices</span>
            <Award className="w-5 h-5 text-success-500 ml-3" />
          </div>
          
          <div className="space-y-6">
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
              Every Feature Designed for{" "}
              <span className="relative inline-block">
                <span className="gradient-text">Better Care</span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-indigo-500 rounded-full" />
              </span>
            </h2>
            
            <p className="text-2xl sm:text-3xl text-muted-foreground leading-relaxed font-medium max-w-4xl mx-auto">
              Professional tools that help you{" "}
              <span className="text-primary-600 font-bold relative">deliver exceptional care<span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500/30" /></span>{" "}
              while saving valuable time
            </p>
          </div>
        </div>
        {/* Enhanced Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group glass-card shadow-strong hover:shadow-glow-primary transition-all duration-500 hover:scale-105 will-change-transform"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-8 space-y-6">
                {/* Enhanced Icon */}
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 rounded-2xl flex items-center justify-center shadow-strong group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  {/* Highlight Badge */}
                  <div className={`absolute -top-2 -right-2 bg-${feature.color}-100 dark:bg-${feature.color}-900 text-${feature.color}-600 text-xs font-bold px-2 py-1 rounded-full shadow-medium animate-pulse-slow`}>
                    {feature.highlight}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground font-display group-hover:text-primary-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect Indicator */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center gap-2 text-primary-600 font-semibold text-sm">
                    <TrendingUp className="w-4 h-4" />
                    <span>Learn more</span>
                  </div>
                </div>
              </div>
              
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-${feature.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
            </div>
          ))}
        </div>

        {/* Practice Benefits Summary */}
        <div className="mt-20 glass-card max-w-4xl mx-auto animate-fade-in">
          <div className="text-center space-y-6">
            <h3 className="text-3xl font-bold text-foreground font-display">Why Veterinarians Choose Crest</h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center space-y-2">
                <div className="text-3xl font-black text-indigo-600">2.5k+</div>
                <div className="text-sm text-muted-foreground font-medium">Veterinarians</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-black text-success-600">40%</div>
                <div className="text-sm text-muted-foreground font-medium">Time savings</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-black text-primary-600">$250k+</div>
                <div className="text-sm text-muted-foreground font-medium">Revenue increase</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-black text-warning-600">24/7</div>
                <div className="text-sm text-muted-foreground font-medium">AI support</div>
              </div>
            </div>
            
            <div className="pt-6">
              <button className="btn-primary group text-lg px-10 py-5 hover-glow bg-gradient-to-r from-indigo-500 to-primary-500 hover:from-indigo-600 hover:to-primary-600">
                <Clock className="w-5 h-5" />
                <span className="font-bold">Join Early Access</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
