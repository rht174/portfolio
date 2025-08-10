import {
  Award,
  Briefcase,
  Calendar,
  Code,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Star,
  User,
  Zap,
} from "lucide-react";
import React, { useEffect, useState } from "react";

import profile from "./src/assets/profile.jpeg";

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

  // Skills data array
  const skills = [
    "Java 8/17",
    "Spring Boot",
    "Spring MVC",
    "Hibernate ORM",
    "JPA",
    "RESTful APIs",
    "SQL",
    "Oracle",
    "Redis",
    "Git",
    "Bitbucket",
    "Gradle",
    "JUnit",
    "IntelliJ Idea",
    "Microservices",
    "Agile",
    "Scrum",
    "Generative AI (LLMs)",
    "Prompt Engineering",
    "CI/CD",
  ];

  // Projects data array
  const projects = [
    {
      title: "QUBIT",
      description:
        "Engineered a full-stack Q&A platform with Java, Spring Boot, and ReactJS, enabling seamless, secure collaboration for developers. Designed scalable backend APIs, integrated tag-based filtering, and implemented an upvote system to boost engagement.",
      tech: ["Java", "Spring Boot", "ReactJS", "REST APIs"],
      github: "",
    },
    {
      title: "POLARIS",
      description:
        "Led end-to-end development of a real-time Bus Tracking System using Java, Firebase, Android Studio and Google Maps API. Implemented secure authentication and integrated live location tracking to streamline campus transit operations.",
      tech: ["Java", "Firebase", "Android Studio", "Google Maps API"],
      github: "",
    },
  ];

  // Experience data array
  const experiences = [
    {
      title: "Systems Engineer",
      company: "Tata Consultancy Services",
      period: "June 2023 - Present",
      location: "Indore, India",
      achievements: [
        "Developed a microservices-based onboarding system for a banking client using Java and Spring, boosting onboarding efficiency by 40% and minimizing manual effort.",
        "Built scalable RESTful APIs with robust error handling and documentation, ensuring reliable system communication.",
        "Improved backend performance by 30% using Redis caching to optimize database operations and reducing response latency.",
        "Enhanced system reliability with Resilience4j design patterns (Retry and Circuit Breaker), reducing transient errors by 40% and lowering costs.",
        "Secured 21 microservices with Open Authorization 2.0 (OAuth 2.0), meeting enterprise-grade security standards.",
        "Integrated Apache Kafka for asynchronous and event-driven communication, enabling loosely coupled services ensuring reliability.",
        "Practiced Test-Driven Development (TDD) with JUnit, achieving over 85%+ code coverage and maintained an A rating in SonarQube for code quality.",
        "Followed cloud-native development standards for microservices deployed on Red Hat OpenShift, collaborating with DevOps teams to integrate CI/CD using Jenkins, Docker, and Bitbucket.",
      ],
    },
  ];

  // Navigation Component
  const Navigation = () => (
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

  // Hero Section Component
  const HeroSection = () => (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-gray-900"
    >
      <div className="max-w-7xl mx-auto text-center mt-16">
        <div className="mb-8">
          {/* Profile Picture Placeholder */}
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
            Backend Developer
          </p>
          <p className="text-lg text-gray-400 mb-8 flex items-center justify-center">
            <MapPin className="w-5 h-5 mr-2" />
            Indore, India
          </p>
        </div>

        {/* Description */}
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Passionate Backend Developer specializing in building robust, scalable
          microservices architectures. I turn complex business requirements into
          clean, efficient technical solutions, with strong expertise in the
          Java ecosystem and cloud-native technologies. Currently developing
          high-performance systems for the banking domain.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
          <button
            onClick={() => window.open("")}
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
            href=""
            className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
          >
            <Github className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/"
            className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
          >
            <Linkedin className="w-8 h-8" />
          </a>
          <a
            href="https://leetcode.com/"
            className="text-gray-400 hover:text-yellow-400 transition-all duration-300 transform hover:scale-110"
          >
            <Code className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );

  // Experience Section Component
  const ExperienceSection = () => (
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
                    <p className="text-gray-300 leading-relaxed">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Skills Section Component
  const SkillsSection = () => (
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

  // Projects Section Component
  const ProjectsSection = () => (
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
                <a
                  href={project.github}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
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

  // Education Section Component
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

        {/* Certifications */}
        {/* <div className="max-w-4xl mx-auto mt-12">
          <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Professional Certifications
          </h3>
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <Award className="w-8 h-8 text-blue-400 mr-4" />
              <h4 className="text-xl font-bold text-blue-400">
                Industry Recognition
              </h4>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-500/20 p-3 rounded-full mr-4">
                <Star className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h5 className="text-lg font-semibold text-white">
                  Microsoft AZ-900: Azure Fundamentals
                </h5>
                <p className="text-gray-400">
                  Certified 2024 | Cloud Computing & Azure Services
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );

  // Contact Section Component
  const ContactSection = () => (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Ready to build something amazing together? I'm always excited to
          discuss new opportunities, innovative projects, and creative
          collaborations. Let's connect!
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12 mb-12">
          <div className="flex items-center space-x-4">
            <Mail className="w-6 h-6 text-purple-400" />
            <a
              href="mailto:rohit@gmail.com"
              className="text-xl text-gray-300 hover:text-purple-400 transition-colors"
            >
              rohit@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="w-6 h-6 text-blue-400" />
            <a
              href="tel:+0000000000"
              className="text-xl text-gray-300 hover:text-blue-400 transition-colors"
            >
              +0000000000
            </a>
          </div>
        </div>

        <div className="flex justify-center space-x-8">
          <a
            href="https://github.com/"
            className="bg-gray-800 hover:bg-gray-700 p-4 rounded-full transition-all duration-300 transform hover:scale-110"
          >
            <Github className="w-8 h-8 text-white" />
          </a>
          <a
            href="https://www.linkedin.com/"
            className="bg-blue-600 hover:bg-blue-700 p-4 rounded-full transition-all duration-300 transform hover:scale-110"
          >
            <Linkedin className="w-8 h-8 text-white" />
          </a>
          <a
            href="https://leetcode.com/"
            className="bg-yellow-600 hover:bg-yellow-700 p-4 rounded-full transition-all duration-300 transform hover:scale-110"
          >
            <Code className="w-8 h-8 text-white" />
          </a>
        </div>
      </div>
    </section>
  );

  // Footer Component
  const Footer = () => (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-700 py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-400">© 2025 Rohit Kushwah.</p>
      </div>
    </footer>
  );

  // Main return statement
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navigation />
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Portfolio;
