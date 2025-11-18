import React, { useState, useEffect } from "react";
import profile from "../../assets/images/home-face.jpg";
import aboutProfile from "../../assets/images/about-face.jpg";
import imgReact from "../../assets/images/react.svg";
import imgLaravel from "../../assets/images/laravel.svg";
import imgHtml5 from "../../assets/images/html5.svg";
import imgCss3 from "../../assets/images/css3.svg";
import imgSass from "../../assets/images/sass.svg";
import imgCakephp from "../../assets/images/cakephp.svg";
import imgPython from "../../assets/images/python.svg";
import imgBootstrap from "../../assets/images/bootstrap.svg";
import imgTailwind from "../../assets/images/tailwind.svg";
import imgGithub from "../../assets/images/github.svg";
import imgGitlab from "../../assets/images/gitlab.svg";
import imgJavascript from "../../assets/images/javascript.svg";
import imgFlutter from "../../assets/images/flutter.svg";
import imgDart from "../../assets/images/dart.svg";
import "./Home.scss";

function Typewriter({
  texts = [],
  typingSpeed = 80,
  deletingSpeed = 40,
  pause = 1400,
}) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const current = texts[index];

    if (!isDeleting) {
      if (display.length < current.length) {
        timeout = setTimeout(
          () => setDisplay((d) => d + current.charAt(d.length)),
          typingSpeed
        );
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pause);
      }
    } else {
      if (display.length > 0) {
        timeout = setTimeout(
          () => setDisplay((d) => d.slice(0, -1)),
          deletingSpeed
        );
      } else {
        setIsDeleting(false);
        setIndex((i) => (i + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [display, isDeleting, index, texts, typingSpeed, deletingSpeed, pause]);

  return (
    <span className="typewriter" aria-live="polite">
      {display}
      <span className="caret" aria-hidden="true" />
    </span>
  );
}

function Home() {
  const skills = [
    { key: "laravel", name: "Laravel", img: imgLaravel },
    { key: "cakephp", name: "CakePHP", img: imgCakephp },
    { key: "flutter", name: "Flutter", img: imgFlutter },
    { key: "react", name: "React", img: imgReact },
    { key: "dart", name: "Dart", img: imgDart },
    { key: "python", name: "Python", img: imgPython },
    { key: "html5", name: "HTML5", img: imgHtml5 },
    { key: "javascript", name: "JavaScript", img: imgJavascript },
    { key: "css3", name: "CSS3", img: imgCss3 },
    { key: "sass", name: "Sass", img: imgSass },
    { key: "bootstrap", name: "Bootstrap", img: imgBootstrap },
    { key: "tailwind", name: "Tailwind", img: imgTailwind },
    { key: "github", name: "GitHub", img: imgGithub },
    { key: "gitlab", name: "GitLab", img: imgGitlab },
  ];

  const projects = [
    {
      key: "proj1",
      name: "Readikid Web Application",
      link: "https://github.com/ClarenzCorpuz/Readikid1-Web",
      img: imgCakephp,
    },
    {
      key: "proj2",
      name: "Readikid Mobile Application",
      link: "https://github.com/ClarenzCorpuz/Readikid-Mobile",
      img: imgFlutter,
    },
    {
      key: "proj3",
      name: "CRUD Application",
      link: "https://github.com/ClarenzCorpuz/bnj-crud",
      img: imgLaravel,
    },
  ];
  return (
    <div>
      <section id="home" className="home-hero">
        <div className="hero-left">
          <h1 className="hero-title">
            Hello World!
            <br />
            I'm Mc Clarenz Vinn Corpuz
          </h1>
          <h4 className="hero-subtitle">
            A Proud&nbsp;
            <Typewriter
              texts={[
                "Student of Northeastern College",
                "Intern of Brain Network Japan",
              ]}
              typingSpeed={80}
              deletingSpeed={40}
              pause={1600}
            />
          </h4>
          <div className="social-icons">
            <a
              href="https://github.com/ClarenzCorpuz"
              className="social-link"
              aria-label="GitHub"
              target="_blank"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://gitlab.com/ClarenzCorpuz"
              className="social-link"
              aria-label="GitLab"
              target="_blank"
            >
              <i className="bi bi-git"></i>
            </a>
            <a
              href="https://www.facebook.com/itsmevinn"
              className="social-link"
              aria-label="Facebook"
              target="_blank"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://t.me/Clxnze"
              className="social-link"
              aria-label="Telegram"
              target="_blank"
            >
              <i className="bi bi-telegram"></i>
            </a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-image-wrap">
            <img src={profile} alt="Mc Clarenz" className="hero-image" />
          </div>
        </div>
      </section>

      <section id="about" className="site-section py-5">
        <div className="about-top">
          <div className="about-header">
            <i
              className="bi bi-person-bounding-box about-icon"
              aria-hidden="true"
            ></i>
            <h2 className="about-title">About</h2>
          </div>
        </div>

        <div className="about-bottom">
          <div className="about-bottom-left">
            <div className="about-image-wrap">
              <img
                src={aboutProfile}
                alt="Mc Clarenz"
                className="about-image"
              />
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
                Northeastern College doing internship at Brain Network Japan. I
                am from Santiago City, Isabela. I love programming. It is my
                passion. I seek to improve my skills continuously throughout my
                carreer.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="site-section py-5">
        <div className="about-top">
          <div className="about-header">
            <i className="bi bi-code-slash about-icon" aria-hidden="true"></i>
            <h2 className="about-title">Skills</h2>
          </div>
        </div>
        <div className="skills-box">
          <div className="skills-intro">
            <p className="skills-intro-text">
              Here are my skills, tools, and technologies I commonly use. These
              represent my experience and areas I'm actively improving.
            </p>
          </div>
          <div className="skills-grid" role="list">
            {skills.map((s) => (
              <div key={s.key} className="skill-card" role="listitem">
                <div
                  className="skill-logo"
                  style={{ backgroundColor: s.color }}
                  aria-hidden="true"
                >
                  {s.img ? (
                    <img src={s.img} alt={s.name} className="skill-img" />
                  ) : (
                    <span className="skill-initial">{s.name.charAt(0)}</span>
                  )}
                </div>
                <div className="skill-label">{s.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="projects" className="site-section py-5">
        <div className="about-top">
          <div className="about-header">
            <i className="bi bi-kanban about-icon" aria-hidden="true"></i>
            <h2 className="about-title">Projects</h2>
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
                No projects yet. Add entries to the <code>projects</code> array
                in <code>Home.jsx</code>.
              </div>
            ) : (
              projects.map((p) => {
                const isLongLink = p.link && p.link.length > 60;
                return (
                  <div
                    key={p.key}
                    className={`project-card ${isLongLink ? "long" : ""}`}
                    role="listitem"
                  >
                    <a
                      href={p.link}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="project-content">
                        {p.img && (
                          <img
                            src={p.img}
                            alt={p.name}
                            className="project-thumb"
                          />
                        )}
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
    </div>
  );
}

export default Home;
