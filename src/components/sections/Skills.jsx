import React from "react";
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

function Skills() {
  return (
    <section id="skills" className="site-section py-5">
      <div
        className="site-section-inner"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-once="false"
      >
        <div className="about-top">
          <div className="about-header">
            <i className="bi bi-code-slash about-icon" aria-hidden="true"></i>
            <h2 className="about-title">
              Skills <label className="skills-title-2">and Technologies</label>
            </h2>
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
      </div>
    </section>
  );
}

export default Skills;
