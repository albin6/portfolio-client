import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const Skills: React.FC = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "MongoDB",
    "Node.js",
    "Express.js",
    "React.js",
    "RESTful APIs",
    "GraphQL",
    "AWS",
    "GDC",
    "Tailwind CSS",
    "Git",
  ];

  return (
    <motion.section
      id="skills"
      className="py-20 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="text-lg py-2 px-4">
              {skill}
            </Badge>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
