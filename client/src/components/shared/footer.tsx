import { Heart, Shield, Award, Mail, Phone, MapPin, ArrowRight, ExternalLink } from "lucide-react";
import { SiX, SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-background to-muted/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10 py-20">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-8">
            <div className="flex items-center group">
              <div className="relative">
                <Heart className="w-10 h-10 text-primary-500 fill-current group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-success-500 rounded-full animate-pulse-slow" />
              </div>
              <span className="ml-3 text-3xl font-bold text-foreground font-display">Crest</span>
              <div className="ml-3 px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm font-bold rounded-full">
                Next-Gen Pet Care
              </div>
            </div>
            
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              Revolutionary pet care platform powered by AI. Making veterinary care{" "}
              <span className="text-primary-600 font-semibold">accessible</span> and{" "}
              <span className="text-success-600 font-semibold">affordable</span> for everyone.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
                <Shield className="w-4 h-4 text-primary-500" />
                <span className="text-sm font-semibold text-foreground">HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
                <Award className="w-4 h-4 text-success-500" />
                <span className="text-sm font-semibold text-foreground">SOC 2 Certified</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-12 h-12 glass rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group" 
                data-testid="link-twitter"
              >
                <SiX className="w-5 h-5 text-muted-foreground group-hover:text-primary-500" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 glass rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group" 
                data-testid="link-facebook"
              >
                <SiFacebook className="w-5 h-5 text-muted-foreground group-hover:text-primary-500" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 glass rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group" 
                data-testid="link-instagram"
              >
                <SiInstagram className="w-5 h-5 text-muted-foreground group-hover:text-primary-500" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 glass rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group" 
                data-testid="link-linkedin"
              >
                <SiLinkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary-500" />
              </a>
            </div>
          </div>
          {/* Pet Parents Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground font-display">Pet Parents</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary-500 transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group" data-testid="link-find-care">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Find Care
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-500 transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group" data-testid="link-ai-assistant">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Dr. Paw AI
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emergency-500 transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group" data-testid="link-emergency-help">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Emergency Help
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-success-500 transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group" data-testid="link-health-tracking">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Health Tracking
                </a>
              </li>
            </ul>
          </div>

          {/* Veterinarians Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground font-display">Veterinarians</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-indigo-500 transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group" data-testid="link-ai-tools">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  AI Tools
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-500 transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group" data-testid="link-practice-management">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Practice Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-success-500 transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group" data-testid="link-join-waitlist-footer">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Early Access
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-warning-500 transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group" data-testid="link-demo">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Live Demo
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Enhanced Footer Bottom */}
        <div className="border-t border-border mt-16 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground">
                &copy; 2024 Crest Advisory Group LLC. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-2 text-sm">
                <a href="#" className="text-muted-foreground hover:text-primary-500 transition-colors" data-testid="link-privacy">
                  Privacy Policy
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary-500 transition-colors" data-testid="link-terms">
                  Terms of Service
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary-500 transition-colors" data-testid="link-contact">
                  Contact
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-500" />
                <span>hello@crestpet.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-success-500" />
                <span>1-800-CREST-PET</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
