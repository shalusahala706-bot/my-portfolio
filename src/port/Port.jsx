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
            Crafting Seamless
            <br />
            Digital <span className="highlight">Experiences</span>
          </h1>

          <p className="hero-desc">
            A passionate MERN Stack Developer crafting modern, scalable, and
            high-performing web applications with beautiful UI and smooth user
            experiences.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Let's Talk</button>
          </div>

          <div className="connect-section">
            <p className="connect-label">CONNECT WITH ME</p>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="profile-card">
            <img
              src="/MY PHOTO.jpg"
              alt="Fathimath Sahala"
              className="profile-img"
            />

            <div className="floating-card card-1">
              <p>Hi, I'm Fathimath Sahala</p>
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
            I'm a full-stack developer passionate about building beautiful,
            functional web applications. With expertise in React, Node.js,
            Express, and MongoDB, I create seamless digital experiences that
            solve real problems.
          </p>
          <p>
            My approach combines clean code, modern design principles, and a
            deep understanding of user needs to deliver applications that are
            not just functional, but delightful to use.
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
            <p>React, HTML5, CSS3, JavaScript, Responsive Design</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">⚙️</div>
            <h3>Backend Development</h3>
            <p>Node.js, Express, REST APIs, Authentication</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">🗄️</div>
            <h3>Database</h3>
            <p>MongoDB, Data Modeling, Database Optimization</p>
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
            <h3>Project One</h3>
            <p>Financial Tracking Application with real-time updates</p>
            <div className="tech-tags">
              <span>React</span>
              <span>Express</span>
            </div>
          </div>

          <div className="portfolio-card">
            <div className="portfolio-image"></div>
            <h3>Project Two</h3>
            <p>Task management tool with collaborative features</p>
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
          <h2>Let's Work Together</h2>
        </div>

        <div className="contact-content">
          <p>
            Have a project in mind? Let's create something amazing together.
          </p>
          <button className="btn-primary">Send Me an Email</button>
        </div>
      </section>
    </div>
  );
};

export default Port;
