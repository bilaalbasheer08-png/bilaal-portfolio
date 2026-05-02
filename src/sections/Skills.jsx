import { motion } from "framer-motion";
import {
  FaUserTie,
  FaUsers,
  FaMoneyCheckAlt,
  FaClipboardCheck,
  FaBriefcase,
  FaFileAlt,
  FaHandsHelping,
  FaComments,
  FaChartLine,
} from "react-icons/fa";

function Skills() {
  const skills = [
    { name: "HR Management", icon: <FaUserTie /> },
    { name: "Recruitment", icon: <FaUsers /> },
    { name: "Payroll Management", icon: <FaMoneyCheckAlt /> },
    { name: "Performance Evaluation", icon: <FaClipboardCheck /> },
    { name: "Business Administration", icon: <FaBriefcase /> },
    { name: "CSR & NGO Management", icon: <FaHandsHelping /> },
    { name: "Documentation", icon: <FaFileAlt /> },
    { name: "Counselling", icon: <FaComments /> },
    { name: "MS Office & Tally", icon: <FaChartLine /> },
  ];

  return (
    <section id="skills" className="pt-28 pb-20 px-6 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex flex-col items-center gap-3 hover:shadow-xl transition"
            >
              <div className="text-3xl text-blue-500">
                {skill.icon}
              </div>
              <p className="font-medium text-gray-700 dark:text-gray-300">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;