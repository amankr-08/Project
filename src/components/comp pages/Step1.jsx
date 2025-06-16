import React, { useState } from "react";

const Step1 = ({ formData, setFormData }) => {
  // State to toggle placeholder image display for simulated upload
  const [showPlaceholder, setShowPlaceholder] = useState(false);

  // Handle input change for name and bio
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

 
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Step 1: Basic Information</h3>

      <label className="block mb-1 font-medium">Provider Name</label>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        required
        className="w-full border rounded-lg px-3 py-2 mb-4"
      />

      <label className="block mb-1 font-medium">Profile Bio</label>
      <textarea
        name="bio"
        value={formData.bio}
        onChange={handleChange}
        rows={4}
        placeholder="Write a short bio..."
        required
        className="w-full border rounded-lg px-3 py-2 mb-4"
      />

       <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Image URL</label>
          <input
            type="url"
            name="image"
            className="w-full border rounded-lg px-4 py-2"
            value={formData.image}
            onChange={handleChange}
          />
        </div>

        {formData.image && (
          <div className="mb-4 text-center">
            <img
              src={formData.image}
              alt="Preview"
              className="mx-auto h-24 w-24 rounded-full object-cover"
            />
          </div>
        )}

      {showPlaceholder && (
        <div className="mb-4">
          <img
            src={formData.image}
            alt="Profile Placeholder"
            className="h-24 w-24 rounded-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default Step1;
