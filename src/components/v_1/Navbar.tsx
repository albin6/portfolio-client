import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail, Code } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="h-9 w-9 rounded-md bg-gradient-to-r from-tech-blue to-tech-purple flex items-center justify-center">
              <Code className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl gradient-text">
              DevPortfolio
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              <button
                onClick={() => scrollToSection("home")}
                className="nav-link font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="nav-link font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="nav-link font-medium"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="nav-link font-medium"
              >
                Contact
              </button>
            </div>
            <div className="flex space-x-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-gray-600 hover:text-tech-blue transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-gray-600 hover:text-tech-blue transition-colors" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-gray-600 hover:text-tech-blue transition-colors" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white absolute left-0 right-0 top-full shadow-md py-4 px-4 animate-slide-in rounded-b-lg glass-effect">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="nav-link font-medium p-2 hover:bg-gray-50 rounded-md"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="nav-link font-medium p-2 hover:bg-gray-50 rounded-md"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="nav-link font-medium p-2 hover:bg-gray-50 rounded-md"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="nav-link font-medium p-2 hover:bg-gray-50 rounded-md"
              >
                Contact
              </button>
            </div>
            <div className="flex space-x-4 mt-4 pt-4 border-t">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-gray-600 hover:text-tech-blue transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-gray-600 hover:text-tech-blue transition-colors" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-gray-600 hover:text-tech-blue transition-colors" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
