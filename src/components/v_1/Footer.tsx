import { Github, Linkedin, Mail, ArrowUp, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gradient-to-br from-tech-dark to-tech-dark/95 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center space-x-2 mb-6">
            <div className="h-10 w-10 rounded-md bg-gradient-to-r from-tech-blue to-tech-purple flex items-center justify-center">
              <Code className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold gradient-text">Your Name</h3>
          </div>

          <div className="flex space-x-6 mb-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-white" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-white" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-white" />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <button
              onClick={() =>
                document
                  .getElementById("home")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-gray-300 hover:text-white transition-colors px-3 py-1 rounded-full hover:bg-white/10"
            >
              Home
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-gray-300 hover:text-white transition-colors px-3 py-1 rounded-full hover:bg-white/10"
            >
              About
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-gray-300 hover:text-white transition-colors px-3 py-1 rounded-full hover:bg-white/10"
            >
              Projects
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-gray-300 hover:text-white transition-colors px-3 py-1 rounded-full hover:bg-white/10"
            >
              Contact
            </button>
          </div>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent mb-8"></div>

          <p className="text-gray-400 mb-8">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>

          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToTop}
            className="bg-white/10 hover:bg-white/20 text-white"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
