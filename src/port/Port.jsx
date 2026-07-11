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

        <a href="#meet" className="nav-link">
          Meet Fathimath Sahala
        </a>
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
            <a href="#meet" className="primary-btn">
              Meet Fathimath Sahala
            </a>
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

      <section id="meet" className="about-section">
        <div className="about-grid">
          <div className="about-content">
            <p className="eyebrow">About me</p>
            <h3>Meet Fathimath Sahala</h3>

            <p className="about-text">
              I’m a passionate full-stack developer who enjoys turning ideas into
              modern, responsive, and user-friendly web applications.
            </p>

            <p className="about-text">
              My work blends clean UI design, smooth performance, and reliable
              backend logic to create experiences that feel both beautiful and
              practical.
            </p>

            <div className="about-list">
              <span>Frontend Development</span>
              <span>Backend Development</span>
              <span>UI/UX Focused</span>
              <span>Problem Solving</span>
            </div>
          </div>

          <div className="about-card">
            <h4>What I bring</h4>
            <ul>
              <li>React, Node.js, Express, and MongoDB</li>
              <li>Responsive and modern UI design</li>
              <li>Fast, scalable web solutions</li>
              <li>Clean code and maintainable architecture</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Port;
