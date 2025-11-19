import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import reactLogo from "../../assets/react.svg";
import "./Navbar.scss";

function Navbar() {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${id}`) {
              link.classList.add("active");
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    // Smooth scroll for in-page nav links (prevent instant jump)
    const handleNavClick = (e) => {
      const href = e.currentTarget.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      e.preventDefault();
      const id = href.slice(1);
      const target = document.getElementById(id);

      if (target) {
        const headerOffset =
          document.querySelector(".site-navbar")?.offsetHeight || 0;

        const smoothScrollTo = (element) => {
          const targetY =
            element.getBoundingClientRect().top +
            window.pageYOffset -
            headerOffset;
          const startY = window.pageYOffset;
          const distance = targetY - startY;
          const duration = 500;
          let startTime = null;

          const easeInOutQuad = (t) =>
            t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const time = Math.min(1, (timestamp - startTime) / duration);
            const eased = easeInOutQuad(time);
            window.scrollTo(0, Math.round(startY + distance * eased));
            if (time < 1) requestAnimationFrame(step);
          };

          requestAnimationFrame(step);
        };

        const canUseNativeSmooth =
          typeof CSS !== "undefined" &&
          CSS.supports &&
          CSS.supports("scroll-behavior", "smooth") &&
          headerOffset === 0;

        if (canUseNativeSmooth && target.scrollIntoView) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          smoothScrollTo(target);
        }

        try {
          history.pushState(null, "", `#${id}`);
        } catch (err) {}
      }
    };

    navLinks.forEach((link) => link.addEventListener("click", handleNavClick));

    return () => {
      observer.disconnect();
      navLinks.forEach((link) =>
        link.removeEventListener("click", handleNavClick)
      );
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light site-navbar sticky-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={reactLogo} alt="React" className="react-logo" />
          <span>ClarenzCorpuz</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
