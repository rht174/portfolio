import React from "react";

const SkillsSection = ({ skills }) => (
  <section id="skills" className="py-20 px-4">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Technical Arsenal
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 text-center hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <span className="text-gray-300 text-sm font-medium">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
