import { FOOTER_CONTENT } from "../constants";

const Footer = () => {
  return (
    <footer id="contact" className="py-6 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto bg-[#991B1B] text-white rounded-tr-[2.5rem] rounded-bl-[1.5rem] rounded-br-[1.5rem] rounded-tl-[1.5rem] overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Side: Contact Form */}
          <div className="p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-serif font-bold mb-3">{FOOTER_CONTENT.companyName}</h2>
            
            <p className="text-red-100 mb-4 text-xs md:text-sm max-w-sm leading-relaxed">
              {FOOTER_CONTENT.description}
            </p>
            
            <h3 className="text-white font-bold tracking-widest mb-3 text-[0.7rem] md:text-xs">CONTACT US</h3>
            
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <a 
                    href={`https://mail.google.com/mail/?view=cm&fs=0&to=${FOOTER_CONTENT.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-[#991B1B] px-5 py-2 text-xs font-bold tracking-widest hover:bg-gray-100 transition-colors rounded text-center"
                >
                    EMAIL US
                </a>
                <a 
                    href={`https://wa.me/${FOOTER_CONTENT.phone.replace(/[^0-9]/g, '')}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block border-2 border-white text-white px-5 py-2 text-xs font-bold tracking-widest hover:bg-white/10 transition-colors rounded text-center"
                >
                    WHATSAPP
                </a>
            </div>

            <div className="space-y-1 text-red-100 text-xs">
                <p>
                    <strong>Email:</strong> {FOOTER_CONTENT.email}
                </p>
                <p>
                    <strong>Phone:</strong> {FOOTER_CONTENT.phone}
                </p>
            </div>
          </div>
          
          {/* Right Side: Map */}
          <div className="h-[15rem] md:h-auto bg-gray-800 relative">
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
