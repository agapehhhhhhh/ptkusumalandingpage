import { ABOUT_CONTENT } from "../constants";

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-visible">
      <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Image Side */}
        <div className="relative">
           {/* Red blob background */}
           <div className="absolute -top-10 -left-10 w-[110%] h-[110%] bg-[#EF4444] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] -z-10"></div>
           
           <div className="relative rounded-[50%_50%_50%_50%/60%_60%_40%_40%] overflow-hidden border-2 border-dashed border-[#991B1B] p-2 bg-white">
             <div className="rounded-[50%_50%_50%_50%/60%_60%_40%_40%] overflow-hidden bg-gray-200 h-[25rem]">
                <img  
                    src={ABOUT_CONTENT.image}
                    alt="Team meeting" 
                    className="w-full h-full object-cover"
                />
             </div>
           </div>
        </div>

        {/* Text Side */}
        <div>
          <h2 className="text-4xl font-bold text-[#991B1B] mb-2">{ABOUT_CONTENT.title}</h2>
          <h3 className="text-3xl font-light text-[#991B1B] mb-6">
            {ABOUT_CONTENT.heading} <span className="underline decoration-[#EF4444] decoration-4 underline-offset-4">{ABOUT_CONTENT.highlightWord}</span>
          </h3>
          
          <p className="text-gray-600 mb-6">
            {ABOUT_CONTENT.description1}
          </p>
          
          <p className="text-gray-600 mb-8">
            {ABOUT_CONTENT.description2}
          </p>
          
          <button className="bg-[#991B1B] text-white px-8 py-3 rounded font-bold hover:bg-opacity-90 transition-colors">
            {ABOUT_CONTENT.buttonText}
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;
