export default function PetFeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need for Pet Care</h2>
          <p className="text-xl text-gray-600">Comprehensive care in one simple platform</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-primary-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mb-4">
              <i className="fas fa-calendar-check text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Instant Booking</h3>
            <p className="text-gray-600">Book appointments in 60 seconds. No phone calls, no waiting on hold.</p>
          </div>
          <div className="bg-success-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-success-500 rounded-xl flex items-center justify-center mb-4">
              <i className="fas fa-chart-line text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Health Tracking</h3>
            <p className="text-gray-600">Monitor your pet's health with digital records and AI-powered insights.</p>
          </div>
          <div className="bg-warning-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-warning-500 rounded-xl flex items-center justify-center mb-4">
              <i className="fas fa-pills text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Medication Management</h3>
            <p className="text-gray-600">Never miss a dose with smart reminders and refill notifications.</p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
              <i className="fas fa-users text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Family Sharing</h3>
            <p className="text-gray-600">Multiple family members can access and manage pet health together.</p>
          </div>
          <div className="bg-indigo-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center mb-4">
              <i className="fas fa-shield-alt text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Secure & Private</h3>
            <p className="text-gray-600">HIPAA-compliant platform with end-to-end encryption for peace of mind.</p>
          </div>
          <div className="bg-pink-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center mb-4">
              <i className="fas fa-mobile-alt text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile First</h3>
            <p className="text-gray-600">Designed for your phone but works perfectly on any device.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
