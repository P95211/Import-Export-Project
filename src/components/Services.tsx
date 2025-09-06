
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Package, 
  Globe, 
  Shield, 
  Truck, 
  FileText, 
  Users, 
  Clock, 
  Award,
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Package,
      title: 'Product Sourcing',
      description: 'Wide range of premium Indian products across multiple categories including textiles, spices, handicrafts, and machinery.',
      features: ['Quality Assurance', 'Competitive Pricing', 'Bulk Orders', 'Custom Packaging']
    },
    {
      icon: Globe,
      title: 'Global Market Access',
      description: 'Extensive network spanning 25+ countries with deep market knowledge and local partnerships for seamless expansion.',
      features: ['Market Analysis', 'Local Partnerships', 'Cultural Adaptation', 'Regulatory Compliance']
    },
    {
      icon: FileText,
      title: 'Export Documentation',
      description: 'Complete documentation support including certificates, permits, and customs clearance for hassle-free exports.',
      features: ['IEC Certificate', 'Export Licenses', 'Customs Clearance', 'Insurance Coverage']
    },
    {
      icon: Truck,
      title: 'Logistics & Shipping',
      description: 'End-to-end logistics solutions with reliable shipping partners and real-time tracking for timely deliveries.',
      features: ['Multiple Shipping Options', 'Real-time Tracking', 'Insurance Coverage', 'Customs Handling']
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Trusted Partner',
      stat: '15+',
      subtitle: 'Years of Experience'
    },
    {
      icon: Users,
      title: 'Expert Team',
      stat: '50+',
      subtitle: 'Export Professionals'
    },
    {
      icon: Clock,
      title: 'Quick Delivery',
      stat: '98%',
      subtitle: 'On-time Delivery'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      stat: '100%',
      subtitle: 'Quality Guarantee'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Export Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive export solutions designed to help your business reach global markets with confidence and efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose GlobalExport?</h2>
            <p className="text-xl text-gray-600">
              Your trusted partner for successful international business expansion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
                  <item.icon className="w-10 h-10 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">{item.stat}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.subtitle}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="gradient-bg">
              Start Your Export Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
