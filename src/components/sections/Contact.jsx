import React, { useState } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_v9k4zhk",
        "template_0ei4o89",
        formData,
        "c3MrZ4ifknTkGQ-QZ"
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ from_name: "", from_email: "", message: "" });
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message.");
      });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-lg w-full px-6 py-10 glass rounded-xl border border-white/10 shadow-xl">
        
        <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Get In Touch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="from_name"
              required
              value={formData.from_name}
              onChange={handleChange}
              className="w-full p-3 bg-transparent border border-white/20 rounded-lg text-white outline-none focus:border-blue-400 transition peer"
            />
            <label className="absolute left-3 top-3 text-gray-400 peer-focus:text-blue-400 peer-focus:-translate-y-5 peer-focus:text-sm peer-valid:-translate-y-5 peer-valid:text-sm transition-all bg-black px-1">
              Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="from_email"
              required
              value={formData.from_email}
              onChange={handleChange}
              className="w-full p-3 bg-transparent border border-white/20 rounded-lg text-white outline-none focus:border-blue-400 transition peer"
            />
            <label className="absolute left-3 top-3 text-gray-400 peer-focus:text-blue-400 peer-focus:-translate-y-5 peer-focus:text-sm peer-valid:-translate-y-5 peer-valid:text-sm transition-all bg-black px-1">
              Email
            </label>
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              name="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-transparent border border-white/20 rounded-lg text-white outline-none focus:border-blue-400 transition peer"
            ></textarea>
            <label className="absolute left-3 top-3 text-gray-400 peer-focus:text-blue-400 peer-focus:-translate-y-5 peer-focus:text-sm peer-valid:-translate-y-5 peer-valid:text-sm transition-all bg-black px-1">
              Message
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white font-semibold"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;
