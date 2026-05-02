import { motion, useScroll, useTransform } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { useRef } from "react";

function Education() {
  const ref = useRef(null);

  // 📊 Scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // 📊 Progress bar height
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const education = [
    {
      degree: "Master of Social Work (HR)",
      institution: "Alagappa University, Karaikudi",
      year: "2022 – 2024",
    },
    {
      degree: "Bachelor of Arts (BA English)",
      institution: "Jamal Mohammed College, Trichy",
      year: "2019 – 2022",
    },
  ];

  return (
    <section
      id="education"
      ref={ref}
      className="pt-28 pb-20 px-6 bg-white dark:bg-gray-800 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-20">
          Education
        </h2>

        <div className="relative">

          {/* Static Timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300 dark:bg-gray-600 rounded-full"></div>

          {/* Animated Progress Line */}
          <motion.div
            style={{ height }}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full origin-top"
          />

          <div className="space-y-20">
            {education.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >

                  {/* CARD */}
                  <motion.div
                    style={{
                      y: useTransform(scrollYProgress, [0, 1], [0, -50]),
                    }}
                    className={`w-full md:w-[45%] ${
                      isLeft ? "md:pr-10 text-right" : "md:pl-10 text-left"
                    }`}
                  >
                    <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-6 rounded-xl shadow-md transition duration-300 hover:shadow-2xl hover:-translate-y-2 hover:ring-2 hover:ring-blue-400/40">

                      {/* YEAR */}
                      <span className="inline-block mb-3 px-3 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-full">
                        {item.year}
                      </span>

                      {/* DEGREE */}
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                        {item.degree}
                      </h3>

                      {/* INSTITUTION */}
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        {item.institution}
                      </p>

                    </div>
                  </motion.div>

                  {/* ICON NODE */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white shadow-lg ring-4 ring-white dark:ring-gray-800"
                    >
                      <FaGraduationCap />
                    </motion.div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;