
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Star } from 'lucide-react';

const testimonials = [
  { name: 'Sarah L.', quote: 'This is the best honey I have ever tasted! So pure and flavorful. My kids love it too!', avatar: 'https://randomuser.me/api/portraits/women/68.jpg', stars: 5 },
  { name: 'John B.', quote: 'The Manuka honey is fantastic for my morning tea. I feel more energetic throughout the day.', avatar: 'https://randomuser.me/api/portraits/men/32.jpg', stars: 5 },
  { name: 'Emily K.', quote: 'Excellent quality and fast shipping. The wildflower honey has such a unique taste.', avatar: 'https://randomuser.me/api/portraits/women/44.jpg', stars: 4 },
];

const TestimonialsSection = () => {
  return (
    <SectionWrapper id="testimonials" className="bg-honey-light/10">
      <h2 className="text-4xl font-bold text-center text-honey-dark mb-12">Sweet Words From Our Customers</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
            <img src={testimonial.avatar} alt={testimonial.name} className="w-20 h-20 rounded-full mb-4 border-2 border-honey" />
            <div className="flex mb-2">
              {[...Array(testimonial.stars)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
              {[...Array(5 - testimonial.stars)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-gray-300 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
            <h4 className="font-semibold text-honey-dark">{testimonial.name}</h4>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default TestimonialsSection;
