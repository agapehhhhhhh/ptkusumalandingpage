import { HERO_CONTENT } from "../constants";

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-visible lg:overflow-hidden">
      <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <h1 className="text-6xl font-bold text-[#991B1B] leading-tight mb-6">
            {HERO_CONTENT.title}
            <span className="relative z-0">
               <span className="absolute bottom-2 left-0 w-full h-3 bg-[#EF4444] -z-10 opacity-70"></span>
            </span>
          </h1>
          <p className="text-gray-600 mb-8 max-w-md">
            {HERO_CONTENT.subtitle}
          </p>
          <button className="bg-[#991B1B] text-white px-8 py-3 rounded font-bold tracking-wider hover:bg-opacity-90 transition-colors shadow-lg">
            {HERO_CONTENT.buttonText}
          </button>
        </div>
        
        <div className="relative z-10">
            {/* Red blob background simulation */}
           <div className="absolute -top-20 -right-20 w-[120%] h-[120%] bg-[#EF4444] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] -z-10 transform rotate-12"></div>
           
           <div className="relative rounded-[30%_70%_70%_30%/30%_30%_70%_70%] overflow-hidden border-4 border-dashed border-[#991B1B] p-4">
             <div className="rounded-[30%_70%_70%_30%/30%_30%_70%_70%] overflow-hidden bg-gray-200">
                <img 
                    src={HERO_CONTENT.image}
                    alt="Team working" 
                    className="w-full h-full object-cover"
                />
             </div>
           </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FEF2F2] -z-20 rounded-bl-[12.5rem]"></div>
    </section>
  );
};

export default Hero;
