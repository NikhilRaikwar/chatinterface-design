import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Search, Menu, X } from "lucide-react";
import Galaxy from "@/components/Galaxy";
import ElectricBorder from "@/components/ElectricBorder";

const Landing = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-background">
      {/* Galaxy Background */}
      <div className="absolute inset-0 w-full h-full">
        <Galaxy 
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.5}
          glowIntensity={0.5}
          saturation={0.8}
          hueShift={240}
        />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
          <div className="flex items-center justify-between p-4 sm:px-6 md:px-8 lg:px-12">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              <span className="text-xl sm:text-2xl font-bold text-foreground">
                SearchAI<span className="text-primary">Pro</span>
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            </div>
            
            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link to="/chat">Sign In</Link>
              </Button>
              <Button asChild>
                <Link to="/chat">Get Started</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md">
              <div className="px-4 py-6 space-y-4">
                <a 
                  href="#features" 
                  className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Features
                </a>
                <a 
                  href="#about" 
                  className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#pricing" 
                  className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </a>
                <div className="pt-4 space-y-3">
                  <Button variant="ghost" className="w-full" asChild>
                    <Link to="/chat">Sign In</Link>
                  </Button>
                  <Button className="w-full" asChild>
                    <Link to="/chat">Get Started</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <main className="flex-1 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20">
          <div className="max-w-4xl text-center space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
                Intelligent Search
                <span className="block text-primary mt-2">Powered by AI</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
                Transform how you discover information with our advanced AI-powered search engine. 
                Get precise answers, explore deeper insights, and unlock knowledge like never before.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6" 
                asChild
              >
                <Link to="/chat">
                  Start Searching <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6" 
                asChild
              >
                <Link to="/discover">
                  Explore Features
                </Link>
              </Button>
            </div>
          </div>
        </main>

        {/* Features Section */}
        <section id="features" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-foreground px-4">
              Why Choose SearchAI Pro?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <ElectricBorder 
                color="#7df9ff" 
                speed={1} 
                chaos={0.5} 
                thickness={2} 
                style={{ borderRadius: 16 }}
              >
                <div className="text-center space-y-4 p-4 sm:p-6 rounded-lg bg-card/50 backdrop-blur-sm hover:bg-card/60 transition-colors">
                  <div className="w-12 h-12 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                    <Search className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground">Smart Search</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Advanced AI algorithms understand context and intent to deliver highly relevant results.
                  </p>
                </div>
              </ElectricBorder>
              
              <ElectricBorder 
                color="#ff6b6b" 
                speed={1.2} 
                chaos={0.6} 
                thickness={2} 
                style={{ borderRadius: 16 }}
              >
                <div className="text-center space-y-4 p-4 sm:p-6 rounded-lg bg-card/50 backdrop-blur-sm hover:bg-card/60 transition-colors">
                  <div className="w-12 h-12 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground">Lightning Fast</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Get instant results with our optimized search infrastructure and caching systems.
                  </p>
                </div>
              </ElectricBorder>
              
              <ElectricBorder 
                color="#4ecdc4" 
                speed={0.8} 
                chaos={0.4} 
                thickness={2} 
                style={{ borderRadius: 16 }}
                className="md:col-span-2 lg:col-span-1"
              >
                <div className="text-center space-y-4 p-4 sm:p-6 rounded-lg bg-card/50 backdrop-blur-sm hover:bg-card/60 transition-colors">
                  <div className="w-12 h-12 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground">AI-Powered</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Leverage cutting-edge AI technology for personalized and intelligent search experiences.
                  </p>
                </div>
              </ElectricBorder>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground px-4">
              Ready to Transform Your Search Experience?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4 leading-relaxed">
              Join thousands of users who have already discovered the power of AI-driven search.
            </p>
            <Button 
              size="lg" 
              className="text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 w-full sm:w-auto" 
              asChild
            >
              <Link to="/chat">
                Get Started Now <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 sm:px-6 md:px-8 lg:px-12 border-t border-border/50 bg-background/80 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 SearchAI Pro. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Landing;