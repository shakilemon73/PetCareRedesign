export default function VetNavigation() {
  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <i className="fas fa-stethoscope text-primary-500 text-2xl mr-2"></i>
              <span className="text-xl font-bold text-gray-900">Crest</span>
              <span className="ml-2 text-sm bg-primary-100 text-primary-800 px-2 py-1 rounded-full font-medium">.vet</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#features" className="text-gray-600 hover:text-primary-500 font-medium transition-colors">
                Features
              </a>
              <a href="#ai-tools" className="text-gray-600 hover:text-primary-500 font-medium transition-colors">
                AI Tools
              </a>
              <a href="#demo" className="text-gray-600 hover:text-primary-500 font-medium transition-colors">
                Demo
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-primary-500 font-medium transition-colors">
                Pricing
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              data-testid="button-vet-sign-in"
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              Sign In
            </button>
            <button 
              data-testid="button-vet-join-waitlist"
              className="bg-primary-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-600 transition-colors"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
