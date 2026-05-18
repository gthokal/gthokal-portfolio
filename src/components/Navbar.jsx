import React, { useEffect } from "react";

const Navbar = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);
  return (
    <div className="fixed top-0 left-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/20 px-6 py-4">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="logo">
            <a href="https://github.com/repos?q=owner%3A%40me" target="_blank" className="font-mono text-xl font-bold text-white">
              gthokal.<span className="text-blue-500">github.com</span>
            </a>
          </div>

          <div
            className="w-7 h-6 relative cursor-pointer z-40 md:hidden flex justify-center items-center"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <ul className="hidden md:flex items-center space-x-8">
            <li className="text-gray-300 hover:text-white transition-colors">
              <a href="#home">Home</a>
            </li>
            <li className="text-gray-300 hover:text-white transition-colors">
              <a href="#about">About</a>
            </li>
            <li className="text-gray-300 hover:text-white transition-colors">
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
