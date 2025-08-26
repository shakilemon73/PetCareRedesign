import { usePlatform } from "@/hooks/use-platform";
import PlatformToggle from "@/components/platform-toggle";
import PetNavigation from "@/components/pet-platform/navigation";
import VetNavigation from "@/components/vet-platform/navigation";
import PetHeroSection from "@/components/pet-platform/hero-section";
import VetHeroSection from "@/components/vet-platform/hero-section";
import TrustIndicators from "@/components/shared/trust-indicators";
import PetPricingSection from "@/components/pet-platform/pricing-section";
import ConsolidatedAiSection from "@/components/pet-platform/consolidated-ai-section";
import PetEmergencySection from "@/components/pet-platform/emergency-section";
import PetFeaturesSection from "@/components/pet-platform/features-section";
import VetAiToolsSection from "@/components/vet-platform/ai-tools-section";
import VetDemoSection from "@/components/vet-platform/demo-section";
import VetFeaturesSection from "@/components/vet-platform/features-section";
import Footer from "@/components/shared/footer";
import { ArrowRight, Play, Check, Star } from "lucide-react";

export default function Home() {
  const { currentPlatform } = usePlatform();

  return (
    <div className="min-h-screen bg-background">
      <PlatformToggle />
      
      {currentPlatform === 'pet' ? (
        <>
          <PetNavigation />
          <PetHeroSection />
          <TrustIndicators />
          <PetEmergencySection />
          <PetPricingSection />
          <PetFeaturesSection />
          <ConsolidatedAiSection />
          <section className="space-section bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 text-white relative overflow-hidden">
            {/* Modern Background Elements */}
            <div className="absolute inset-0" aria-hidden="true">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]" />
              <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-20 right-20 w-48 h-48 bg-emerald-500/20 rounded-full blur-2xl" />
            </div>
            
            <div className="max-w-6xl mx-auto text-center px-6 sm:px-8 lg:px-12 relative z-10">
              <div className="space-y-8">
                {/* Headline */}
                <div className="space-y-4">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display leading-tight">
                    Ready to Transform Your
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-emerald-400">
                      Pet's Healthcare?
                    </span>
                  </h2>
                  <p className="text-xl sm:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed font-medium">
                    Join thousands of pet parents who've discovered stress-free, affordable pet care with our AI-powered platform
                  </p>
                </div>
                
                {/* Enhanced CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <button 
                    data-testid="button-start-trial"
                    className="group bg-white text-purple-600 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 min-w-[280px] sm:min-w-[320px] flex items-center justify-center gap-3"
                  >
                    <span>Start Free Trial - No Card Required</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    data-testid="button-watch-demo"
                    className="group border-2 border-white/80 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 min-w-[280px] sm:min-w-[320px] flex items-center justify-center gap-3 backdrop-blur-sm"
                  >
                    <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    <span>Watch 2-Min Demo</span>
                  </button>
                </div>
                
                {/* Trust Indicators */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center gap-3 text-purple-100">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="font-medium">Instant access to Dr. Paw & Marcia AI</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-purple-100">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="font-medium">Cancel anytime, no commitments</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-purple-100">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="font-medium">HIPAA compliant & secure</span>
                  </div>
                </div>
                
                {/* Social Proof */}
                <div className="pt-8 border-t border-white/20">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-purple-100">
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        {[1,2,3,4,5].map((i) => (
                          <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 border-2 border-white" />
                        ))}
                      </div>
                      <span className="font-semibold">50,000+ happy families</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map((i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="ml-2 font-semibold">4.9/5 (12k+ reviews)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          <VetNavigation />
          <VetHeroSection />
          <VetAiToolsSection />
          <VetDemoSection />
          <VetFeaturesSection />
          <section className="py-20 bg-gradient-to-br from-primary-500 to-indigo-600 text-white">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2 text-sm font-medium mb-6">
                <i className="fas fa-rocket mr-2"></i>
                Launching 2025
              </div>
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Practice?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join the waitlist and be among the first to experience the future of veterinary technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button 
                  data-testid="button-join-waitlist"
                  className="bg-white text-primary-500 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                >
                  Join Waitlist - Early Access
                </button>
                <button 
                  data-testid="button-schedule-demo"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-500 transition-colors"
                >
                  Schedule Demo
                </button>
              </div>
              <div className="flex items-center justify-center space-x-6 text-sm opacity-75">
                <span className="flex items-center">
                  <i className="fas fa-check mr-1"></i>Free for early adopters
                </span>
                <span className="flex items-center">
                  <i className="fas fa-check mr-1"></i>No credit card required
                </span>
                <span className="flex items-center">
                  <i className="fas fa-check mr-1"></i>Launch priority access
                </span>
              </div>
            </div>
          </section>
        </>
      )}
      
      <Footer />
    </div>
  );
}
