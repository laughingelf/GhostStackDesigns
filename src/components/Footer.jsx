import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Left - Brand */}
        <div className="text-center md:text-left">
          <img
            src="/img/ghost-only-logo.png"
            alt="GhostStack Designs"
            className="w-20 mx-auto md:mx-0 mb-4 hover:scale-105 transition-transform duration-300"
          />
          <p className="text-lg header-font transition duration-300 hover:text-white">
            GhostStack Designs builds professional websites for small businesses that work as hard as you do. Texas-built. Straightforward. Effective.
          </p>
        </div>

        {/* Middle - Navigation */}
        <div className="text-center">
          <h4 className="text-lg font-semibold mb-4 header-font">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { label: "Home", to: "/" },
              { label: "About Us", to: "/about" },
              { label: "Services", to: "/services" },
              { label: "Pricing", to: "/pricing" },
              { label: "Contact", to: "/contact" },
              { label: "Privacy Policy", to: "/privacy-policy" },
            ].map((link, i) => (
              <li key={i}>
                <Link
                  to={link.to}
                  className="hover:text-white transition duration-300 hover:pl-1 block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right - Contact / Social */}
        <div className="text-center md:text-right">
          <h4 className="text-lg font-semibold mb-4 header-font">Connect</h4>
          <div className="flex justify-center md:justify-end gap-4 mb-4">
            {[
              { icon: <Mail size={20} />, href: "mailto:ghoststackdesigns@gmail.com" },
              { icon: <Facebook size={20} />, href: "https://www.facebook.com/profile.php?id=61575337962005" },
              { icon: <Instagram size={20} />, href: "https://www.instagram.com/ghoststackdesigns/" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="word-link hover:scale-110 transition-all duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} GhostStack Designs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
