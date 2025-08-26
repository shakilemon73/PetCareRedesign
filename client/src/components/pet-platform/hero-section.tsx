import { useState } from "react";
import { Rocket, MessageCircle, Check, Shield, Heart, Star, Zap, ArrowRight, Sparkles, Award, Users, Clock, Video, Smartphone, Bot, Calendar, HelpCircle } from "lucide-react";
import InteractiveChat from "./interactive-chat";
import AppointmentBooking from "./appointment-booking";
import TrialSignupFlow from "./trial-signup-flow";
import QuickActionsDock from "./quick-actions-dock";
import ContextualGuidance from "./contextual-guidance";
import TaskFlowWizard from "./task-flow-wizard";

export default function PetHeroSection() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isTrialSignupOpen, setIsTrialSignupOpen] = useState(false);
  const [isTaskWizardOpen, setIsTaskWizardOpen] = useState(false);

  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30"
      aria-labelledby="hero-heading"
      role="banner"
    >
      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50">Skip to main content</a>
      
      {/* Modern Background Elements */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(99,102,241,0.1)_1px,transparent_0)] bg-[length:50px_50px]" />
        
        {/* Floating Orbs - Optimized */}
        <div className="hidden lg:block absolute top-20 left-20 w-48 h-48 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-xl animate-pulse-slow" />
        <div className="hidden lg:block absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-lg animate-pulse-slow" style={{ animationDelay: '2s' }} />
        
        {/* Geometric Shapes - Minimal */}
        <div className="hidden xl:block absolute top-1/4 right-1/4 w-3 h-3 bg-primary-500/40 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="hidden xl:block absolute bottom-1/3 left-1/3 w-4 h-4 bg-success-500/40 rounded-full animate-pulse-slow" style={{ animationDelay: '3s' }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 py-24 sm:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content Section - World-Class Typography & Spacing - 60% on desktop */}
          <div className="space-y-10 sm:space-y-12 animate-fade-in lg:flex-[3]">
            
            {/* Status Badge - Redesigned for Gen-Z */}
            <div 
              className="inline-flex items-center glass-modern px-6 py-3 rounded-full shadow-lg animate-scale-in"
              role="status"
              aria-label="24/7 AI Veterinary Support is currently live"
            >
              <div className="flex items-center gap-3">
                <div className="relative" aria-hidden="true">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-3 h-3 bg-emerald-500 rounded-full animate-ping" />
                </div>
                <span className="text-sm font-bold text-gray-800">24/7 AI Veterinary Support</span>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-600 animate-pulse" aria-hidden="true" />
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">LIVE NOW</span>
                </div>
              </div>
            </div>

            {/* Main Headline - Gen-Z Focused Design */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 
                  id="hero-heading"
                  className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.9] tracking-tight"
                >
                  <span className="text-gray-900">Complete Pet Care</span>
                  <br />
                  <span className="text-gray-900">Platform - </span>
                  <span className="gradient-text-primary">Powered by</span>
                  <br />
                  <span className="gradient-text-primary">Veterinary AI</span>
                </h1>
                
                <div className="text-xl sm:text-2xl lg:text-3xl text-gray-700 leading-relaxed font-medium max-w-4xl hero-text-balance">
                  Complete pet care coverage through{" "}
                  <span className="font-bold text-purple-600 relative">
                    text, mobile, and video
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-60" />
                  </span>{" "}
                  with{" "}
                  <span className="font-bold text-emerald-600 relative">
                    revolutionary automation
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full opacity-60" />
                  </span>
                  . Ready to transform your pet's healthcare?
                </div>
              </div>

              {/* Social Proof - Modern Design */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6" role="group" aria-label="Customer testimonials">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3" aria-hidden="true">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 border-3 border-white shadow-lg" />
                    ))}
                  </div>
                  <div className="text-left">
                    <div className="text-lg font-bold text-gray-900">50,000+</div>
                    <div className="text-sm text-gray-600">Happy Pet Parents</div>
                  </div>
                </div>
                <div className="flex items-center gap-2" role="img" aria-label="4.9 out of 5 stars rating">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                    ))}
                  </div>
                  <span className="text-lg font-bold text-gray-900">4.9/5</span>
                  <span className="text-sm text-gray-600">(12k+ reviews)</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Gen-Z Design with Strong CTAs */}
            <div className="space-y-8">
              <div className="hero-button-group">
                <button 
                  onClick={() => setIsTrialSignupOpen(true)}
                  data-testid="button-start-free-trial"
                  className="btn-genz-primary group focus-ring"
                  type="button"
                  aria-describedby="trial-description"
                >
                  <Rocket className="w-6 h-6 group-hover:rotate-12 transition-all duration-300" aria-hidden="true" />
                  <span>Start Free Trial - No Card Required</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-all duration-300" aria-hidden="true" />
                </button>
                <button 
                  onClick={() => setIsBookingOpen(true)}
                  data-testid="button-book-appointment"
                  className="btn-genz-secondary group focus-ring"
                  type="button"
                  aria-describedby="book-appointment-description"
                >
                  <Calendar className="w-6 h-6 group-hover:scale-110 transition-all duration-300" aria-hidden="true" />
                  <span>Book Appointment</span>
                </button>
              </div>
              
              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={() => setIsChatOpen(true)}
                  data-testid="button-chat-dr-paw"
                  className="btn-genz-tertiary group focus-ring"
                  type="button"
                  aria-label="Start a chat conversation with Dr. Paw AI assistant"
                >
                  <Bot className="w-5 h-5 group-hover:scale-110 transition-all duration-300" aria-hidden="true" />
                  <span>Chat with Dr. Paw AI</span>
                </button>
                <button 
                  onClick={() => setIsTaskWizardOpen(true)}
                  data-testid="button-task-wizard"
                  className="btn-genz-tertiary group focus-ring"
                  type="button"
                  aria-label="Get guided help for common tasks"
                >
                  <HelpCircle className="w-5 h-5 group-hover:scale-110 transition-all duration-300" aria-hidden="true" />
                  <span>Need Help?</span>
                </button>
              </div>
              
              {/* Trust Indicators - Modern Grid Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" role="list" aria-label="Service benefits">
                <div className="card-feature group" role="listitem">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                      <Check className="w-6 h-6 text-emerald-600" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">No Card Required</div>
                      <div className="text-sm text-gray-600">Start instantly</div>
                    </div>
                  </div>
                </div>
                <div className="card-feature group" role="listitem">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                      <Clock className="w-6 h-6 text-purple-600" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">24/7 Support</div>
                      <div className="text-sm text-gray-600">Always available</div>
                    </div>
                  </div>
                </div>
                <div className="card-feature group" role="listitem">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <Shield className="w-6 h-6 text-blue-600" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">HIPAA Compliant</div>
                      <div className="text-sm text-gray-600">Secure & private</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Section - Modern AI Interface Preview - 40% on desktop */}
          <div className="animate-slide-in-right lg:flex-[2]">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Main Chat Interface Preview */}
              <div className="card-modern max-w-md mx-auto">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Dr. Paw AI</div>
                      <div className="text-sm text-emerald-600 flex items-center gap-1">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                        Online now
                      </div>
                    </div>
                  </div>
                  
                  {/* Chat Messages */}
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex-shrink-0" />
                      <div className="bg-gray-100 rounded-2xl rounded-bl-md px-4 py-3 max-w-xs">
                        <p className="text-sm text-gray-800">Hi! I'm Dr. Paw. What's concerning you about your pet today?</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 justify-end">
                      <div className="bg-purple-500 rounded-2xl rounded-br-md px-4 py-3 max-w-xs">
                        <p className="text-sm text-white">My dog has been limping since yesterday</p>
                      </div>
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0" />
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex-shrink-0" />
                      <div className="bg-gray-100 rounded-2xl rounded-bl-md px-4 py-3 max-w-xs">
                        <p className="text-sm text-gray-800">I can help! Can you tell me which leg and if there's any swelling?</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Input Area */}
                  <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
                    <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-500">
                      Type your message...
                    </div>
                    <button className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements - Simplified for better mobile experience */}
              <div className="hidden lg:block absolute -top-4 -right-4 glass-modern rounded-2xl p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-purple-600" />
                  <span className="text-xs font-medium text-gray-800">Video Calls</span>
                </div>
              </div>
              
              <div className="hidden lg:block absolute -bottom-4 -left-4 glass-modern rounded-2xl p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-medium text-gray-800">Mobile Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content landmark for skip link */}
      <div id="main-content" className="sr-only">Main content starts after hero section</div>

      <InteractiveChat 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
      />
      <AppointmentBooking 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
      <TrialSignupFlow 
        isOpen={isTrialSignupOpen} 
        onClose={() => setIsTrialSignupOpen(false)} 
      />
      <TaskFlowWizard 
        isOpen={isTaskWizardOpen} 
        onClose={() => setIsTaskWizardOpen(false)}
        onOpenChat={() => setIsChatOpen(true)}
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenTrial={() => setIsTrialSignupOpen(true)}
      />
      <QuickActionsDock 
        onOpenChat={() => setIsChatOpen(true)}
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenTrial={() => setIsTrialSignupOpen(true)}
      />
      <ContextualGuidance 
        onOpenChat={() => setIsChatOpen(true)}
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenTrial={() => setIsTrialSignupOpen(true)}
      />
    </section>
  );
}