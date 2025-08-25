import { usePlatform } from "@/hooks/use-platform";
import PlatformToggle from "@/components/platform-toggle";
import PetNavigation from "@/components/pet-platform/navigation";
import VetNavigation from "@/components/vet-platform/navigation";
import PetHeroSection from "@/components/pet-platform/hero-section";
import VetHeroSection from "@/components/vet-platform/hero-section";
import TrustIndicators from "@/components/shared/trust-indicators";
import PetPricingSection from "@/components/pet-platform/pricing-section";
import TwoPowerfulAiAssistantsSection from "@/components/pet-platform/two-powerful-ai-assistants-section";
import AiAgentsHandleEverythingSection from "@/components/pet-platform/ai-agents-handle-everything-section";
import PetEmergencySection from "@/components/pet-platform/emergency-section";
import PetFeaturesSection from "@/components/pet-platform/features-section";
import VetAiToolsSection from "@/components/vet-platform/ai-tools-section";
import VetDemoSection from "@/components/vet-platform/demo-section";
import VetFeaturesSection from "@/components/vet-platform/features-section";
import Footer from "@/components/shared/footer";

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
          <PetPricingSection />
          <TwoPowerfulAiAssistantsSection />
          <AiAgentsHandleEverythingSection />
          <PetFeaturesSection />
          <PetEmergencySection />
          <section className="py-20 bg-gradient-to-br from-primary-500 to-success-500 text-white">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Pet's Healthcare?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of pet parents who've discovered stress-free, affordable pet care
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button 
                  data-testid="button-start-trial"
                  className="bg-white text-primary-500 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial - No Card Required
                </button>
                <button 
                  data-testid="button-watch-demo"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-500 transition-colors"
                >
                  Watch Demo
                </button>
              </div>
              <div className="flex items-center justify-center space-x-6 text-sm opacity-75">
                <span className="flex items-center">
                  <i className="fas fa-check mr-1"></i>Instant access to Dr. Paw & Marcia AI
                </span>
                <span className="flex items-center">
                  <i className="fas fa-check mr-1"></i>Cancel anytime
                </span>
                <span className="flex items-center">
                  <i className="fas fa-check mr-1"></i>HIPAA compliant
                </span>
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
