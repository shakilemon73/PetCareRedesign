export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <i className="fas fa-paw text-primary-400 text-2xl mr-2"></i>
              <span className="text-xl font-bold">Crest</span>
            </div>
            <p className="text-gray-400 mb-4">
              Revolutionary pet care platform powered by AI. Making veterinary care accessible and affordable for everyone.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="link-twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="link-facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="link-instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="link-linkedin">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Pet Parents</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-find-care">Find Care</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-ai-assistant">AI Assistant</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-emergency-help">Emergency Help</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-health-tracking">Health Tracking</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Veterinarians</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-ai-tools">AI Tools</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-practice-management">Practice Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-join-waitlist-footer">Join Waitlist</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-demo">Demo</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-help-center">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-contact">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-privacy">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-terms">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; 2024 Crest Advisory Group LLC. All rights reserved. • 
            <span className="text-primary-400"> HIPAA Compliant</span> • 
            <span className="text-success-400"> SOC 2 Certified</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
