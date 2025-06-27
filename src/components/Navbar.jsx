import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navControls = useAnimation();
  const lastScrollY = useRef(0);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Pricing", to: "/pricing" },
    { label: "FAQ's", to: "/faq" },
    { label: "Contact", to: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling down
        navControls.start({ y: "-100%" });
      } else {
        // Scrolling up
        navControls.start({ y: "0%" });
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navControls]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 text-white"
      id="navbar"
      animate={navControls}
      initial={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo Image with Hover Animation */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.05, rotate: -2 }}
        >
          <Link to="/">
            <img
              src="/img/ghost-only-logo.png"
              alt="GhostStack Designs Logo"
              className="w-30 h-auto transition-transform cursor-pointer"
            />
          </Link>
        </motion.div>

        {/* Desktop Nav Links with Hover Animations */}
        <nav className="hidden md:flex gap-8 text-xl header-font">
          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.2 + index * 0.1,
              }}
              whileHover={{
                scale: 1.1,
                rotate: 2,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              className="inline-block"
            >
              <Link to={item.to} className="word-link transition duration-200">
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <motion.button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.nav
          className="md:hidden bg-white px-6 pb-6 text-lg header-font"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <ul className="flex flex-col gap-4">
            {navItems.map((item, index) => (
              <motion.li
                key={item.label}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link
                  to={item.to}
                  className="block text-gray-800 hover:blue-word transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Navbar;
