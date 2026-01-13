import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { RECENT_WORK } from '../constants';

const Portfolio = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
        const { current } = scrollRef;
        const scrollAmount = current.offsetWidth / 2; // Scroll half screen width
        if (direction === 'left') {
            current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    }
  };

  return (
    <section className="py-20 bg-[#FEF2F2]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <h2 className="text-4xl font-bold text-[#991B1B] mb-2">Our Recent Work</h2>
                <h3 className="text-3xl font-light text-[#991B1B]">
                    By Our <span className="underline decoration-[#EF4444] decoration-4 underline-offset-4">Experts</span>
                </h3>
            </div>
            <p className="max-w-md text-gray-600 mt-6 md:mt-0 text-right md:text-left">
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
        </div>

        <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {RECENT_WORK.map((work) => (
            <div key={work.title} className="min-w-[100%] md:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1rem)] snap-start bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-64 bg-gray-100 rounded-lg overflow-hidden mb-6 relative group">
                <img 
                    src={work.image} 
                    alt={work.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <div className="flex justify-between items-center px-2">
                <h4 className="text-xl font-bold text-[#991B1B]">{work.title}</h4>
                <button className="px-6 py-2 border border-gray-300 rounded-full text-sm font-medium hover:bg-[#991B1B] hover:text-white transition-colors">
                    View Work
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Dots/Buttons */}
        <div className="flex justify-start mt-4 gap-4">
             <button onClick={() => scroll('left')} className="p-3 rounded-full border border-gray-300 hover:bg-[#EF4444] hover:border-[#EF4444] group bg-white hover:text-white transition-colors">
                <ChevronLeft size={24} />
            </button>
            <button onClick={() => scroll('right')} className="p-3 rounded-full border border-gray-300 hover:bg-[#EF4444] hover:border-[#EF4444] group bg-white hover:text-white transition-colors">
                <ChevronRight size={24} />
            </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
