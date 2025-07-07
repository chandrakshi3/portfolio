import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Front from './components/Front'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from'./components/Footer'
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Typed from "typed.js";

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    /*__________________toggle icon navbar _________*/
    const menuIcon = document.querySelector("#menu-icon");
    const navbar = document.querySelector(".navbar");

    if (menuIcon && navbar) {
        menuIcon.onclick = () => {
            menuIcon.classList.toggle("bx-x");
            navbar.classList.toggle("active");
        };
    }

    /*__________________SCROLL section active link_________*/
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a");

    window.onscroll = () => {
        let top = window.scrollY;

        sections.forEach((sec) => {
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute("id");

            if (top >= offset && top < offset + height) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    let activeLink = document.querySelector(`header nav a[href*=${id}]`);
                    if (activeLink) activeLink.classList.add("active");
                });
            }
        });

/*_____________________ Sticky Header__________________ */
        let header = document.querySelector("header");
        if (header) {
            header.classList.toggle("sticky", window.scrollY > 100);
        }
/*____________________remove toggle icon and navbar when click navbar line(scroll)______________________*/
        if (menuIcon && navbar) {
            menuIcon.classList.remove("bx-x");
            navbar.classList.remove("active");
        }
    };
/*____________________scroll reveal______________________*/
    ScrollReveal({
        reset: true,
        distance: "80px",
        duration: 2000,
        delay: 200,
    });

    ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
    ScrollReveal().reveal(".home-img, .services-container, .portfolio-box, .contact form", { origin: "bottom" });
    ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
    ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });
    /* script.js (or wherever you configure ScrollReveal) */
ScrollReveal({
  reset: false,          // keep revealed elements visible
  distance: '50px',
  duration: 800,
  mobile: true
});

/* Skills: reveal every box with a small interval + early trigger */
ScrollReveal().reveal('.skills .skill-box', {
  origin: 'bottom',
  interval: 120,         // cascade the icons
  viewFactor: 0.15       // fire when 15 % of card is in view
});

/* Portfolio cards */
ScrollReveal().reveal('.portfolio .portfolio-box', {
  origin: 'bottom',
  interval: 150,
  viewFactor: 0.15
});

    ScrollReveal().reveal(
  '.home-img, .services-container, .skills-container, .skill-box, .portfolio-box, .contact form',
  { origin: 'bottom', interval: 120 }
);

/*__________________Typed js_________*/
    const typed = new Typed(".multiple-text", {
        strings: ["Frontend Developer", "Student", "Enthusiast"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
    });

    return () => {
        typed.destroy(); // Cleanup function to prevent memory leaks
    };
}, []);

  return (
    <>
      <Front/>
      <About/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      

    </>
  )
}

export default App
