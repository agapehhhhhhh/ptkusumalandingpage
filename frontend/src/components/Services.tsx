import { useRef } from 'react';
import { Monitor, Code, Smartphone, Rocket} from 'lucide-react';
import { SERVICES } from '../constants';

const iconMap: Record<string, React.ReactNode> = {
  'web-design': <Monitor className="w-8 h-8 text-[#991B1B]" />,
  'web-dev': <Code className="w-8 h-8 text-[#991B1B]" />,
  'mobile': <Smartphone className="w-8 h-8 text-[#991B1B]" />,
  'marketing': <Rocket className="w-8 h-8 text-[#991B1B]" />,
};

// Screenshot shows icons inside a colored circle/square container.
// Let's use simple light backgrounds for icon containers.

const Services = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="services" className="py-20 bg-red-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white rounded-l-full opacity-50 -z-10 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-[#991B1B]">
           Our <span className="underline decoration-[#EF4444] decoration-4 underline-offset-4">Advantages</span>
          </h2>
        </div>

        <div 
             ref={scrollRef}
             className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory"
             style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {SERVICES.map((service, index) => (
            <div key={service.title} className="min-w-[100%] md:min-w-[calc(50%-1rem)] lg:min-w-[calc(25%-1rem)] snap-start bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 ${
                  index % 4 === 0 ? 'bg-red-100' : 
                  index % 4 === 1 ? 'bg-orange-100' :
                  index % 4 === 2 ? 'bg-red-50' : 'bg-red-200'
              }`}>
                {iconMap[service.icon]}
              </div>
              <h4 className="text-xl font-bold text-[#991B1B] mb-4 uppercase text-sm tracking-wider">{service.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Services;
