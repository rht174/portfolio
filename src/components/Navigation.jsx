import React from "react";

const Navigation = ({ isScrolled, activeSection, scrollToSection }) => (
  <nav
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? "bg-gray-900/95 backdrop-blur-md shadow-lg"
        : "bg-transparent"
    }`}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Rohit Kushwah
          </span>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-8">
            {[
              "Home",
              "Experience",
              "Skills",
              "Projects",
              "Education",
              "Contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-purple-500/20 hover:scale-105 ${
                  activeSection === item.toLowerCase()
                    ? "text-purple-400 bg-purple-500/10"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation;
