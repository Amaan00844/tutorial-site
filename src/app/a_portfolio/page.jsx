"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Camera, Code, Brain, Rocket, Mail, Phone, MapPin, Github, Linkedin, Twitter, 
  ChevronDown, Menu, X, ExternalLink, Download, Award, Briefcase, GraduationCap, 
  Target, User, Calendar, FileText, Star, ArrowUp, Play, Database, Server, 
  Settings, Zap, TrendingUp, Filter, Sun, Moon
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const [filter, setFilter] = useState('all');
  const [theme, setTheme] = useState('dark');

  // Intersection Observers
  const { ref: homeRef, inView: homeInView } = useInView({ threshold: 0.3 });
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.1 });
  const { ref: servicesRef, inView: servicesInView } = useInView({ threshold: 0.1 });
  const { ref: projectsRef, inView: projectsInView } = useInView({ threshold: 0.1 });
  const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    return () => setMounted(false);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementId(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  }, []);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    setShowScrollTop(scrollTop > 100);
    
    const sections = ['home', 'about', 'services', 'projects', 'contact'];
    let current = '';
    sections.forEach(section => {
      const element = document.getElementId(section);
      if (element && element.getBoundingClientRect().top <= 100) {
        current = section;
      }
    });
    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // SEO and Analytics
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.title = "Amaan Chauhan - Full-Stack Developer & AI Specialist";
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', "Expert Full-Stack Developer specializing in React, Node.js, AI/ML integration, and scalable cloud architectures. Available for enterprise projects.");
      }
      // Placeholder for analytics tracking
      console.log('Tracking page view...');
    }
  }, []);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateForm = () => formData.name && validateEmail(formData.email) && formData.message;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setFormStatus('error');
      return;
    }
    setFormStatus('sending');
    
    // Simulate API call with analytics
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      console.log('Tracking form submission...');
      setTimeout(() => setFormStatus(''), 3000);
    }, 1500);
  };

  // Particle Background Component
  const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      let animationFrameId;
      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      const particlesArray = [];
      const numberOfParticles = 120;

      class Particle {
        constructor() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.size = Math.random() * 5 + 1;
          this.speedX = Math.random() * 0.8 - 0.4;
          this.speedY = Math.random() * 0.8 - 0.4;
          this.opacity = Math.random() * 0.8 + 0.2;
          this.color = theme === 'dark' ? 'rgba(168, 85, 247, 0.9)' : 'rgba(75, 192, 192, 0.9)';
        }

        update() {
          this.x += this.speedX;
          this.y += this.speedY;

          if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
          if (this.y > canvas.height || this.y < 0) this.speedY *= -1;

          this.opacity = Math.random() * 0.8 + 0.2;
        }

        draw() {
          ctx.save();
          ctx.globalAlpha = this.opacity;
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particlesArray.forEach(particle => {
          particle.update();
          particle.draw();
        });
        animationFrameId = requestAnimationFrame(animate);
      };

      animate();

      return () => {
        window.removeEventListener('resize', resizeCanvas);
        cancelAnimationFrame(animationFrameId);
      };
    }, [theme]);

    return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-50" />;
  };

  // Hero Sphere Component
  const HeroSphere = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      canvas.width = 450;
      canvas.height = 450;

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = 140;
      let rotation = 0;

      const points = [];
      for (let i = 0; i < 400; i++) {
        const theta = (i / 400) * Math.PI * 2;
        const phi = Math.acos((i % 50) / 50 * 2 - 1);
        
        points.push({
          x: radius * Math.sin(phi) * Math.cos(theta),
          y: radius * Math.sin(phi) * Math.sin(theta),
          z: radius * Math.cos(phi)
        });
      }

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        rotation += 0.02;
        points.forEach(point => {
          const cosY = Math.cos(rotation);
          const sinY = Math.sin(rotation);
          
          const rotatedX = point.x * cosY - point.z * sinY;
          const rotatedZ = point.x * sinY + point.z * cosY;
          
          const distance = Math.sqrt(rotatedX ** 2 + rotatedZ ** 2 + point.y ** 2);
          const scale = 300 / (300 + distance);
          
          const x2d = centerX + rotatedX * scale;
          const y2d = centerY + point.y * scale;
          
          const brightness = (point.z + radius) / (radius * 2);
          
          ctx.fillStyle = `rgba(168, 85, 247, ${brightness * 0.95})`;
          ctx.beginPath();
          ctx.arc(x2d, y2d, scale * 2.5, 0, Math.PI * 2);
          ctx.fill();
        });

        requestAnimationFrame(animate);
      };

      animate();
    }, []);

    return (
      <div className="relative w-full h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/40 shadow-lg">
        <canvas ref={canvasRef} className="w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 animate-pulse-very-slow"></div>
      </div>
    );
  };

  // Skill Bar Component
  const SkillBar = ({ skill, delay = 0 }) => {
    const barRef = useRef(null);

    useEffect(() => {
      if (barRef.current) {
        const bar = barRef.current;
        setTimeout(() => {
          bar.style.transition = `width ${2.0 + delay}s ease-out`;
          bar.style.width = `${skill.level}%`;
        }, delay * 1000);
      }
    }, [skill.level, delay]);

    return (
      <div className="group">
        <div className="flex justify-between items-center mb-2">
          <span className="text-white font-medium">{skill.name}</span>
          <span className="text-purple-400 font-semibold">{skill.level}%</span>
        </div>
        <div className="relative h-3 bg-gray-800/70 rounded-full overflow-hidden border border-purple-400/30">
          <div 
            ref={barRef}
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full relative"
            style={{ width: 0 }}
          >
            <div className="absolute inset-0 bg-white/40 animate-shimmer-medium"></div>
          </div>
        </div>
      </div>
    );
  };

  const services = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Enterprise-grade web applications with modern architecture patterns and microservices.",
      tech: ["React 18", "Next.js 14", "TypeScript", "GraphQL", "Node.js"],
      metrics: "99.9% uptime • 15+ enterprise projects"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Intelligent systems with deep learning, NLP, and predictive analytics capabilities.",
      tech: ["Python 3.11", "TensorFlow", "PyTorch", "LangChain", "Vector DBs"],
      metrics: "35% conversion improvement • 1M+ data points processed"
    },
    {
      icon: Rocket,
      title: "Cloud Architecture",
      description: "Scalable cloud-native solutions with container orchestration and serverless computing.",
      tech: ["AWS", "Kubernetes", "Docker", "Terraform", "Serverless"],
      metrics: "60% cost reduction • Zero-downtime deployments"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "High-performance applications with advanced caching, CDN strategies, and monitoring.",
      tech: ["Redis", "Vercel Edge", "Next.js ISR", "Web Vitals", "Lighthouse"],
      metrics: "Core Web Vitals 100% • 2x load time improvement"
    }
  ];

  const projects = [
    {
      title: "Enterprise Collaboration Platform",
      description: "Real-time team collaboration suite with advanced workflow automation and analytics.",
      technologies: ["React", "GraphQL", "PostgreSQL", "Redis", "Docker"],
      impact: "45% productivity increase • 500+ active users",
      category: "web",
      gradient: "from-indigo-600 via-purple-600 to-pink-600"
    },
    {
      title: "AI Analytics Engine",
      description: "Machine learning platform for predictive business intelligence and data insights.",
      technologies: ["Next.js", "Python", "TensorFlow", "FastAPI", "Supabase"],
      impact: "98% prediction accuracy • 1M+ daily data points",
      category: "ai",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600"
    },
    {
      title: "Headless CMS Gateway",
      description: "Multi-tenant content management with GraphQL federation and microservices architecture.",
      technologies: ["Node.js", "Strapi", "Apollo", "Kafka", "Kubernetes"],
      impact: "10K+ concurrent requests • 99.99% availability",
      category: "web",
      gradient: "from-blue-600 via-indigo-600 to-violet-600"
    },
    {
      title: "E-Commerce Optimization Platform",
      description: "Performance monitoring and A/B testing suite for large-scale e-commerce sites.",
      technologies: ["React", "Node.js", "MongoDB", "AWS Lambda", "Sentry"],
      impact: "30% conversion uplift • Real-time analytics",
      category: "web",
      gradient: "from-orange-500 via-red-500 to-pink-500"
    }
  ];

  const skills = {
    frontend: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 88 }
    ],
    backend: [
      { name: "Node.js", level: 90 },
      { name: "GraphQL", level: 85 },
      { name: "PostgreSQL", level: 82 },
      { name: "Redis", level: 80 }
    ],
    devops: [
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 78 },
      { name: "AWS", level: 82 },
      { name: "CI/CD", level: 88 }
    ],
    ai: [
      { name: "Python", level: 85 },
      { name: "TensorFlow", level: 75 },
      { name: "PyTorch", level: 70 },
      { name: "LangChain", level: 65 }
    ]
  };

  const testimonials = [
    {
      name: "John Doe",
      role: "CTO, TechCorp",
      text: "Amaan's expertise in cloud architecture transformed our infrastructure. Highly recommended!",
      rating: 5
    },
    {
      name: "Jane Smith",
      role: "Product Manager, InnovateX",
      text: "The AI solutions delivered by Amaan exceeded our expectations. Great collaboration!",
      rating: 4.5
    }
  ];

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex items-center justify-center">
        <div 
          className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin-medium"
        />
      </div>
    );
  }

  return (
    <>
      <ParticleBackground />
      
      <main className="relative bg-gray-100 dark:bg-gray-900/95 text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
        {/* Enhanced Navigation */}
        <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 dark:bg-black/60 border-b border-purple-500/20 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-3 animate-fadeIn">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-sm font-bold text-white">AC</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold">Amaan Chauhan</h1>
                  <p className="text-xs text-purple-300">Full-Stack & AI Developer</p>
                </div>
              </div>

              <div className="hidden md:flex items-center space-x-8">
                {['home', 'about', 'services', 'projects', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`relative px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                      activeSection === section
                        ? 'text-purple-300 bg-purple-500/20'
                        : 'text-gray-700 dark:text-gray-300 hover:text-purple-300 hover:bg-white/5 dark:hover:bg-gray-800/20'
                    } hover:scale-105 active:scale-95`}
                    aria-label={`Scroll to ${section}`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
                <a
                  href="/Amaan_Chauhan_Resume.pdf"
                  className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 font-semibold hover:scale-105 active:scale-95"
                  download
                  aria-label="Download Resume"
                >
                  Download CV
                </a>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-white/10 dark:bg-gray-800/20 hover:bg-purple-500/20 transition-all hover:scale-110 active:scale-95"
                  aria-label="Toggle Theme"
                >
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>

              <button
                className="md:hidden p-2 hover:scale-105 active:scale-95"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {isMenuOpen && (
              <div className="md:hidden bg-white/20 dark:bg-black/95 border-t border-purple-500/20 overflow-hidden animate-slideDown">
                <div className="px-4 py-6 space-y-4">
                  {['home', 'about', 'services', 'projects', 'contact'].map((section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className={`w-full text-left py-3 px-4 rounded-lg transition-colors font-medium ${
                        activeSection === section
                          ? 'bg-purple-500/20 text-purple-300'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-white/5 dark:hover:bg-gray-800/20'
                      } hover:scale-105 active:scale-95`}
                      aria-label={`Scroll to ${section}`}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                  ))}
                  <a
                    href="/Amaan_Chauhan_Resume.pdf"
                    className="block w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-center font-semibold hover:scale-105 active:scale-95"
                    download
                    aria-label="Download Resume"
                  >
                    Download CV
                  </a>
                  <button
                    onClick={toggleTheme}
                    className="w-full py-3 px-4 rounded-lg bg-white/10 dark:bg-gray-800/20 hover:bg-purple-500/20 transition-all hover:scale-105 active:scale-95 flex items-center justify-center"
                    aria-label="Toggle Theme"
                  >
                    {theme === 'dark' ? <Sun size={20} className="mr-2" /> : <Moon size={20} className="mr-2" />}
                    Toggle Theme
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" ref={homeRef} className="min-h-screen flex items-center justify-center pt-20 px-4 relative z-10">
          <div className="max-w-7xl mx-auto w-full px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center animate-fadeIn">
              <div className="space-y-8">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-400/30 rounded-full text-sm font-medium animate-slideUp">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  <span aria-label="Open for Enterprise Opportunities">Open for Enterprise Opportunities</span>
                </div>

                <div>
                  <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                    <span className="block text-gray-600 dark:text-gray-400 mb-4 text-xl animate-slideUp delay-200">
                      Hi, I'm
                    </span>
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent text-6xl md:text-8xl animate-scaleUp">
                      Amaan Chauhan
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mt-6 leading-relaxed animate-slideUp delay-400">
                    Building scalable enterprise solutions with expertise in <br />
                    <span className="font-semibold text-purple-300">Full-Stack Development</span>,{' '}
                    <span className="font-semibold text-pink-300">Cloud Architecture</span>, and{' '}
                    <span className="font-semibold text-indigo-300">AI/ML Integration</span>
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 animate-slideUp delay-600">
                  <a
                    href="#projects"
                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 text-center hover:scale-105 active:scale-95"
                    aria-label="View Projects"
                  >
                    View Projects
                  </a>
                  <a
                    href="/Amaan_Chauhan_Resume.pdf"
                    className="px-8 py-4 border-2 border-purple-400/30 rounded-xl backdrop-blur-sm hover:bg-purple-500/10 transition-all duration-300 font-medium text-center hover:scale-105 active:scale-95"
                    download
                    aria-label="Download Resume"
                  >
                    <Download className="w-5 h-5 inline mr-2" />
                    Download Resume
                  </a>
                </div>

                <div className="flex gap-4 pt-6 animate-slideUp delay-800">
                  {[
                    { icon: Github, href: "https://github.com/amaanc284", label: "GitHub" },
                    { icon: Linkedin, href: "https://linkedin.com/in/amaanc284", label: "LinkedIn" },
                    { icon: Twitter, href: "https://twitter.com/amaanc284", label: "Twitter" }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/10 dark:bg-gray-800/20 border border-purple-400/30 rounded-xl flex items-center justify-center hover:bg-purple-600 hover:border-purple-400 hover:-translate-y-1 transition-all duration-300 hover:scale-110 active:scale-95"
                      aria-label={social.label}
                    >
                      <social.icon size={20} className="text-purple-300 group-hover:text-white" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="justify-self-center animate-fadeIn delay-600">
                <HeroSphere />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" ref={aboutRef} className="py-24 px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fadeIn">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/30 rounded-full text-sm font-medium mb-6 animate-slideUp">
                <User className="w-4 h-4 mr-2" />
                <span aria-label="Professional Background">Professional Background</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-slideUp">
                About{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Expertise
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-slideUp delay-200">
                3+ years crafting enterprise solutions with deep expertise in modern web technologies, cloud architecture, and AI integration.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16 animate-fadeIn">
              {[
                {
                  icon: GraduationCap,
                  title: "Education",
                  content: "B.Sc. Computer Science",
                  details: "Specialization in AI/ML • Advanced Web Development",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  icon: Briefcase,
                  title: "Experience",
                  content: "Senior Full-Stack Developer",
                  details: "Enterprise Solutions • Startup Innovation • Freelance Excellence",
                  gradient: "from-green-500 to-emerald-500"
                },
                {
                  icon: TrendingUp,
                  title: "Achievements",
                  content: "15+ Production Projects",
                  details: "99.9% Uptime • 100K+ Users Served • 40% Performance Gains",
                  gradient: "from-purple-500 to-pink-500"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-xl rounded-2xl p-8 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10 hover:scale-105 active:scale-95"
                  role="region"
                  aria-label={item.title}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2 font-semibold">{item.content}</p>
                  <p className="text-sm text-purple-300">{item.details}</p>
                </div>
              ))}
            </div>

            {/* Skills Grid */}
            <div className="mb-16 animate-fadeIn delay-200">
              <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                Technical Proficiency
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {Object.entries(skills).map(([category, skillList], catIndex) => (
                  <div
                    key={category}
                    className="space-y-6 bg-white/10 dark:bg-gray-800/20 backdrop-blur-xl rounded-2xl p-6 border border-purple-400/20 animate-slideUp delay-300"
                    role="region"
                    aria-label={`${category.replace('devops', 'DevOps').replace('ai', 'AI/ML')} Skills`}
                  >
                    <h4 className="text-lg font-semibold capitalize text-purple-300 border-b border-purple-400/30 pb-2">
                      {category.replace('devops', 'DevOps').replace('ai', 'AI/ML')}
                    </h4>
                    <div className="space-y-4">
                      {skillList.map((skill, index) => (
                        <SkillBar key={skill.name} skill={skill} delay={(index + catIndex) * 0.1} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div className="mt-16 animate-fadeIn delay-400">
              <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                What Clients Say
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-xl rounded-2xl p-6 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 active:scale-95"
                    role="region"
                    aria-label="Testimonial"
                  >
                    <p className="text-gray-600 dark:text-gray-400 italic mb-4">"{testimonial.text}"</p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                        <p className="text-sm text-purple-300">{testimonial.role}</p>
                        <div className="flex">
                          {Array.from({ length: 5 }, (_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={`${
                                i < Math.floor(testimonial.rating)
                                  ? 'text-yellow-400'
                                  : i < testimonial.rating
                                  ? 'text-yellow-400 opacity-50'
                                  : 'text-gray-300 dark:text-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" ref={servicesRef} className="py-24 px-4 bg-white/10 dark:bg-black/20 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fadeIn">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/30 rounded-full text-sm font-medium mb-6 animate-slideUp">
                <Rocket className="w-4 h-4 mr-2" />
                <span aria-label="Professional Services">Professional Services</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-slideUp">
                What I{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Deliver
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 animate-fadeIn">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 dark:bg-gray-800/20 backdrop-blur-xl rounded-2xl p-8 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-10 hover:scale-105 active:scale-95"
                  role="region"
                  aria-label={service.title}
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div 
                      className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-300"
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-purple-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.tech.map((tech, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-lg text-sm text-purple-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-green-500 dark:text-green-400 font-medium">
                        {service.metrics}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" ref={projectsRef} className="py-24 px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fadeIn">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/30 rounded-full text-sm font-medium mb-6 animate-slideUp">
                <Code className="w-4 h-4 mr-2" />
                <span aria-label="Featured Projects">Featured Projects</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-slideUp">
                Portfolio{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Showcase
                </span>
              </h2>
              <div className="mt-4 flex justify-center gap-4 animate-slideUp delay-200">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-4 py-2 rounded-lg ${filter === 'all' ? 'bg-purple-500/20 text-purple-300' : 'bg-white/10 dark:bg-gray-800/20 text-gray-700 dark:text-gray-300'} hover:bg-purple-500/10 transition-all hover:scale-105 active:scale-95`}
                  aria-label="Show All Projects"
                >
                  All
                </button>
                <button
                  onClick={() => setFilter('web')}
                  className={`px-4 py-2 rounded-lg ${filter === 'web' ? 'bg-purple-500/20 text-purple-300' : 'bg-white/10 dark:bg-gray-800/20 text-gray-700 dark:text-gray-300'} hover:bg-purple-500/10 transition-all hover:scale-105 active:scale-95`}
                  aria-label="Show Web Projects"
                >
                  Web
                </button>
                <button
                  onClick={() => setFilter('ai')}
                  className={`px-4 py-2 rounded-lg ${filter === 'ai' ? 'bg-purple-500/20 text-purple-300' : 'bg-white/10 dark:bg-gray-800/20 text-gray-700 dark:text-gray-300'} hover:bg-purple-500/10 transition-all hover:scale-105 active:scale-95`}
                  aria-label="Show AI Projects"
                >
                  AI
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 animate-fadeIn">
              {projects
                .filter(project => filter === 'all' || project.category === filter)
                .map((project, index) => (
                  <div
                    key={index}
                    className="group bg-white/10 dark:bg-gray-800/20 backdrop-blur-xl rounded-2xl overflow-hidden border border-purple-400/20 hover:border-purple-400/40 transition-all duration-500 hover:-translate-y-10 hover:scale-105 active:scale-95"
                    role="region"
                    aria-label={project.title}
                  >
                    <div className={`relative h-48 ${project.gradient} overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/40 dark:bg-black/20 group-hover:bg-black/20 transition-all duration-500"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div 
                          className="text-6xl opacity-10 group-hover:opacity-20 transition-all duration-500 scale-110"
                        >
                          💻
                        </div>
                      </div>
                      <div 
                        className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-medium text-green-500 dark:text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      >
                        {project.impact}
                      </div>
                    </div>
                    
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span 
                            key={i}
                            className="px-2 py-1 bg-purple-500/20 border border-purple-400/30 rounded text-xs text-purple-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3 pt-4">
                        <a
                          href="#"
                          className="flex-1 py-2 px-4 border border-purple-400/30 rounded-lg text-purple-300 hover:bg-purple-500/20 transition-all text-center hover:scale-105 active:scale-95"
                          target="_blank"
                          aria-label="Live Demo"
                        >
                          <ExternalLink size={16} className="inline mr-2" />
                          Live Demo
                        </a>
                        <a
                          href="#"
                          className="py-2 px-4 bg-purple-600/20 border border-purple-400/30 rounded-lg text-purple-300 hover:bg-purple-600/30 transition-all text-center hover:scale-105 active:scale-95"
                          target="_blank"
                          aria-label="Source Code"
                        >
                          <Github size={16} className="inline mr-2" />
                          Source
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" ref={contactRef} className="py-24 px-4 bg-white/10 dark:bg-black/20 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fadeIn">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/30 rounded-full text-sm font-medium mb-6 animate-slideUp">
                <Mail className="w-4 h-4 mr-2" />
                <span aria-label="Let's Collaborate">Let's Collaborate</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-slideUp">
                Ready to Build{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Something Great?
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-slideUp delay-200">
                Let's discuss your next big project. I'm available for enterprise solutions, consulting, and long-term partnerships.
              </p>
            </div>

            <form 
              onSubmit={handleSubmit}
              className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-xl rounded-2xl p-8 border border-purple-400/20 animate-fadeIn delay-400"
              role="form"
              aria-label="Contact Form"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-purple-300 mb-2" htmlFor="name">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 bg-white/5 dark:bg-gray-800/30 border border-purple-400/30 rounded-xl focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all backdrop-blur-sm"
                    placeholder="Your full name"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-purple-300 mb-2" htmlFor="email">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 bg-white/5 dark:bg-gray-800/30 border border-purple-400/30 rounded-xl focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all backdrop-blur-sm"
                    placeholder="your.email@company.com"
                    aria-required="true"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-purple-300 mb-2" htmlFor="message">
                  Project Requirements *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 bg-white/5 dark:bg-gray-800/30 border border-purple-400/30 rounded-xl focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all resize-none backdrop-blur-sm"
                  placeholder="Describe your project requirements, timeline, and technical needs..."
                  aria-required="true"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={formStatus === 'sending' || !validateForm()}
                className={`w-full py-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 ${
                  formStatus === 'sending' || !validateForm()
                    ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-xl hover:shadow-purple-500/25'
                } hover:scale-105 active:scale-95`}
                aria-label="Submit Contact Form"
              >
                {formStatus === 'sending' ? (
                  <span className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin-medium mr-2"></div>
                    Sending...
                  </span>
                ) : formStatus === 'success' ? (
                  'Message Sent! 🎉'
                ) : formStatus === 'error' ? (
                  'Invalid Input! 📛'
                ) : (
                  'Send Message'
                )}
              </button>

              {formStatus === 'success' && (
                <p 
                  className="mt-4 text-center text-green-500 dark:text-green-400 text-sm animate-fadeIn delay-600"
                  role="alert"
                >
                  Thank you! I'll get back to you within 24 hours.
                </p>
              )}
              {formStatus === 'error' && (
                <p 
                  className="mt-4 text-center text-red-500 dark:text-red-400 text-sm animate-fadeIn delay-600"
                  role="alert"
                >
                  Please fill all fields with valid data.
                </p>
              )}
            </form>

            {/* Contact Info */}
            <div 
              className="grid md:grid-cols-3 gap-6 mt-12 animate-fadeIn delay-800"
            >
              {[
                { icon: Mail, label: "Email", value: "amaanc284@gmail.com", gradient: "from-purple-500 to-pink-500" },
                { icon: Phone, label: "Phone", value: "+91 7021181134", gradient: "from-green-500 to-emerald-500" },
                { icon: MapPin, label: "Location", value: "Mumbai, Maharashtra, India", gradient: "from-blue-500 to-cyan-500" }
              ].map((contact, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white/10 dark:bg-gray-800/20 rounded-xl border border-purple-400/20 hover:border-purple-400/40 transition-all hover:scale-105 active:scale-95"
                  role="region"
                  aria-label={contact.label}
                >
                  <div className={`w-12 h-12 ${contact.gradient} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-purple-300 mb-2">{contact.label}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{contact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg border border-purple-400/30 z-40 flex items-center justify-center hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-110 active:scale-95"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to Top"
        >
          <ArrowUp size={20} className="text-white" />
        </button>
      )}

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-purple-400/20 bg-white/10 dark:bg-black/50 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-6 animate-fadeIn">
            <div className="flex justify-center space-x-6 mb-6">
              {[
                { icon: Github, href: "https://github.com/amaanc284" },
                { icon: Linkedin, href: "https://linkedin.com/in/amaanc284" },
                { icon: Twitter, href: "https://twitter.com/amaanc284" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 dark:bg-gray-800/20 border border-purple-400/30 rounded-xl flex items-center justify-center hover:bg-purple-600 hover:border-purple-400 transition-all duration-300 hover:scale-110 active:scale-95"
                  aria-label={social.href.split('/').pop()}
                >
                  <social.icon size={20} className="text-purple-300" />
                </a>
              ))}
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400">
                © 2025 Amaan Chauhan. All rights reserved.
              </p>
              <p className="text-sm text-purple-300 mt-2">
                Crafted with React, Tailwind CSS, and CSS Animations
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                amaanc284@gmail.com | +91 7021181134 | Mumbai, India
              </p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        :root {
          --primary-gradient: linear-gradient(to right, #a855f7, #f472b6, #6366f1);
        }

        .dark {
          --primary-gradient: linear-gradient(to right, #9333ea, #ec4899, #4f46e5);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes slideDown {
          from { height: 0; opacity: 0; }
          to { height: auto; opacity: 1; }
        }

        @keyframes scaleUp {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @keyframes spin-medium {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes shimmer-medium {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        @keyframes pulse-very-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }

        .animate-fadeIn { animation: fadeIn 0.6s ease-out; }
        .animate-slideUp { animation: slideUp 0.6s ease-out; }
        .animate-slideDown { animation: slideDown 0.3s ease-out; }
        .animate-scaleUp { animation: scaleUp 0.8s ease-out; }
        .animate-spin-medium { animation: spin-medium 1.2s linear infinite; }
        .animate-shimmer-medium { animation: shimmer-medium 2.5s infinite; }
        .animate-pulse { animation: pulse 1.5s infinite; }
        .animate-pulse-very-slow { animation: pulse-very-slow 5s infinite; }

        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-800 { animation-delay: 0.8s; }

        @media (max-width: 768px) {
          .text-5xl { font-size: 2.5rem; }
          .text-6xl { font-size: 3rem; }
          .text-7xl { font-size: 3.5rem; }
          .text-8xl { font-size: 4rem; }
          .grid.md\\:grid-cols-2 { grid-template-columns: 1fr; }
          .grid.lg\\:grid-cols-4 { grid-template-columns: 1fr 1fr; }
          .grid.md\\:grid-cols-3 { grid-template-columns: 1fr; }
        }
        
        .bg-gradient-to-r.from-purple-400.via-pink-400.to-indigo-400 {
          background: var(--primary-gradient);
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        /* Accessibility */
        [aria-label] {
          position: relative;
        }

        [aria-label]:after {
          content: attr(aria-label);
          position: absolute;
          left: -9999px;
          top: auto;
          width: 1px;
          height: 1px;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

// Custom useInView hook
function useInView(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return { ref, inView };
}

export default Portfolio;       