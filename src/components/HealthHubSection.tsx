
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { BookOpen, Lightbulb, Heart } from 'lucide-react'; // More generic icons

const healthTips = [
  {
    icon: <Lightbulb className="h-10 w-10 text-honey mb-3" />,
    title: 'Boost Your Immunity',
    description: 'Honey is packed with antioxidants and antibacterial properties to help strengthen your immune system.',
    link: '#',
  },
  {
    icon: <Heart className="h-10 w-10 text-red-500 mb-3" />,
    title: 'Soothe a Sore Throat',
    description: 'A spoonful of honey can provide natural relief for coughs and sore throats. Try it with warm lemon water.',
    link: '#',
  },
  {
    icon: <BookOpen className="h-10 w-10 text-nature-green mb-3" />,
    title: 'Delicious & Healthy Recipes',
    description: 'Discover creative ways to incorporate honey into your meals, from dressings to desserts.',
    link: '#',
  },
];

const HealthHubSection = () => {
  return (
    <SectionWrapper id="health-hub" className="bg-white">
      <h2 className="text-4xl font-bold text-center text-honey-dark mb-12">Honey Health Hub</h2>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Explore the amazing health benefits of natural honey and find delicious ways to enjoy it every day.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {healthTips.map((tip, index) => (
          <div key={index} className="bg-nature-beige/30 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center">{tip.icon}</div>
            <h3 className="text-xl font-semibold text-honey-dark mt-4 mb-2">{tip.title}</h3>
            <p className="text-gray-600 mb-4 text-sm">{tip.description}</p>
            <a href={tip.link} className="text-honey hover:text-honey-dark font-semibold transition-colors">
              Learn More &rarr;
            </a>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default HealthHubSection;
