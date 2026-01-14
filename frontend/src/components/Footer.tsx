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
            
            <h3 className="text-white font-bold tracking-widest mb-6 text-sm">CONTACT US</h3>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${FOOTER_CONTENT.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-[#991B1B] px-8 py-4 font-bold tracking-widest hover:bg-gray-100 transition-colors rounded text-center"
                >
                    EMAIL US
                </a>
                <a 
                    href={`https://wa.me/${FOOTER_CONTENT.phone.replace(/[^0-9]/g, '')}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block border-2 border-white text-white px-8 py-4 font-bold tracking-widest hover:bg-white/10 transition-colors rounded text-center"
                >
                    WHATSAPP
                </a>
            </div>

            <div className="space-y-2 text-red-100 text-sm">
                <p>
                    <strong>Email:</strong> {FOOTER_CONTENT.email}
                </p>
                <p>
                    <strong>Phone:</strong> {FOOTER_CONTENT.phone}
                </p>
            </div>
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
