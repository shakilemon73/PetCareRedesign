export default function PetPricingSection() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Stop Overpaying for Pet Care
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our dynamic pricing model connects you with available clinics, delivering massive savings 
            without compromising on quality care.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Real Member Savings</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div data-testid="savings-dental" className="text-center p-6 bg-success-50 rounded-xl">
              <div className="text-3xl font-bold text-gray-400 line-through mb-2">$420</div>
              <div className="text-4xl font-bold text-success-600 mb-2">$84</div>
              <div className="text-sm font-medium text-gray-700 mb-2">Dental Cleaning</div>
              <div className="inline-flex items-center bg-success-100 text-success-800 px-3 py-1 rounded-full text-sm font-medium">
                80% OFF
              </div>
            </div>
            <div data-testid="savings-wellness" className="text-center p-6 bg-primary-50 rounded-xl">
              <div className="text-3xl font-bold text-gray-400 line-through mb-2">$200</div>
              <div className="text-4xl font-bold text-primary-600 mb-2">$60</div>
              <div className="text-sm font-medium text-gray-700 mb-2">Wellness Exam</div>
              <div className="inline-flex items-center bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                70% OFF
              </div>
            </div>
            <div data-testid="savings-vaccinations" className="text-center p-6 bg-warning-50 rounded-xl">
              <div className="text-3xl font-bold text-gray-400 line-through mb-2">$150</div>
              <div className="text-4xl font-bold text-warning-600 mb-2">$45</div>
              <div className="text-sm font-medium text-gray-700 mb-2">Vaccinations</div>
              <div className="inline-flex items-center bg-warning-100 text-warning-800 px-3 py-1 rounded-full text-sm font-medium">
                70% OFF
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <button 
              data-testid="button-calculate-savings"
              className="bg-gradient-to-r from-primary-500 to-success-500 text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              Calculate Your Savings
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-search text-primary-500 text-xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Find Available Clinics</h3>
            <p className="text-gray-600">Our AI matches you with nearby clinics that have immediate availability</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-calculator text-success-500 text-xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Dynamic Pricing</h3>
            <p className="text-gray-600">Get discounted rates based on clinic capacity and your flexible scheduling</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-warning-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-heart text-warning-500 text-xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Care</h3>
            <p className="text-gray-600">Same licensed vets, same quality care—just at prices that make sense</p>
          </div>
        </div>
      </div>
    </section>
  );
}
