import { 
  Bot, Phone, FileText, Shield, Users, Building2, 
  ArrowRight, CheckCircle2, Zap, Clock, Heart, 
  Sparkles, MessageSquare, Mail, Calendar, 
  Database, CreditCard, Stethoscope, Award
} from "lucide-react";

export default function AiAgentsHandleEverythingSection() {
  const agentFeatures = [
    {
      icon: Phone,
      title: "Connect Your Past Vets",
      description: "AI calls and emails to retrieve medical records",
      details: "Our AI assistants act as your personal pet coordinators",
      color: "blue",
      bgColor: "from-blue-500 to-blue-600"
    },
    {
      icon: Shield,
      title: "Improved Claims", 
      description: "Connect to all top insurer providers",
      details: "Seamlessly integrates with your insurance",
      color: "green",
      bgColor: "from-green-500 to-green-600"
    },
    {
      icon: MessageSquare,
      title: "Text & Email Management",
      description: "Handles all vet communications on your behalf",
      details: "Never miss important updates or reminders",
      color: "purple",
      bgColor: "from-purple-500 to-purple-600"
    },
    {
      icon: Database,
      title: "Complete Record Transfer",
      description: "Coordinates all records in one place",
      details: "Comprehensive health history management",
      color: "orange",
      bgColor: "from-orange-500 to-orange-600"
    }
  ];

  const automationBenefits = [
    { icon: Clock, text: "24/7 automated coordination" },
    { icon: Bot, text: "AI handles complex workflows" },
    { icon: CheckCircle2, text: "Zero manual paperwork" },
    { icon: Heart, text: "Focus on your pet, not admin" }
  ];

  return (
    <section 
      id="ai-agents" 
      className="section-padding bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden"
      aria-labelledby="ai-agents-heading"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-stars-pattern opacity-20" aria-hidden="true" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse-slow" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} aria-hidden="true" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-8 animate-fade-in">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl shadow-xl animate-scale-in">
            <Bot className="w-6 h-6 mr-3 animate-pulse-slow" aria-hidden="true" />
            <span className="text-lg font-bold tracking-wide">Our AI assistants act as your personal pet coordinators</span>
          </div>
          
          <div className="space-y-6">
            <h2 
              id="ai-agents-heading"
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-300 to-purple-300 leading-tight tracking-tight"
            >
              AI Agents Handle{" "}
              <span className="relative inline-block">
                Everything For You
                <div className="absolute -bottom-3 left-0 right-0 h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full opacity-70 blur-sm" aria-hidden="true" />
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full" aria-hidden="true" />
              </span>
            </h2>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-blue-100 max-w-5xl mx-auto leading-relaxed font-medium">
              Our AI assistants act as your{" "}
              <span className="text-white font-bold relative">personal pet coordinators<span className="absolute bottom-0 left-0 w-full h-0.5 bg-white/30" aria-hidden="true" /></span>
            </p>
          </div>
        </div>

        {/* Agent Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 animate-slide-up">
          {agentFeatures.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} aria-hidden="true" />
              
              <div className="relative z-10 text-center space-y-6">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" aria-hidden="true" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-black text-white">{feature.title}</h3>
                  <p className="text-blue-100 font-medium leading-tight">{feature.description}</p>
                  <p className="text-sm text-blue-200 opacity-80 italic">{feature.details}</p>
                </div>

                {/* Hover Arrow */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowRight className="w-5 h-5 text-white mx-auto" aria-hidden="true" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Workflow Demonstration */}
        <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-white/20 mb-16 animate-slide-in-left">
          <div className="text-center mb-10">
            <h3 className="text-3xl sm:text-4xl font-black text-white mb-4">How It Works</h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              No more phone tag: Our AI handles all the tedious calls and paperwork while you focus on your pet
            </p>
          </div>

          {/* Workflow Steps */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto">
                <span className="text-white font-black text-xl">1</span>
              </div>
              <h4 className="text-xl font-bold text-white">AI Contacts Vets</h4>
              <p className="text-blue-100">Automatically reaches out to retrieve your pet's complete medical history</p>
            </div>

            <div className="text-center space-y-4 p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto">
                <span className="text-white font-black text-xl">2</span>
              </div>
              <h4 className="text-xl font-bold text-white">Records Organized</h4>
              <p className="text-blue-100">All records are digitized and organized in one secure, accessible platform</p>
            </div>

            <div className="text-center space-y-4 p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto">
                <span className="text-white font-black text-xl">3</span>
              </div>
              <h4 className="text-xl font-bold text-white">You're All Set</h4>
              <p className="text-blue-100">Complete health profile ready for instant AI consultations and care</p>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-fade-in">
          {automationBenefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <span className="text-white font-bold">{benefit.text}</span>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-scale-in">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl" aria-hidden="true" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-white/20 to-transparent rounded-full blur-2xl" aria-hidden="true" />
            
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-4">
                <Award className="w-5 h-5 text-white mr-2" aria-hidden="true" />
                <span className="text-white font-bold">Revolutionary Automation</span>
              </div>
              
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
                Let AI Handle the Work
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Stop spending hours on phone calls and paperwork. Our AI agents coordinate everything behind the scenes while you enjoy quality time with your pet.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-black text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group">
                  <Bot className="w-6 h-6 inline mr-3 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                  Activate AI Agents
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
      </div>
    </section>
  );
}