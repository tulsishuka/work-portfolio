import { Dribbble, Instagram, Linkedin, Twitter } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-white font-sans">
      {/* CTA Section */}
     

      {/* Main Footer Info */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center border-2 border-white rounded-sm">
               <span className="font-black text-xs italic">S</span>
            </div>
            <span className="text-2xl font-bold tracking-tight">Strakzat</span>
          </div>

          {/* Headquarters */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Headquarters</h4>
            <ul className="text-gray-400 space-y-1">
              <li>Voorhaven 27C</li>
              <li>3025 HC Rotterdam</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Contact</h4>
            <ul className="text-gray-400 space-y-1">
              <li>+31 (6) 39 56 15 80</li>
              <li>info@strakzat.com</li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Follow us</h4>
            <div className="flex gap-6 text-gray-400">
              <Linkedin className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
              <Dribbble className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
          <div>
            ©2024 Strakzat. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;