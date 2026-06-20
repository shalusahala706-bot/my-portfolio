import "./Portabt.css";

const Portabt = () => (
  <section className="about-section" id="about">
    <div className="about-container">
      <div className="about-image">
        <img src="/my.jpeg" alt="Fathimath Sahala" />
      </div>

      <div className="about-content">
        <h2>ABOUT ME</h2>
        <div className="underline"></div>

        <p className="intro">
          MERN Stack Developer passionate about building modern, scalable and
          user-friendly web applications.
        </p>

        <p>
          I'm Fathimath Sahala, a dedicated full-stack developer specializing in
          MongoDB, Express.js, React.js, and Node.js. I enjoy transforming ideas
          into efficient digital products that deliver real value.
        </p>

        <p>
          My development approach focuses on clean code, responsive design,
          performance optimization, and creating intuitive user experiences.
        </p>

        <p>
          I continuously explore new technologies and frameworks, improving my
          skills while taking on challenging projects that help me grow as a
          developer.
        </p>

        <p className="contact-text">
          Interested in working together?
          <span> Let's build something amazing.</span>
        </p>
      </div>
    </div>
  </section>
);

export default Portabt;
