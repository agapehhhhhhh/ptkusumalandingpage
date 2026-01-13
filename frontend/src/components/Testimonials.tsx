import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#991B1B] mb-2">Our Testimonials</h2>
          <h3 className="text-3xl font-light text-[#991B1B]">
            What Our Clients Are <span className="underline decoration-[#EF4444] decoration-4 underline-offset-4">Saying</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="bg-white p-10 border border-gray-100 shadow-lg rounded-lg">
              <div className="mb-6">
                 {/* Quote Icon Outline */}
                 <div className="text-[#EF4444]">
                     <Quote size={48} strokeWidth={1} fill="none" className="transform rotate-180" />
                 </div>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {testimonial.quote}
              </p>
              <div className="font-bold text-[#991B1B] flex items-center">
                 <span className="text-[#EF4444] mr-2 text-2xl">•</span> {testimonial.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
