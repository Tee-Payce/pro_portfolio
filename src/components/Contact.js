import React from "react";
import { motion } from "framer-motion";


const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center px-6 py-20">
      <motion.h2 
        className="text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h2>
      
      <motion.form
        action="mailto:your.email@example.com"
        method="POST"
        encType="text/plain"
        className="max-w-lg mx-auto space-y-4"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <input type="text" name="name" placeholder="Your Name" className="w-full p-3 border dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800" required />
        <input type="email" name="email" placeholder="Your Email" className="w-full p-3 border dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800" required />
        <textarea name="message" placeholder="Your Message" className="w-full p-3 border dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800" rows="5" required></textarea>
        <button type="submit" className="bg-blue-600 dark:bg-blue-400 text-white px-6 py-3 rounded-lg hover:shadow-lg transition">
          Send
        </button>
      </motion.form>

      <div className="text-center mt-6 space-x-6">
        <a href="https://linkedin.com/in/patrick-siziba-3b0838271" className="hover:text-blue-600 dark:hover:text-blue-400">LinkedIn</a>
        <a href="https://github.com/Tee-Payce" className="hover:text-blue-600 dark:hover:text-blue-400">GitHub</a>
        <a href="mailto:tkpat3@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400">Email</a>
      </div>
    </div>
  );
};

export default Contact;
