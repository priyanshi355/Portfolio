import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Code, 
  Cpu, 
  Database, 
  Globe, 
  Award, 
  Terminal,
  ExternalLink,
  ChevronRight,
  BookOpen,
  CheckCircle,
  BarChart,
  Layers
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Navbar = () => (
  <nav className="navbar">
    <div className="container flex justify-between items-center">
      <div className="logo font-bold text-xl">Priyanshi.</div>
      <ul className="flex gap-4 desktop-nav">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
);

const Hero = () => (
  <section className="hero-section">
    <div className="container">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <span className="badge">Available for Internships 2025</span>
        <h1 className="hero-title">Building Digital <br/><span className="gradient-text">Experiences with Purpose</span></h1>
        <p className="hero-desc">
          Hi, I'm <strong>Priyanshi Yadav</strong>. A Full-Stack Developer and 3rd-year CS student at BBDU, dedicated to solving complex problems through clean and efficient code.
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-secondary">Get in Touch</a>
        </div>
      </motion.div>
    </div>
  </section>
);

const Stats = () => (
  <section className="container">
    <div className="stats-section shadow-lg">
      <div className="grid grid-3 gap-4">
        <div className="stat-card">
          <div className="stat-number">100+</div>
          <div className="stat-label">LeetCode Solved</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">5+</div>
          <div className="stat-label">Major Projects</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">7.5+</div>
          <div className="stat-label">B.Tech CGPA</div>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="bg-secondary">
    <div className="container">
      <div className="section-head">
        <h2 className="section-title">Academic Journey</h2>
        <p className="section-subtitle">Striving for excellence in Computer Science and Engineering.</p>
      </div>
      <div className="grid grid-2 gap-4">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className="card shadow-md"
        >
          <div className="card-icon"><BookOpen size={24} /></div>
          <h3>University Education</h3>
          <p className="mt-2"><strong>B.Tech Computer Science</strong></p>
          <p className="text-muted">Babu Banarasi Das University (2023 - 2027)</p>
          <div className="stats-grid mt-4">
            <div className="stat-item"><span>Current CGPA</span><strong>7.79</strong></div>
            <div className="stat-item"><span>Status</span><strong>3rd Year</strong></div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className="card shadow-md"
        >
          <div className="card-icon"><Award size={24} /></div>
          <h3>Schooling Highlights</h3>
          <p className="mt-2"><strong>Spring Dale College</strong></p>
          <p className="text-muted">Exceptional academic performance in 10th & 12th.</p>
          <div className="stats-grid mt-4">
            <div className="stat-item"><span>12th Grade</span><strong>89%</strong></div>
            <div className="stat-item"><span>10th Grade</span><strong>92%</strong></div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Skills = () => {
  const skills = [
    { category: "Frontend", items: ["React.js", "JavaScript", "HTML5", "CSS3"], icon: <Globe size={20} /> },
    { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "MongoDB"], icon: <Database size={20} /> },
    { category: "Fundamentals", items: ["DSA (Java)", "Problem Solving", "Problem Analysis"], icon: <Cpu size={20} /> },
    { category: "Tools", items: ["Git", "GitHub", "Vercel", "Postman"], icon: <Terminal size={20} /> }
  ];

  return (
    <section id="skills">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle">My toolbox for building scalable applications.</p>
        </div>
        <div className="grid grid-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, borderColor: 'var(--accent)' }}
              className="skill-card shadow-sm"
            >
              <div className="flex items-center gap-2 mb-4 color-accent">
                {skill.icon}
                <h4 className="font-bold">{skill.category}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span key={i} className="skill-tag">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Lost & Found Platform",
      desc: "An end-to-end full-stack solution designed for the BBDU student community to facilitate the quick recovery and reporting of personal belongings. It streamlines the entire lost-and-found lifecycle through a robust and secure digital interface.",
      features: [
        "Secure User Authentication using JWT and specialized Admin Dashboard.",
        "Real-time database integration for instant listing updates and search.",
        "Advanced search and multi-category filtering for efficient item tracking."
      ],
      tags: ["MongoDB", "Express", "React", "Node.js"],
      link: "https://github.com/priyanshi355"
    },
    {
      title: "Truth Card AI",
      desc: "An innovative AI-powered application that leverages machine learning to analyze and estimate the veracity of user-provided statements. It provides an insightful and modern UI to interpret complex model probabilities.",
      features: [
        "Custom-trained ML model integration via a high-performance REST API.",
        "Real-time statement processing with descriptive truthfulness estimation.",
        "Responsive React frontend designed for clear and insightful data visualization."
      ],
      tags: ["React", "Python", "Flask", "AI/ML"],
      link: "https://github.com/priyanshi355"
    }
  ];

  return (
    <section id="projects" className="bg-secondary">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">A deep dive into my recent technical developments and problem-solving approaches.</p>
        </div>
        <div className="grid grid-2 gap-4">
          {projects.map((proj, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="project-card shadow-md"
            >
              <div className="project-content">
                <h3 className="mb-4 text-xl">{proj.title}</h3>
                <p className="text-muted mb-4">{proj.desc}</p>
                
                <ul className="project-list">
                  {proj.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-8 mt-4">
                  {proj.tags.map((tag, i) => (
                    <span key={i} className="badge-tag">{tag}</span>
                  ))}
                </div>
                
                <a href={proj.link} target="_blank" className="link-icon flex items-center gap-2">
                  View Source Code <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Certifications = () => {
  const certs = [
    { title: "Alpha (DSA with Java)", issuer: "Apna College", date: "2024", icon: <Layers />, file: "/certs/apna_dsa.pdf" },
    { title: "OpScape 2.0 - IIM Trichy", issuer: "Indian Institute of Management", date: "2024", icon: <CheckCircle />, file: "/certs/iim_trichy.pdf" }
  ];

  return (
    <section id="certifications">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Professional growth and extra-curricular learning.</p>
        </div>
        <div className="cert-grid">
          {certs.map((cert, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="cert-card clickable"
              onClick={() => cert.file !== "#" && window.open(cert.file, '_blank')}
            >
              <div className="cert-icon">{cert.icon}</div>
              <h4 className="font-bold">{cert.title}</h4>
              <p className="text-sm text-muted">{cert.issuer}</p>
              <span className="badge mt-4">{cert.date}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="contact-section">
    <div className="container">
      <div className="contact-card shadow-lg">
        <div className="grid grid-2 items-center gap-4">
          <div>
            <h2 className="text-white mb-2">Let's connect.</h2>
            <p className="text-muted-light mb-8">Currently open for internship opportunities for Summer 2025.</p>
            <div className="flex gap-4">
              <a href="https://linkedin.com/in/priyanshi-yadav05" target="_blank" className="social-link"><FaLinkedin size={24} /></a>
              <a href="https://github.com/priyanshi355" target="_blank" className="social-link"><FaGithub size={24} /></a>
              <a href="https://leetcode.com/priyanshiyadav25_" target="_blank" className="social-link"><SiLeetcode size={24} /></a>
              <a href="mailto:priyanshi.yadav@example.com" className="social-link"><Mail size={24} /></a>
            </div>
          </div>
          <div className="text-right-desktop">
            <a href="mailto:priyanshi.yadav@example.com" className="mail-btn shadow-md">
              Get in Touch <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="container flex justify-between items-center py-8">
      <p className="text-sm text-muted">© 2024 Priyanshi Yadav. Built with React & Vite.</p>
      <div className="flex gap-4 items-center">
        <div className="volunteer-badge text-xs">AI Volunteer @ BBDU</div>
        <p className="text-sm font-bold">Lucknow, India</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}
