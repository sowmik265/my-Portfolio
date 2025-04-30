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
                      ? "bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent font-extrabold text-base"
                      : "text-blue-500 font-medium text-sm hover:text-green-400"
                  }`}
                  whileHover={{
                    scale: [null, 1.1, 1.6],
                    transition: { duration: 0.5, times: [0, 0.6, 1] },
                  }}
                >
                  <i
                    className={`bx ${item.icon} text-xl mb-1 ${
                      pathname === item.href
                        ? "bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
                        : "text-current"
                    }`}
                  ></i>
                  {item.label}
                </motion.a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Mobile Top Bar - Transparent */}
      <div className="fixed md:hidden top-0 left-0 w-full flex items-center justify-between px-4 py-3 z-[100] bg-transparent">
        <a href="#home" className="z-[101]">
          <Image
            src="/logo.png"
            alt="Logo"
            width={70}
            height={60}
            className="w-[70px] h-auto"
          />
        </a>
        <button
          onClick={() => setToggle(!toggle)}
          className="z-[101] bg-white/50 rounded-lg p-2 backdrop-blur-sm font-semibold"
          aria-label="Toggle navigation menu"
        >
          <i
            className={`bx ${toggle ? "bx-x" : "bx-menu"} ${
              !toggle && "bx-tada"
            } text-2xl bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent`}
          ></i>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed left-0 w-full bg-white/95 px-6 pt-8 pb-8 rounded-t-3xl transition-all duration-300 ${
          toggle ? "bottom-0" : "-bottom-full"
        } z-[99] h-[75vh] overflow-y-auto backdrop-blur-lg`}
      >
        <ul className="grid grid-cols-3 gap-6 justify-items-center pb-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <motion.a
                href={item.href}
                onClick={() => setToggle(false)}
                className={`flex flex-col items-center text-sm font-medium ${
                  pathname === item.href
                    ? "bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent font-extrabold"
                    : "text-blue-500 hover:text-green-400"
                }`}
                whileHover={{
                  scale: [null, 1.1, 1.6],
                  transition: { duration: 0.5, times: [0, 0.6, 1] },
                }}
              >
                <i
                  className={`bx ${item.icon} text-xl mb-1 ${
                    pathname === item.href
                      ? "bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
                      : "text-current"
                  }`}
                ></i>
                {item.label}
              </motion.a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
