
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Globe, TrendingUp, Award } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const stats = [
    { value: '500+', label: 'Products Exported' },
    { value: '25+', label: 'Countries Served' },
    { value: '15+', label: 'Years Experience' },
    { value: '10K+', label: 'Happy Clients' }
  ];

  const certifications = [
    { icon: Shield, name: 'ISO 9001:2015' },
    { icon: Globe, name: 'IEC Certified' },
    { icon: Award, name: 'Export Excellence' },
    { icon: TrendingUp, name: 'FIEO Member' }
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Export business operations" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 text-sm font-medium">
                🚀 Trusted Export Partner Since 2008
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Your Gateway to
                <span className="block text-yellow-300">Global Markets</span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                With over 15 years of expertise in international trade, we specialize in connecting Indian manufacturers with global buyers. Our comprehensive export solutions include quality assurance, logistics management, documentation support, and market intelligence across 25+ countries.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-3">Core Business Areas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-white/80">
                  <div>• Textile & Garment Exports</div>
                  <div>• Agricultural Products</div>
                  <div>• Engineering Goods</div>
                  <div>• Chemical & Pharmaceuticals</div>
                  <div>• Handicrafts & Home Decor</div>
                  <div>• Automotive Components</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8">
                Start Exporting
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                View Products
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">{stat.value}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Quality Certifications</h3>
              <div className="grid grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="w-10 h-10 bg-yellow-300 rounded-lg flex items-center justify-center">
                      <cert.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="text-white font-medium">{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-300 rounded-full opacity-20 animate-float" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/10 rounded-full animate-float" style={{ animationDelay: '-1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
