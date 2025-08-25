import { 
  Video, Brain, Phone, MessageSquare, Camera, Scan, Eye, Ear, 
  Heart, Zap, CheckCircle2, Sparkles, ArrowRight, Play, Shield,
  Clock, Award, FileText, Users, Stethoscope, Activity
} from "lucide-react";

export default function TwoPowerfulAiAssistantsSection() {
  const videoFeatures = [
    { icon: Eye, text: "Visual symptom assessment in real-time" },
    { icon: Scan, text: "PawScan™ - digestive health insights" },
    { icon: Stethoscope, text: "TechScan™ - AI dental health analysis" },
    { icon: Activity, text: "Check eyes, ears, skin conditions visually" }
  ];

  const drPawFeatures = [
    { icon: Clock, text: "24/7 veterinary advice and triage" },
    { icon: Video, text: "Live video consultations with AI support" },
    { icon: Camera, text: "Symptom analysis with photo support" },
    { icon: FileText, text: "Medication reminders and tracking" },
    { icon: Heart, text: "Personalized health recommendations" },
    { icon: Users, text: "Retrieves records from your vets" }
  ];

  const marciaFeatures = [
    { icon: Phone, text: "Call or text for instant support" },
    { icon: MessageSquare, text: "Photo appointments via SMS" },
    { icon: Scan, text: "TechScan™ dental analysis" },
    { icon: Stethoscope, text: "PawScan™ digestive health check" },
    { icon: Shield, text: "Connects vets & insurers for you" }
  ];

  return (
    <section 
      id="ai-assistants" 
      className="section-padding bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden"
      aria-labelledby="ai-assistants-heading"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" aria-hidden="true" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse-slow" aria-hidden="true" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} aria-hidden="true" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-8 animate-fade-in">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl shadow-xl animate-scale-in">
            <Sparkles className="w-6 h-6 mr-3 animate-pulse-slow" aria-hidden="true" />
            <span className="text-lg font-bold tracking-wide">Complete pet care coverage through text, mobile, and video</span>
          </div>
          
          <div className="space-y-6">
            <h2 
              id="ai-assistants-heading"
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 dark:from-slate-200 dark:via-blue-400 dark:to-purple-400 leading-tight tracking-tight"
            >
              Two Powerful{" "}
              <span className="relative inline-block">
                AI Assistants
                <div className="absolute -bottom-3 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-70 blur-sm" aria-hidden="true" />
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" aria-hidden="true" />
              </span>
            </h2>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 max-w-5xl mx-auto leading-relaxed font-medium">
              Complete pet care coverage through{" "}
              <span className="text-blue-600 dark:text-blue-400 font-bold relative">text, mobile, and video<span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500/30" aria-hidden="true" /></span>
            </p>
          </div>
        </div>

        {/* AI Video Veterinarian - Top Card */}
        <div className="mb-12 animate-slide-up">
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden group hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl" aria-hidden="true" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-white/20 to-transparent rounded-full blur-2xl" aria-hidden="true" />
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                {/* Icon and Title */}
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-white/20 to-white/10 rounded-3xl flex items-center justify-center shadow-xl backdrop-blur-sm">
                    <Video className="w-10 h-10 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-black mb-2">AI Video Veterinarian</h3>
                    <p className="text-blue-100 text-lg font-medium">
                      Our AI can assess and analyze your pet through video calls and phone
                    </p>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                {videoFeatures.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 group/item"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-white" aria-hidden="true" />
                    </div>
                    <span className="text-white font-medium text-sm leading-tight">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="mt-8 text-center">
                <p className="text-blue-100 italic text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
                  "Simply show your pet's issue in their paws to the camera - our AI instantly analyzes and provides health insights"
                </p>
                <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group">
                  <Video className="w-5 h-5 inline mr-2 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                  Start Video Assessment
                  <ArrowRight className="w-5 h-5 inline ml-2 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dr. Paw AI and Marcia AI - Bottom Grid */}
        <div className="grid lg:grid-cols-2 gap-8 animate-slide-in-left">
          {/* Dr. Paw AI */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-200 dark:border-slate-700 relative overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-900/20 rounded-3xl" aria-hidden="true" />
            
            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Brain className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-slate-200">Dr. Paw AI</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-bold text-lg">Web & App Assistant</p>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                {drPawFeatures.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 group/item"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-4 rounded-2xl font-bold text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group">
                  <MessageSquare className="w-5 h-5 inline mr-2 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                  Chat with Dr. Paw
                  <ArrowRight className="w-5 h-5 inline ml-2 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          {/* Marcia AI */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-200 dark:border-slate-700 relative overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent dark:from-purple-900/20 rounded-3xl" aria-hidden="true" />
            
            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Phone className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-slate-200">Marcia AI</h3>
                  <p className="text-purple-600 dark:text-purple-400 font-bold text-lg">Phone, Text & MMS</p>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                {marciaFeatures.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 group/item"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-800 dark:to-purple-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400" aria-hidden="true" />
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-4 rounded-2xl font-bold text-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group">
                  <Phone className="w-5 h-5 inline mr-2 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                  Text Marcia AI
                  <ArrowRight className="w-5 h-5 inline ml-2 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl" aria-hidden="true" />
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-black mb-4">All features included with your free trial</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Experience the future of pet care with both AI assistants working together for your pet's health
              </p>
              <button className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-xl hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group">
                <Sparkles className="w-6 h-6 inline mr-3 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                Start Free Trial - Get Both AIs
                <ArrowRight className="w-6 h-6 inline ml-3 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}