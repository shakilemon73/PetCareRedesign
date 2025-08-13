import { useState } from 'react';

type DemoType = 'phone' | 'text' | 'insurance' | 'lab';

export default function VetDemoSection() {
  const [activeDemo, setActiveDemo] = useState<DemoType>('phone');

  return (
    <section id="demo" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">See AI Agents in Action</h2>
          <p className="text-xl text-gray-600">Click through real scenarios to see how Crest's AI handles common veterinary tasks</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            <button
              data-testid="button-demo-phone"
              onClick={() => setActiveDemo('phone')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeDemo === 'phone'
                  ? 'bg-primary-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <i className="fas fa-phone mr-2"></i>Phone Call
            </button>
            <button
              data-testid="button-demo-text"
              onClick={() => setActiveDemo('text')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeDemo === 'text'
                  ? 'bg-primary-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <i className="fas fa-sms mr-2"></i>Text Message
            </button>
            <button
              data-testid="button-demo-insurance"
              onClick={() => setActiveDemo('insurance')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeDemo === 'insurance'
                  ? 'bg-primary-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <i className="fas fa-file-medical mr-2"></i>Insurance Claim
            </button>
            <button
              data-testid="button-demo-lab"
              onClick={() => setActiveDemo('lab')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeDemo === 'lab'
                  ? 'bg-primary-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <i className="fas fa-vial mr-2"></i>Lab Results
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            {activeDemo === 'phone' && (
              <div data-testid="demo-phone-content">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">AI Phone Assistant Demo</h3>
                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="font-semibold text-blue-900 mb-2">Incoming Call</div>
                    <div className="text-blue-700">"Hi, I need to schedule an appointment for my dog Max"</div>
                  </div>
                  <div className="bg-primary-50 rounded-lg p-4">
                    <div className="font-semibold text-primary-900 mb-2">AI Assistant Response</div>
                    <div className="text-primary-700">"I'd be happy to help schedule an appointment for Max. Let me check our available slots..."</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-2">AI is accessing: Calendar system, Patient records, Doctor availability</div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white rounded p-3">
                        <div className="font-medium text-gray-900">Available Options</div>
                        <div className="text-sm text-gray-600 mt-1">Tomorrow at 2:30 PM with Dr. Johnson</div>
                        <div className="text-sm text-gray-600">Thursday at 10:00 AM with Dr. Chen</div>
                      </div>
                      <div className="bg-success-50 rounded p-3">
                        <div className="font-medium text-success-900">Appointment Confirmed</div>
                        <div className="text-sm text-success-700 mt-1">Max's appointment is scheduled for tomorrow at 2:30 PM</div>
                        <div className="flex space-x-4 mt-2 text-xs text-success-600">
                          <span>SMS sent</span>
                          <span>Calendar updated</span>
                          <span>Records updated</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeDemo === 'text' && (
              <div data-testid="demo-text-content">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Smart Text Messaging Demo</h3>
                <div className="bg-gray-100 rounded-lg p-6">
                  <div className="text-center text-gray-500 mb-4">Demo content for text messaging would be shown here</div>
                </div>
              </div>
            )}
            
            {activeDemo === 'insurance' && (
              <div data-testid="demo-insurance-content">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Insurance Automation Demo</h3>
                <div className="bg-gray-100 rounded-lg p-6">
                  <div className="text-center text-gray-500 mb-4">Demo content for insurance automation would be shown here</div>
                </div>
              </div>
            )}
            
            {activeDemo === 'lab' && (
              <div data-testid="demo-lab-content">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Lab Results Tracking Demo</h3>
                <div className="bg-gray-100 rounded-lg p-6">
                  <div className="text-center text-gray-500 mb-4">Demo content for lab results tracking would be shown here</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
