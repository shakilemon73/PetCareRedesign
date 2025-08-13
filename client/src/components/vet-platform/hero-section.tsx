export default function VetHeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-indigo-50 pt-20 pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-warning-100 text-warning-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <i className="fas fa-rocket mr-2"></i>
            Launching 2025 • Join the Waitlist
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            The Future of <span className="gradient-text">Veterinary Intelligence</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Transform your veterinary practice with AI-powered tools that save time, improve care, 
            and boost efficiency. Join the revolution in veterinary technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              data-testid="button-vet-watch-demo"
              className="bg-primary-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <i className="fas fa-play mr-2"></i>Watch Demo
            </button>
            <button 
              data-testid="button-vet-join-waitlist-hero"
              className="bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors border border-gray-200"
            >
              <i className="fas fa-list mr-2"></i>Join Waitlist
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div data-testid="stat-time-saved" className="text-4xl font-bold text-primary-500 mb-2">75%</div>
            <div className="text-sm text-gray-600">Time saved on documentation</div>
          </div>
          <div className="text-center">
            <div data-testid="stat-patients-daily" className="text-4xl font-bold text-success-500 mb-2">2x</div>
            <div className="text-sm text-gray-600">More patients seen daily</div>
          </div>
          <div className="text-center">
            <div data-testid="stat-satisfaction" className="text-4xl font-bold text-warning-500 mb-2">98%</div>
            <div className="text-sm text-gray-600">User satisfaction rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
