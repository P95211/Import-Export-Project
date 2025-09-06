
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Award, 
  FileText, 
  Globe, 
  CheckCircle, 
  Building, 
  CreditCard, 
  Users 
} from 'lucide-react';

const Trust = () => {
  const certifications = [
    {
      icon: Shield,
      title: 'ISO 9001:2015',
      description: 'Quality Management System Certification',
      issuer: 'Bureau Veritas',
      validity: 'Valid until 2026'
    },
    {
      icon: Globe,
      title: 'IEC Certificate',
      description: 'Import Export Code - AAACG1234L1ZY',
      issuer: 'DGFT, India',
      validity: 'Permanent'
    },
    {
      icon: Award,
      title: 'Export Excellence',
      description: 'National Export Excellence Award 2023',
      issuer: 'Government of India',
      validity: 'Lifetime Achievement'
    },
    {
      icon: FileText,
      title: 'FIEO Membership',
      description: 'Federation of Indian Export Organizations',
      issuer: 'FIEO',
      validity: 'Active Member'
    }
  ];

  const verifications = [
    {
      icon: Building,
      title: 'Company Registration',
      details: [
        'GST Registration: 24AAACG1234L1ZY',
        'CIN: U51909DL2009PTC191616',
        'PAN: AAACG1234L',
        'Established: 2009'
      ]
    },
    {
      icon: CreditCard,
      title: 'Banking Partners',
      details: [
        'State Bank of India - Export Finance',
        'HDFC Bank - Trade Finance',
        'ICICI Bank - Letter of Credit',
        'Axis Bank - Foreign Exchange'
      ]
    },
    {
      icon: Users,
      title: 'Industry Memberships',
      details: [
        'CII - Confederation of Indian Industry',
        'ASSOCHAM - Export Promotion',
        'EEPC India - Engineering Export',
        'TEXPROCIL - Textiles Committee'
      ]
    }
  ];

  const testimonials = [
    {
      company: 'Global Trade Corp, USA',
      quote: 'Outstanding quality and reliability. Been our trusted partner for 5+ years.',
      rating: 5
    },
    {
      company: 'Euro Imports Ltd, Germany',
      quote: 'Professional service, timely delivery, and excellent product quality.',
      rating: 5
    },
    {
      company: 'Asia Pacific Trading, Singapore',
      quote: 'Best export partner in India. Highly recommended for B2B transactions.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
            <Shield className="w-4 h-4 mr-2" />
            Trusted & Verified
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Trust & Credibility</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence is backed by international certifications, government approvals, and verified credentials that ensure your business success.
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Quality Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-blue-100">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
                    <cert.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h4>
                  <p className="text-gray-600 text-sm mb-3">{cert.description}</p>
                  <div className="space-y-1">
                    <p className="text-xs text-gray-500">{cert.issuer}</p>
                    <Badge variant="secondary" className="text-xs">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      {cert.validity}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Verification */}
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Company Verification</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {verifications.map((verification, index) => (
              <Card key={index} className="bg-white border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                      <verification.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">{verification.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {verification.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">What Our Clients Say</h3>
          <p className="text-lg text-gray-600 mb-8">Trusted by leading companies worldwide</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-yellow-400">⭐</div>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
