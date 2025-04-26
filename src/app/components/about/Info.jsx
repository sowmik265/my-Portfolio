"use client";
import { motion } from "framer-motion";

const Info = () => {
  return (
    <div className="grid grid-cols-3 gap-[0.875rem] mb-[2rem] max-[992px]:flex max-[992px]:justify-center max-[350px]:grid-cols-2">
      {/* Experience Card */}
      <motion.div
        className="bg-[var(--container-color)] border border-black/10 rounded-xl text-center p-[1.25rem] w-[140px] h-[140px] flex flex-col items-center justify-center"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <i className="bx bx-award text-[1.2rem] text-[var(--title-color)] mb-[0.5rem]"></i>
        <h3 className="text-[0.813rem] font-medium mb-[0.25rem]">Experience</h3>
        <span className="text-[0.75rem]">2 Years Working</span>
      </motion.div>

      {/* Completed Projects Card */}
      <motion.div
        className="bg-[var(--container-color)] border border-black/10 rounded-xl text-center p-[1.25rem] w-[140px] h-[140px] flex flex-col items-center justify-center"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          delay: 0.3,
        }}
      >
        <i className="bx bx-briefcase-alt text-[1.2rem] text-[var(--title-color)] mb-[0.5rem]"></i>
        <h3 className="text-[0.813rem] font-medium mb-[0.25rem]">Completed</h3>
        <span className="text-[0.75rem]">18+ Projects</span>
      </motion.div>

      {/* Support Card */}
      <motion.div
        className="bg-[var(--container-color)] border border-black/10 rounded-xl text-center p-[1.25rem] w-[140px] h-[140px] flex flex-col items-center justify-center"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          delay: 0.6,
        }}
      >
        <i className="bx bx-support text-[1.2rem] text-[var(--title-color)] mb-[0.5rem]"></i>
        <h3 className="text-[0.813rem] font-medium mb-[0.25rem]">Support</h3>
        <span className="text-[0.75rem]">Online 24/7</span>
      </motion.div>
    </div>
  );
};

export default Info;
