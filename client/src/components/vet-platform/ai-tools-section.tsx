export default function VetAiToolsSection() {
  return (
    <section id="ai-tools" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Your AI-Powered Veterinary Staff</h2>
          <p className="text-xl text-gray-600">Let intelligent agents handle routine tasks while your team focuses on patient care</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Intelligent Phone System</h3>
            <p className="text-lg text-gray-600 mb-6">
              AI receptionist handles appointment scheduling, prescription refills, and common inquiries 24/7. 
              Never miss a call again.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-success-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-white text-xs"></i>
                </div>
                <span>24/7 call handling and appointment booking</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-success-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-white text-xs"></i>
                </div>
                <span>Prescription refill automation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-success-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-white text-xs"></i>
                </div>
                <span>Emergency triage and routing</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div data-testid="phone-system-mockup" className="bg-gray-900 rounded-3xl p-8 text-white">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-4 text-sm opacity-75">Incoming Call</span>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="text-sm opacity-75 mb-1">Caller</div>
                  <div>"Hi, I need to schedule an appointment for my dog Max"</div>
                </div>
                <div className="bg-primary-600 rounded-lg p-4">
                  <div className="text-sm opacity-75 mb-1">AI Assistant</div>
                  <div>"I'd be happy to help schedule an appointment for Max. Let me check our available slots..."</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-3 text-sm">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse"></div>
                    <span>AI is accessing: Calendar system, Patient records, Doctor availability</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
              <i className="fas fa-comments text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Text Messaging</h3>
            <p className="text-gray-600 mb-4">Automated appointment reminders, follow-ups, and two-way conversations. Reduces no-shows by up to 80%.</p>
            <div className="text-sm text-blue-600 font-medium">90% of calls handled by AI</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4">
              <i className="fas fa-file-medical text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Insurance Automation</h3>
            <p className="text-gray-600 mb-4">AI handles pre-authorizations, claim submissions, and follow-ups. Get paid faster with less manual work.</p>
            <div className="text-sm text-green-600 font-medium">24/7 always available</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8">
            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
              <i className="fas fa-vial text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Test Results Tracking</h3>
            <p className="text-gray-600 mb-4">Never lose track of lab results again. AI monitors, organizes, and alerts you to critical findings instantly.</p>
            <div className="text-sm text-purple-600 font-medium">Real-time monitoring</div>
          </div>
        </div>
      </div>
    </section>
  );
}
