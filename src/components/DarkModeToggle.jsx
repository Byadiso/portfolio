import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return window.localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    window.localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <motion.div
      className="fixed top-4 right-4 p-1 bg-gray-200 dark:bg-gray-800 rounded-full shadow-lg"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 dark:from-yellow-400 dark:to-orange-500 text-white shadow-lg transform transition-all duration-300 hover:scale-110 focus:outline-none"
      >
        {darkMode ? (
          <FaSun size={20} className="animate-spin-slow" />
        ) : (
          <FaMoon size={20} />
        )}
      </button>
    </motion.div>
  );
};

export default DarkModeToggle;
