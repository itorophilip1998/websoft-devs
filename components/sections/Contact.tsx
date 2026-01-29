'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <Mail className="w-8 h-8 text-[var(--primary)]" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Contact</h2>
          </div>
          <p className="text-lg sm:text-xl text-gray-600">Contact Us</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-[var(--primary)] mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  Address
                </h3>
                <p className="text-gray-700">Remote</p>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-[var(--primary)] mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  Call Us
                </h3>
                <a
                  href="tel:+2349024195493"
                  className="text-gray-700 hover:text-[var(--primary)] transition-colors"
                >
                  +2349024195493
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-[var(--primary)] mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  Email Us
                </h3>
                <a
                  href="mailto:websoft@gmail.com"
                  className="text-gray-700 hover:text-[var(--primary)] transition-colors"
                >
                  websoft@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <Clock className="w-6 h-6 text-[var(--primary)] mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  Open Hours
                </h3>
                <p className="text-gray-700">24/hours Everyday</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full text-white px-6 py-3 rounded-lg font-semibold transition-all hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary)]"
                style={{ background: 'var(--primary-gradient)', boxShadow: 'var(--cta-shadow)' }}
              >
                {submitted ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
