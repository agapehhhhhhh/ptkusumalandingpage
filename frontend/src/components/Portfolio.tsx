import { useRef, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react'; // Unused
import { RECENT_WORK } from '../constants';

const Portfolio = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
        const { current } = scrollRef;
        const scrollAmount = current.offsetWidth; // Scroll full width or card width
        if (direction === 'left') {
            current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            // Check if we are at the end
            if (current.scrollLeft + current.clientWidth >= current.scrollWidth - 10) {
                 current.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                 current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    }
  };

  // Auto scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
        scroll('right');
    }, 5000); // Scroll every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-[#FEF2F2]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <h2 className="text-4xl font-bold text-[#991B1B] mb-2">Our Recent Work</h2>
            </div>
        </div>

        <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scroll-smooth justify-center"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {RECENT_WORK.map((work) => (
            <div key={work.title} className="min-w-[100%] md:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1rem)] snap-start bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-64 bg-gray-100 rounded-lg overflow-hidden mb-6 relative group">
                <img 
                    src={work.image} 
                    alt={work.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0" 
                />
              </div>
              <div className="flex justify-between items-center px-2">
                <h4 className="text-xl font-bold text-[#991B1B]">{work.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
