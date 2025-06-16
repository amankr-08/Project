import React from "react";

const learningDifficulties = [
  "Dyslexia",
  "ADHD",
  "Autism Spectrum",
  "Dyscalculia",
  "Speech Disorders",
];

const serviceOptions = ["Tutoring", "Therapy", "Coaching"];

const Step2 = ({ formData, setFormData }) => {
  // Toggle item in a multi-select checkbox list
  const toggleSelection = (field, value) => {
    let updated = formData[field] || [];
    if (updated.includes(value)) {
      updated = updated.filter((item) => item !== value);
    } else {
      updated.push(value);
    }
    setFormData((prev) => ({ ...prev, [field]: updated }));
  };

  // Handle change for years of experience (number input)
  const handleExperienceChange = (e) => {
    const { value } = e.target;
    setFormData((prev) => ({ ...prev, yearsExperience: value }));
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">
        Step 2: Services & Expertise
      </h3>

      <div className="mb-6">
        <p className="font-medium mb-2">Specializations (Learning Difficulties):</p>
        <div className="flex flex-col gap-2">
          {learningDifficulties.map((item) => (
            <label key={item} className="inline-flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.specializations?.includes(item) || false}
                onChange={() => toggleSelection("specializations", item)}
              />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <p className="font-medium mb-2">Services Offered:</p>
        <div className="flex flex-col gap-2">
          {serviceOptions.map((item) => (
            <label key={item} className="inline-flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.services?.includes(item) || false}
                onChange={() => toggleSelection("services", item)}
                required
              />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block mb-1 font-medium">Years of Experience</label>
        <input
          type="number"
          min="0"
          name="yearsExperience"
          value={formData.yearsExperience || ""}
          onChange={handleExperienceChange}
          required
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>
    </div>
  );
};

export default Step2;
