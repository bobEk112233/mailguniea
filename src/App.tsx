import React from 'react';
import { Mail, Shield, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-b from-orange-50 to-white">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Mail className="h-8 w-8 text-orange-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">MailGuinea</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-orange-600">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-orange-600">Pricing</a>
              <a href="#contact" className="text-gray-600 hover:text-orange-600">Contact</a>
            </div>
            <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors">
              Get Started
            </button>
          </div>
        </nav>

        <div className="container mx-auto px-6 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Supercharge Your Email Marketing
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              MailGuinea helps you create, send, and track email campaigns that convert. Simple, powerful, and affordable.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors flex items-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg hover:bg-orange-50 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose MailGuinea?</h2>
            <p className="text-xl text-gray-600">Everything you need to succeed in email marketing</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-6">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lightning Fast</h3>
              <p className="text-gray-600">Send thousands of emails in seconds with our optimized delivery system</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Secure & Reliable</h3>
              <p className="text-gray-600">Industry-leading security with 99.9% uptime guarantee</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Easy to Use</h3>
              <p className="text-gray-600">Intuitive interface designed for marketers of all skill levels</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-orange-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">No hidden fees. Cancel anytime.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
              <div className="text-4xl font-bold text-gray-900 mb-6">$29<span className="text-lg text-gray-600">/mo</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-orange-600 mr-2" />
                  <span>Up to 10,000 emails/month</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-orange-600 mr-2" />
                  <span>Basic analytics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-orange-600 mr-2" />
                  <span>Email support</span>
                </li>
              </ul>
              <button className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors">
                Get Started
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-orange-600 transform scale-105">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
              <div className="text-4xl font-bold text-gray-900 mb-6">$79<span className="text-lg text-gray-600">/mo</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-orange-600 mr-2" />
                  <span>Up to 50,000 emails/month</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-orange-600 mr-2" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-orange-600 mr-2" />
                  <span>Priority support</span>
                </li>
              </ul>
              <button className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors">
                Get Started
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-gray-900 mb-6">$199<span className="text-lg text-gray-600">/mo</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-orange-600 mr-2" />
                  <span>Unlimited emails</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-orange-600 mr-2" />
                  <span>Custom analytics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-orange-600 mr-2" />
                  <span>24/7 support</span>
                </li>
              </ul>
              <button className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <Mail className="h-8 w-8 text-orange-500" />
                <span className="ml-2 text-2xl font-bold">MailGuinea</span>
              </div>
              <p className="text-gray-400">
                Making email marketing simple and effective for businesses worldwide.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-orange-500">Features</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-orange-500">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-orange-500">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500">Blog</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-orange-500">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-orange-500">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MailGuinea. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;