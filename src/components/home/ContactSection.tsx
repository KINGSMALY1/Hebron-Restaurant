
import React from 'react';
import { MapPin, Clock, Phone, Instagram } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-10 px-4 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 font-playfair text-center">Find Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <ContactItem 
              icon={<MapPin size={20} className="text-red-DEFAULT flex-shrink-0 mt-1" />}
              title="Address"
              content={[
                "4 Krika Sama Road, Maiduguri 600282, Borno",
                "R4RW+Q5 Maiduguri"
              ]}
            />
            
            <ContactItem 
              icon={<Clock size={20} className="text-red-DEFAULT flex-shrink-0 mt-1" />}
              title="Hours"
              content={["7am - 11pm, Open Daily"]}
            />
            
            <ContactItem 
              icon={<Phone size={20} className="text-red-DEFAULT flex-shrink-0 mt-1" />}
              title="Phone"
              content={["0912 666 6934"]}
            />
            
            <ContactItem 
              icon={<Instagram size={20} className="text-red-DEFAULT flex-shrink-0 mt-1" />}
              title="Social Media"
              content={[
                <a 
                  key="instagram"
                  href="https://www.instagram.com/hebronfoodmaiduguri" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-red-DEFAULT hover:text-red-dark"
                >
                  @hebronfoodmaiduguri
                </a>
              ]}
            />
          </div>
          
          <div className="h-96 rounded-lg overflow-hidden shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.7350008272245!2d13.1358948!3d11.850280099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11049f3ee6b046bf%3A0x2bba0628b6d92e32!2sHebron%20Food!5e0!3m2!1sen!2sng!4v1681867362737!5m2!1sen!2sng" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="HEBRON FOOD Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  content: (string | React.ReactNode)[];
}

const ContactItem = ({ icon, title, content }: ContactItemProps) => (
  <div className="flex items-start space-x-3">
    {icon}
    <div>
      <h3 className="font-semibold">{title}</h3>
      {content.map((item, index) => (
        <p key={index} className="text-gray-700">{item}</p>
      ))}
    </div>
  </div>
);

export default ContactSection;
