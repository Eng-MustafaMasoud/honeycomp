import React from "react";
import { icons, Mail, Phone, MapPin } from "lucide-react";

const HoneycombIcon = icons["Honeycomb"]; // Accessing the icon from the 'icons' map

const Footer = () => {
  return (
    <footer id="contact" className="bg-honey-dark text-honey-light/80 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <a
              href="#hero"
              className="flex items-center text-2xl font-bold text-white mb-4"
            >
              {HoneycombIcon && (
                <HoneycombIcon className="h-8 w-8 mr-2 text-honey-light" />
              )}
              Golden Nectar
            </a>
            <p className="text-sm">
              Bringing you the purest honey, straight from nature's heart. Taste
              the difference quality makes.
            </p>
          </div>
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#why-us" className="hover:text-white">
                  Why Our Honey?
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white">
                  Our Products
                </a>
              </li>
              <li>
                <a href="#health-hub" className="hover:text-white">
                  Health Benefits
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h5>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" /> 123 Honey Lane, Beeton, CA
                90210
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" /> (555) 123-4567
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" /> info@goldennectar.com
              </li>
            </ul>
            {/* Placeholder for social media icons */}
          </div>
        </div>
        <div className="border-t border-honey-light/20 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Golden Nectar. All Rights
            Reserved. Crafted with ❤️.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
