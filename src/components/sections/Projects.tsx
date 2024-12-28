import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack MERN application with user authentication and payment integration.",
      href: "https://github.com/albin6/cell-sphere-api",
    },
    {
      title: "Company Portfolio",
      description:
        "A React and TypeScript-based application with a Node.js backend, designed to manage daily tasks and projects efficiently, offering a modern and scalable solution for company portfolio management.",
      href: "https://github.com/albin6/dd-portfolio",
    },
    {
      title: "Social Media Dashboard",
      description:
        "A responsive dashboard built with React and Express, integrating various social media APIs.",
      href: "https://github.com/albin6/cell-sphere-api",
    },
  ];

  return (
    <motion.section
      id="projects"
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
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline">
                  <Link to={project.href} target="_blank">
                    View Project
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
