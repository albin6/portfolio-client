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
      title: "SocialiteX - Built with Next.js",
      image:
        "https://res.cloudinary.com/dkph7vdgg/image/upload/v1736265107/socialitex_kuxjlf.png",
      description:
        "SocialiteX is a responsive social media platform built with a modern tech stack, including Next.js, PostgreSQL, Prisma, ShadCN, Tailwind CSS, and Clerk for secure authentication.",
      href: "https://socialitex.vercel.app",
    },
    {
      title: "E-commerce Platform - MERN Stack Application",
      image:
        "https://res.cloudinary.com/dkph7vdgg/image/upload/v1736265225/cell-sphere_tkefoi.png",
      description:
        "Cell Sphere is a mobile phone e-commerce platform with secure checkout, advanced filtering, and easy navigation. Built using Node.js, Express.js, and MongoDB, it supports JWT and Google OAuth for secure authentication.",
      href: "https://cell-sphere-shop.vercel.app/signup",
    },
    {
      title: "Company Portfolio - React & TypeScript Application",
      image:
        "https://res.cloudinary.com/dkph7vdgg/image/upload/v1736265724/dates-qatar_gy5p0m.png",
      description:
        "This company portfolio is built with React and TypeScript, utilizing the ShadCN component library for UI elements and Tailwind CSS for styling. It features interactive maps powered by Leaflet.js, offering a modern, responsive design and a seamless user experience.",
      href: "https://datesqatar.com/",
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
              <CardContent>
                <Link to={project.href} target="_blank">
                  <img
                    src={project.image}
                    alt="image"
                    className="max-w-full rounded "
                  />
                </Link>
              </CardContent>
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
