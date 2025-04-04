
import React from 'react';
import { Button } from '@/components/ui/button';
import EmailVerifier from './EmailVerifier';
import Logo from './Logo';
import { CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-background to-secondary">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-2">
              <Logo size={60} className="animate-punch-up" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-mailguinea-700 tracking-tight">
                MailGuinea
              </h1>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Powerful Email Verification That's <span className="text-mailguinea-600">Guinea Approved</span>
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Verify email addresses in real-time, clean your mailing lists, and improve 
              your deliverability with MailGuinea's reliable and accurate validation service.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-mailguinea-600 hover:bg-mailguinea-700 text-white">
                Start Verifying Now
              </Button>
              <Button size="lg" variant="outline" className="border-mailguinea-600 text-mailguinea-600 hover:bg-mailguinea-50">
                View Pricing
              </Button>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-1 text-mailguinea-500" />
                <span>99.9% Accuracy</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-1 text-mailguinea-500" />
                <span>No Credit Card</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-1 text-mailguinea-500" />
                <span>Free Trial</span>
              </div>
            </div>
          </div>
          
          <div className="lg:ml-auto">
            <EmailVerifier />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
