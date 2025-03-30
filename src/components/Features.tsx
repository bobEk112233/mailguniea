
import React from 'react';
import { CheckCircle } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      title: 'Email Validation',
      description: 'Verify email format, domain existence, and deliverability in real-time',
      icon: CheckCircle
    },
    {
      title: 'Bounce Detection',
      description: 'Identify and filter out email addresses that would bounce',
      icon: CheckCircle
    },
    {
      title: 'Disposable Email Detection',
      description: 'Flag temporary and disposable email addresses',
      icon: CheckCircle
    },
    {
      title: 'Bulk Verification',
      description: 'Upload and verify thousands of emails at once',
      icon: CheckCircle
    },
    {
      title: 'API Integration',
      description: 'Seamlessly integrate verification into your applications',
      icon: CheckCircle
    },
    {
      title: 'Real-time Analytics',
      description: 'Track and analyze your email verification results',
      icon: CheckCircle
    }
  ];

  return (
    <section id="features" className="py-16 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-mailpunch-700 mb-4">
            Powerful Email Verification Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            MailPunch provides industry-leading email verification services to keep your lists clean and your deliverability high
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-border"
            >
              <div className="w-12 h-12 bg-mailpunch-100 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-mailpunch-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-mailpunch-800">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
