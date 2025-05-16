
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Leaf, Sun, Cloud } from 'lucide-react'; // Using available icons

const features = [
  {
    icon: <Leaf className="h-12 w-12 text-nature-green mb-4" />,
    title: '100% Natural & Pure',
    description: 'Our honey is unprocessed, unheated, and free from additives, preserving all its natural enzymes and nutrients.',
  },
  {
    icon: <Sun className="h-12 w-12 text-honey mb-4" />,
    title: 'Sustainably Sourced',
    description: 'We partner with ethical beekeepers who prioritize bee health and environmental sustainability.',
  },
  {
    icon: <Cloud className="h-12 w-12 text-blue-400 mb-4" />, // Using cloud to represent diverse flora
    title: 'Rich & Diverse Flavors',
    description: 'From delicate floral notes to rich, dark aromas, our honey collection offers a taste for every palate.',
  },
];

const WhyUsSection = () => {
  return (
    <SectionWrapper id="why-us" className="bg-white">
      <h2 className="text-4xl font-bold text-center text-honey-dark mb-12">Why Choose Our Honey?</h2>
      <div className="grid md:grid-cols-3 gap-8 text-center">
        {features.map((feature, index) => (
          <div key={index} className="p-6 bg-nature-beige/30 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center">{feature.icon}</div>
            <h3 className="text-2xl font-semibold text-honey-dark mb-3">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default WhyUsSection;
