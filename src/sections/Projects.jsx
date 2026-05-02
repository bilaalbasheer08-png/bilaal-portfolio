import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Projects() {
  const [activeTag, setActiveTag] = useState("All");

  // ✅ Parallax setup
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const projects = [
    {
      title: "Health & Safety Study",
      desc: "MSW project on welfare & safety of industrial women workers.",
      tags: ["HR", "Research"],
      skills: [
        { name: "HR", level: 90 },
        { name: "Documentation", level: 85 },
      ],
    },
    {
      title: "NITI Aayog Survey",
      desc: "Survey across 600+ households on govt schemes.",
      tags: ["CSR", "Survey"],
      skills: [
        { name: "Field Work", level: 95 },
        { name: "Data Collection", level: 90 },
      ],
    },
    {
      title: "Community Program",
      desc: "Led Community outreach programs for students & Community wellness.",
      tags: ["CSR", "NGO"],
      skills: [
        { name: "Program Management", level: 90 },
        { name: "Engagement", level: 85 },
      ],
    },
  ];

  const allTags = ["All", ...new Set(projects.flatMap(p => p.tags))];

  const filteredProjects =
    activeTag === "All"
      ? projects
      : projects.filter(p => p.tags.includes(activeTag));

  return (
    <section
      id="projects"
      ref={ref} // ✅ attach scroll tracking
      className="pt-28 pb-20 px-6 bg-gray-100 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
          Projects
        </h2>

        {/* 🔍 FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {allTags.map((tag, index) => (
            <button
              key={index}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-1 rounded-full text-sm transition ${
                activeTag === tag
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* 📦 PROJECT CARDS WITH PARALLAX */}
        <motion.div
          style={{ y }} // ✅ parallax movement
          className="grid md:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-white/20 dark:border-gray-700/30 p-6 rounded-xl shadow-md transition duration-300 hover:shadow-2xl hover:-translate-y-2 hover:ring-2 hover:ring-blue-400/40"
            >

              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-600 hover:bg-blue-500 hover:text-white hover:shadow-lg transition duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 space-y-3">
                {project.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm text-gray-700 dark:text-gray-300">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>

                    <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1 }}
                        className="h-2 bg-blue-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;