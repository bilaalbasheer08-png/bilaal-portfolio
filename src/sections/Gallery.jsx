import { motion } from "framer-motion";
import { useState } from "react";

import img1 from "../assets/gallery/1.jpg";
import img2 from "../assets/gallery/2.jpg";
import img3 from "../assets/gallery/3.jpg";
import img4 from "../assets/gallery/4.jpg";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [img1, img2, img3, img4];

  return (
    <section
      id="gallery"
      className="pt-28 pb-20 px-6 bg-white dark:bg-gray-800"
    >
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
          Achievements Gallery
        </h2>

        {/* Image Grid */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={img}
                alt="Gallery"
                onClick={() => setSelectedImage(img)}
                className="w-full h-60 object-cover cursor-pointer"
              />
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
              alt="Gallery Large"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-xl"
              onClick={(e) => e.stopPropagation()}
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

export default Gallery;