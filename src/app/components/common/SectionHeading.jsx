import { motion } from "framer-motion";

const SectionHeading = ({ title, subtitle, className }) => {
  const gradientVariants = {
    initial: { backgroundPosition: "0% 50%" },
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const containerVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const childVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      className={`text-center mb-12 mx-auto max-w-2xl ${className || ""}`}
    >
      {/* Subtitle */}
      <motion.span
        variants={childVariants}
        className="text-lg font-medium text-gray-500 block mb-2"
      >
        {subtitle}
      </motion.span>

      {/* Animated Gradient Title */}
      <motion.h2
        variants={childVariants}
        style={{
          backgroundImage: "linear-gradient(45deg, #ec4899, #f97316, #eab308)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        {title}
      </motion.h2>

      {/* Decorative Animated Line */}
      <motion.div
        variants={{
          initial: { scaleX: 0 },
          animate: { scaleX: 1 }
        }}
        className="h-1 bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 w-24 mx-auto rounded-full"
        transition={{ duration: 0.8, delay: 0.5 }}
      />
    </motion.div>
  );
};

export default SectionHeading;