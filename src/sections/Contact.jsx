import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="pt-28 pb-20 px-6 bg-white dark:bg-gray-800"
    >
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Contact
        </h2>

        <h3 className="text-xl font-semibold text-blue-500 mt-4">
          Let’s Connect
        </h3>

        <p className="text-gray-600 dark:text-gray-400 mt-2 mb-10">
          I’m always open to new opportunities and collaborations.
        </p>

        {/* 🔥 ACTION BUTTONS (TOP PRIORITY) */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">

          <a
            href="mailto:bilaalbasheer08@gmail.com"
            className="flex items-center gap-2 px-5 py-3 rounded-lg text-white bg-blue-500 transition transform hover:scale-105 hover:shadow-xl"
          >
            <FaEnvelope />
            Email Me
          </a>

          <a
            href="tel:+917639893518"
            className="flex items-center gap-2 px-5 py-3 rounded-lg text-white bg-green-500 transition transform hover:scale-105 hover:shadow-xl"
          >
            <FaPhone />
            Call Me
          </a>

          <a
            href="https://www.linkedin.com/in/bilaal-ahmed-b-001825277"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-lg text-white bg-gray-800 transition transform hover:scale-105 hover:shadow-xl"
          >
            <FaLinkedin />
            LinkedIn
          </a>

        </div>

        {/* 📩 CONTACT FORM */}
        <form
          action="https://formspree.io/f/xeenovpw"
          method="POST"
          className="grid gap-4 mb-10"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded-lg border dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded-lg border dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="p-3 rounded-lg border dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-400 outline-none"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition transform hover:scale-105"
          >
            Send Message
          </button>
        </form>

        {/* 📌 OPTIONAL (Keep or remove) */}
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Prefer direct contact? Use the buttons above.
        </div>

      </div>
    </section>
  );
}

export default Contact;