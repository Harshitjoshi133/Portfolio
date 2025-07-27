import { Mail, Phone, MapPin } from "lucide-react";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-montserrat font-bold text-3xl mb-4">Harshit Joshi</h3>
            <p className="text-gray-400 mb-6">
              Full Stack developer specializing in creating beautiful, functional, and accessible web experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FaLinkedinIn className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FaGithub className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-montserrat font-bold text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition duration-300 font-medium">Home</a></li>
              <li><a href="#works" className="text-gray-400 hover:text-white transition duration-300 font-medium">Portfolio</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition duration-300 font-medium">About</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition duration-300 font-medium">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition duration-300 font-medium">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-montserrat font-bold text-xl mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-3" />
                harshithardyjoshi@gmail.com
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-3" />
                +91 7579460062
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-3" />
                Nainital, Uttarakhand
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Harshit Joshi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
