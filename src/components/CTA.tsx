
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowRight, 
  Phone, 
  Mail, 
  MessageSquare, 
  FileText,
  CheckCircle,
  Globe,
  Clock
} from 'lucide-react';

const CTA = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak with our export specialists',
      action: '+91-9876543210',
      color: 'bg-green-500'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      description: 'Quick chat for instant queries',
      action: 'Chat Now',
      color: 'bg-green-600'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Detailed inquiries welcome',
      action: 'exports@company.com',
      color: 'bg-blue-500'
    },
    {
      icon: FileText,
      title: 'Get Quote',
      description: 'Request custom pricing',
      action: 'Get Quote',
      color: 'bg-purple-500'
    }
  ];

  const quickStats = [
    { icon: Globe, value: '25+', label: 'Countries Served' },
    { icon: CheckCircle, value: '98%', label: 'Success Rate' },
    { icon: Clock, value: '24/7', label: 'Support' },
    { icon: FileText, value: '500+', label: 'Products' }
  ];

  return (
    <section className="py-20 gradient-bg hero-pattern relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start Your
            <span className="block text-yellow-300">Export Journey?</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Join thousands of successful businesses worldwide who trust us for their international expansion. 
            Get started today with our comprehensive export solutions.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {quickStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <stat.icon className="w-8 h-8 text-yellow-300" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main CTA Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Contact Methods */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactMethods.map((method, index) => (
                  <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 ${method.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <method.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{method.title}</h4>
                        <p className="text-sm text-white/60">{method.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8">
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right - Quick Quote Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Quick Quote</h3>
              <p className="text-gray-600">Fill the form and get response within 24 hours</p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <Input placeholder="Your full name" className="border-gray-300" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <Input placeholder="Company name" className="border-gray-300" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <Input type="email" placeholder="your@email.com" className="border-gray-300" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                  <Input placeholder="+91-9876543210" className="border-gray-300" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product Category</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select product category</option>
                  <option>Textiles & Apparel</option>
                  <option>Spices & Food Products</option>
                  <option>Handicrafts & Artwork</option>
                  <option>Machinery & Equipment</option>
                  <option>Ayurvedic & Wellness</option>
                  <option>Gems & Jewelry</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Target Market</label>
                <Input placeholder="e.g., USA, Europe, Middle East" className="border-gray-300" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell us about your requirements..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <Button className="w-full gradient-bg text-white font-semibold py-3">
                Get My Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-500">
                🔒 Your information is secure and will not be shared with third parties
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
