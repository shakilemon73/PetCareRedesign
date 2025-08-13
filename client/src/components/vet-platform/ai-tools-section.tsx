import { Brain, Phone, MessageSquare, Calendar, FileText, BarChart3, Stethoscope, Zap, Clock, Users, CheckCircle2, ArrowRight, Activity, Award } from "lucide-react";

export default function VetAiToolsSection() {
  // Applying 10 Design Philosophy Principles
  const aiTools = [
    {
      icon: MessageSquare,
      title: "Smart Text Messaging",
      description: "Automated appointment reminders, follow-ups, and two-way conversations. Reduces no-shows by up to 80%.",
      metric: "90% of calls handled by AI",
      color: "primary",
      // Don Norman - Clear signifiers for affordances
      signifier: "Automated",
      // Steve Krug - Scannable key benefit (max 15 words)
      benefit: "80% less no-shows",
      // Susan Weinschenk - Social proof
      socialProof: "2,500+ vets using",
      // Aarron Walter - Emotional connection
      emotion: "peace-of-mind"
    },
    {
      icon: FileText,
      title: "Auto Documentation",
      description: "Generates detailed visit notes and treatment plans automatically with voice recognition and AI transcription.",
      metric: "75% time savings",
      color: "success",
      signifier: "Voice-Activated",
      benefit: "Save 3 hours daily",
      socialProof: "95% accuracy rate",
      emotion: "efficiency"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Monitor patient health trends, predict needs, and optimize treatment schedules for better outcomes.",
      metric: "40% better outcomes",
      color: "indigo",
      signifier: "AI-Powered",
      benefit: "Better patient outcomes",
      socialProof: "Trusted by experts",
      emotion: "confidence"
    }
  ];

  return (
    <section id="ai-tools" className="section-padding gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dots-pattern opacity-10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/8 rounded-full blur-3xl floating will-change-transform" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-500/8 rounded-full blur-3xl floating-delayed will-change-transform" />
      
      <div className="container-custom relative z-10">
        {/* Don Norman - Discoverability & Steve Krug - Clarity */}
        <div className="text-center mb-20 space-y-8 animate-fade-in hierarchy-clear">
          {/* Farai Madzima - Accessible signifiers */}
          <div className="inline-flex items-center glass-card px-8 py-4 shadow-strong animate-scale-in touch-friendly">
            <Brain className="w-6 h-6 text-indigo-500 mr-3" />
            <span className="text-base font-bold text-foreground">AI-Powered Veterinary Tools</span>
            <Activity className="w-5 h-5 text-indigo-500 ml-3 animate-pulse-slow" />
          </div>
          
          {/* Susan Weinschenk - Information hierarchy */}
          <div className="space-y-6 memory-friendly">
            <h2 className="text-hierarchy-1 font-display text-foreground leading-tight tracking-tight">
              Your{" "}
              <span className="relative inline-block">
                <span className="gradient-text">AI-Powered</span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-primary-500 rounded-full" />
              </span>
              <br />Veterinary Staff
            </h2>
            
            {/* Steve Krug - Scannable text (max 15 words per line) */}
            <div className="text-hierarchy-5 text-muted-foreground leading-relaxed font-medium max-w-4xl mx-auto scannable-text">
              <p>Let intelligent agents handle routine tasks</p>
              <p>while your team focuses on patient care</p>
            </div>
            
            {/* Susan Weinschenk - Social proof */}
            <div className="social-proof-subtle justify-center">
              <Users className="w-4 h-4" />
              <span>2,500+ veterinarians already using AI tools</span>
            </div>
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

            {/* Luke Wroblewski - Form simplicity & Don Norman - Clear mapping */}
            <div className="space-y-4 systematic-spacing">
              <div className="flex items-center gap-4 glass p-4 rounded-xl delight-subtle clickable touch-friendly recognition-over-recall">
                <div className="w-8 h-8 bg-gradient-to-br from-success-500 to-success-600 rounded-full flex items-center justify-center shadow-medium functional-first">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <span className="text-foreground font-semibold">24/7 call handling and appointment booking</span>
                  <div className="social-proof-subtle mt-1">
                    <span>Never miss calls again</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 glass p-4 rounded-xl delight-subtle clickable touch-friendly recognition-over-recall">
                <div className="w-8 h-8 bg-gradient-to-br from-success-500 to-success-600 rounded-full flex items-center justify-center shadow-medium functional-first">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <span className="text-foreground font-semibold">Prescription refill automation</span>
                  <div className="social-proof-subtle mt-1">
                    <span>Save 2+ hours daily</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 glass p-4 rounded-xl delight-subtle clickable touch-friendly recognition-over-recall">
                <div className="w-8 h-8 bg-gradient-to-br from-success-500 to-success-600 rounded-full flex items-center justify-center shadow-medium functional-first">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <span className="text-foreground font-semibold">Emergency triage and routing</span>
                  <div className="social-proof-subtle mt-1">
                    <span>Critical cases prioritized</span>
                  </div>
                </div>
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

        {/* Dieter Rams - Good Design & Julie Zhuo - System Consistency */}
        <div className="grid md:grid-cols-3 gap-8 animate-fade-in grid-24px">
          {aiTools.map((tool, index) => (
            <div 
              key={index}
              className="group glass-card shadow-strong hover:shadow-glow-primary delight-subtle clickable touch-friendly functional-first"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="p-8 space-y-6 systematic-spacing">
                {/* Jonathan Ive - Simplicity with Don Norman - Affordances */}
                <div className="relative goal-focused">
                  <div className={`w-16 h-16 bg-gradient-to-br from-${tool.color}-500 to-${tool.color}-600 rounded-3xl flex items-center justify-center shadow-strong group-hover:scale-110 transition-transform duration-300 clean-edges`}>
                    <tool.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Don Norman - Signifier */}
                  <div className="absolute -top-2 -right-2 innovative-subtle text-xs font-bold px-3 py-1 rounded-full shadow-medium animate-pulse-slow">
                    {tool.signifier}
                  </div>
                </div>

                {/* Susan Weinschenk - Information chunking */}
                <div className="space-y-4 memory-friendly">
                  {/* Steve Krug - Scannable headline */}
                  <h3 className="text-hierarchy-3 text-foreground font-display group-hover:text-indigo-600 transition-colors aesthetic-minimal">
                    {tool.title}
                  </h3>
                  
                  {/* Alan Cooper - Goal-oriented content */}
                  <div className="scannable-text">
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {tool.benefit} - {tool.description.split('.')[0]}.
                    </p>
                  </div>
                  
                  {/* Luke Wroblewski - Clear metric display */}
                  <div className={`status-success text-sm font-bold inline-flex items-center gap-2 rounded-full px-4 py-2`}>
                    <Zap className="w-4 h-4" />
                    {tool.metric}
                  </div>
                  
                  {/* Susan Weinschenk - Social proof */}
                  <div className="social-proof-subtle">
                    <Users className="w-3 h-3" />
                    <span>{tool.socialProof}</span>
                  </div>
                </div>

                {/* Aarron Walter - Delight on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center gap-2 text-indigo-600 font-semibold text-sm recognition-over-recall">
                    <ArrowRight className="w-4 h-4" />
                    <span>Explore feature</span>
                  </div>
                </div>
              </div>
              
              {/* Farai Madzima - Visual accessibility */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-${tool.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
