import React from "react";
import { GraduationCap, Star } from "lucide-react";

const EducationSection = () => (
  <section id="education" className="py-20 px-4">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Academic Foundation
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
          <div className="flex items-center mb-6">
            <GraduationCap className="w-8 h-8 text-purple-400 mr-4" />
            <h3 className="text-2xl font-bold text-purple-400">
              Bachelor of Technology
            </h3>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-semibold text-white">
                Computer Science Engineering
              </h4>
              <p className="text-gray-300">AITR</p>
              <p className="text-gray-400">2018-2023 | Indore, India</p>
              <p className="text-purple-400 font-medium">CGPA: 7.48/10</p>
            </div>
            <div className="border-t border-gray-700 pt-4">
              <h5 className="text-lg font-medium text-gray-300 mb-2">
                Core Coursework:
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  "Object Oriented Programming (OOP)",
                  "Database Management System (DBMS)",
                  "Operating Systems",
                  "Computer Networks",
                  "Data Structures and Algorithms (DSA)",
                  "System Design",
                ].map((course, i) => (
                  <div key={i} className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-2" />
                    <span className="text-gray-400 text-sm">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
