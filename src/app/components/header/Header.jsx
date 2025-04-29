"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header-desktop");
      if (window.scrollY >= 80) {
        header?.classList.add("shadow-md");
      } else {
        header?.classList.remove("shadow-md");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home", icon: "bx-home-alt" },
    { href: "/about", label: "About", icon: "bx-user" },
    { href: "/services", label: "Services", icon: "bx-briefcase-alt" },
    { href: "/contact", label: "Contact", icon: "bx-envelope" },
    { href: "/blog", label: "Blog", icon: "bx-news" },
  ];

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:block header-desktop fixed top-0 left-0 w-full z-[100] bg-white transition-all">
        <nav className="flex items-center justify-between h-[4rem] px-6">
          <a href="#home" className="text-xl font-medium text-gray-900">
            <Image
              src="/logo.png"
              alt="Logo"
              width={90}
              height={80}
              className="w-[90px] h-[5rem] object-contain"
            />
          </a>
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <motion.a
                  href={item.href}
                  className={`flex flex-col items-center transition-all ${
                    pathname === item.href
                      ? "text-black font-extrabold text-base"
                      : "text-gray-800 font-medium text-sm"
                  }`}
                  whileHover={{
                    scale: [null, 1.1, 1.6],
                    transition: { duration: 0.5, times: [0, 0.6, 1] },
                  }}
                >
                  <i className={`bx ${item.icon} text-xl mb-1`}></i>
                  {item.label}
                </motion.a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Mobile Bottom Bar: Logo + Menu Icon */}
      <div className="fixed md:hidden bottom-0 left-0 w-full bg-white flex items-center justify-between px-6 py-3 z-[100]">
        <a href="#home">
          <Image
            src="/logo.png"
            alt="Logo"
            width={80}
            height={60}
            className="w-[80px] h-auto"
          />
        </a>
        <div
          onClick={() => setToggle(true)}
          className="text-2xl text-gray-800 cursor-pointer"
        >
          <i className="bx bx-menu bx-tada"></i>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed left-0 w-full bg-white px-6 pt-8 pb-8 rounded-t-3xl transition-all duration-300 ${
          toggle ? "bottom-0" : "-bottom-full"
        } z-[101] h-[50vh] overflow-y-auto`} // Changed from 85vh to 75vh
      >
        <ul className="grid grid-cols-3 gap-6 justify-items-center pb-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <motion.a
                href={item.href}
                onClick={() => setToggle(false)}
                className={`flex flex-col items-center text-sm font-medium ${
                  pathname === item.href
                    ? "text-black font-extrabold text-base"
                    : "text-gray-800"
                }`}
                whileHover={{
                  scale: [null, 1.1, 1.6],
                  transition: { duration: 0.5, times: [0, 0.6, 1] },
                }}
              >
                <i className={`bx ${item.icon} text-xl mb-1`}></i>
                {item.label}
              </motion.a>
            </li>
          ))}
        </ul>

        {/* Close Button */}
        <div
          onClick={() => setToggle(false)}
          className="sticky top-2 right-5 text-2xl cursor-pointer text-gray-800 text-end"
        >
          <i className="bx bx-x bx-tada"></i>
        </div>
      </div>
    </>
  );
}