export default function PetHeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-success-50 pt-20 pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center bg-white rounded-full px-4 py-2 shadow-sm mb-6">
              <span className="w-2 h-2 bg-success-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-medium text-gray-700">24/7 AI Support Available</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Pet Care Without the <span className="gradient-text">Stress</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Get 24/7 AI veterinary support, instant appointments, and save up to 80% on pet care. 
              Because your furry family deserves the best—without breaking the bank.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                data-testid="button-start-free-trial"
                className="bg-primary-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <i className="fas fa-rocket mr-2"></i>Start Free Trial
              </button>
              <button 
                data-testid="button-chat-dr-paw"
                className="bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors border border-gray-200"
              >
                <i className="fas fa-comments mr-2"></i>Chat with Dr. Paw
              </button>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <span className="flex items-center">
                <i className="fas fa-check text-success-500 mr-1"></i>No card required
              </span>
              <span className="flex items-center">
                <i className="fas fa-check text-success-500 mr-1"></i>Cancel anytime
              </span>
              <span className="flex items-center">
                <i className="fas fa-shield-alt text-primary-500 mr-1"></i>HIPAA compliant
              </span>
            </div>
          </div>
          <div className="relative animate-slide-up">
            <img 
              src="https://images.unsplash.com/photo-1551717743-49959800b1f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Happy pet parent using Crest app" 
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-success-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Dr. Paw is online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
