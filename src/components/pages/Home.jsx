import React, { useState, useEffect } from "react";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import profile from "../../assets/images/home-face.jpg";
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
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
