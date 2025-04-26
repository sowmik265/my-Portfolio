"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // ✅ Correct import
import "./header.css";
import Image from "next/image";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY >= 80) {
        header?.classList.add("scroll-header");
      } else {
        header?.classList.remove("scroll-header");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home", icon: "bx-home-alt" },
    { href: "#about", label: "About", icon: "bx-user" },
    { href: "#skills", label: "Skills", icon: "bx-code-alt" },
    { href: "#services", label: "Services", icon: "bx-briefcase-alt" },
    { href: "#portfolio", label: "Portfolio", icon: "bx-images" },
    { href: "#contact", label: "Contact", icon: "bx-envelope" },
  ];

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          <Image src="/logo.png" alt="Logo" width={90} height={80} />
        </a>

        <div className={`nav__menu ${toggle ? "show-menu" : ""}`}>
          <ul className="nav__list grid">
            {navItems.map((item) => (
              <li className="nav__item" key={item.href}>
                <motion.a
                  href={item.href}
                  onClick={() => setActiveNav(item.href)}
                  className={`nav__link ${
                    activeNav === item.href ? "active-link" : ""
                  }`}
                  whileHover={{
                    scale: [null, 1.1, 1.6],
                    transition: {
                      duration: 0.5,
                      times: [0, 0.6, 1],
                      ease: ["easeInOut", "easeOut"],
                    },
                  }}
                >
                  <i className={`bx ${item.icon} nav__icon bx-tada`}></i>
                  {item.label}
                </motion.a>
              </li>
            ))}
          </ul>

          <i
            onClick={() => setToggle(false)}
            className="bx bx-x nav__close bx-tada"
          ></i>
        </div>

        <div onClick={() => setToggle(true)} className="nav__toggle">
          <i className="bx bx-menu bx-tada"></i>
        </div>
      </nav>
    </header>
  );
}
