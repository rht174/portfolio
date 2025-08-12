import React, { useEffect, useState } from "react";

// Import components
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import ExperienceSection from "../components/ExperienceSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import EducationSection from "../components/EducationSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

// Import data
import { skills, projects, experiences } from "../data/portfolioData";

// Main Portfolio Component
const Portfolio = () => {
  // State for tracking which section is active
  const [activeSection, setActiveSection] = useState("home");
  // State for tracking if page is scrolled
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled more than 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll to a specific section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  // Main return statement
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navigation
        isScrolled={isScrolled}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <HeroSection scrollToSection={scrollToSection} />
      <ExperienceSection experiences={experiences} />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Portfolio;
