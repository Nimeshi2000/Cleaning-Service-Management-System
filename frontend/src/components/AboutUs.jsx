import { CheckCircle2 } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-primary-100 rounded-3xl transform -rotate-3 z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2670&auto=format&fit=crop" 
              alt="Cleaning Team" 
              className="relative z-10 rounded-2xl shadow-xl w-full object-cover h-[500px]"
            />
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <span className="text-3xl font-bold">10+</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Years of</p>
                  <p className="text-gray-500">Excellence</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <span className="text-primary-600 font-bold tracking-wider uppercase text-sm">About Us</span>
            <h2 className="mt-2 text-4xl font-extrabold text-gray-900 mb-6">Setting the Standard in Professional Cleaning</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At LuminaClean, we believe that a clean environment is the foundation of a happy, healthy life. Our dedicated team of vetted professionals brings top-tier expertise and eco-friendly products to every job.
            </p>
            
            <ul className="space-y-4">
              {[
                "100% Satisfaction Guarantee",
                "Eco-friendly, non-toxic cleaning products",
                "Fully vetted, insured, and trained staff",
                "Flexible scheduling tailored to your needs"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
