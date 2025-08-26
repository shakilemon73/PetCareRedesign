import { useState } from "react";
import { 
  Video, Brain, Phone, MessageSquare, Camera, Scan, Eye, Ear, 
  Heart, Zap, CheckCircle2, Sparkles, ArrowRight, Play, Shield,
  Clock, Award, FileText, Users, Stethoscope, Activity, Bot,
  Building2, Database, Mail, Calendar, CreditCard
} from "lucide-react";
import InteractiveChat from "./interactive-chat";

export default function ConsolidatedAiSection() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const aiFeatures = [
    {
      icon: Video,
      title: "AI Video Veterinarian",
      subtitle: "Visual Assessment & Analysis",
      description: "Our AI can assess and analyze your pet through video calls, providing real-time health insights",
      features: [
        "Visual symptom assessment in real-time",
        "PawScan™ - digestive health insights", 
        "TechScan™ - AI dental health analysis",
        "Check eyes, ears, skin conditions visually"
      ],
      color: "blue",
      bgGradient: "from-blue-600 to-purple-700",
      buttonText: "Start Video Assessment",
      ctaIcon: Video
    },
    {
      icon: Brain,
      title: "Dr. Paw AI",
      subtitle: "Web & App Assistant",
      description: "24/7 veterinary advice with personalized health recommendations and medication tracking",
      features: [
        "24/7 veterinary advice and triage",
        "Live video consultations with AI support",
        "Symptom analysis with photo support",
        "Medication reminders and tracking",
        "Personalized health recommendations",
        "Retrieves records from your vets"
      ],
      color: "purple",
      bgGradient: "from-blue-500 to-blue-600",
      buttonText: "Chat with Dr. Paw",
      ctaIcon: MessageSquare
    },
    {
      icon: Phone,
      title: "Marcia AI",
      subtitle: "Phone, Text & MMS",
      description: "Call or text for instant support with seamless connection to vets and insurers",
      features: [
        "Call or text for instant support",
        "Photo appointments via SMS",
        "TechScan™ dental analysis",
        "PawScan™ digestive health check",
        "Connects vets & insurers for you"
      ],
      color: "green",
      bgGradient: "from-purple-500 to-purple-600",
      buttonText: "Text Marcia AI",
      ctaIcon: Phone
    }
  ];

  const automationFeatures = [
    {
      icon: Phone,
      title: "Connect Your Past Vets",
      description: "AI calls and emails to retrieve medical records automatically",
      color: "blue"
    },
    {
      icon: Shield,
      title: "Improved Claims", 
      description: "Connect to all top insurer providers seamlessly",
      color: "green"
    },
    {
      icon: MessageSquare,
      title: "Text & Email Management",
      description: "Handles all vet communications on your behalf",
      color: "purple"
    },
    {
      icon: Database,
      title: "Complete Record Transfer",
      description: "Coordinates all records in one secure place",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-100",
        text: "text-blue-600",
        icon: "text-blue-600",
        border: "border-blue-200"
      },
      purple: {
        bg: "bg-purple-100", 
        text: "text-purple-600",
        icon: "text-purple-600",
        border: "border-purple-200"
      },
      green: {
        bg: "bg-green-100",
        text: "text-green-600", 
        icon: "text-green-600",
        border: "border-green-200"
      },
      orange: {
        bg: "bg-orange-100",
        text: "text-orange-600",
        icon: "text-orange-600", 
        border: "border-orange-200"
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section 
      id="ai-assistants" 
      className="section-padding bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden"
      aria-labelledby="ai-assistants-heading"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" aria-hidden="true" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl animate-pulse-slow" aria-hidden="true" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }} aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-8 animate-fade-in">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl shadow-xl">
            <Sparkles className="w-6 h-6 mr-3 animate-pulse-slow" aria-hidden="true" />
            <span className="text-lg font-bold tracking-wide">Complete pet care coverage through text, mobile, and video</span>
          </div>
          
          <div className="space-y-6">
            <h2 
              id="ai-assistants-heading"
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 leading-tight tracking-tight"
            >
              Three Powerful{" "}
              <span className="relative inline-block">
                AI Assistants
                <div className="absolute -bottom-3 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-70 blur-sm" aria-hidden="true" />
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" aria-hidden="true" />
              </span>
            </h2>
            
            <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
              Complete pet care coverage through{" "}
              <span className="text-blue-600 font-bold relative">text, mobile, and video</span>{" "}
              with revolutionary automation that handles everything for you
            </p>
          </div>
        </div>

        {/* AI Assistants Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {aiFeatures.map((ai, index) => {
            const colors = getColorClasses(ai.color);
            return (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 relative overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${ai.bgGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} aria-hidden="true" />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${ai.bgGradient} rounded-2xl flex items-center justify-center mx-auto shadow-lg mb-4`}>
                      <ai.icon className="w-8 h-8 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-800 mb-2">{ai.title}</h3>
                    <p className={`${colors.text} font-bold text-lg mb-3`}>{ai.subtitle}</p>
                    <p className="text-slate-600 leading-tight">{ai.description}</p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {ai.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 transition-all duration-300"
                      >
                        <div className={`w-6 h-6 ${colors.bg} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <CheckCircle2 className={`w-3 h-3 ${colors.icon}`} aria-hidden="true" />
                        </div>
                        <span className="text-slate-700 font-medium text-sm leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button 
                    onClick={() => ai.title === 'Dr. Paw AI' ? setIsChatOpen(true) : undefined}
                    className={`w-full bg-gradient-to-r ${ai.bgGradient} text-white px-6 py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group/btn ${ai.title !== 'Dr. Paw AI' ? 'cursor-not-allowed opacity-75' : ''}`}
                    data-testid={`button-${ai.title.toLowerCase().replace(' ', '-')}`}
                  >
                    <ai.ctaIcon className="w-5 h-5 inline mr-2 group-hover/btn:scale-110 transition-transform duration-300" aria-hidden="true" />
                    {ai.buttonText}
                    {ai.title !== 'Dr. Paw AI' && <span className="text-xs block mt-1">(Coming Soon)</span>}
                    <ArrowRight className="w-5 h-5 inline ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* AI Automation Section */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden mb-16">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-stars-pattern opacity-20" aria-hidden="true" />
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse-slow" aria-hidden="true" />
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-2xl shadow-xl mb-6">
                <Bot className="w-5 h-5 mr-3 animate-pulse-slow" aria-hidden="true" />
                <span className="font-bold">Our AI assistants act as your personal pet coordinators</span>
              </div>
              
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-300 to-purple-300 leading-tight mb-4">
                AI Handles Everything For You
              </h3>
              
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Stop spending hours on phone calls and paperwork. Our AI coordinates everything behind the scenes.
              </p>
            </div>

            {/* Automation Features Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {automationFeatures.map((feature, index) => {
                const colors = getColorClasses(feature.color);
                return (
                  <div 
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br from-white/20 to-white/10 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <feature.icon className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                    <p className="text-blue-100 text-sm leading-tight">{feature.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setIsChatOpen(true)}
                  className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-black text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group"
                  data-testid="button-activate-ai"
                >
                  <Bot className="w-6 h-6 inline mr-3 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                  Activate AI Assistants
                  <ArrowRight className="w-6 h-6 inline ml-3 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                </button>
                
                <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 group">
                  <Calendar className="w-5 h-5 inline mr-2 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                  See Demo
                </button>
              </div>
              
              <div className="flex flex-wrap justify-center items-center gap-8 text-blue-100 pt-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-white" aria-hidden="true" />
                  <span className="font-medium">No setup required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-white" aria-hidden="true" />
                  <span className="font-medium">Works instantly</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-white" aria-hidden="true" />
                  <span className="font-medium">Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl" aria-hidden="true" />
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-black text-white mb-4">All AI Features Included</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Experience the future of pet care with all three AI assistants working together for your pet's health
              </p>
              <button className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-xl hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group">
                <Sparkles className="w-6 h-6 inline mr-3 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                Start Free Trial - Get All AIs
                <ArrowRight className="w-6 h-6 inline ml-3 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <InteractiveChat 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
      />
    </section>
  );
}