
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

const products = [
  { name: 'Wildflower Honey', price: '$12.99', image: 'https://images.unsplash.com/photo-1578916283988-a3509474a23b?q=80&w=400', description: 'Aromatic blend from diverse wildflowers.' },
  { name: 'Acacia Honey', price: '$15.99', image: 'https://images.unsplash.com/photo-1618260380074-396053273000?q=80&w=400', description: 'Light, sweet, and floral.' },
  { name: 'Manuka Honey', price: '$29.99', image: 'https://images.unsplash.com/photo-1603207603297-b704016deb55?q=80&w=400', description: 'Rich, potent, with unique properties.' },
  { name: 'Clover Honey', price: '$10.99', image: 'https://images.unsplash.com/photo-1560961959-9f8f0d4bd256?q=80&w=400', description: 'Classic, mild, and creamy.' },
];

const ProductsSection = () => {
  return (
    <SectionWrapper id="products" className="bg-white" backgroundImage="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1200">
       <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg">
        <h2 className="text-4xl font-bold text-center text-honey-dark mb-12">Discover Our Collection</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.name} className="bg-nature-beige/50 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-honey-dark mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                <p className="text-2xl font-bold text-honey mb-4">{product.price}</p>
                <Button className="w-full bg-honey hover:bg-honey-dark text-white">
                  <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ProductsSection;
