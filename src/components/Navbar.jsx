import { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [active, setActive] = useState("hero");
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "education",
        "skills",
        "projects",
        "achievements",
        "contact",
      ];

      let current = "hero";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop - 120;
          if (window.scrollY >= top) {
            current = section;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Active link style
  const linkClass = (section) =>
    `block py-2 ${
      active === section
        ? "text-blue-500 font-semibold"
        : "text-gray-700 dark:text-gray-300"
    } hover:text-blue-500`;

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-700">
      
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          Bilaal
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li><a href="#hero" className={linkClass("hero")}>Home</a></li>
          <li><a href="#about" className={linkClass("about")}>About</a></li>
          <li><a href="#education" className={linkClass("education")}>Education</a></li>
          <li><a href="#skills" className={linkClass("skills")}>Skills</a></li>
          <li><a href="#projects" className={linkClass("projects")}>Projects</a></li>
          <li><a href="#achievements" className={linkClass("achievements")}>Achievements</a></li>
          <li><a href="#contact" className={linkClass("contact")}>Contact</a></li>
        </ul>

        {/* Right Side Controls */}
        <div className="flex items-center gap-4">

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl text-gray-700 dark:text-white"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-xl text-gray-700 dark:text-white"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 py-4 space-y-3 shadow-lg">

          <a href="#hero" onClick={() => setMenuOpen(false)} className={linkClass("hero")}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className={linkClass("about")}>About</a>
          <a href="#education" onClick={() => setMenuOpen(false)} className={linkClass("education")}>Education</a>
          <a href="#skills" onClick={() => setMenuOpen(false)} className={linkClass("skills")}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className={linkClass("projects")}>Projects</a>
          <a href="#achievements" onClick={() => setMenuOpen(false)} className={linkClass("achievements")}>Achievements</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className={linkClass("contact")}>Contact</a>

        </div>
      )}

    </nav>
  );
}

export default Navbar;