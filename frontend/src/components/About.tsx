import { ABOUT_CONTENT } from "../constants";

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Image Side */}
        <div className="relative order-2 md:order-1">
           {/* Red blob background removed */}
           
           <div className="relative rounded-2xl overflow-hidden border-2 border-dashed border-[#991B1B] p-2 bg-white">
             <div className="rounded-xl overflow-hidden bg-gray-200 h-[25rem]">
                <img  
                    src={ABOUT_CONTENT.image}
                    alt="Team meeting" 
                    className="w-full h-full object-cover grayscale"
                />
             </div>
           </div>
        </div>

        {/* Text Side */}
        <div className="order-1 md:order-2">
          <h2 className="text-4xl font-bold text-[#991B1B] mb-2">{ABOUT_CONTENT.title}</h2>
          
          <p className="text-gray-600 mb-6">
            {ABOUT_CONTENT.description1}
          </p>
          
          <p className="text-gray-600 mb-8">
            {ABOUT_CONTENT.description2}
          </p>

        </div>

      </div>
    </section>
  );
};

export default About;
