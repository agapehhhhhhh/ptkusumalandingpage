import { ShieldCheck, Clock, Eye } from 'lucide-react';
import { SERVICES } from '../constants';

const iconMap: Record<string, React.ReactNode> = {
  'shield-check': <ShieldCheck className="w-8 h-8 text-[#991B1B]" />,
  'clock': <Clock className="w-8 h-8 text-[#991B1B]" />,
  'eye': <Eye className="w-8 h-8 text-[#991B1B]" />,
};


const Services = () => {

  return (
    <section id="services" className="py-20 bg-red-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white rounded-l-full opacity-50 -z-10 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-[#991B1B]">
           Our <span className="underline decoration-[#EF4444] decoration-4 underline-offset-4">Advantages</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div key={service.title} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow hover:-translate-y-1 transform duration-300">
              <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 ${
                  index % 3 === 0 ? 'bg-red-100' : 
                  index % 3 === 1 ? 'bg-orange-100' : 'bg-red-50'
              }`}>
                {iconMap[service.icon] || <ShieldCheck className="w-8 h-8 text-[#991B1B]" />}
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
