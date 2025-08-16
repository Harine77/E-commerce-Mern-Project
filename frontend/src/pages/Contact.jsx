import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-8">
            <Title text1={'GET IN'} text2={' TOUCH'} />
            <h2 className="text-4xl font-light mt-6 text-gray-900">
              Let's Start a Conversation
            </h2>
            <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
              Whether you're looking to collaborate, have questions about our products, 
              or want to join our team, we're here to listen.
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-black/5 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-black/5 rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Information Side */}
          <div className="space-y-12">
            {/* Contact Cards */}
            <div className="grid gap-8">
              {/* Store Location */}
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-gray-900">Visit Our Store</h3>
                    <p className="text-gray-600 leading-relaxed">
                      54709 Willms Station, Suite 350<br />
                      Washington, United States
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-gray-900">Get In Touch</h3>
                    <p className="text-gray-600">
                      <span className="block">Phone: <span className="font-mono">+91 9834523444</span></span>
                      <span className="block mt-1">Email: <span className="font-mono">admin@mivra.com</span></span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Careers */}
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-gray-900">Join Our Team</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Ready to innovate, grow, and build the future of style with us? 
                      Explore opportunities to be part of the Mivra family.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative">
              <img
                src={assets.contact_img}
                alt="Contact Mivra"
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-medium">MIVRA Experience Center</p>
                <p className="text-xs opacity-80">Where style meets innovation</p>
              </div>
            </div>
          </div>

          {/* Contact Form Side */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="mb-8">
                <h3 className="text-2xl font-light text-gray-900 mb-2">Send us a message</h3>
                <p className="text-gray-600">We'll get back to you within 24 hours.</p>
              </div>

              <form className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200">
                    <option>General Inquiry</option>
                    <option>Product Question</option>
                    <option>Partnership</option>
                    <option>Career Opportunity</option>
                    <option>Support</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 resize-none"
                    rows={5}
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-4 px-8 rounded-xl font-medium text-sm tracking-wide hover:bg-gray-800 transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
                  >
                    SEND MESSAGE
                  </button>
                </div>

                {/* Privacy Note */}
                <div className="pt-2">
                  <p className="text-xs text-gray-500 text-center leading-relaxed">
                    By submitting this form, you agree to our privacy policy. 
                    We respond to all inquiries within 24 hours on business days.
                  </p>
                </div>
              </form>
            </div>

            {/* Quick Contact Options */}
            <div className="mt-6 p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <p className="text-sm font-medium text-gray-900 mb-3">Prefer to reach out directly?</p>
              <div className="flex gap-4">
                <a
                  href="tel:+919834523444"
                  className="flex-1 bg-white border border-gray-200 rounded-xl p-3 text-center text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  Call Us
                </a>
                <a
                  href="mailto:admin@mivra.com"
                  className="flex-1 bg-white border border-gray-200 rounded-xl p-3 text-center text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h3 className="text-3xl font-light mb-4">Ready to Experience Mivra?</h3>
          <p className="text-gray-300 mb-8 text-lg">
            Visit our showroom, explore our latest collections, or schedule a personal consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors duration-200">
              Visit Showroom
            </button>
            <button className="border border-white px-8 py-3 rounded-xl font-medium hover:bg-white hover:text-black transition-colors duration-200">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;