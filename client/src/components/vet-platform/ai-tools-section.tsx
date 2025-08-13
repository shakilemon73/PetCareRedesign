import { Brain, Phone, MessageSquare, Calendar, FileText, BarChart3, Stethoscope, Zap, Clock, Users, CheckCircle2, ArrowRight, Activity, Award } from "lucide-react";

export default function VetAiToolsSection() {
  const aiTools = [
    {
      icon: MessageSquare,
      title: "Smart Text Messaging",
      description: "Automated appointment reminders, follow-ups, and two-way conversations. Reduces no-shows by up to 80%.",
      metric: "90% of calls handled by AI",
      color: "primary"
    },
    {
      icon: FileText,
      title: "Auto Documentation",
      description: "Generates detailed visit notes and treatment plans automatically with voice recognition and AI transcription.",
      metric: "75% time savings",
      color: "success"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Monitor patient health trends, predict needs, and optimize treatment schedules for better outcomes.",
      metric: "40% better outcomes",
      color: "indigo"
    }
  ];

  return (
    <section id="ai-tools" className="section-padding gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dots-pattern opacity-10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/8 rounded-full blur-3xl floating will-change-transform" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-500/8 rounded-full blur-3xl floating-delayed will-change-transform" />
      
      <div className="container-custom relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20 space-y-8 animate-fade-in">
          <div className="inline-flex items-center glass-card px-8 py-4 shadow-strong animate-scale-in">
            <Brain className="w-6 h-6 text-indigo-500 mr-3" />
            <span className="text-base font-bold text-foreground">AI-Powered Veterinary Tools</span>
            <Activity className="w-5 h-5 text-indigo-500 ml-3 animate-pulse-slow" />
          </div>
          
          <div className="space-y-6">
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
              Your{" "}
              <span className="relative inline-block">
                <span className="gradient-text">AI-Powered</span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-primary-500 rounded-full" />
              </span>
              <br />Veterinary Staff
            </h2>
            
            <p className="text-2xl sm:text-3xl text-muted-foreground leading-relaxed font-medium max-w-4xl mx-auto">
              Let{" "}
              <span className="text-indigo-600 font-bold relative">intelligent agents<span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500/30" /></span>{" "}
              handle routine tasks while your team focuses on{" "}
              <span className="text-primary-600 font-bold relative">patient care<span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500/30" /></span>
            </p>
          </div>
        </div>

        {/* Enhanced Phone System Demo */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8 animate-slide-in-left">
            <h3 className="text-4xl font-bold text-foreground font-display">Intelligent Phone System</h3>
            <p className="text-xl text-muted-foreground leading-relaxed">
              AI receptionist handles appointment scheduling, prescription refills, and common inquiries{" "}
              <span className="text-indigo-600 font-bold relative">24/7<span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500/30" /></span>. 
              Never miss a call again.
            </p>

            {/* Enhanced Features List */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 glass p-4 rounded-xl hover:scale-105 transition-all duration-300">
                <div className="w-8 h-8 bg-gradient-to-br from-success-500 to-success-600 rounded-full flex items-center justify-center shadow-medium">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-foreground font-semibold">24/7 call handling and appointment booking</span>
              </div>
              <div className="flex items-center gap-4 glass p-4 rounded-xl hover:scale-105 transition-all duration-300">
                <div className="w-8 h-8 bg-gradient-to-br from-success-500 to-success-600 rounded-full flex items-center justify-center shadow-medium">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-foreground font-semibold">Prescription refill automation</span>
              </div>
              <div className="flex items-center gap-4 glass p-4 rounded-xl hover:scale-105 transition-all duration-300">
                <div className="w-8 h-8 bg-gradient-to-br from-success-500 to-success-600 rounded-full flex items-center justify-center shadow-medium">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-foreground font-semibold">Emergency triage and routing</span>
              </div>
            </div>
          </div>

          {/* Enhanced Mockup */}
          <div className="relative animate-slide-in-right">
            <div data-testid="phone-system-mockup" className="glass-card shadow-strong bg-background border border-border rounded-3xl p-8">
              <div className="flex items-center space-x-3 mb-8 pb-4 border-b border-border">
                <div className="w-4 h-4 bg-emergency-500 rounded-full shadow-glow-emergency"></div>
                <div className="w-4 h-4 bg-warning-500 rounded-full shadow-glow-warning"></div>
                <div className="w-4 h-4 bg-success-500 rounded-full shadow-glow-success"></div>
                <span className="ml-4 text-sm text-muted-foreground font-medium">Incoming Call</span>
              </div>
              
              <div className="space-y-6">
                <div className="bg-muted/50 rounded-2xl p-6 border border-border">
                  <div className="text-sm text-muted-foreground mb-2 font-semibold">Caller</div>
                  <div className="text-foreground">"Hi, I need to schedule an appointment for my dog Max"</div>
                </div>
                
                <div className="bg-gradient-to-br from-indigo-500 to-primary-500 text-white rounded-2xl p-6 shadow-strong">
                  <div className="text-sm opacity-75 mb-2 font-semibold">AI Assistant</div>
                  <div>"I'd be happy to help schedule an appointment for Max. Let me check our available slots..."</div>
                </div>
                
                <div className="glass p-4 rounded-xl text-sm border border-border">
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <div className="relative">
                      <div className="w-3 h-3 bg-success-500 rounded-full animate-pulse-slow"></div>
                      <div className="absolute inset-0 w-3 h-3 bg-success-500 rounded-full animate-ping"></div>
                    </div>
                    <span className="font-medium">AI is accessing: Calendar system, Patient records, Doctor availability</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced AI Tools Grid */}
        <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
          {aiTools.map((tool, index) => (
            <div 
              key={index}
              className="group glass-card shadow-strong hover:shadow-glow-primary transition-all duration-500 hover:scale-105 will-change-transform"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="p-8 space-y-6">
                {/* Enhanced Icon */}
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br from-${tool.color}-500 to-${tool.color}-600 rounded-3xl flex items-center justify-center shadow-strong group-hover:scale-110 transition-transform duration-300`}>
                    <tool.icon className="w-8 h-8 text-white" />
                  </div>
                  {/* Metric Badge */}
                  <div className={`absolute -top-2 -right-2 bg-${tool.color}-100 dark:bg-${tool.color}-900 text-${tool.color}-600 text-xs font-bold px-3 py-1 rounded-full shadow-medium animate-pulse-slow`}>
                    NEW
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground font-display group-hover:text-indigo-600 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {tool.description}
                  </p>
                  
                  {/* Metric Display */}
                  <div className={`text-sm font-bold text-${tool.color}-600 bg-${tool.color}-50 dark:bg-${tool.color}-900/30 px-4 py-2 rounded-full inline-flex items-center gap-2`}>
                    <Zap className="w-4 h-4" />
                    {tool.metric}
                  </div>
                </div>

                {/* Hover Effect Indicator */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center gap-2 text-indigo-600 font-semibold text-sm">
                    <ArrowRight className="w-4 h-4" />
                    <span>Explore feature</span>
                  </div>
                </div>
              </div>
              
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-${tool.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
