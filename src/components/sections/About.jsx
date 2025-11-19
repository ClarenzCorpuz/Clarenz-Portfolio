import React from "react";
import aboutProfile from "../../assets/images/about-face.jpg";

function About() {
  return (
    <section id="about" className="site-section py-5">
      <div className="about-top">
        <div className="about-header">
          <i
            className="bi bi-person-bounding-box about-icon"
            aria-hidden="true"
          ></i>
          <h2 className="about-title">
            About <label className="about-title-2">Me</label>
          </h2>
        </div>
      </div>

      <div className="about-bottom">
        <div className="about-bottom-left">
          <div className="about-image-wrap">
            <img src={aboutProfile} alt="Mc Clarenz" className="about-image" />
          </div>
        </div>
        <div className="about-bottom-right">
          <div className="about-text-block">
            <div className="about-text-header">
              <h3 className="about-name">I'm Mc Clarenz</h3>
              <p className="about-role">Student/Intern</p>
            </div>

            <p className="about-text">
              I am currently a 4th year Information Technology student of
              Northeastern College doing internship at Brain Network Japan. I am
              from Santiago City, Isabela. I love programming. It is my passion.
              I seek to improve my skills continuously throughout my carreer.
            </p>
            <div className="about-contact">
              <p>
                <strong>Address:</strong> St. James, Batal, Santiago City,
                Isabela
              </p>
              <p>
                <strong>Birthdate:</strong> November 28, 2004
              </p>
              <p>
                <strong>Age:</strong> 20
              </p>
              <p>
                <strong>Email: </strong>
                <a href="mailto:clarenzcorpuz28@gmail.com">
                  clarenzcorpuz28@gmail.com
                </a>
              </p>
              <p>
                <strong>Religion:</strong> Iglesia ni Cristo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
