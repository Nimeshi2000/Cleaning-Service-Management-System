import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary-100 p-2 rounded-lg">
                <Sparkles className="h-8 w-8 text-primary-600" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-gray-900">
                Lumina<span className="text-primary-600">Clean</span>
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/#about" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">About</a>
            <a href="/#services" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">Services</a>
            <a href="/#gallery" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">Gallery</a>
            <Link to="/admin" className="flex items-center gap-1 text-gray-500 hover:text-gray-800 transition-colors">
              <ShieldCheck className="h-4 w-4" /> Admin
            </Link>
            <a href="/#booking" className="btn-primary">
              Book Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
