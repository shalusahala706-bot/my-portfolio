import { Link } from "react-router-dom";
import "./Port.css";

const Port = () => {
  return (
    <div className="port-page">
      <nav className="navbar">
        <div className="logo">
          <div className="logo-circle">FS</div>
          <div className="logo-text">
            <span>Fathimath Sahala</span>
            <small>MERN Stack Developer</small>
          </div>
        </div>

        <div className="nav-links">
          <Link to="/portabt" className="nav-link">
            About
          </Link>

          <Link to="/portcntct" className="contact-btn">
            Contact Me
          </Link>
        </div>
      </nav>

      <section className="hero-section" id="about">
        <div className="hero-content">
          <p className="eyebrow">Hello, I'm</p>
          <h1>Fathimath Sahala</h1>
          <h2>Building beautiful web experiences with React & Node</h2>

          <p className="description">
            I am a passionate MERN Stack Developer who loves turning ideas into
            modern, scalable, and high-performing applications with clean UI
            and smooth user experiences.
          </p>

          <div className="hero-actions">
            <Link to="/portmore" className="primary-btn">
              Meet Fathimath Sahala
            </Link>

            <Link to="/portcntct" className="secondary-btn">
              Let's Talk
            </Link>
          </div>

          <div className="highlights">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="image-card">
            <img
              src="https://wadr.org/wp-content/uploads/2023/04/Flt-Images-Who-am-I.png"
              alt="Illustration"
            />

            <div className="floating-badge">
              <strong>Available for work</strong>
              <span>Let's build something amazing</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Port;
