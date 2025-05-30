import React, { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  ExternalLink,
  ChevronDown,
  Code2,
  Briefcase,
  User,
  Mail,
  Star,
  Coffee,
  Globe,
  FileDown,
} from "lucide-react";
import { Mail as MailIcon } from "lucide-react";
import emailjs from "@emailjs/browser";
import chatImg from "../assets/chat_img.avif";
import cropImg from "../assets/crop_img.jpg";
import facialImg from "../assets/facial_img.png";
import resturantImg from "../assets/resturant_img.avif";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Skills from resume
  const skills = [
    // Programming Languages
    "Python",
    "Java",
    "C",
    "JavaScript",

    // Web Technologies & Frameworks
    "HTML/CSS",
    "Node.js",
    "Express.js",
    "Angular",
    "React",

    // Databases
    "SQL",
    "MongoDB",

    // Tools & Cloud
    "Git",
    "Docker",
    "Firebase",
    "AWS",
    "Data Structures",
    "Machine Learning",
    "Problem Solving",
  ];

  // Projects from resume
  const projects = [
    {
      title: "Restro – Restaurant Management System",
      description:
        "Developed using MongoDB, Express, Angular, and Node (MEAN Stack). Features seamless browsing, reservation booking, and a responsive interface for both customers and staff.",
      image: resturantImg,
      link: "https://github.com/Ar2306/restaurant_management",
    },
    {
      title: "Real-Time Chat Application",
      description:
        "Built using the MERN stack with Firebase for real-time messaging and authentication, and Cloudinary for image uploads. Supports secure login, image sharing, and live chat updates.",
      image: chatImg,
      link: "https://github.com/Ar2306/chat_app",
    },
    {
      title: "CropAssistAI – AI-Powered Agriculture Assistant",
      description:
        "AI assistant for crop recommendation, fertilizer prediction, and disease detection. Built using Flask, machine learning models, and Hugging Face API with multilingual support.",
      image: cropImg,
      link: "https://github.com/Ar2306/CropAssistAI",
    },
    {
      title: "Facial Expression Recognition App",
      description:
        "Web-based real-time emotion detection system using deep learning. Captures webcam input and classifies emotions like happy, sad, and angry using a pre-trained model.",
      image: facialImg,
      link: "https://github.com/Ar2306/facial_expression",
    },
  ];

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/assets/resume.pdf";
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000")',
            filter: "brightness(0.3)",
          }}
        ></div>
        <div
          className={`container mx-auto px-6 z-10 text-center transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">
            Anand <span className="text-gradient">Reddy</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Eat. Code. Sleep. Repeat.
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <a
              href="https://github.com/Ar2306"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
            >
              <Github
                size={24}
                className="text-white group-hover:scale-110 transition-transform duration-300"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/anandreddy4545/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
            >
              <Linkedin
                size={24}
                className="text-white group-hover:scale-110 transition-transform duration-300"
              />
            </a>
            <a
              href="mailto:anandreddy2306@gmail.com"
              className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
            >
              <Mail
                size={24}
                className="text-white group-hover:scale-110 transition-transform duration-300"
              />
            </a>
          </div>

          <a
            href="#about"
            className="animate-bounce inline-block p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
          >
            <ChevronDown size={32} className="text-white" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 group">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600"
                  alt="Profile"
                  className="rounded-lg shadow-xl transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
            <div className="md:w-1/2 animate-slide-up">
              <h2 className="text-4xl font-bold mb-6">About Me</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm a Bachelor of Technology student specializing in Artificial
                Intelligence and Machine Learning at Anurag University,
                Hyderabad. With a strong foundation in programming and data
                structures, I'm passionate about developing innovative solutions
                using cutting-edge technologies.
              </p>
              <button
                onClick={handleDownloadResume}
                className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 text-white rounded-lg mb-8"
              >
                <FileDown size={20} />
                <span>Download Resume</span>
              </button>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                  <Code2 className="text-indigo-600 h-8 w-8" />
                  <div>
                    <h3 className="font-semibold">Education</h3>
                    <p className="text-sm text-gray-600">B.Tech in AI & ML</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                  <Coffee className="text-indigo-600 h-8 w-8" />
                  <div>
                    <h3 className="font-semibold">Internships</h3>
                    <p className="text-sm text-gray-600">Cisco & Zscaler</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="text-center font-semibold group-hover:text-indigo-600 transition-colors duration-300">
                  {skill}
                </p>
                <div className="h-1 w-0 group-hover:w-full bg-indigo-600 mt-2 transition-all duration-300 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-500 transition-colors duration-300"
                    >
                      View Project{" "}
                      <ExternalLink
                        size={16}
                        className="ml-1 group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
              <div className="group">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div className="group">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="group">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-all duration-300"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/Ar2306"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all duration-300 group"
              >
                <Github
                  size={20}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/anandreddy4545/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all duration-300 group"
              >
                <Linkedin
                  size={20}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </a>
              <a
                href="mailto:anandreddy2306@gmail.com"
                className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all duration-300 group"
              >
                <Mail
                  size={20}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </a>
            </div>
            <div className="text-center">
              <p className="text-gray-400 mb-2">
                © 2024 Anand Reddy. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm"></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
