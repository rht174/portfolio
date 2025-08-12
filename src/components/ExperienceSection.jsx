import React from "react";
import { Briefcase, Calendar, MapPin, Zap } from "lucide-react";

const ExperienceSection = ({ experiences }) => (
  <section id="experience" className="py-20 px-4">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Professional Journey
      </h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:bg-gray-800/50 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-purple-400 mb-2">
                  {exp.title}
                </h3>
                <p className="text-xl text-gray-300 mb-2">{exp.company}</p>
                <div className="flex flex-col md:flex-row md:items-center text-gray-400 text-sm">
                  <div className="flex items-center mb-2 md:mb-0">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.period}
                  </div>
                  <div className="flex items-center md:ml-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    {exp.location}
                  </div>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <Briefcase className="w-12 h-12 text-blue-400" />
              </div>
            </div>
            <div className="space-y-3">
              {exp.achievements.map((achievement, i) => (
                <div key={i} className="flex items-start">
                  <Zap className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300 leading-relaxed">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
