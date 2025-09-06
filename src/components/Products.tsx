
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, ArrowRight, Eye } from 'lucide-react';

const Products = () => {
  const categories = [
    {
      id: 1,
      name: 'Textiles & Apparel',
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400',
      products: '250+ Items',
      rating: 4.9,
      description: 'Premium cotton fabrics, silk sarees, and modern apparel for global fashion markets.',
      trending: true
    },
    {
      id: 2,
      name: 'Spices & Food Products',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400',
      products: '180+ Items',
      rating: 4.8,
      description: 'Authentic Indian spices, organic foods, and traditional delicacies with international certification.',
      trending: false
    },
    {
      id: 3,
      name: 'Handicrafts & Artwork',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
      products: '320+ Items',
      rating: 4.9,
      description: 'Traditional handicrafts, decorative items, and artistic creations showcasing Indian heritage.',
      trending: true
    },
    {
      id: 4,
      name: 'Machinery & Equipment',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400',
      products: '95+ Items',
      rating: 4.7,
      description: 'Industrial machinery, agricultural equipment, and precision instruments for global industries.',
      trending: false
    },
    {
      id: 5,
      name: 'Ayurvedic & Wellness',
      image: 'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?w=400',
      products: '150+ Items',
      rating: 4.9,
      description: 'Natural wellness products, ayurvedic medicines, and organic health supplements.',
      trending: true
    },
    {
      id: 6,
      name: 'Gems & Jewelry',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400',
      products: '200+ Items',
      rating: 4.8,
      description: 'Precious stones, traditional jewelry, and modern designs with authentic certifications.',
      trending: false
    }
  ];

  const featuredProducts = [
    {
      name: 'Premium Basmati Rice',
      category: 'Food Products',
      moq: '1000 KG',
      price: '$2.50/KG',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300',
      certified: 'Organic Certified'
    },
    {
      name: 'Silk Fabric Collection',
      category: 'Textiles',
      moq: '500 Meters',
      price: '$15/Meter',
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=300',
      certified: 'GRS Certified'
    },
    {
      name: 'Brass Handicrafts Set',
      category: 'Handicrafts',
      moq: '100 Sets',
      price: '$45/Set',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300',
      certified: 'Export Quality'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Product Categories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our extensive range of premium Indian products, carefully curated for international markets with quality assurance and competitive pricing.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {categories.map((category) => (
            <Card key={category.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {category.trending && (
                  <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600">
                    🔥 Trending
                  </Badge>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <Button size="sm" variant="outline" className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
                      <Eye className="w-4 h-4 mr-2" />
                      View Products
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-gray-600">{category.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>
                
                <div className="flex justify-between items-center">
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                    {category.products}
                  </Badge>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 p-0">
                    Explore <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Products */}
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h3>
            <p className="text-lg text-gray-600">
              Hand-picked premium products with verified quality and competitive export pricing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 right-3 bg-green-500 hover:bg-green-600">
                    {product.certified}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h4>
                    <p className="text-sm text-gray-500 mb-3">{product.category}</p>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">MOQ:</span>
                      <span className="text-sm font-medium">{product.moq}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Price:</span>
                      <span className="text-lg font-bold text-blue-600">{product.price}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full gradient-bg">
                    Request Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline">
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
