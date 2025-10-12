import { ExternalLink, Github } from "lucide-react";

import React from "react";

const ProjectsSection = ({ projects }) => (
  <section id="projects" className="py-20 px-4">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-purple-400">
                {project.title}
              </h3>
              <div className="flex items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                    title="View Source Code"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                )}
                {project.siteUrl && (
                  <a
                    href={project.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-lg transition-colors text-sm"
                    title="View Live Site"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="font-medium">View Site</span>
                  </a>
                )}
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
