import React from "react";
import { Moon, Sun } from "lucide-react";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/70 dark:bg-gray-800/70 shadow-md z-50 mb-5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Siziba Patrick Portfolio</h1>
        <ul className="flex space-x-6">
          <li><a href="#hero" className="hover:text-blue-600 dark:hover:text-blue-400">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a></li>
          <li><a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a></li>
        </ul>
        <button 
          onClick={() => setDarkMode(!darkMode)} 
          className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
