export default function VetFeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Built for Modern Veterinary Practices</h2>
          <p className="text-xl text-gray-600">Every feature designed to help you deliver better care while saving time</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mb-4">
              <i className="fas fa-brain text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Powered Consultations</h3>
            <p className="text-gray-600">Leverage advanced AI to enhance consultation quality, automate documentation, and provide real-time clinical insights.</p>
          </div>
          <div className="bg-gradient-to-br from-success-50 to-green-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-success-500 rounded-xl flex items-center justify-center mb-4">
              <i className="fas fa-calendar-alt text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Scheduling</h3>
            <p className="text-gray-600">Optimize appointments with AI-driven capacity management and automated waitlist handling.</p>
          </div>
          <div className="bg-gradient-to-br from-warning-50 to-yellow-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-warning-500 rounded-xl flex items-center justify-center mb-4">
              <i className="fas fa-file-alt text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Auto Documentation</h3>
            <p className="text-gray-600">Generate comprehensive notes with a single click using voice recognition and AI transcription.</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
              <i className="fas fa-chart-bar text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Practice Analytics</h3>
            <p className="text-gray-600">Real-time insights into performance, patient trends, and revenue optimization with predictive analytics.</p>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mb-4">
              <i className="fas fa-user-md text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Clinical Support</h3>
            <p className="text-gray-600">Evidence-based recommendations in real-time with access to veterinary databases and research.</p>
          </div>
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center mb-4">
              <i className="fas fa-mobile-alt text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile First</h3>
            <p className="text-gray-600">Access your practice anywhere, anytime with native mobile apps and responsive web interface.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
