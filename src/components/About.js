import { motion } from "framer-motion";
import React from "react";

// ✅ Import assets (images + documents)
import cisco from "../assets/Cisco-logo.png";
import ccna2 from "../assets/ccna2.jpg";
import ccna3 from "../assets/ccna3.jpg";
import dataA from "../assets/data_an.jpg";

import sizibapcvPic from "../assets/cvPic.jpg";
import sizibapcv from "../assets/sizibapatrick_cv.pdf";
import cnna1doc from "../assets/ccna1.pdf";
import ccna2doc from "../assets/ccna2.jpg";
import ccna3doc from "../assets/ccna3.jpg";
import dataAnDoc from "../assets/data_an.jpg";

const certificates = [
  {
    title: "Curriculum Vitae",
    description: "Print out version of Siziba Patrick Takudzwa’s Curriculum Vitae.",
    document: sizibapcv,
    images: sizibapcvPic,
  },
  {
    title: "CCNAv7: Introduction to Networks",
    description: "Cisco Networking Academy: Introduction to Networks certification.",
    document: cnna1doc,
    images: cisco,
  },
  {
    title: "CCNAv7: Switching, Routing, and Wireless Essentials",
    description: "Cisco Networking Academy: Switching, Routing & Wireless certification.",
    document: ccna2doc,
    images: ccna2,
  },
  {
    title: "CCNAv7: Enterprise Networking, Security, and Automation",
    description: "Cisco Networking Academy: Enterprise Networking certification.",
    document: ccna3doc,
    images: ccna3,
  },
  {
    title: "Cisco Certified Data Analytics Essentials",
    description: "Cisco Networking Academy: Data Analytics Essentials certification.",
    document: dataAnDoc,
    images: dataA,
  },
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-center">Academic & Professional Qualifications</h2>

      <ul className="list-disc text-left space-y-2 mb-12">
        <li>BTech in Software Engineering, Harare Institute of Technology (2025)</li>
        <li>Freelance Software Engineer</li>
        <li>Specializing in Web & Mobile Applications</li>
      </ul>

      {/* Certificates Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {certificates.map((cert, i) => (
          <motion.div
            key={i}
            className="bg-white dark:bg-gray-900 backdrop-blur-lg shadow-xl rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
          >
            {/* Certificate Image */}
            <img
              src={cert.images}
              alt={cert.title}
              className="w-full h-48 object-cover bg-gray-50 dark:bg-gray-900 p-4"
            />

            {/* Card Content */}
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{cert.description}</p>

              {/* Download Button */}
              <a
                href={cert.document}
                download
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition"
              >
                Download PDF
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
