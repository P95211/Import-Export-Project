
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Globe, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight,
  FileText,
  Award,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Products', path: '/products' },
    { name: 'Quality Certifications', path: '/quality' },
    { name: 'Markets We Serve', path: '/markets' },
    { name: 'Career Opportunities', path: '/careers' }
  ];

  const exportServices = [
    { name: 'Product Sourcing', path: '/services/sourcing' },
    { name: 'Export Documentation', path: '/services/documentation' },
    { name: 'Logistics & Shipping', path: '/services/logistics' },
    { name: 'Quality Assurance', path: '/services/quality' },
    { name: 'Market Analysis', path: '/services/analysis' }
  ];

  const resources = [
    { name: 'Export Guide', path: '/resources/guide' },
    { name: 'Trade Documentation', path: '/resources/docs' },
    { name: 'Market Reports', path: '/resources/reports' },
    { name: 'Industry News', path: '/resources/news' },
    { name: 'FAQ', path: '/resources/faq' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">GlobalExport</h1>
                <p className="text-xs text-gray-400">Premium Indian Exports</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Connecting Indian businesses to global markets with premium quality products, 
              reliable export services, and unwavering commitment to excellence.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-gray-300">New Delhi, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-gray-300">+91-9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-gray-300">exports@globalexport.com</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Export Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Export Services</h3>
            <ul className="space-y-3">
              {exportServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3 mb-8">
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link 
                    to={resource.path} 
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter Signup */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h4 className="font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-400 text-sm mb-4">Get latest export news and market insights</p>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
                <Button size="sm" className="gradient-bg">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5" />
              <span className="text-sm">ISO 9001:2015 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <FileText className="w-5 h-5" />
              <span className="text-sm">IEC Registered</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span className="text-sm">FIEO Member</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5" />
              <span className="text-sm">Serving 25+ Countries</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 GlobalExport. All rights reserved. | Privacy Policy | Terms of Service
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Made in India 🇮🇳 for the World 🌍
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
