import { ReactTyped } from "react-typed";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import profile from "../assets/profile.jpg";
import bg from "../assets/bg.jpg";

function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // ✅ Slightly increased for better visible parallax
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden"
    >

      {/* ✅ Parallax Background (FIXED LAYERING) */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-10"
      >
        <img
          src={bg}
          alt="background"
          className="w-full h-full object-cover opacity-20 blur-sm"
        />
      </motion.div>

      {/* ✅ Animated Gradient Overlay */}
      <motion.div
        animate={{
          background: [
            "linear-gradient(120deg, rgba(59,130,246,0.3), rgba(168,85,247,0.3))",
            "linear-gradient(120deg, rgba(168,85,247,0.3), rgba(236,72,153,0.3))",
            "linear-gradient(120deg, rgba(236,72,153,0.3), rgba(59,130,246,0.3))",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Glow Layer */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>

      {/* Floating Blobs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-10 w-40 h-40 bg-blue-400/30 rounded-full blur-3xl"
      ></motion.div>

      <motion.div
        animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 right-10 w-52 h-52 bg-purple-400/30 rounded-full blur-3xl"
      ></motion.div>

      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-1/2 left-1/3 w-32 h-32 bg-pink-400/30 rounded-full blur-3xl"
      ></motion.div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Hi, I'm <span className="text-blue-500">Bilaal Ahmed</span>
          </h1>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            HR & CSR Professional | 1800+ Hours Field Experience | Award-Winning MSW Graduate
          </p>

          <div className="italic text-gray-600 dark:text-gray-400 mb-6">
            <ReactTyped
              strings={[
                "Empowering people, enriching communities.",
                "Driven by purpose, guided by impact.",
                "Building stronger organizations through people.",
              ]}
              typeSpeed={40}
              backSpeed={25}
              loop
            />
          </div>

          <div className="flex gap-4 flex-wrap">

            <a
              href="#projects"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg transition transform hover:scale-105 hover:shadow-xl"
            >
              Explore My Work
            </a>

            <a
              href="/Bilaal_Career_Profile.pdf"
              download
              className="border border-blue-500 text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition"
            >
              Download Career Profile
            </a>

          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            src={profile}
            alt="Bilaal Ahmed"
            className="w-72 h-72 object-cover rounded-full shadow-lg border-4 border-blue-500"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;