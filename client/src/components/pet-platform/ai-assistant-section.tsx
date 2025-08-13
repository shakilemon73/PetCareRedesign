export default function PetAiAssistantSection() {
  return (
    <section id="ai-assistant" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Meet Dr. Paw, Your AI Veterinary Assistant
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get instant answers to pet health questions, 24/7. Dr. Paw uses advanced AI to provide 
              reliable guidance and knows when you need to see a real vet.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-success-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-white text-xs"></i>
                </div>
                <span className="text-gray-700">Instant symptom assessment</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-success-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-white text-xs"></i>
                </div>
                <span className="text-gray-700">Emergency triage and guidance</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-success-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-white text-xs"></i>
                </div>
                <span className="text-gray-700">Medication reminders and tracking</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-success-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-white text-xs"></i>
                </div>
                <span className="text-gray-700">Personalized care recommendations</span>
              </div>
            </div>
            <button 
              data-testid="button-try-dr-paw"
              className="bg-primary-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-600 transition-colors"
            >
              Try Dr. Paw Now
            </button>
          </div>
          <div className="relative">
            <div data-testid="ai-chat-mockup" className="bg-white rounded-2xl shadow-2xl p-6 max-w-md mx-auto">
              <div className="flex items-center space-x-3 mb-6 pb-4 border-b">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-success-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-robot text-white"></i>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Dr. Paw</div>
                  <div className="text-sm text-success-500 flex items-center">
                    <div className="w-2 h-2 bg-success-500 rounded-full mr-1 animate-pulse"></div>
                    Online
                  </div>
                </div>
              </div>
              <div className="space-y-4 mb-4">
                <div className="bg-gray-100 rounded-2xl p-3 text-sm">
                  Hi! I'm Dr. Paw. How can I help your pet today? 🐾
                </div>
                <div className="bg-primary-500 text-white rounded-2xl p-3 text-sm ml-8">
                  My dog seems to be limping on his front paw
                </div>
                <div className="bg-gray-100 rounded-2xl p-3 text-sm">
                  I understand your concern. Let me ask a few questions to help assess the situation:
                  <br /><br />
                  1. When did you first notice the limping?
                  <br />
                  2. Is your dog putting any weight on the paw?
                  <br />
                  3. Any visible swelling or cuts?
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <input 
                  type="text" 
                  placeholder="Type your response..." 
                  className="flex-1 border border-gray-200 rounded-full px-4 py-2 text-sm"
                  data-testid="input-chat-message"
                />
                <button 
                  data-testid="button-send-message"
                  className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center"
                >
                  <i className="fas fa-paper-plane text-white text-xs"></i>
                </button>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-success-500 text-white p-3 rounded-xl shadow-lg animate-bounce-gentle">
              <div className="text-sm font-medium">Available 24/7</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
