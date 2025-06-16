import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import "react-toastify/dist/ReactToastify.css";

const CreateUser = () => {
  // Holds all form data across steps
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

  // Step index to track current step
  const [step, setStep] = useState(0);

  const navigate = useNavigate();

  // Move to next step
  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  // Move to previous step
  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  // Submit form data to API
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/users", formData);
      toast.success("Profile created successfully!",{
      position: "top-center",
      autoClose: 2000
    });
    console.log("Profile Created Successfully!",formData)
      navigate("/dashboard/allusers");
    } catch (error) {
      toast.error(error.message || "Failed to create profile.");
    }
  };

  // Render step component by index
  const renderStep = () => {
    switch (step) {
      case 0:
        return <Step1 formData={formData} setFormData={setFormData} />;
      case 1:
        return <Step2 formData={formData} setFormData={setFormData} />;
      case 2:
        return <Step3 formData={formData} setFormData={setFormData} />;
      default:
        return null;
    }
  };

  return (
    <div className="h-full bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center ">
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8  rounded-2xl shadow-md h-auto w-[350px] md:w-[500px]"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          User Registration
        </h2>

        {/* Render current step fields */}
        {renderStep()}

        {/* Navigation buttons */}
        <div className="flex justify-between mt-8">
          {step > 0 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Back
            </button>
          )}

          {step < 2 && (
            <button
              type="button"
              onClick={nextStep}
              className="ml-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Next
            </button>
          )}

          {/* Submit button only on last step */}
          {step === 2 && (
            <button
              type="submit"
              className="ml-auto px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
            >
              Register
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
