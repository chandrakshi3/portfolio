// client/src/components/Front.jsx
import React, { useEffect } from "react";
import "./Front.css";
import resumePDF from "../assets/Resume_CCN.pdf";

function Front() {
  /* -----------------------------------------
     Mount‑time behaviour: burger & scroll spy
  ----------------------------------------- */
  useEffect(() => {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");

    /* Burger toggle */
    if (menuIcon) {
      menuIcon.onclick = () => {
        menuIcon.classList.toggle("bx-x");
        navbar.classList.toggle("active");
      };
    }

    /* Scroll‑spy for active link */
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a");

    const onScroll = () => {
      const top = window.scrollY;
      sections.forEach((sec) => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");
        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => link.classList.remove("active"));
          const activeLink = document.querySelector(
            `header nav a[href*='${id}']`
          );
          activeLink && activeLink.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="main">
      {/* Boxicons CDN */}
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />

      <header className="header">
        <a href="#home" className="logo">
          Portfolio
        </a>

        <i className="bx bx-menu" id="menu-icon"></i>

        <nav className="navbar">
          <a href="#home" className="active">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* ===== Home Section ===== */}
      <section className="home" id="home">
        <div className="home-content">
          <h3>Hello, It's me</h3>
          <h1>Chandrakshi Narkhede</h1>
          <h3>
            And I'm a <span className="multiple-text">Frontend Developer</span>
          </h3>
          <p>
            I'm an enthusiastic student with big dreams to achieve. Passionate
            about technology and always eager to learn, I am currently on a
            journey to become a Cybersecurity Analyst.
          </p>

          {/* Social links – only LinkedIn & GitHub */}
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/chandrakshi-narkhede-407813281/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a
              href="https://github.com/chandrakshi3"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-github"></i>
            </a>
          </div>

          {/* Download CV button */}
          <a
            href={resumePDF}
            download="Chandrakshi_Narkhede_CV.pdf"
            className="btn"
          >
            Download CV
          </a>
        </div>

        
      </section>
    </div>
  );
}

export default Front;
