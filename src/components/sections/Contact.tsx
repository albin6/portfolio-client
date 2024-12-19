import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact: React.FC = () => (
  <motion.section
    id="contact"
    className="py-20 px-4 text-center"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <motion.h2
      className="text-4xl font-bold mb-12"
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ once: true }}
    >
      Get In Touch
    </motion.h2>
    <motion.div
      className="flex justify-center space-x-4"
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Button variant="outline" size="icon">
        <Github className="h-6 w-6" />
      </Button>
      <Button variant="outline" size="icon">
        <Linkedin className="h-6 w-6" />
      </Button>
      <Button variant="outline" size="icon">
        <Mail className="h-6 w-6" />
      </Button>
    </motion.div>
  </motion.section>
);

export default Contact;
