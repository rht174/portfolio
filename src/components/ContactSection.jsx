import { Code, Github, Linkedin, Mail, Phone } from "lucide-react";

import React from "react";

const ContactSection = () => (
  <section id="contact" className="py-20 px-4">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Get In Touch
      </h2>
      <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
        Ready to build something amazing together? I'm always excited to discuss
        new opportunities, innovative projects, and creative collaborations.
        Let's connect!
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12 mb-12">
        <div className="flex items-center space-x-4">
          <Mail className="w-6 h-6 text-purple-400" />
          <a
            href="mailto:rohitkushwah1742000@gmail.com"
            className="text-xl text-gray-300 hover:text-purple-400 transition-colors"
          >
            rohitkushwah1742000@gmail.com
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <Phone className="w-6 h-6 text-blue-400" />
          <a
            href="tel:+917723912502"
            className="text-xl text-gray-300 hover:text-blue-400 transition-colors"
          >
            +91 77239 12502
          </a>
        </div>
      </div>

      <div className="flex justify-center space-x-8">
        <a
          href="https://github.com/rht174"
          className="bg-gray-800 hover:bg-gray-700 p-4 rounded-full transition-all duration-300 transform hover:scale-110"
        >
          <Github className="w-8 h-8 text-white" />
        </a>
        <a
          href="https://www.linkedin.com/in/rht174/"
          className="bg-blue-600 hover:bg-blue-700 p-4 rounded-full transition-all duration-300 transform hover:scale-110"
        >
          <Linkedin className="w-8 h-8 text-white" />
        </a>
        <a
          href="https://leetcode.com/u/rht174/"
          className="bg-yellow-600 hover:bg-yellow-700 p-4 rounded-full transition-all duration-300 transform hover:scale-110"
        >
          <Code className="w-8 h-8 text-white" />
        </a>
      </div>
    </div>
  </section>
);

export default ContactSection;
