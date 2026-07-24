"use client";
import React, { useRef } from "react";
import { Phone, MapPin, Mail } from "lucide-react";

const Contact = () => {
  const form = useRef();

  const sendWhatsAppMessage = (e) => {
    e.preventDefault();
    
    const formData = new FormData(form.current);
    const name = formData.get('user_name');
    const email = formData.get('user_email');
    const message = formData.get('message');
    
    // Format the message for WhatsApp
    const whatsappMessage = `New Contact Form Submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Your WhatsApp number (include country code without '+' or '00')
    const whatsappNumber = '9594430295'; // Replace with your actual number
    
    // Create WhatsApp link
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Reset the form
    form.current.reset();
    
    // Show success message
    alert("You'll be redirected to WhatsApp to send your message!");
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <section className="text-center py-8 sm:py-12 md:py-14 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2 sm:mb-3">Contact Us</h2>
        <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg max-w-2xl mx-auto">
          Any questions or remarks? Just write us a message!
        </p>

        {/* FORM */}
        <form
          ref={form}
          onSubmit={sendWhatsAppMessage}
          className="max-w-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4"
        >
          <input
            type="email"
            name="user_email"
            placeholder="Enter a valid email address"
            required
            className="px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-sm sm:text-base transition-all"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Enter your Name"
            required
            className="px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-sm sm:text-base transition-all"
          />
          <textarea
            name="message"
            placeholder="Enter your message here"
            required
            className="px-3 sm:px-4 py-3 sm:py-4 h-[120px] sm:h-[150px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent md:col-span-2 text-sm sm:text-base transition-all resize-none"
          />
          <button
            type="submit"
            className="md:col-span-2 cursor-pointer mt-3 sm:mt-4 px-8 sm:px-12 py-2.5 sm:py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition-all duration-200 text-sm sm:text-base shadow-md hover:shadow-lg transform hover:scale-105"
          >
            SEND VIA WHATSAPP
          </button>
        </form>
      </section>

      {/* SPACING AFTER SUBMIT */}
      <div className="mb-16 sm:mb-20 md:mb-33"></div>

      {/* CONTACT INFO SECTION */}
      <div className="relative w-full h-[200px] sm:h-[240px] md:h-[260px] bg-blue-400">
        <div className="absolute top-[-60px] sm:top-[-70px] md:top-[-80px] left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[90%] md:w-[85%] bg-gray-100 rounded-xl shadow-lg p-4 sm:p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-center">
          {/* EMAIL */}
          <div className="relative pt-8 sm:pt-10">
            <div className="absolute top-[-35px] sm:top-[-45px] md:top-[-50px] left-1/2 transform -translate-x-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-gray-50 text-blue-400 rounded-full shadow-md flex items-center justify-center">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-1 mt-4 sm:mt-6">EMAIL</h4>
            <p className="text-gray-700 text-sm sm:text-base break-all sm:break-normal">
              nexcorealliance@gmail.com
            </p>
          </div>

          {/* PHONE */}
          <div className="relative pt-8 sm:pt-10">
            <div className="absolute top-[-35px] sm:top-[-45px] md:top-[-50px] left-1/2 transform -translate-x-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-gray-50 text-blue-600 rounded-full shadow-md flex items-center justify-center">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-black mb-1 mt-4 sm:mt-6">
              PHONE 
            </h4>
            <p className="text-gray-700 text-sm sm:text-base">
               +91 95944 30295
            </p>
          </div>

          {/* LOCATION */}
          <div className="relative pt-8 sm:pt-10">
            <div className="absolute top-[-35px] sm:top-[-45px] md:top-[-50px] left-1/2 transform -translate-x-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-gray-50 text-blue-700 rounded-full shadow-md flex items-center justify-center">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-black mb-1 mt-4 sm:mt-6">
              OUR OFFICE LOCATION
            </h4>
            <p className="text-gray-700 text-sm sm:text-base">
             Off BKC, Mumbai, India 400070
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;