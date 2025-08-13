import { Brain, Heart, Zap, CheckCircle2, Clock, Shield, Sparkles, ArrowRight, Play, MessageCircle, Activity, Award } from "lucide-react";

export default function PetAiAssistantSection() {
  const features = [
    {
      icon: Brain,
      title: "Instant Symptom Assessment",
      description: "Advanced AI analyzes symptoms in seconds with 95% accuracy",
      color: "primary"
    },
    {
      icon: Shield,
      title: "Emergency Triage & Guidance", 
      description: "Smart triage determines urgency and guides next steps",
      color: "emergency"
    },
    {
      icon: Clock,
      title: "Medication Reminders",
      description: "Never miss doses with intelligent tracking and alerts",
      color: "warning"
    },
    {
      icon: Award,
      title: "Personalized Care Plans",
      description: "Tailored recommendations based on breed, age, and history",
      color: "success"
    }
  ];

  return (
    <section id="ai-assistant" className="section-padding gradient-hero relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-dots-pattern opacity-10" />
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary-500/8 rounded-full blur-3xl floating will-change-transform" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-success-500/8 rounded-full blur-3xl floating-delayed will-change-transform" />
      
      <div className="container-custom relative z-10">
        <div className="grid-responsive items-center">
          {/* Content Section */}
          <div className="space-y-10 animate-fade-in">
            {/* AI Badge */}
            <div className="inline-flex items-center glass-card px-8 py-4 shadow-strong animate-scale-in">
              <Brain className="w-6 h-6 text-primary-500 mr-3" />
              <span className="text-base font-bold text-foreground">Powered by Veterinary AI</span>
              <Sparkles className="w-5 h-5 text-primary-500 ml-3 animate-pulse-slow" />
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
                Meet{" "}
                <span className="relative inline-block">
                  <span className="gradient-text">Dr. Paw</span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-success-500 rounded-full" />
                </span>
                <br />Your AI Veterinary Assistant
              </h2>
              
              <p className="text-2xl sm:text-3xl text-muted-foreground leading-relaxed font-medium max-w-3xl">
                Get instant answers to pet health questions,{" "}
                <span className="text-primary-600 font-bold relative">24/7 availability<span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500/30" /></span>. 
                Advanced AI provides{" "}
                <span className="text-success-600 font-bold relative">reliable guidance<span className="absolute bottom-0 left-0 w-full h-0.5 bg-success-500/30" /></span>{" "}
                and knows when you need a real vet
              </p>
            </div>

            {/* Enhanced Features List */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 glass p-6 rounded-xl hover:scale-105 transition-all duration-300 animate-slide-in-left will-change-transform"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-12 h-12 bg-${feature.color}-500 rounded-2xl flex items-center justify-center shadow-strong flex-shrink-0`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-foreground text-lg">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                data-testid="button-try-dr-paw"
                className="btn-primary group text-lg px-10 py-5 hover-glow shadow-strong will-change-transform"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-all duration-300" />
                <span className="font-bold">Try Dr. Paw Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all duration-300" />
              </button>
              
              <button 
                data-testid="button-watch-demo"
                className="btn-secondary group text-lg px-10 py-5 will-change-transform"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-all duration-300 fill-current" />
                <span className="font-bold">Watch Demo</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-success-500" />
                <span className="font-semibold">95% Accuracy</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary-500 fill-current" />
                <span className="font-semibold">50k+ Consultations</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-warning-500" />
                <span className="font-semibold">24/7 Available</span>
              </div>
            </div>
          </div>
          {/* Enhanced AI Chat Demo */}
          <div className="relative animate-slide-in-right">
            <div data-testid="ai-chat-mockup" className="glass-card shadow-strong bg-background border border-border rounded-3xl p-8 max-w-lg mx-auto">
              {/* Chat Header */}
              <div className="flex items-center space-x-4 mb-8 pb-6 border-b border-border">
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-success-500 rounded-2xl flex items-center justify-center shadow-strong">
                    <Brain className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-success-500 rounded-full flex items-center justify-center shadow-medium">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="font-bold text-foreground text-lg">Dr. Paw AI</div>
                  <div className="flex items-center gap-2 text-success-500">
                    <div className="relative">
                      <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse-slow"></div>
                      <div className="absolute inset-0 w-2 h-2 bg-success-500 rounded-full animate-ping"></div>
                    </div>
                    <span className="text-sm font-semibold">Online & Ready</span>
                  </div>
                </div>
              </div>
              
              {/* Chat Messages */}
              <div className="space-y-6 mb-6">
                <div className="flex justify-start">
                  <div className="glass bg-muted/50 rounded-2xl p-4 text-sm max-w-xs">
                    Hi! I'm Dr. Paw. How can I help your pet today? 🐾
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-2xl p-4 text-sm max-w-xs shadow-strong">
                    My dog seems to be limping on his front paw
                  </div>
                </div>
                
                <div className="flex justify-start">
                  <div className="glass bg-muted/50 rounded-2xl p-4 text-sm max-w-xs space-y-2">
                    <div>I understand your concern. Let me ask a few questions to help assess the situation:</div>
                    <div className="space-y-1 text-xs opacity-75">
                      <div>• When did you first notice the limping?</div>
                      <div>• Is your dog putting any weight on the paw?</div>
                      <div>• Any visible swelling or cuts?</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Chat Input */}
              <div className="flex items-center gap-3">
                <input 
                  type="text" 
                  placeholder="Type your response..." 
                  className="flex-1 glass border border-border rounded-full px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  data-testid="input-chat-message"
                />
                <button 
                  data-testid="button-send-message"
                  className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-strong hover:scale-105 transition-all duration-300 group"
                >
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-0.5 transition-transform duration-300" />
                </button>
              </div>
            </div>
            
            {/* Floating Status Badge */}
            <div className="absolute -bottom-4 -right-4 glass-card bg-success-500 text-white px-6 py-3 rounded-2xl shadow-glow-success animate-bounce-gentle">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-bold">Available 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
