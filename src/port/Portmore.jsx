import "./Portmore.css";

function Portmore() {
  return (
    <div className="portmore-page">
      <h1 className="portmore-title">More About Me</h1>
      <div className="portmore-grid">
        <div className="portmore-card">
          <h2>Education</h2>
          <li>Engineering Student </li>
          <li>
            Learning Javascript React, Node.js, Express.js, MongoDB, and other
            Web Development technologies.
          </li>
        </div>

        <div className="portmore-card">
          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <p>Upcoming Skills...</p>
          </ul>
        </div>

        <div className="portmore-card">
          <h2>Projects</h2>
          <ul>
            <li>Portfolio Website</li>
            <li>To-do App</li>
            <li>Financial Tracker</li>
          </ul>
        </div>

        <div className="portmore-card">
          <h2>Goals</h2>
          <p>Become a full-stack developer and get a job in an IT company.</p>
        </div>

        <div className="portmore-card">
          <h2>Services</h2>
          <ul>
            <li>Frontend Development</li>
            <li>Website Building</li>
            <li>At Codeme Hub Tech International Pvt.Ltd</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Portmore;
