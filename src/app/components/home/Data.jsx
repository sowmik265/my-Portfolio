"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Data = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="home__data" ref={ref}>
      <h1 className="home__title">
        <motion.span
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          Tanvir
        </motion.span>

        <motion.svg
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: isInView ? 0 : 100, opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          width="36"
          height="36"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="home__hand"
        >
          {/* <path
            fill="#FFC107"
            d="M37.1 19.9c-1.5-1.5-3.6-1.9-5.5-1.2l-.9-1.8c-1.1-2.1-3.7-3-5.8-1.9l-1.8.9c-.5-1.9-2.1-3.3-4-3.3-2.3 0-4.2 1.9-4.2 4.2v15.2c0 5.2 4.3 9.5 9.5 9.5h7c4.3 0 7.9-3.5 7.9-7.9v-7c0-1.8-.7-3.6-2.2-5.1z"
          /> */}
        </motion.svg>
      </h1>

      <motion.h3
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="home__subtitle"
      >
        Web Developer
      </motion.h3>

      <motion.p
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="home__description"
      >
        Passionate web developer creating engaging websites with clean code,
        stunning designs, and seamless user experiences.
      </motion.p>

      <motion.a
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        href="#contact"
        className="button button--flex"
      >
        Say Hello
        <svg
          className="button__icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5 12h14M13 5l7 7-7 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.a>
    </div>
  );
};

export default Data;
