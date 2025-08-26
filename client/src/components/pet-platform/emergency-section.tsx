import { AlertTriangle, Phone, MessageCircle, Clock, Shield, Zap, Heart, ArrowRight, Activity } from "lucide-react";

export default function PetEmergencySection() {
  return (
    <section id="emergency" className="section-padding bg-gradient-to-br from-emergency-50 to-warning-50 dark:from-emergency-900/20 dark:to-warning-900/20 relative overflow-hidden">
      {/* Emergency Background Elements */}
      <div className="absolute inset-0 bg-dots-pattern opacity-10" />
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-emergency-500/8 rounded-full blur-3xl floating will-change-transform" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-warning-500/8 rounded-full blur-3xl floating-delayed will-change-transform" />
      
      <div className="container-custom relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16 space-y-8 animate-fade-in">
          <div className="inline-flex items-center glass-card px-8 py-4 shadow-strong animate-scale-in bg-emergency-50 dark:bg-emergency-900/30 border border-emergency-200 dark:border-emergency-800">
            <AlertTriangle className="w-6 h-6 text-emergency-500 mr-3" />
            <span className="text-base font-bold text-foreground">24/7 Emergency Support</span>
            <div className="relative ml-3">
              <div className="w-3 h-3 bg-emergency-500 rounded-full animate-pulse-slow" />
              <div className="absolute inset-0 w-3 h-3 bg-emergency-500 rounded-full animate-ping" />
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
              Pet Emergency?{" "}
              <span className="relative inline-block">
                <span className="gradient-text bg-gradient-to-r from-emergency-500 to-warning-500 bg-clip-text text-transparent">We're Here</span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emergency-500 to-warning-500 rounded-full" />
              </span>
            </h2>
            
            <p className="text-2xl sm:text-3xl text-muted-foreground leading-relaxed font-medium max-w-4xl mx-auto">
              Get{" "}
              <span className="text-emergency-600 font-bold relative">immediate guidance<span className="absolute bottom-0 left-0 w-full h-0.5 bg-emergency-500/30" /></span>{" "}
              for pet emergencies. Our AI helps determine if you need emergency care or if it can wait
            </p>
          </div>
        </div>

        {/* Emergency Action Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Immediate Emergency Card */}
          <div className="group glass-card shadow-strong hover:shadow-glow-emergency transition-all duration-500 hover:scale-105 will-change-transform animate-slide-in-left">
            <div className="p-10 space-y-8">
              {/* Enhanced Icon */}
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-emergency-500 to-emergency-600 rounded-3xl flex items-center justify-center shadow-strong group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-10 h-10 text-white" />
                </div>
                {/* Urgent Indicator */}
                <div className="absolute -top-2 -right-2 bg-emergency-100 dark:bg-emergency-900 text-emergency-600 text-xs font-bold px-3 py-1 rounded-full shadow-medium animate-pulse-slow">
                  URGENT
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-foreground font-display group-hover:text-emergency-600 transition-colors">
                  Immediate Emergency
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Life-threatening situations requiring{" "}
                  <span className="font-bold text-emergency-600">immediate veterinary attention</span>
                </p>
                
                {/* Emergency Indicators */}
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-emergency-500" />
                    <span>Difficulty breathing, seizures, unconsciousness</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emergency-500" />
                    <span>Every second matters</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button 
                data-testid="button-emergency-call"
                className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg group flex items-center justify-center gap-3"
              >
                <Phone className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                Call Emergency Line
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Urgent Question Card */}
          <div className="group glass-card shadow-strong hover:shadow-glow-warning transition-all duration-500 hover:scale-105 will-change-transform animate-slide-in-right">
            <div className="p-10 space-y-8">
              {/* Enhanced Icon */}
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-warning-500 to-warning-600 rounded-3xl flex items-center justify-center shadow-strong group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
                {/* AI Badge */}
                <div className="absolute -top-2 -right-2 bg-warning-100 dark:bg-warning-900 text-warning-600 text-xs font-bold px-3 py-1 rounded-full shadow-medium animate-pulse-slow">
                  AI TRIAGE
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-foreground font-display group-hover:text-warning-600 transition-colors">
                  Urgent Question
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Not sure if it's an emergency?{" "}
                  <span className="font-bold text-warning-600">Chat with Dr. Paw</span> for immediate assessment
                </p>
                
                {/* AI Features */}
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-warning-500" />
                    <span>Instant triage and guidance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-warning-500" />
                    <span>95% accuracy in assessment</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button 
                data-testid="button-chat-emergency"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg group flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                Chat with Dr. Paw
                <Heart className="w-6 h-6 fill-current group-hover:scale-110 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Emergency Stats */}
        <div className="glass-card max-w-4xl mx-auto animate-fade-in">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-foreground font-display">Emergency Response Excellence</h3>
            
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="text-center space-y-2">
                <div className="text-3xl font-black text-emergency-600">&lt;2min</div>
                <div className="text-sm text-muted-foreground font-medium">Average response time</div>
              </div>
              <div className="text-center space-y-2 border-l border-r border-border">
                <div className="text-3xl font-black text-success-600">99.9%</div>
                <div className="text-sm text-muted-foreground font-medium">Uptime guarantee</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-black text-primary-600">24/7</div>
                <div className="text-sm text-muted-foreground font-medium">Always available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
