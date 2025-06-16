import React from "react";

const services = [
  {
    title: "Tutoring",
    description:
      "One-on-one or group academic assistance tailored to each student's learning style, covering various subjects and skill levels.",
    icon: "📘",
  },
  {
    title: "Therapy",
    description:
      "Professional therapeutic services designed to support emotional and cognitive development, including speech, behavioral, and occupational therapy.",
    icon: "🧠",
  },
  {
    title: "Coaching",
    description:
      "Personalized coaching sessions focused on executive functioning, time management, and study strategies to empower independent learners.",
    icon: "🎯",
  },
];

const specializations = [
  "Dyslexia",
  "ADHD",
  "Autism Spectrum",
  "Dyscalculia",
  "Speech Disorders",
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 py-12 px-4 md:px-16">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Our Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Specializations
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {specializations.map((item) => (
          <span
            key={item}
            className="bg-white px-4 py-2 rounded-full shadow text-gray-700 font-medium"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Services;
