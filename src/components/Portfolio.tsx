import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Introduction from "./sections/Introduction";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-200 to-gray-100 text-gray-950">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Introduction />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
