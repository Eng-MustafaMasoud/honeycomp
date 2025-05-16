
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { ArrowRight } from 'lucide-react';

const steps = [
  { title: 'Happy Bees, Pure Nectar', description: 'Our bees forage freely in pristine natural environments, collecting the purest nectar from diverse flora.', image: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937?q=80&w=400" },
  { title: 'Gentle Harvesting', description: 'Experienced beekeepers carefully harvest honeycombs, ensuring minimal disturbance to the hives.', image: "https://images.unsplash.com/photo-1587049352851-5d5c800792f1?q=80&w=400" },
  { title: 'Traditional Extraction', description: 'Honey is extracted using traditional methods, without heat, to preserve its natural goodness.', image: "https://images.unsplash.com/photo-1600345953989-3980913c3887?q=80&w=400" },
  { title: 'Purely Bottled', description: 'Finally, the golden liquid is lightly filtered and bottled, ready for you to enjoy.', image: "https://images.unsplash.com/photo-1558025137-395822616f0a?q=80&w=400" },
];

const ProcessSection = () => {
  return (
    <SectionWrapper id="process" className="bg-honey-light/10">
      <h2 className="text-4xl font-bold text-center text-honey-dark mb-16">The Journey of Our Honey</h2>
      <div className="relative">
        {/* Dotted line connecting steps - conceptual */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-honey opacity-50 -translate-y-1/2"></div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4 z-10">
              <img src={step.image} alt={step.title} className="w-48 h-48 object-cover rounded-full shadow-lg mb-4 border-4 border-white" />
              <h3 className="text-xl font-semibold text-honey-dark mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block text-honey mt-4 absolute top-1/2 -translate-y-1/2" style={{left: `calc(${(index * 25) + 22.5}% - 0.5rem)`}}/>
              )}
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ProcessSection;
