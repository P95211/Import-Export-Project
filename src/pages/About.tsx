
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Globe, 
  Users, 
  Award, 
  TrendingUp, 
  Eye, 
  Target, 
  Heart,
  Linkedin,
  Mail
} from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '2009', title: 'Company Founded', description: 'Started as a small export business in New Delhi' },
    { year: '2012', title: 'First International Market', description: 'Expanded to Middle East and African markets' },
    { year: '2016', title: 'ISO Certification', description: 'Achieved ISO 9001:2015 quality certification' },
    { year: '2020', title: 'Digital Transformation', description: 'Launched online platform for global customers' },
    { year: '2023', title: 'Export Excellence Award', description: 'Recognized by Government of India for export achievements' }
  ];

  const leadership = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300',
      bio: '15+ years in international trade, MBA from IIM Delhi'
    },
    {
      name: 'Priya Sharma',
      role: 'Export Director',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b68094cd?w=300',
      bio: 'Expert in global market expansion, B.Com from Delhi University'
    },
    {
      name: 'Amit Patel',
      role: 'Quality Head',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
      bio: '12+ years in quality assurance, Engineering from IIT Bombay'
    }
  ];

  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Committed to delivering premium quality products that meet international standards'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Building lasting relationships through exceptional service and support'
    },
    {
      icon: Globe,
      title: 'Global Mindset',
      description: 'Understanding diverse markets and adapting to cultural preferences'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Transparent business practices and ethical conduct in all operations'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 gradient-bg hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">About GlobalExport</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Since 2009, we've been bridging Indian businesses with global opportunities, 
            delivering premium quality products and building lasting international partnerships.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  GlobalExport began with a simple vision: to showcase India's finest products to the world. 
                  What started as a small family business in New Delhi has grown into a trusted export 
                  partner for businesses across 25+ countries.
                </p>
                <p>
                  Our journey has been marked by continuous growth, innovation, and an unwavering commitment 
                  to quality. We've built our reputation by understanding both our clients' needs and the 
                  unique requirements of international markets.
                </p>
                <p>
                  Today, we're proud to be recognized as one of India's leading export companies, certified 
                  with international quality standards and trusted by businesses worldwide.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600" 
                alt="Our office" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To empower Indian businesses to reach global markets through premium quality products, 
                  reliable export services, and sustainable business practices.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the world's most trusted export partner, known for excellence, innovation, 
                  and our contribution to India's position in global trade.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Goal</h3>
                <p className="text-gray-600">
                  To expand to 50+ countries by 2030 while maintaining our commitment to quality, 
                  sustainability, and customer satisfaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors">
                  <value.icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our growth story</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Meet the experienced professionals leading our global expansion
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center border-0 shadow-lg group hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{leader.role}</p>
                  <p className="text-gray-600 mb-6">{leader.bio}</p>
                  
                  <div className="flex justify-center space-x-4">
                    <Button size="sm" variant="outline">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Mail className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
