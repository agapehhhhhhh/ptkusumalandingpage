import { RECENT_WORK } from '../constants';

const Portfolio = () => {
  return (
    <section className="py-20 bg-[#FEF2F2]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-center items-end mb-12">
            <div>
                <h2 className="text-3xl font-light text-[#991B1B]">
                  <span className="font-bold" >Our</span> <span className="underline decoration-[#EF4444] decoration-4 underline-offset-4">Recent Work</span>
                </h2>
            </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {RECENT_WORK.map((work) => (
            <div key={work.title} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-64 bg-gray-100 rounded-lg overflow-hidden mb-6 relative group">
                <img 
                    src={work.image} 
                    alt={work.title} 
                    className="w-full h-full object-cover grayscale" 
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
