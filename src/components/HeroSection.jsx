import { Code, Github, Linkedin, MapPin } from "lucide-react";

import React from "react";
import profile from "../assets/profile.jpeg";

const HeroSection = ({ scrollToSection }) => (
  <section
    id="home"
    className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-gray-900"
  >
    <div className="max-w-7xl mx-auto text-center mt-16">
      <div className="mb-8">
        {/* Profile Picture */}
        <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-1 mb-8">
          <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
            <img
              src={profile}
              alt="Profile"
              className="rounded-full object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="leading-normal text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          Rohit Kushwah
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-2">
          Fullstack Developer
        </p>
        <p className="text-lg text-gray-400 mb-8 flex items-center justify-center">
          <MapPin className="w-5 h-5 mr-2" />
          Bengaluru, India
        </p>
      </div>

      {/* Description */}
      <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
        Full Stack Developer with 2+ years of experience in Django, React
        Native, React.js and Node.js. Skilled in JavaScript, TypeScript, and
        Python with a focus on scalable APIs, responsive UIs, and cloud-based
        architectures. Experienced in AWS, Docker, and CI/CD.
      </p>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
        <button
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1QWbfp91M9p-a08yoqraUZKz4G6Sb7NZZ/view?usp=sharing"
            )
          }
          className="cursor-pointer bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full font-medium hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
        >
          Download Resume
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="cursor-pointer border-2 border-purple-500 text-purple-400 px-8 py-3 rounded-full font-medium hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105"
        >
          Get In Touch
        </button>
      </div>

      {/* Social Links */}
      <div className="flex justify-center space-x-8 mb-8">
        <a
          href="https://github.com/rht174"
          className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
        >
          <Github className="w-8 h-8" />
        </a>
        <a
          href="https://www.linkedin.com/in/rht174/"
          className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
        >
          <Linkedin className="w-8 h-8" />
        </a>
        <a
          href="https://leetcode.com/u/rht174/"
          className="text-gray-400 hover:text-yellow-400 transition-all duration-300 transform hover:scale-110"
        >
          <Code className="w-8 h-8" />
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
