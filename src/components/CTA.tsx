
import React from 'react';
import { Button } from '@/components/ui/button';

const CTA: React.FC = () => {
  return (
    <section className="py-16 bg-mailguinea-600">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Improve Your Email Deliverability?
          </h2>
          <p className="text-lg text-mailguinea-100 max-w-3xl mx-auto">
            Join thousands of companies using MailGuinea to verify emails and boost their marketing performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-mailguinea-600 hover:bg-mailguinea-100">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-mailguinea-500">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
