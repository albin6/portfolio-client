import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import resume from "../../assets/AlbinAJi_Resume.pdf";

const Introduction: React.FC = () => {
  return (
    <motion.section
      id="about"
      className="h-screen flex py-44 flex-col justify-end items-center px-4 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="mb-6 bg-black w-40 h-40 rounded-full"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 1.4,
          type: "spring",
          stiffness: 100,
        }}
      >
        <img
          className="w-full h-full rounded-full"
          src="https://res.cloudinary.com/dkph7vdgg/image/upload/c_crop,ar_1:1/v1734617785/WhatsApp_Image_2024-12-13_at_9.44.41_AM_cfhnkh.jpg"
          alt=""
        />
      </motion.div>
      <motion.h2
        className="text-5xl font-bold mb-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          type: "spring",
          stiffness: 100,
        }}
      >
        Hi, I'm Albin Aji
      </motion.h2>
      <motion.p
        className="text-2xl mb-8 "
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.4,
          duration: 0.8,
          type: "spring",
          stiffness: 100,
        }}
      >
        A MERN Stack Developer
      </motion.p>
      <div className="flex space-x-4">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button
            className="bg-gray-950 text-white"
            variant="outline"
            size="lg"
          >
            <Link
              to={"https://www.linkedin.com/in/albin-aji-aa0ab0312/"}
              target="_blank"
            >
              Connect Me
            </Link>
          </Button>
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a
            href={resume}
            download={"AlbinAji-Resume.pdf"}
            style={{ textDecoration: "none" }}
          >
            <Button variant="outline" size="lg">
              Download CV
            </Button>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Introduction;
