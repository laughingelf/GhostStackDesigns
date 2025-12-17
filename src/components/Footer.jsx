import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-gray-300 border-t border-white/10">
      
      {/* Main Footer Content */}
      <div className="py-14 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link to="/" aria-label="GhostStack Designs home">
              <img
                src="/img/ghost-only-logo.png"
                alt="GhostStack Designs logo"
                className="w-20 mx-auto md:mx-0 mb-4 hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </Link>

            <p className="text-lg header-font leading-relaxed">
              GhostStack Designs builds <strong>small business websites</strong> that load fast,
              look clean, and convert. Texas-built. Straightforward. Effective.
            </p>

            <p className="mt-4 text-sm text-gray-400">
              Serving Texas &amp; remote clients nationwide.
            </p>
          </div>

          {/* Services Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 header-font">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services">Small Business Web Design</Link></li>
              <li><Link to="/services">Wix Website Development</Link></li>
              <li><Link to="/pricing">Website Pricing & Plans</Link></li>
              <li><Link to="/ghoststack-express">GhostStack Express (48-Hour Website)</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>

            <div className="mt-6">
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl blue-btn header-font text-white hover:scale-105 transition"
              >
                View Pricing →
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 header-font">Connect</h4>

            <p className="text-sm text-gray-400 mb-4">
              Questions or ready to start? Email us and we’ll respond quickly.
            </p>

            <div className="flex justify-center md:justify-end gap-4 mb-4">
              <a href="mailto:ghoststackdesigns@gmail.com" aria-label="Email GhostStack Designs">
                <Mail size={20} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61575337962005"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GhostStack Designs on Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/ghoststackdesigns/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GhostStack Designs on Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="border-t border-white/10 py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} GhostStack Designs. All rights reserved.
          </p>
          <Link to="/privacy-policy" className="hover:text-white transition">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
