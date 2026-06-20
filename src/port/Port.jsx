import { Link } from "react-router-dom";
import "./Port.css";

const Port = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <div className="logo-circle">FS</div>
        </div>

        <div className="nav-links">
          <Link to="/portabt" className="about-link">About</Link>

          <Link to="/portcntct" className="contact-btn">
            Contact Me
          </Link>
        </div>
      </nav>

      <section className="main" id="about">
        <div className="main-left">
          <img
            src="https://wadr.org/wp-content/uploads/2023/04/Flt-Images-Who-am-I.png"
            alt="Illustration"
            className="main-image"
          />
        </div>

        <div className="main-right">
          <p>
            I'm <strong>Fathimath Sahala</strong>, a passionate MERN Stack
            Developer focused on building modern, scalable, and high-performance
            web applications.
            <br />
            <br />I enjoy solving complex problems, transforming ideas into
            efficient digital products, and continuously exploring new
            technologies to improve my development skills.
          </p>

          <Link to="/portmore" className="main-btn">
            Meet Fathimath Sahala
          </Link>
        </div>

        <div className="arrow">↓</div>
      </section>
    </>
  );
};

export default Port;
