import React from "react";
import RevealOnScroll from "../RevealOnScroll";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-cyan-400">
            Hi, I'm Gyaneshwar
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-lg mx-auto">
            A passionate Frontend Developer specializing in React.js, JavaScript,
            and modern web technologies. I build responsive, user-friendly, and
            performance-driven web applications with clean UI/UX design. Always
            eager to learn new technologies and create impactful digital
            experiences.
          </p>
          <div className="flex justify-center space-x-4">
            <a 
            href="#projects" 
            className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >View Projects</a>
            <a 
            href="#contact" 
            className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10]"
            >Contact Me</a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
