// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-darkCard text-gray-600 dark:text-gray-400 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Left Section: Branding */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Desire B. All rights reserved.
        </p>

        {/* Right Section: Social Links */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="https://github.com/Byadiso"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/desire-byamungu-5b0785a1/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:byadiso@gmail.com"
            className="hover:text-accent transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
