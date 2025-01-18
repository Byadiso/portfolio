import { motion } from "framer-motion";

const Intro = () => {
  return (
    <motion.section
      className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white dark:from-darkCard dark:to-darkBg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl font-bold">Hi, I&#39;m Desire BYAMUNGU 👋</h1>
      <p className="mt-4 text-xl">Building the future, one line of code at a time.</p>
      <a
        href="#projects"
        className="mt-6 bg-accent text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-teal-600 transition-all"
      >
        View My Work
      </a>
    </motion.section>
  );
};

export default Intro;