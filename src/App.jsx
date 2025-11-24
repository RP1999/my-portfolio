import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import ParticleBackground from './components/ParticleBackground';
import ThemeToggle from './components/ThemeToggle';
import LottieAnimation from './components/LottieAnimation';
import { Github, Linkedin, Mail, Phone, MapPin, ChevronDown, ExternalLink, Code, Sparkles, Rocket, Zap, Star, Award, BookOpen } from 'lucide-react';

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(progress);

      // Animate elements on scroll
      const elements = document.querySelectorAll('.scroll-animate');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        if (isVisible) {
          el.classList.add('animate-visible');
        }
      });
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projects = [
    {
      title: "Cooking Recipe Sharing Platform",
      category: "Full-Stack Web Application",
      description: "A comprehensive platform for sharing and discovering recipes with Google authentication, full CRUD operations, media uploads, YouTube integration, and social features.",
      tech: ["React.js", "Java Spring Boot", "MongoDB"],
      github: "https://github.com/dilinaRandima/PAF-CP",
      color: "from-orange-500 to-red-500",
      icon: "🍳",
      image: "/images/recipe-platform.png"
    },
    {
      title: "Fruit Management System",
      category: "Supply Chain Platform",
      description: "Platform for managing fruit supply chain with AI-powered grading, inventory management, and secure payment processing.",
      tech: ["JavaScript", "Python", "MongoDB"],
      github: "https://github.com/dilinaRandima/ITPM-Fruit-Management-System",
      color: "from-green-500 to-emerald-500",
      icon: "🍎",
      image: "/images/fruit-management.png"
    },
    {
      title: "Appointment Management System",
      category: "Client Management",
      description: "Project for managing appointments with full CRUD operations, project planning tools, and code quality management.",
      tech: ["JavaScript", "Node.js", "MongoDB"],
      github: "https://github.com/UdaraSu/ITP24_B8_09_Pet_Health_Care_Management_System/tree/Ranidu",
      color: "from-blue-500 to-cyan-500",
      icon: "📅",
      image: "/images/appointment-system.png"
    },
    {
      title: "Task Manager App",
      category: "Mobile Application",
      description: "Android task management application with complete CRUD functionality and local database storage.",
      tech: ["Kotlin", "Android Studio", "SQLite"],
      github: "https://github.com/RP1999/Task-Manager",
      color: "from-purple-500 to-pink-500",
      icon: "✓",
      image: "/images/task-manager.png"
    }
  ];

  const skills = [
    { name: "LEARN", icon: <Sparkles className="w-12 h-12" />, description: "Continuously exploring new technologies and frameworks", color: "from-yellow-500 to-orange-500" },
    { name: "BUILD", icon: <Code className="w-12 h-12" />, description: "Developing full-stack applications with modern tools", color: "from-orange-500 to-red-500" },
    { name: "DEPLOY", icon: <Rocket className="w-12 h-12" />, description: "Delivering scalable and efficient solutions", color: "from-red-500 to-pink-500" }
  ];

  const stats = [
    { number: "10+", label: "Projects Completed", icon: <Star className="w-8 h-8" /> },
    { number: "4+", label: "Technologies Mastered", icon: <Code className="w-8 h-8" /> },
    { number: "2+", label: "Years Learning", icon: <BookOpen className="w-8 h-8" /> },
    { number: "100%", label: "Dedication", icon: <Award className="w-8 h-8" /> }
  ];

  const techStack = [
    "JavaScript", "Java", "Python", "SQL", "React.js", "Node.js",
    "Express.js", "MongoDB", "MySQL", "Android Studio", "Git"
  ];

  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen overflow-hidden relative transition-colors duration-300">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-900 z-50">
        <div
          className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Cursor Glow Effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 107, 53, 0.15), transparent 80%)`
        }}
      />

      {/* Background Particles */}
      <ParticleBackground />

      {/* Animated Background Grid */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255, 107, 53, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 107, 53, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>



      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-lg shadow-orange-500/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold group cursor-pointer">
            <span className="text-orange-500 inline-block transition-transform group-hover:rotate-12">R</span>
            <span className="inline-block transition-transform group-hover:scale-110">P</span>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex gap-8">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 dark:text-gray-300 hover:text-orange-500 font-medium transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative z-10">
        <div className="max-w-7xl w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="text-orange-500 text-6xl md:text-8xl font-black mb-4 animate-fade-in-up text-glow">
                FULL-STACK
              </div>
              <div className="text-gray-900 dark:text-white text-6xl md:text-8xl font-black mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                DEVELOPER
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                by Ranidu Pramod
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                I’m a full stack dev who enjoys creating smooth, good-looking digital experiences. I mix design sense with solid coding to build apps that feel great to use. With my UI/UX and creative background, I love turning simple ideas into clean, fun products.
              </p>
              <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                <a href="https://github.com/RP1999" target="_blank" rel="noopener noreferrer"
                  className="group bg-orange-500 text-black px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-all hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 flex items-center gap-2">
                  <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  View GitHub
                </a>
                <a href="#contact"
                  className="group border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-full font-bold hover:bg-orange-500 hover:text-black transition-all hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 flex items-center gap-2">
                  <Zap className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Contact Me
                </a>
              </div>
            </div>
            <div className="flex justify-center animate-slide-in-right">
              <div className="relative animate-float">
                <LottieAnimation />
                <div className="absolute bottom-8 right-8 bg-orange-500 text-black px-6 py-2 rounded-full font-bold animate-pulse-slow shadow-lg shadow-orange-500/50 z-20">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Open to Work
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-16">
            <ChevronDown className="text-orange-500 w-8 h-8 animate-bounce cursor-pointer hover:scale-125 transition-transform" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="scroll-animate text-center p-6 bg-white dark:bg-black border-2 border-orange-500/20 dark:border-orange-500/30 rounded-2xl hover:border-orange-500 transition-all hover-lift group shadow-lg dark:shadow-none"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="text-orange-500 flex justify-center mb-3 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-4xl font-black text-orange-500 mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills/Process Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle, #FF6B35 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>

        <div className="max-w-7xl mx-auto relative">
          <h2 className="scroll-animate text-5xl md:text-7xl font-black text-center mb-4 text-glow">
            Development Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="scroll-animate group relative bg-white dark:bg-black border-2 border-orange-500 rounded-3xl p-8 hover:bg-gradient-to-br hover:from-orange-500 hover:to-red-500 transition-all duration-500 hover-lift overflow-hidden shadow-xl dark:shadow-none"
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-red-500/0 group-hover:from-orange-500/20 group-hover:to-red-500/20 transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className={`text-white group-hover:text-black mb-4 transition-colors bg-gradient-to-br ${skill.color} p-4 rounded-2xl w-fit group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-4xl font-black text-orange-500 group-hover:text-black mb-4 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-gray-400 group-hover:text-black transition-colors">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="scroll-animate bg-white dark:bg-black border-2 border-orange-500 rounded-3xl p-12 hover:border-orange-400 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl group-hover:bg-orange-500/10 transition-all duration-500 animate-pulse-slow"></div>
            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-black mb-8">
                I'm <span className="text-orange-500 text-glow">Ranidu Pramod</span>,<br />
                Future Software Engineer
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Undergraduate student pursuing a degree in Information Technology with a strong passion
                for cutting-edge technology. I specialize in full-stack web development using the MERN
                stack and have hands-on experience in both frontend and backend development.
              </p>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                Eager to explore software development, I bring leadership, teamwork, and the ability to
                excel under pressure. My commitment to staying at the forefront of advancements drives
                my goal to contribute meaningfully to the dynamic field of computer systems.
              </p>

              <div className="mt-12">
                <h3 className="text-3xl font-black text-orange-500 mb-6 flex items-center gap-2">
                  <Code className="w-8 h-8" />
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-orange-500/10 border border-orange-500 text-orange-500 px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-500 hover:text-black transition-all duration-300 cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-orange-500/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-3xl font-black text-orange-500 mb-6">Education</h3>
                <div className="space-y-4 bg-gradient-to-r from-orange-500/5 to-transparent p-6 rounded-2xl border-l-4 border-orange-500">
                  <div>
                    <h4 className="text-xl font-bold">BSc (Hons) in Information Technology</h4>
                    <p className="text-gray-400">Sri Lanka Institute of Information Technology (SLIIT)</p>
                    <p className="text-orange-500 font-semibold">Sep 2022 - Present</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-gray-50 dark:bg-black relative z-10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-animate text-center mb-16">
            <h2 className="text-orange-500 text-2xl mb-4 flex items-center justify-center gap-2">
              <Sparkles className="w-6 h-6 animate-pulse" />
              Selected Work
            </h2>
            <h3 className="text-5xl md:text-7xl font-black text-glow">Projects</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="scroll-animate project-card group hover-lift"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white dark:bg-black border-2 border-orange-500/20 dark:border-orange-500/30 rounded-3xl overflow-hidden hover:border-orange-500 transition-all duration-300 h-full relative shadow-lg dark:shadow-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-red-500/0 group-hover:from-orange-500/5 group-hover:to-red-500/5 transition-all duration-500 z-10 pointer-events-none"></div>

                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className="text-orange-500 text-sm font-semibold bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full border border-orange-500">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 relative z-10">
                    <h3 className="text-2xl font-black mb-4 group-hover:text-orange-500 transition-colors text-gray-900 dark:text-white">{project.title}</h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-6 group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="bg-orange-500/10 text-orange-500 px-3 py-1 rounded-full text-xs font-semibold hover:bg-orange-500 hover:text-black transition-all duration-300 cursor-pointer">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-orange-500 font-bold hover:gap-4 transition-all group/link">
                      <span className="group-hover/link:text-orange-400">View on GitHub</span>
                      <ExternalLink className="w-4 h-4 group-hover/link:rotate-45 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="scroll-animate text-center mt-16">
            <a href="https://github.com/RP1999" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-orange-500 text-black px-12 py-4 rounded-full font-black text-lg hover:bg-orange-600 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 group">
              <Github className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              View All Projects on GitHub
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-white dark:bg-black border-t-2 border-orange-500/20 relative z-10 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <LottieAnimation
              src="https://lottie.host/d0b57cab-f0d4-471e-9b72-121c78b5f688/bSGdqhJ0oC.lottie"
              className="w-64 h-64"
            />
          </div>
          <h2 className="scroll-animate text-5xl md:text-7xl font-black mb-12 text-glow">
            Let's <span className="text-orange-500">Connect</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { icon: Mail, label: "Email", value: "promoranidu@gmail.com", link: "mailto:promoranidu@gmail.com" },
              { icon: Phone, label: "Phone", value: "071 666 6690", link: "tel:0716666690" },
              { icon: Github, label: "GitHub", value: "github.com/RP1999", link: "https://github.com/RP1999" },
              { icon: Linkedin, label: "LinkedIn", value: "ranidu-pramod", link: "https://linkedin.com/in/ranidu-pramod" }
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target={item.link.startsWith('http') ? '_blank' : undefined}
                rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="scroll-animate flex items-center gap-4 bg-white dark:bg-black border-2 border-orange-500 rounded-2xl p-6 hover:bg-orange-500 dark:hover:bg-orange-500 hover:text-black dark:hover:text-black transition-all group hover-lift shadow-lg dark:shadow-none"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <item.icon className="w-8 h-8 text-orange-500 group-hover:text-black group-hover:scale-110 transition-all" />
                <div className="text-left flex-1">
                  <div className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-black/70 dark:group-hover:text-black/70">{item.label}</div>
                  <div className="font-bold text-gray-900 dark:text-white group-hover:text-black dark:group-hover:text-black">{item.value}</div>
                </div>
                <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
              </a>
            ))}
          </div>

          <div className="scroll-animate flex items-center justify-center gap-2 text-gray-400">
            <MapPin className="w-5 h-5" />
            <span>Kandana, Sri Lanka 🇱🇰</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-white dark:bg-black border-t-2 border-orange-500/20 relative z-10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © Ranidu Pramod 2025 Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}