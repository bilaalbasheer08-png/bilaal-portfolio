import { motion } from "framer-motion";
import { FaAward, FaMedal, FaUserTie } from "react-icons/fa";

function Achievements() {
  const achievements = [
    {
      title: "Best Social Work Alumni Award",
      desc: "Recognized for outstanding field impact and leadership, Honored by Alagappa University",
      icon: FaAward,
      count: "1 Award",
      color: "gold",
    },
    {
      title: "Field Work Experience",
      desc: " 1,800+ Hours of Supervised Professional Practice and Extensive ground-level impact",
      icon: FaMedal,
      count: "1800+ Hours",
      color: "silver",
    },
    {
      title: "Board Member Nomination",
      desc: "Appointed Subject Matter Expert for Curriculum Advancement, MSW Syllabus Revision (2025–2029)",
      icon: FaUserTie,
      count: "1 Position",
      color: "blue",
    },
  ];

  const colorStyles = {
    gold: "bg-yellow-100 text-yellow-600",
    silver: "bg-gray-200 text-gray-700",
    blue: "bg-blue-100 text-blue-600",
  };

  return (
    <section
      id="achievements"
      className="pt-28 pb-20 px-6 bg-gray-100 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
          Achievements
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.06 }}
                className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-6 rounded-xl shadow-md transition duration-300 hover:shadow-2xl hover:-translate-y-2 hover:ring-2 hover:ring-blue-400/40"
              >

                {/* Ribbon */}
                <div
                  className={`absolute top-0 right-0 px-3 py-1 text-xs font-semibold ${colorStyles[item.color]} rounded-bl-lg`}
                >
                  {item.color.toUpperCase()}
                </div>

                {/* Icon */}
                <div className="text-4xl text-blue-500 mb-4">
                  <Icon />
                </div>

                {/* Count (STATIC SAFE) */}
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
                  {item.count}
                </h3>

                {/* Title */}
                <p className="mt-2 font-semibold text-gray-700 dark:text-gray-300">
                  {item.title}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {item.desc}
                </p>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Achievements;