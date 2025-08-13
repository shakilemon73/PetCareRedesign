export default function TrustIndicators() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by 50,000+ Pet Parents</h2>
          <p className="text-gray-600">Join the community that's revolutionizing pet care</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          <div className="text-center">
            <div data-testid="stat-pet-parents" className="text-3xl font-bold text-primary-500 mb-2">50,000+</div>
            <div className="text-sm text-gray-600">Happy Pet Parents</div>
          </div>
          <div className="text-center">
            <div data-testid="stat-clinics" className="text-3xl font-bold text-success-500 mb-2">100+</div>
            <div className="text-sm text-gray-600">Partner Clinics</div>
          </div>
          <div className="text-center">
            <div data-testid="stat-savings" className="text-3xl font-bold text-warning-500 mb-2">80%</div>
            <div className="text-sm text-gray-600">Average Savings</div>
          </div>
          <div className="text-center">
            <div data-testid="stat-support" className="text-3xl font-bold text-primary-500 mb-2">24/7</div>
            <div className="text-sm text-gray-600">AI Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
