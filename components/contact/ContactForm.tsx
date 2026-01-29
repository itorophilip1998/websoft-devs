'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <div className="bg-gray-50 rounded-lg p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Your Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting || submitted}
          className="w-full text-white px-6 py-3 rounded-lg font-semibold transition-all hover:opacity-95 disabled:opacity-50 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary)]"
          style={{ background: 'var(--primary-gradient)', boxShadow: 'var(--cta-shadow)' }}
        >
          {submitted ? (
            <>
              <span>Message Sent!</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </>
          )}
        </button>
      </form>
    </div>
  );
}
