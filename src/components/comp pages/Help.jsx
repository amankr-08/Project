import React from "react";

const Help = () => {
  const faqs = [
    {
      question: "How do I reset my password?",
      answer: "Click on 'Forgot Password' on the login screen and follow the instructions to reset your password via email.",
    },
    {
      question: "How do I update my profile?",
      answer: "Go to your Dashboard > User Profile, and click the 'Edit' button to make changes.",
    },
    {
      question: "Why can't I see my orders?",
      answer: "Ensure you are logged in with the correct account. If the issue persists, contact support.",
    },
    {
      question: "How can I delete my account?",
      answer: "Please contact support through the contact form. We will guide you through the process securely.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">Help & Support</h1>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <h3 className="font-semibold text-lg text-gray-700 mb-1">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Help;
