import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Port.css";

const Port = () => {
  return (
    <div className="port-page">
      <nav className="navbar">
        <div className="logo">
          <span className="logo-text">Fathimath Sahala</span>
        </div>

        <div className="nav-links">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#skills" className="nav-link">
            Skills
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </div>
      </nav>

      <section className="hero-section" id="home">
        <div className="hero-left">
          <h1>
            Full Stack Developer<br />
            Specializing in <span className="highlight">MERN Stack</span>
          </h1>

          <p className="hero-desc">
            I build end-to-end web applications using MongoDB, Express.js, React, and Node.js. 
            From responsive frontends to scalable backends, I create complete solutions that 
            deliver exceptional user experiences and robust performance.
          </p>

          <div className="tech-stack">
            <div className="tech-item">
              <span className="tech-icon">⚛️</span>
              <span className="tech-name">React</span>
            </div>
            <div className="tech-item">
              <span className="tech-icon">🟩</span>
              <span className="tech-name">Node.js</span>
            </div>
            <div className="tech-item">
              <span className="tech-icon">📦</span>
              <span className="tech-name">Express</span>
            </div>
            <div className="tech-item">
              <span className="tech-icon">🍃</span>
              <span className="tech-name">MongoDB</span>
            </div>
          </div>

          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">Let's Talk</a>
          </div>

          <div className="connect-section">
            <p className="connect-label">CONNECT WITH ME</p>
            <div className="social-icons">
              <a 
                href="https://www.linkedin.com/in/fathimath-sahala-327051304" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a 
                href="https://www.instagram.com/seeehla_?igsh=d2Y2ZzdoaXFibTR3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a 
                href="https://github.com/shalusahala706-bot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-github"></i>
              </a>
              <a 
                href="mailto:shalusahala706@gmail.com" 
                className="social-icon"
              >
                <i className="fab fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="profile-card">
            <img
              src="/MY-PHOTO.jpeg"
              alt="Fathimath Sahala"
              className="profile-img"
            />

            <div className="floating-card card-1">
              <p>Full Stack Developer</p>
            </div>

            <div className="floating-card card-2">
              <p>MERN</p>
            </div>

            <div className="decoration deco-1"></div>
            <div className="decoration deco-2"></div>
            <div className="decoration deco-3"></div>
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="section-header">
          <p className="section-label">About Me</p>
          <h2>Who Am I?</h2>
        </div>

        <div className="about-content">
          <p>
            I'm a passionate full-stack developer specializing in the MERN stack. 
            I have a deep expertise in building modern, scalable web applications from 
            scratch. My experience spans across frontend design, backend development, 
            database management, and deployment.
          </p>
          <p>
            I'm committed to writing clean, maintainable code and following best practices 
            in web development. Every project I build is crafted with attention to detail, 
            user experience, and performance optimization.
          </p>
        </div>
      </section>

      <section className="skills-section" id="skills">
        <div className="section-header">
          <p className="section-label">What I Do</p>
          <h2>My Skills</h2>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon">⚛️</div>
            <h3>Frontend Development</h3>
            <p>React, HTML5, CSS3, JavaScript, Redux, Responsive Design</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">⚙️</div>
            <h3>Backend Development</h3>
            <p>Node.js, Express, REST APIs, Authentication, Middleware</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">🗄️</div>
            <h3>Database</h3>
            <p>MongoDB, Mongoose</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">🚀</div>
            <h3>Deployment</h3>
            <p>Vercel, Git, GitHub</p>
          </div>
        </div>
      </section>

      <section className="portfolio-section" id="portfolio">
        <div className="section-header">
          <p className="section-label">My Work</p>
          <h2>Featured Projects</h2>
        </div>

        <div className="portfolio-grid">
          <div className="portfolio-card">
            <div className="portfolio-image"></div>
            <h3>Finance Tracker</h3>
            <p>A simple application to track personal finances and expenses.</p>
            <div className="tech-tags">
              <span>React</span>
              <span>Node.js</span>
            </div>
          </div>

          
          <div className="portfolio-card">
            <div className="portfolio-image"></div>
            <h3>Task Management Tool</h3>
            <p>Collaborative project management platform with user authentication</p>
            <div className="tech-tags">
              <span>MERN</span>
              <span>JWT</span>
              <span>Responsive</span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-header">
          <p className="section-label">Get In Touch</p>
          <h2>Contact Me</h2>
        </div>

        <div className="contact-content">
          <p>
            Thank you for visiting my portfolio! If you're interested in collaborating on a MERN stack project, 
            have any questions, or just want to discuss web development, feel free to reach out. I'm always open 
            to new opportunities and connections.
          </p>
          <a href="mailto:shalusahala706@gmail.com" className="btn-primary">Send Me an Email</a>
        </div>
      </section>
    </div>
  );
};

export default Port;
