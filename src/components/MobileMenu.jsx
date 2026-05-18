import React from "react";

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={
        `fixed top-0 left-0 w-full h-screen bg-[rgba(10,10,10,0.7)] backdrop-blur-lg z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ease-in-out 
        
        ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
        
        `}
    >
        <button 
            onClick={() => setMenuOpen(false)}
            className="absolute w-7 h-6 flex justify-center items-center top-5 right-10 text-white text-3xl focus:outline-none cursor-pointer "
            aria-label="Close Menu">
            &times;
        </button>

        <ul className="flex flex-col items-center">
            <li 
                onClick={()=>setMenuOpen(false)}
                className={`text-2xl font-semibold text-white my-4 transition-transform duration-300
                ${menuOpen ? "transform translate-y-0 opacity-100" : "transform -translate-y-5 opacity-0"}`}>
              <a href="#home">Home</a>
            </li>
            <li 
                onClick={()=>setMenuOpen(false)}
                className={`text-2xl font-semibold text-white my-4 transition-transform duration-300
                ${menuOpen ? "transform translate-y-0 opacity-100" : "transform -translate-y-5 opacity-0"}`}>
              <a href="#about">About</a>
            </li>
            <li 
                onClick={()=>setMenuOpen(false)}
                className={`text-2xl font-semibold text-white my-4 transition-transform duration-300
                ${menuOpen ? "transform translate-y-0 opacity-100" : "transform -translate-y-5 opacity-0"}`}>
              <a href="#projects">Projects</a>
            </li>
            <li 
                onClick={()=>setMenuOpen(false)}
                className={`text-2xl font-semibold text-white my-4 transition-transform duration-300
                ${menuOpen ? "transform translate-y-0 opacity-100" : "transform -translate-y-5 opacity-0"}`}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
    </div>
  );
};

export default MobileMenu;
