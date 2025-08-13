export default function PetNavigation() {
  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <i className="fas fa-paw text-primary-500 text-2xl mr-2"></i>
              <span className="text-xl font-bold text-gray-900">Crest</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#features" className="text-gray-600 hover:text-primary-500 font-medium transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-primary-500 font-medium transition-colors">
                Pricing
              </a>
              <a href="#ai-assistant" className="text-gray-600 hover:text-primary-500 font-medium transition-colors">
                Dr. Paw AI
              </a>
              <a href="#emergency" className="text-gray-600 hover:text-primary-500 font-medium transition-colors">
                Emergency
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              data-testid="button-sign-in"
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              Sign In
            </button>
            <button 
              data-testid="button-get-started"
              className="bg-primary-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-600 transition-colors"
            >
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
