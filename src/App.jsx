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
  Layers,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Background = () => (
  <div className="bg-blobs">
    <div className="blob blob-1"></div>
    <div className="blob blob-2"></div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="navbar">
      <div className="container flex justify-between items-center">
        <div className="logo font-bold text-xl gradient-text">Priyanshi.</div>
        
        {/* Desktop Links */}
        <ul className="flex gap-2 desktop-nav">
          {navLinks.map((link) => (
            <li key={link.name}><a href={link.href}>{link.name}</a></li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Drawer */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mobile-drawer"
          >
            <ul className="mobile-nav">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={() => setIsOpen(false)}>{link.name}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="hero-section text-center">
    <div className="container">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
      >
        <span className="badge">✨ Software Engineer Portfolio</span>
        <h1 className="hero-title">Crafting the Next <br/><span className="gradient-text">Generation of Web</span></h1>
        <p className="hero-desc">
          I'm <strong>Priyanshi Yadav</strong>, an aspiring Full-Stack Developer and 3rd-year CS student at BBDU, dedicated to creating high-performance, user-centric digital experiences.
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <a href="#projects" className="btn btn-primary">
            Explore My Work <ArrowRight size={18} />
          </a>
          <a href="#contact" className="btn btn-secondary">Let's Talk</a>
        </div>
      </motion.div>
    </div>
  </section>
);

const Stats = () => (
  <section className="container py-8">
    <div className="stats-section shadow-premium">
      <div className="grid grid-3 gap-8">
        {[
          { num: "100+", label: "LeetCode Solved" },
          { num: "5+", label: "Major Projects" },
          { num: "7.79", label: "University CGPA" }
        ].map((s, i) => (
          <div key={i} className="stat-card">
            <div className="stat-number">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="bg-secondary">
    <div className="container">
      <div className="section-head">
        <h2 className="section-title">Academic <span className="gradient-text">Journey</span></h2>
        <p className="section-subtitle">Excellence and continuous learning in Computer Science Engineering.</p>
      </div>
      <div className="grid grid-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="card shadow-md"
        >
          <div className="card-icon"><BookOpen size={28} /></div>
          <h3 className="mb-4">University Education</h3>
          <p className="mb-4"><strong>B.Tech Computer Science</strong></p>
          <p className="text-muted mb-6">Babu Banarasi Das University (2023 - 2027)</p>
          <div className="stats-grid">
            <div className="stat-item"><span>Current CGPA</span><strong>7.79</strong></div>
            <div className="stat-item"><span>Status</span><strong>3rd Year</strong></div>
            <div className="stat-item"><span>Specialization</span><strong>MERN Stack</strong></div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="card shadow-md"
        >
          <div className="card-icon"><Award size={28} /></div>
          <h3 className="mb-4">Schooling Highlights</h3>
          <p className="mb-4"><strong>Spring Dale College</strong></p>
          <p className="text-muted mb-6">Strong foundation in science and mathematics with exceptional board results.</p>
          <div className="stats-grid">
            <div className="stat-item"><span>12th Grade</span><strong>89%</strong></div>
            <div className="stat-item"><span>10th Grade</span><strong>92%</strong></div>
            <div className="stat-item"><span>Focus</span><strong>Science / CS</strong></div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Skills = () => {
  const skills = [
    { category: "Frontend", items: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind"], icon: <Globe size={20} /> },
    { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "MongoDB"], icon: <Database size={20} /> },
    { category: "Fundamentals", items: ["DSA (Java)", "OOPs", "DBMS", "OS"], icon: <Cpu size={20} /> },
    { category: "Tools", items: ["Git", "GitHub", "Postman", "Vercel"], icon: <Terminal size={20} /> }
  ];

  return (
    <section id="skills">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Technical <span className="gradient-text">Expertise</span></h2>
          <p className="section-subtitle">A modern tech stack focused on scalability and performance.</p>
        </div>
        <div className="grid grid-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="skill-card"
            >
              <div className="flex items-center gap-2 mb-6 color-accent">
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
      desc: "An end-to-end full-stack solution designed for the BBDU student community to facilitate the quick recovery and reporting of personal belongings.",
      features: [
        "Secure User Authentication using JWT & Admin Dashboard",
        "Real-time database integration for instant updates",
        "Advanced search and multi-category filtering"
      ],
      tags: ["MongoDB", "Express", "React", "Node.js"],
      link: "https://github.com/priyanshi355"
    },
    {
      title: "Truth Card AI",
      desc: "An innovative AI-powered application that leverages machine learning to analyze and estimate the veracity of user-provided statements.",
      features: [
        "Custom ML model integration via high-performance REST API",
        "Real-time statement processing with probability analysis",
        "Responsive frontend designed for clear visualization"
      ],
      tags: ["React", "Python", "Flask", "AI/ML"],
      link: "https://github.com/priyanshi355"
    }
  ];

  return (
    <section id="projects" className="bg-secondary">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Featured <span className="gradient-text">Work</span></h2>
          <p className="section-subtitle">Deep dives into my engineering solutions.</p>
        </div>
        <div className="grid grid-2 gap-8">
          {projects.map((proj, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="project-card shadow-lg"
            >
              <div className="project-content">
                <h3 className="mb-4 text-xl">{proj.title}</h3>
                <p className="text-muted mb-6">{proj.desc}</p>
                <ul className="project-list mb-6">
                  {proj.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-8">
                  {proj.tags.map((tag, i) => (
                    <span key={i} className="badge-tag">{tag}</span>
                  ))}
                </div>
                <a href={proj.link} target="_blank" className="link-icon">
                  View Source <ChevronRight size={14} />
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
    { title: "Alpha (Full Stack Web)", issuer: "Apna College", date: "2024", icon: <Layers />, file: "/certs/mern_fullstack.pdf" },
    { title: "Alpha (DSA with Java)", issuer: "Apna College", date: "2024", icon: <Terminal />, file: "/certs/apna_dsa.pdf" },
    { title: "OpScape 2.0 participation", issuer: "IIM Trichy", date: "2024", icon: <CheckCircle />, file: "/certs/iim_trichy.pdf" }
  ];

  return (
    <section id="certifications">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Professional growth and validation of technical skills.</p>
        </div>
        <div className="cert-grid">
          {certs.map((cert, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="cert-card clickable shadow-sm"
              onClick={() => cert.file && window.open(cert.file, '_blank')}
            >
              <div className="cert-icon">{cert.icon}</div>
              <h4 className="font-bold mb-2">{cert.title}</h4>
              <p className="text-sm text-muted">{cert.issuer}</p>
              <span className="badge mt-4">{cert.date}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [status, setStatus] = React.useState('idle'); // idle, loading, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate sending or use EmailJS
    // Import: import emailjs from 'emailjs-com';
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
    
    setTimeout(() => {
      setStatus('success');
      e.target.reset();
    }, 1500);
  };

  return (
    <section id="contact" className="container">
      <div className="contact-card shadow-premium">
        {status === 'success' ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <div className="success-icon mb-6">✅</div>
            <h2 className="text-white mb-4">Message Sent!</h2>
            <p className="text-muted-light mb-8">Thank you, Priyanshi will get back to you soon.</p>
            <button onClick={() => setStatus('idle')} className="btn btn-secondary">Send Another</button>
          </motion.div>
        ) : (
          <div className="grid grid-2 items-center gap-8">
            <div>
              <h2 className="text-white mb-4" style={{fontSize: '3.5rem'}}>Let's Build <br/><span className="gradient-text">Something Grand.</span></h2>
              <p className="text-muted mb-8" style={{color: '#94a3b8'}}>Have a project in mind or just want to say hi? I'm always open to discussing new opportunities.</p>
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/priyanshi-yadav05" target="_blank" className="social-link"><FaLinkedin size={22} /></a>
                <a href="https://github.com/priyanshi355" target="_blank" className="social-link"><FaGithub size={22} /></a>
                <a href="https://leetcode.com/priyanshiyadav25_" target="_blank" className="social-link"><SiLeetcode size={22} /></a>
                <a href="mailto:priyanshi.yadav@example.com" className="social-link"><Mail size={22} /></a>
              </div>
            </div>
            <div className="form-container">
              <form onSubmit={handleSubmit} className="premium-form">
                <div className="form-group">
                  <input type="text" name="user_name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" name="user_email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <textarea name="message" placeholder="How can I help you?" rows="4" required></textarea>
                </div>
                <button type="submit" className="mail-btn w-full" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Sending...' : 'Send Message'} <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="footer py-8">
    <div className="container flex justify-between items-center">
      <p className="text-sm text-muted">© 2024 Priyanshi Yadav. Developed with Precision.</p>
      <div className="flex gap-4 items-center">
        <div className="volunteer-badge text-xs">AI Volunteer @ BBDU</div>
        <p className="text-sm font-bold gradient-text">Lucknow, India</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="portfolio-app">
      <Background />
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
