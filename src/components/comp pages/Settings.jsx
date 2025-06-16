import React, { useState } from "react";

const Settings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Settings</h2>

      {/* Profile Settings */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">Profile Information</h3>

        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-1">Username</label>
          <input
            type="text"
            value="john_doe"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value="john@example.com"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">Notifications</h3>

        <div className="flex items-center justify-between">
          <span className="text-gray-700 font-medium">Email Notifications</span>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={() => setEmailNotifications(!emailNotifications)}
              className="sr-only"
            />
            <div className={`w-11 h-6 rounded-full ${emailNotifications ? 'bg-blue-600' : 'bg-gray-300'} transition`}>
              <div
                className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 ${
                  emailNotifications ? 'translate-x-5' : 'translate-x-1'
                }`}
              ></div>
            </div>
          </label>
        </div>
      </div>

      {/* Display Settings */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">Display</h3>

        <div className="flex items-center justify-between">
          <span className="text-gray-700 font-medium">Dark Mode</span>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="sr-only"
            />
            <div className={`w-11 h-6 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-300'} transition`}>
              <div
                className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 ${
                  darkMode ? 'translate-x-5' : 'translate-x-1'
                }`}
              ></div>
            </div>
          </label>
        </div>
      </div>

      {/* Save Button */}
      <div className="text-right">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;
