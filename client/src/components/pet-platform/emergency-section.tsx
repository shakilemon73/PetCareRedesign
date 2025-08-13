export default function PetEmergencySection() {
  return (
    <section id="emergency" className="py-20 bg-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <i className="fas fa-exclamation-triangle mr-2"></i>
            Emergency Support
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Pet Emergency? We're Here to Help</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get immediate guidance for pet emergencies. Our AI can help you determine if you need 
            emergency care or if it can wait for regular appointment.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-phone text-red-500 text-xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Immediate Emergency</h3>
            <p className="text-gray-600 mb-6">
              Life-threatening situations requiring immediate veterinary attention
            </p>
            <button 
              data-testid="button-emergency-call"
              className="w-full bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition-colors"
            >
              Call Emergency Line
            </button>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-comments text-yellow-500 text-xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Urgent Question</h3>
            <p className="text-gray-600 mb-6">
              Not sure if it's an emergency? Chat with Dr. Paw for immediate assessment
            </p>
            <button 
              data-testid="button-chat-emergency"
              className="w-full bg-yellow-500 text-white py-3 rounded-xl font-semibold hover:bg-yellow-600 transition-colors"
            >
              Chat with Dr. Paw
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
