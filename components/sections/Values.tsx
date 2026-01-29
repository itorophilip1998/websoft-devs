'use client';

import { Settings, Rocket, CheckCircle } from 'lucide-react';

export default function Values() {
  const values = [
    {
      title: 'Smart Working',
      description:
        'We do our best to make sure every tool and persons is available to develiver a task.',
      icon: Settings,
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Delivery',
      description:
        'No delay or time wasting when it comes to delivering our apps, we take time to deliver on time.',
      icon: Rocket,
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-600',
    },
    {
      title: 'Quality Services',
      description:
        'We render quality service to our client and nice content from scratch.',
      icon: CheckCircle,
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
    },
  ];

  return (
    <section
      className="relative"
      style={{
        backgroundColor: 'var(--hero-bg)',
        backgroundImage: 'url(/images/eclipsBg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Our Values
          </h2>
          <p className="text-xl text-gray-600">What We Do Best</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div
                  className={`w-16 h-16 ${value.bgColor} ${value.iconColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
