import { motion } from "framer-motion";
import { useState } from "react";

import cert1 from "../assets/certificates/cert1.jpg";
import cert2 from "../assets/certificates/cert2.jpg";
import cert3 from "../assets/certificates/cert3.jpg";
import cert4 from "../assets/certificates/cert4.jpg";
import cert5 from "../assets/certificates/cert5.jpg";
import cert6 from "../assets/certificates/cert6.jpg";

function Certificates() {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    {
      title: "HR Internship",
      org: "Madura Coats",
      image: cert1,
    },
    {
      title: "Administration & Tally",
      org: "Evergreen Power Solutions",
      image: cert2,
    },
    {
      title: "Psychiatric Social Worker",
      org: "District Mental Health Program",
      image: cert3,
    },
    {
      title: "School Social Worker",
      org: "Government High Sec School",
      image: cert4,
    },
    {
      title: "Best Social Worker Award",
      org: "Alagappa University",
      image: cert5,
    },
    {
      title: "HR Trainee Intership",
      org: "Bonfiglioli",
      image: cert6,
    },
  ];

  return (
    <section
      id="certificates"
      className="pt-28 pb-20 px-6 bg-gray-100 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
          Internships & Certifications
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={cert.image}
                alt={cert.title}
                onClick={() => setSelectedImage(cert.image)}
                className="w-full h-56 object-cover cursor-pointer"
              />

              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold text-blue-500">
                  {cert.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {cert.org}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* POPUP MODAL */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Certificate"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-xl"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
            />

            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 text-white text-3xl font-bold"
            >
              ✕
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

export default Certificates;