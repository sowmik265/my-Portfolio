"use client";
import { motion } from "framer-motion";

const AnimatedButton = ({ children, className, icon: Icon }) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        transition: { type: "spring", stiffness: 300 },
      }}
      whileTap={{
        scale: 0.95,
        boxShadow: "0px 0px 8px rgba(34, 197, 94, 0.5)",
      }}
      animate={{
        y: [0, -5, 0],
        boxShadow: [
          "0px 4px 14px rgba(34, 197, 94, 0.2)",
          "0px 8px 20px rgba(34, 197, 94, 0.3)",
          "0px 4px 14px rgba(34, 197, 94, 0.2)",
        ],
      }}
      transition={{
        y: {
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
        boxShadow: {
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className={`
        relative
        bg-gradient-to-br from-green-400 to-blue-500
        text-white font-semibold
        px-8 py-3 rounded-lg
        hover:bg-gradient-to-bl
        transition-all duration-300
        group
        ${className || ""}
      `}
    >
      <div className="flex items-center gap-2">
        {children}
        {Icon && (
          <motion.div
            className="group-hover:translate-x-1 transition-transform"
            whileHover={{ rotate: [0, 20, -20, 0] }}
          >
            <Icon className="w-5 h-5" />
          </motion.div>
        )}
      </div>

      {/* Animated background layer */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-green-500 rounded-lg opacity-0 -z-10"
        animate={{
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />
    </motion.button>
  );
};

// Default props for optional icon
AnimatedButton.defaultProps = {
  icon: null,
};

export default AnimatedButton;
