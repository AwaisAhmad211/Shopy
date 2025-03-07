import { useState } from "react";
import { FaUser, FaEnvelope, FaComment, FaPaperPlane, FaPhone, FaMapMarker, FaQuestionCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { Contactimg } from "../assets/Data";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setIsSubmitted(true);

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // Reset submission status after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <div className="w-full h-64 bg-black flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Contact Us</h1>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side: Contact Information and FAQs */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-black">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaMapMarker className="text-teal-500 mr-2" />
                  <p className="text-black">123 E-Commerce Street, City, Country</p>
                </div>
                <div className="flex items-center">
                  <FaPhone className="text-teal-500 mr-2" />
                  <p className="text-black">+1 234 567 890</p>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-teal-500 mr-2" />
                  <p className="text-black">support@ecommerce.com</p>
                </div>
              </div>
            </div>

            {/* FAQs Section */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-black">FAQs</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaQuestionCircle className="text-teal-500 mr-2" />
                  <p className="text-black">How can I track my order?</p>
                </div>
                <div className="flex items-center">
                  <FaQuestionCircle className="text-teal-500 mr-2" />
                  <p className="text-black">What is your return policy?</p>
                </div>
                <div className="flex items-center">
                  <FaQuestionCircle className="text-teal-500 mr-2" />
                  <p className="text-black">Do you offer international shipping?</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form and Vector Image */}
          <div className="space-y-6">
            {/* Contact Form */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-center text-black">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-black">
                    <FaUser className="inline-block mr-2" />
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-black">
                    <FaEnvelope className="inline-block mr-2" />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-black">
                    <FaComment className="inline-block mr-2" />
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-500 text-white p-2 rounded-lg hover:bg-teal-600 transition flex items-center justify-center"
                >
                  <FaPaperPlane className="inline-block mr-2" />
                  Send Message
                </button>
              </form>

              {/* Submission Animation */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center"
                >
                  Message sent successfully!
                </motion.div>
              )}
            </div>

            {/* Vector Image */}
            <div className="flex justify-center">
              <img
                src={Contactimg}
                alt="Contact Us"
                className="w-full max-w-xs md:max-w-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;