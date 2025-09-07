import React, { useState } from "react";
import { motion, AnimatePresence, color } from "framer-motion";

// ✅ Replace these imports with your actual assets
import carteen1 from "../assets/carteen1.png";
import carteen2 from "../assets/carteen2.png";
import carteen3 from "../assets/carteen3.png";
import carteen4 from "../assets/carteen5.png";
import carteen5 from "../assets/carteen4.png";
import carteen6 from "../assets/carteen6.png";
import carteen7 from "../assets/carteen7.png";
import carteen8 from "../assets/carteen8.png";

import aers1 from "../assets/aers1.png";
import aers2 from "../assets/aers2.png";
import aers3 from "../assets/aers3.png";
import aers4 from "../assets/aers4.png";
import aers5 from "../assets/aers5.png";
import aers6 from "../assets/aers6.png";
import aers7 from "../assets/aers7.jpg";
import aers8 from "../assets/aers8.jpg";
import aers9 from "../assets/aers9.jpg";


const projects = [
  {
    title: "Carteen E-ticketing System",
    description: "A web-based application that produces users with an electronic ticket with a QR (Quick Response) code. In place of paper slips a electronic ticket with a QR code will be issued. Each ticket has a unique ID provided by the QR code. This eliminates the need for the manual system. Users purchase the meal of their choice through the web and make payment before they are served with their meal. Service officials are entrusted with the verification of the authenticity of the electronic ticket before the user of the system can proceed to get food. The proposed system poses several benefits to both parties and is ultimately more efficient. Imaging devices such a QR code scanner or the camera of a smartphone can be used.  ",
    tech: "React, Node.js, MongoDB",
    images: [carteen1, carteen2, carteen3, carteen4, carteen5, carteen6, carteen7, carteen8],
    link: 'https://github.com/Tee-Payce/Food-webApp'
  },
  {
    title: "AERS Emergency",
    description: "Is an Artificial Intelligence Powered Emergency System (AERS) that uses computer vision capabilities on a mobile interface to automatically detect and report accident scenes, the solution includes a Routing system to nearest emergency respondents according to user specifications. Soluion also includes triggers such as light sensing and motion triggers to aid with acivation of application to initiate reporting",
    tech: "React Native, Expo,Appwrite, nodejs, TensorFlow, FastAPI",
    images: [aers2,aers3, aers4, aers5, aers6, aers7, aers1, aers8, aers9],
    link: 'https://github.com/Tee-Payce/aers-web'
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = (project, index) => {
    setActiveProject(project);
    setCurrentIndex(index);
  };

  const closeGallery = () => {
    setActiveProject(null);
    setCurrentIndex(0);
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === activeProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? activeProject.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen px-6 py-20 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg shadow-xl rounded-2xl p-6 transform transition duration-300 hover:scale-105 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.3, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            
          >
            {/* Collage preview */}
            <motion.div className="grid grid-cols-3 gap-2 mb-4">
              {project.images.slice(0, 3).map((img, j) => (
                <img
                  key={j}
                  src={img}
                  alt={`${project.title}-${j}`}
                  className="rounded-md object-cover h-30 w-full"
                  whileHover={{ scale: 1.1 }}
                  onClick={() => openGallery(project, 0)}
                />
              ))}
            </motion.div>
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {project.description}
            </p>
            <p className="mt-2 text-sm text-blue-600 dark:text-blue-400">
              Tech Stack: {project.tech}
            </p>
            <p className="mt-2 text-sm text-blue-600 dark:text-blue-400"
            onClick={()=> {<a href={project.link}/>}}
            whileHover={{color: '#ffc802'}}
            >
              <a href={project.link} className="hover:text-blue-600 dark:hover:text-blue-400">GitHub Link:{project.link} </a>
               
            </p>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Gallery */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close button */}
            <button
              onClick={closeGallery}
              className="absolute top-6 right-6 text-white text-3xl font-bold"
            >
              ×
            </button>

            {/* Image slider */}
            <div className="relative max-w-3xl w-full">
              <motion.img
                key={currentIndex}
                src={activeProject.images[currentIndex]}
                alt={`screenshot-${currentIndex}`}
                className="rounded-lg w-full h-[70vh] object-contain"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              />

              {/* Navigation */}
              <button
                onClick={prevImage}
                className="absolute top-1/2 left-0 -translate-y-1/2 text-white text-4xl px-3"
              >
                ‹
              </button>
              <button
                onClick={nextImage}
                className="absolute top-1/2 right-0 -translate-y-1/2 text-white text-4xl px-3"
              >
                ›
              </button>
            </div>

            {/* Caption */}
            <p className="text-center text-white mt-4">
              {activeProject.title} – {activeProject.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
