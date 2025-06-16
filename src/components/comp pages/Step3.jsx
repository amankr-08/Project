import React from "react";

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Step3 = ({ formData, setFormData }) => {
  // Handle input change for email and phone
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Toggle preferred working days selection
  const toggleDay = (day) => {
    let updated = formData.workingDays || [];
    if (updated.includes(day)) {
      updated = updated.filter((d) => d !== day);
    } else {
      updated.push(day);
    }
    setFormData((prev) => ({ ...prev, workingDays: updated }));
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">
        Step 3: Contact & Availability
      </h3>

      <label className="block mb-1 font-medium">Contact Email</label>
      <input
        type="email"
        name="email"
        value={formData.email || ""}
        onChange={handleChange}
        required
        className="w-full border rounded-lg px-3 py-2 mb-4"
      />

      <label className="block mb-1 font-medium">Phone Number</label>
      <input
        type="tel"
        name="phone"
        value={formData.phone || ""}
        onChange={handleChange}
        required
        className="w-full border rounded-lg px-3 py-2 mb-4"
      />

      <p className="font-medium mb-2">Preferred Working Days</p>
      <div className="flex flex-wrap gap-3 mb-4">
        {daysOfWeek.map((day) => (
          <label key={day} className="inline-flex items-center space-x-2">
            <input
              type="checkbox"
              checked={formData.workingDays?.includes(day) || false}
              onChange={() => toggleDay(day)}
            />
            <span>{day}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Step3;
