import "./Portcntct.css";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Portcntct = () => {
  return (
    <div className="contact-page">
      <div className="overlay">
        <div className="contact-card">
          <h1>Contact me</h1>

          <p className="desc">
            For any further information about my work, projects, or services,
            please feel free to reach out to me.
          </p>

          <div className="info">
            <p>shalusahala706@gmail.com</p>
          </div>

          <div className="social">
            <a
              href="https://www.linkedin.com/in/fathimath-sahala-327051304"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/seeehla_?igsh=d2Y2ZzdoaXFibTR3"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="footer-name">Fathimath Sahala</div>
      </div>
    </div>
  );
};

export default Portcntct;
