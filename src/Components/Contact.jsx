import React, { useState } from "react";
import { Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
    alert("Thank you for your message! I will get back to you soon.");
  };

  return (
    <div className="container px-4 py-12 mx-auto sm:px-6 sm:py-20">
      <h1 className="mb-12 text-3xl font-bold text-center text-blue-600 sm:text-4xl dark:text-blue-400">
        Contact Me
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg p-8 mx-auto bg-white rounded-lg shadow-lg dark:bg-gray-800"
      >
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 font-bold text-gray-700 dark:text-gray-300"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg dark:text-gray-300 dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 font-bold text-gray-700 dark:text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg dark:text-gray-300 dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 font-bold text-gray-700 dark:text-gray-300"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-3 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg dark:text-gray-300 dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
          ></textarea>
        </div>
        <button
          type="submit"
          className="flex items-center justify-center w-full px-4 py-3 font-bold text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
        >
          Send Message
          <Send className="w-5 h-5 ml-2" />
        </button>
      </form>
    </div>
  );
};

export default Contact;
