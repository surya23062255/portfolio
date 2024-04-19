import React, { useState } from "react";

function Contact() {
  // Define state variables for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form input changes
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any actions with the form data, like sending it to a server
    console.log(formData);
    // Reset form inputs after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div
      name="contact"
      className="flex justify-center items-center p-4 w-full h-screen bg-[#0a192f]"
    >
      <form className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="py-4 text-gray-300">
            Submit the form below or shoot me an E-mail -
            surykantyadav83@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="E-Mail"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          placeholder="Message"
          name="message"
          rows="10"
          value={formData.message}
          onChange={handleInputChange}
        ></textarea>
        <button
        onClick={handleSubmit}
          className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center"
        >
          Let's Collaborate
        </button>
      </form>
    </div>
  );
}

export default Contact;
