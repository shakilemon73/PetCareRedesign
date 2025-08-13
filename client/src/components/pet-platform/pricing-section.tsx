import { Calculator, Search, Heart, TrendingDown, DollarSign, Sparkles, ArrowRight, Zap } from "lucide-react";

export default function PetPricingSection() {
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
    <section id="pricing" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-success-500/5 rounded-full blur-3xl floating" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center glass rounded-full px-6 py-2 shadow-medium">
            <DollarSign className="w-4 h-4 text-success-500 mr-2" />
            <span className="text-sm font-semibold text-foreground">Revolutionary Savings</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground font-display">
            Stop Overpaying for Pet Care
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our dynamic pricing connects you with available clinics, delivering{" "}
            <span className="text-success-600 font-semibold">massive savings</span>{" "}
            without compromising on quality care.
          </p>
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
                className={`glass-card bg-${item.color}-50 dark:bg-${item.color}-900/20 hover-lift group cursor-pointer border border-${item.color}-200 dark:border-${item.color}-800`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <TrendingDown className="w-5 h-5 text-muted-foreground" />
                    <span className={`text-3xl font-bold text-muted-foreground line-through`}>
                      {item.traditional}
                    </span>
                  </div>
                  
                  <div className={`text-5xl font-bold text-${item.color}-600 mb-3 font-display group-hover:scale-110 transition-transform duration-300`}>
                    {item.crest}
                  </div>
                  
                  <div className="text-lg font-semibold text-foreground mb-3">{item.service}</div>
                  
                  <div className={`inline-flex items-center gap-2 bg-${item.color}-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}>
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
              <div className={`w-20 h-20 bg-${feature.color}-100 dark:bg-${feature.color}-900/30 rounded-3xl flex items-center justify-center mx-auto shadow-lg hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-10 h-10 text-${feature.color}-500`} />
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
