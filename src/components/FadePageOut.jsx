import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  initial: { x: 50, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -50, opacity: 0 },
};

const PageTransitionWrapper = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

export default PageTransitionWrapper;
