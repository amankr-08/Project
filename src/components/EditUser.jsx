import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Predefined options
const learningDifficulties = [
  "Dyslexia",
  "ADHD",
  "Autism Spectrum",
  "Dyscalculia",
  "Speech Disorders",
];

const serviceOptions = ["Tutoring", "Therapy", "Coaching"];

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const EditUser = () => {
  const navigate = useNavigate();
  const { slug } = useParams(); // Grabs user ID/slug from URL

  // State to hold form data
  const [formData, setFormData] = useState({
    username: "",
    bio: "",
    image: "",
    specializations: [],
    services: [],
    yearsExperience: "",
    email: "",
    phone: "",
    workingDays: [],
  });

  // Fetch existing user data when component mounts
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/users/${slug}`);
        setFormData(data); // Pre-fill form with user data
      } catch (error) {
        toast.error("Error fetching user data.");
      }
    };

    fetchUser();
  }, [slug]);

  // Handle input field changes (text, number, email, etc.)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Toggle checkbox selection (for multi-select fields like specializations, services, workingDays)
  const toggleSelection = (field, value) => {
    const updated = formData[field].includes(value)
      ? formData[field].filter((item) => item !== value) // Remove item if already selected
      : [...formData[field], value]; // Add item if not selected

    setFormData((prev) => ({ ...prev, [field]: updated }));
  };

  // Handle form submission and send PUT request to update user
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/users/${slug}`, formData);
      toast.success("Profile updated successfully!");
      navigate("/dashboard/allusers"); // Redirect to users list after update
    } catch (error) {
      toast.error("Failed to update profile.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex justify-center items-center">
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-[350px] md:w-[600px]"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Edit User Profile
        </h2>

        {/* ---------- Basic Info ---------- */}
        <label className="block font-medium mb-1">Provider Name</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
          className="w-full border rounded-lg px-3 py-2 mb-4"
        />

        <label className="block font-medium mb-1">Profile Bio</label>
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          rows={4}
          placeholder="Write a short bio..."
          required
          className="w-full border rounded-lg px-3 py-2 mb-4"
        />

        <label className="block font-medium mb-1">Image URL</label>
        <input
          type="url"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="w-full border rounded-lg px-3 py-2 mb-4"
        />

        {/* Image preview */}
        {formData.image && (
          <div className="mb-4 text-center">
            <img
              src={formData.image}
              alt="Preview"
              className="mx-auto h-24 w-24 rounded-full object-cover"
            />
          </div>
        )}

        {/* ---------- Specializations ---------- */}
        <div className="mb-6">
          <p className="font-medium mb-2">Specializations (Learning Difficulties):</p>
          <div className="flex flex-wrap gap-3">
            {learningDifficulties.map((item) => (
              <label key={item} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.specializations.includes(item)}
                  onChange={() => toggleSelection("specializations", item)}
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* ---------- Services Offered ---------- */}
        <div className="mb-6">
          <p className="font-medium mb-2">Services Offered:</p>
          <div className="flex flex-wrap gap-3">
            {serviceOptions.map((item) => (
              <label key={item} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.services.includes(item)}
                  onChange={() => toggleSelection("services", item)}
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* ---------- Years of Experience ---------- */}
        <label className="block font-medium mb-1">Years of Experience</label>
        <input
          type="number"
          name="yearsExperience"
          min="0"
          value={formData.yearsExperience}
          onChange={handleChange}
          required
          className="w-full border rounded-lg px-3 py-2 mb-4"
        />

        {/* ---------- Contact Info ---------- */}
        <label className="block font-medium mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border rounded-lg px-3 py-2 mb-4"
        />

        <label className="block font-medium mb-1">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full border rounded-lg px-3 py-2 mb-4"
        />

        {/* ---------- Working Days ---------- */}
        <div className="mb-6">
          <p className="font-medium mb-2">Preferred Working Days:</p>
          <div className="flex flex-wrap gap-3">
            {daysOfWeek.map((day) => (
              <label key={day} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.workingDays.includes(day)}
                  onChange={() => toggleSelection("workingDays", day)}
                />
                <span>{day}</span>
              </label>
            ))}
          </div>
        </div>

        {/* ---------- Submit ---------- */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default EditUser;
