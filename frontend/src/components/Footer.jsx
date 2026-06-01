import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              Lumina<span className="text-primary-500">Clean</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Professional cleaning services that bring the sparkle back to your home and office. We guarantee satisfaction with every clean.
            </p>
            <div className="flex gap-4">
              <a href="https://wa.me/94113457231" target="_blank" rel="noreferrer" className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-colors flex items-center gap-2 font-medium">
                WhatsApp Us
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 uppercase tracking-wider text-gray-300">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="h-5 w-5 text-primary-500 flex-shrink-0 mt-1" />
                <span>Anagarika Dharmapala Mawatha, Colombo, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="h-5 w-5 text-primary-500" />
                <span>011 345 7231</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="h-5 w-5 text-primary-500" />
                <span>luminaclean@gmail.com</span>
              </li>
            </ul>
          </div>
          
          <div className="h-64 rounded-xl overflow-hidden shadow-lg border border-gray-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58638743126!2d79.77380313886478!3d6.92192208470535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1716301234567!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location">
            </iframe>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} LuminaClean Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
