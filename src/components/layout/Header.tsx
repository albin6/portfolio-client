import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = ["About", "Skills", "Projects", "Contact"];

const MotionLink = motion(motion.a);

const EnhancedHeader: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <motion.h1
            className="text-2xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Digital Alchemist
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
                  className="text-foreground hover:text-primary transition-colors duration-300"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Toggle menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-8">
                  <AnimatePresence>
                    {isOpen &&
                      navItems.map((item, index) => (
                        <MotionLink
                          key={item}
                          href={`#${item.toLowerCase()}`}
                          className="text-foreground hover:text-primary transition-colors duration-300 font-semibold"
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 50 }}
                          transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            delay: index * 0.1,
                          }}
                          onClick={() => setIsOpen(false)}
                        >
                          {item}
                        </MotionLink>
                      ))}
                  </AnimatePresence>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default EnhancedHeader;
