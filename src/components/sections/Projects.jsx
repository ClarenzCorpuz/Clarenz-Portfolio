import React from "react";
import imgCrud from "../../assets/images/crud.png";
import imgReadikid from "../../assets/images/readikid.jpg";
import imgReadikidWeb from "../../assets/images/readikid-web.png";
import imgThis from "../../assets/images/this.png";
import imgCakephp from "../../assets/images/cakephp.svg";
import imgFlutter from "../../assets/images/flutter.svg";
import imgLaravel from "../../assets/images/laravel.svg";
import imgReact from "../../assets/images/react.svg";

const projects = [
  {
    key: "proj1",
    name: "Readikid Web Application",
    link: "https://github.com/ClarenzCorpuz/Readikid1-Web",
    img: imgCakephp,
    img2: imgReadikidWeb,
  },
  {
    key: "proj2",
    name: "Readikid Mobile Application",
    link: "https://github.com/ClarenzCorpuz/Readikid-Mobile",
    img: imgFlutter,
    img2: imgReadikid,
  },
  {
    key: "proj3",
    name: "CRUD Application",
    link: "https://github.com/ClarenzCorpuz/bnj-crud",
    img: imgLaravel,
    img2: imgCrud,
  },
  {
    key: "proj4",
    name: "This Website",
    link: "https://github.com/ClarenzCorpuz/Clarenz-Portfolio.git",
    img: imgReact,
    img2: imgThis,
  },
];

function Projects() {
  return (
    <section id="projects" className="site-section py-5">
      <div className="about-top">
        <div className="about-header">
          <i className="bi bi-kanban about-icon" aria-hidden="true"></i>
          <h2 className="about-title">
            Projects <label className="projects-title-2">Created</label>
          </h2>
        </div>
      </div>
      <div className="skills-box">
        <div className="skills-intro">
          <p className="skills-intro-text">
            A selection of projects I've worked on — examples of my work and
            things I'm building to learn new skills.
          </p>
        </div>
        <div className="projects-grid" role="list">
          {projects.length === 0 ? (
            <div className="project-empty">
              No projects yet. Add entries to the <code>projects</code> array in{" "}
              <code>Home.jsx</code>.
            </div>
          ) : (
            projects.map((p) => {
              const isLongLink = p.link && p.link.length > 60;
              return (
                <div
                  key={p.key}
                  className={`project-card ${isLongLink ? "long" : ""}`}
                  role="listitem"
                  style={p.img2 ? { "--project-bg": `url(${p.img2})` } : {}}
                >
                  <a
                    href={p.link}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="project-content">
                      <div className="project-thumb-wrap">
                        {p.img && (
                          <img
                            src={p.img}
                            alt={p.name}
                            className="project-thumb"
                          />
                        )}
                      </div>
                      <div className="project-meta">
                        <h3 className="project-title">{p.name}</h3>
                        {p.description && (
                          <p className="project-desc">{p.description}</p>
                        )}
                      </div>
                    </div>
                  </a>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
