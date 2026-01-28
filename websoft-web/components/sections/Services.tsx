'use client';

import Link from 'next/link';
import {
  Globe,
  Smartphone,
  Monitor,
  Pen,
  Megaphone,
  Palette,
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Web Applications',
      description:
        'We create website and web application for large and small company and price is affordable.',
      icon: Globe,
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Mobile Applications',
      description:
        'We create IOS application and Andriod mobile application with affordable price.',
      icon: Smartphone,
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600',
    },
    {
      title: 'Desktop Applications',
      description:
        'We creat Desktop application for Windows opersting system, Mac operating system and linux Operating system.',
      icon: Monitor,
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      title: 'Content Writting',
      description:
        'Create from no where and modernise your content for users to read and know more about you and your product.',
      icon: Pen,
      bgColor: 'bg-pink-100',
      iconColor: 'text-pink-600',
    },
    {
      title: 'Software Makerting/Mangement.',
      description:
        'We manage your site as well as marketting your your product and advertising your company.',
      icon: Megaphone,
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-600',
    },
    {
      title: 'UIUX Designs',
      description:
        'We design and create prototype for your product uniquely and also create users experience and users interfaces for your product.',
      icon: Palette,
      bgColor: 'bg-cyan-100',
      iconColor: 'text-cyan-600',
    },
  ];

  return (
    <section id="services" className="bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Services</h2>
          <p className="text-xl text-gray-600">What We Offer</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
                data-aos-delay={index * 80}
              >
                <div
                  className={`w-16 h-16 ${service.bgColor} ${service.iconColor} rounded-lg flex items-center justify-center mb-4`}
                >
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href="/contact"
                  className="text-[var(--primary)] font-semibold hover:underline"
                >
                  Read More
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
