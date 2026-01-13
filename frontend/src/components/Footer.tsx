import { FOOTER_CONTENT } from "../constants";

const Footer = () => {
  return (
    <footer id="contact" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto bg-[#991B1B] text-white rounded-tr-[6.25rem] rounded-bl-[1.9rem] rounded-br-[1.9rem] rounded-tl-[1.9rem] overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Side: Contact Form */}
          <div className="p-12 md:p-16">
            <h2 className="text-4xl font-serif font-bold mb-8">{FOOTER_CONTENT.companyName}</h2>
            
            <p className="text-red-100 mb-8 max-w-sm leading-relaxed">
              {FOOTER_CONTENT.description}
            </p>
            
            <h3 className="text-white font-bold tracking-widest mb-4 text-sm">GET IN TOUCH</h3>
            
            <div className="flex flex-col sm:flex-row gap-0">
                <input 
                    type="email" 
                    placeholder="ENTER YOUR EMAIL" 
                    className="bg-[#7F1D1D] border border-red-800 text-white px-6 py-4 outline-none placeholder-red-300 flex-grow"
                />
                <button className="bg-white text-[#991B1B] px-8 py-4 font-bold tracking-widest hover:bg-gray-100 transition-colors">
                    SEND
                </button>
            </div>
            <p className="mt-4 text-red-100 text-sm">
                Or email us: {FOOTER_CONTENT.email}
            </p>
            <p className="mt-4 text-red-100 text-sm">
                Or Call/Message us: {FOOTER_CONTENT.phone}
            </p>
          </div>
          
          {/* Right Side: Map */}
          <div className="h-[25rem] md:h-auto bg-gray-800 relative">
             {/* Map Placeholder */}
             <iframe 
                src={FOOTER_CONTENT.mapUrl}
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-90"
             ></iframe>
             
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
