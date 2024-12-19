import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["About", "Skills", "Projects", "Contact"];

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <header className="fixed w-full bg-gray-300 bg-opacity-90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <motion.h1
            className="text-2xl font-bold text-gray-950"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Your Name
          </motion.h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-950 hover:text-blue-400 transition-colors duration-300"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={variants}
        >
          <ul className="flex flex-col space-y-4 mt-4">
            {navItems.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-blue-400 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
