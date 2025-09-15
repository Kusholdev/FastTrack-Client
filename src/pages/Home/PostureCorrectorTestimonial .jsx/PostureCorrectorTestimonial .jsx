import React, { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  { text: "A posture corrector provides support and gentle alignment for shoulders, back, and spine.", name: "Awlad Hossain", role: "Senior Product Designer" },
  { text: "I’ve been using it for 3 months and noticed a huge improvement in my posture!", name: "John Smith", role: "UX Researcher" },
  { text: "It helps me sit straighter during long office hours.", name: "Sarah Ali", role: "Software Engineer" },
  { text: "So comfortable to wear, I barely notice it after 5 minutes.", name: "Michael Lee", role: "Marketing Manager" },
  { text: "My back pain has reduced significantly after using this.", name: "Emma Watson", role: "Content Writer" },
  { text: "Great investment for anyone working from home.", name: "David Kim", role: "Product Manager" },
  { text: "Stylish and effective at the same time.", name: "Sophia Khan", role: "UI Designer" },
  { text: "Encourages me to maintain correct posture without being forceful.", name: "James Brown", role: "Business Analyst" },
  { text: "Lightweight and easy to carry anywhere.", name: "Olivia White", role: "HR Specialist" },
  { text: "Really helps me stay focused and reduces fatigue.", name: "Ethan Wilson", role: "Project Lead" }
];

const PostureCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const getPosition = (index) => {
    if (index === activeIndex) return "center";
    if (index === (activeIndex - 1 + testimonials.length) % testimonials.length) return "left";
    if (index === (activeIndex + 1) % testimonials.length) return "right";
    return "hidden";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col items-center justify-center p-6 rounded-2xl">
      <div className="relative w-full max-w-5xl">
        <div className="flex justify-center items-center space-x-6">
          {testimonials.map((testimonial, index) => {
            const position = getPosition(index);
            if (position === "hidden") return null;

            return (
              <motion.div
                key={index}
                className={`w-80 h-64 bg-white rounded-2xl shadow-xl p-6 transition-all duration-500 text-center`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: position === "center" ? 1 : 0.6,
                  scale: position === "center" ? 1 : 0.9,
                  filter: position === "center" ? "blur(0px)" : "blur(2px)"
                }}
                transition={{ duration: 0.5 }}
              >
                <svg
                  className="w-8 h-8 text-blue-500 mb-4 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 mb-4">{testimonial.text}</p>
                <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          <button onClick={prevSlide} className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300">◀</button>
          <button onClick={nextSlide} className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300">▶</button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-blue-500" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostureCarousel;
