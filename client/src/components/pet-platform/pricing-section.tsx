import { useState } from "react";
import { Calculator, Search, Heart, TrendingDown, DollarSign, Sparkles, ArrowRight, Zap, Check, Star, Crown, Shield, Zap as Lightning, Clock, Users, Calendar } from "lucide-react";

export default function PetPricingSection() {
  const [selectedPlan, setSelectedPlan] = useState("premium");
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      id: "basic",
      name: "Basic Care",
      icon: Heart,
      color: "blue",
      popular: false,
      monthlyPrice: 29,
      annualPrice: 290,
      savings: "up to 50%",
      description: "Essential pet care for families on a budget",
      features: [
        "AI health monitoring",
        "Basic appointment booking",
        "Email support",
        "Monthly health reports",
        "Access to 500+ clinics"
      ]
    },
    {
      id: "premium",
      name: "Premium Care",
      icon: Star,
      color: "purple",
      popular: true,
      monthlyPrice: 59,
      annualPrice: 590,
      savings: "up to 70%",
      description: "Comprehensive care with priority features",
      features: [
        "Everything in Basic",
        "24/7 Dr. Paw AI assistance",
        "Priority booking",
        "Emergency support",
        "Family member access",
        "Medication reminders",
        "Custom health insights"
      ]
    },
    {
      id: "enterprise",
      name: "Family Plan",
      icon: Crown,
      color: "gold",
      popular: false,
      monthlyPrice: 99,
      annualPrice: 990,
      savings: "up to 80%",
      description: "Complete care for multiple pets & family",
      features: [
        "Everything in Premium",
        "Unlimited pets",
        "Concierge support",
        "Advanced analytics",
        "Custom care plans",
        "Specialist referrals",
        "Wellness programs"
      ]
    }
  ];

  const savings = [
    {
      id: "dental",
      service: "Dental Cleaning",
      traditional: "$420",
      crest: "$84",
      savings: "80%",
      color: "success"
    },
    {
      id: "wellness",
      service: "Wellness Exam", 
      traditional: "$200",
      crest: "$60",
      savings: "70%",
      color: "primary"
    },
    {
      id: "vaccinations",
      service: "Vaccinations",
      traditional: "$150", 
      crest: "$45",
      savings: "70%",
      color: "warning"
    }
  ];

  const features = [
    {
      icon: Search,
      title: "AI Clinic Matching",
      description: "Our intelligent system instantly finds nearby clinics with immediate availability for your pet's needs",
      color: "primary"
    },
    {
      icon: Calculator,
      title: "Dynamic Pricing",
      description: "Get real-time discounted rates based on clinic capacity and your flexible scheduling preferences",
      color: "success"
    },
    {
      icon: Heart,
      title: "Quality Guaranteed",
      description: "Same licensed veterinarians, same high-quality care—just at prices that actually make sense",
      color: "warning"
    }
  ];

  return (
    <section id="pricing" className="section-padding gradient-hero relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-dots-pattern opacity-10" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-success-500/8 rounded-full blur-3xl floating will-change-transform" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary-500/8 rounded-full blur-3xl floating-delayed will-change-transform" />
      
      <div className="container-custom relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20 space-y-8 animate-fade-in">
          <div className="inline-flex items-center glass-card px-8 py-4 shadow-strong animate-scale-in">
            <DollarSign className="w-6 h-6 text-success-500 mr-3" />
            <span className="text-base font-bold text-foreground">Revolutionary Savings</span>
            <Sparkles className="w-5 h-5 text-success-500 ml-3 animate-pulse-slow" />
          </div>
          
          <div className="space-y-6">
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
              Stop Overpaying for{" "}
              <span className="relative inline-block">
                <span className="gradient-text">Pet Care</span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-success-500 to-primary-500 rounded-full" />
              </span>
            </h2>
            
            <p className="text-2xl sm:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium">
              Dynamic pricing technology connects you with available clinics, delivering{" "}
              <span className="text-success-600 font-bold relative">up to 80% savings<span className="absolute bottom-0 left-0 w-full h-0.5 bg-success-500/30" /></span>{" "}
              without compromising on quality care
            </p>
          </div>

          {/* Trust Indicators Row */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-success-500 fill-current" />
              <span className="font-semibold">Same Quality Care</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary-500" />
              <span className="font-semibold">Instant Booking</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingDown className="w-5 h-5 text-success-500" />
              <span className="font-semibold">Maximum Savings</span>
            </div>
          </div>
        </div>

        {/* Real Savings Showcase */}
        <div className="glass-card shadow-strong mb-16 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground font-display mb-2">Real Member Savings</h3>
            <p className="text-muted-foreground">Actual prices paid by pet parents this month</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {savings.map((item, index) => (
              <div 
                key={item.id}
                data-testid={`savings-${item.id}`} 
                className={`glass-card ${item.color === 'success' ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' : item.color === 'primary' ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800' : 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800'} hover-lift group cursor-pointer`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <TrendingDown className="w-5 h-5 text-muted-foreground" />
                    <span className={`text-3xl font-bold text-muted-foreground line-through`}>
                      {item.traditional}
                    </span>
                  </div>
                  
                  <div className={`text-5xl font-bold ${item.color === 'success' ? 'text-green-600' : item.color === 'primary' ? 'text-blue-600' : 'text-orange-600'} mb-3 font-display group-hover:scale-110 transition-transform duration-300`}>
                    {item.crest}
                  </div>
                  
                  <div className="text-lg font-semibold text-foreground mb-3">{item.service}</div>
                  
                  <div className={`inline-flex items-center gap-2 ${item.color === 'success' ? 'bg-green-500' : item.color === 'primary' ? 'bg-blue-500' : 'bg-orange-500'} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}>
                    <Sparkles className="w-4 h-4" />
                    {item.savings}% OFF
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button 
              data-testid="button-calculate-savings"
              className="btn-primary group text-lg px-10 py-5 hover-glow"
            >
              <Calculator className="w-5 h-5" />
              Calculate Your Savings
              <Zap className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* How It Works */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center space-y-6 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`w-20 h-20 ${feature.color === 'success' ? 'bg-green-100 dark:bg-green-900/30' : feature.color === 'primary' ? 'bg-blue-100 dark:bg-blue-900/30' : 'bg-orange-100 dark:bg-orange-900/30'} rounded-3xl flex items-center justify-center mx-auto shadow-lg hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-10 h-10 ${feature.color === 'success' ? 'text-green-500' : feature.color === 'primary' ? 'text-blue-500' : 'text-orange-500'}`} />
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3 font-display">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="glass-card max-w-2xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground font-display">Ready to Start Saving?</h3>
              <p className="text-muted-foreground">Join 50,000+ pet parents who've saved over $2.3M on veterinary care</p>
              <button className="btn-primary group">
                Get Started Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
