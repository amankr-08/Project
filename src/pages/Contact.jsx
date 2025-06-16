import React, { useState } from 'react';

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: ''
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // You can add form validation or API submission here
  };

  return (
    <div className="w-[60%] flex flex-col md:flex-row h-auto md:h-[600px] rounded-lg border-2 border-zinc-400 pl-4 mx-auto mt-8">
      {/* Image side */}
      <div
        className="w-full md:w-[40%] h-[300px] md:h-full bg-contain bg-no-repeat bg-center rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
        style={{
          backgroundImage:
            'url(https://www.celayix.com/wp-content/uploads/2020/07/Image@2x.png)'
        }}
      ></div>

      {/* Form side */}
      <div className="w-full md:w-[60%] h-full p-8 flex flex-col justify-center">
        <form onSubmit={handleForm} className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-center">Contact Us</h1>

          <div>
            <label htmlFor="fullName" className="block mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInput}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInput}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block mb-1">
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInput}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block mb-1">
              Subject (Optional)
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInput}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleInput}
              className="w-full p-2 border border-gray-300 rounded resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full w-1/2 mx-auto"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
