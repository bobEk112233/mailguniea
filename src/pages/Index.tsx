
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        
        {/* Stats Section */}
        <section className="py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="text-4xl font-bold text-mailpunch-600 mb-2">99.9%</div>
                <p className="text-muted-foreground">Verification Accuracy</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-mailpunch-600 mb-2">50M+</div>
                <p className="text-muted-foreground">Emails Verified</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-mailpunch-600 mb-2">5000+</div>
                <p className="text-muted-foreground">Happy Customers</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section id="about" className="py-16 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-mailpunch-700 mb-4">
                How MailPunch Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our powerful verification process ensures your email lists are clean and deliverable
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-mailpunch-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-mailpunch-600 font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-mailpunch-800">Submit</h3>
                <p className="text-muted-foreground">
                  Enter a single email address or upload your entire mailing list
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-mailpunch-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-mailpunch-600 font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-mailpunch-800">Verify</h3>
                <p className="text-muted-foreground">
                  Our system runs multiple checks to validate each email address
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-mailpunch-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-mailpunch-600 font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-mailpunch-800">Results</h3>
                <p className="text-muted-foreground">
                  Get detailed results about each email's deliverability and quality
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Pricing Section (Simple) */}
        <section id="pricing" className="py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-mailpunch-700 mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the plan that works best for your needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter Plan */}
              <div className="bg-white border border-border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6 border-b border-border">
                  <h3 className="text-xl font-bold mb-1">Starter</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold">$29</span>
                    <span className="text-muted-foreground ml-1">/month</span>
                  </div>
                  <p className="text-muted-foreground text-sm">Perfect for small businesses</p>
                </div>
                <div className="p-6 space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-mailpunch-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>10,000 Verifications/month</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-mailpunch-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Email validation API</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-mailpunch-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>CSV upload and export</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-mailpunch-600 hover:bg-mailpunch-700">
                    Get Started
                  </Button>
                </div>
              </div>
              
              {/* Pro Plan */}
              <div className="bg-white border border-mailpunch-500 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow relative">
                <div className="absolute top-0 right-0 bg-mailpunch-500 text-white px-3 py-1 text-xs font-medium">
                  MOST POPULAR
                </div>
                <div className="p-6 border-b border-border bg-mailpunch-50">
                  <h3 className="text-xl font-bold mb-1">Professional</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold">$99</span>
                    <span className="text-muted-foreground ml-1">/month</span>
                  </div>
                  <p className="text-muted-foreground text-sm">Ideal for growing companies</p>
                </div>
                <div className="p-6 space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-mailpunch-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>50,000 Verifications/month</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-mailpunch-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>All Starter features</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-mailpunch-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Advanced API features</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-mailpunch-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Webhook integrations</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-mailpunch-600 hover:bg-mailpunch-700">
                    Get Started
                  </Button>
                </div>
              </div>
              
              {/* Enterprise Plan */}
              <div className="bg-white border border-border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6 border-b border-border">
                  <h3 className="text-xl font-bold mb-1">Enterprise</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold">Custom</span>
                  </div>
                  <p className="text-muted-foreground text-sm">For large organizations</p>
                </div>
                <div className="p-6 space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-mailpunch-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Unlimited verifications</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-mailpunch-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>All Professional features</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-mailpunch-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Dedicated account manager</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-mailpunch-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Custom integration support</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-mailpunch-600 hover:bg-mailpunch-700">
                    Contact Sales
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
