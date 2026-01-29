'use client';

import Image from 'next/image';
import {
  Sparkles,
  Database,
  Layers,
  Coins,
  FileStack,
  Share2,
  Briefcase,
  type LucideIcon,
} from 'lucide-react';

const features: { label: string; icon: LucideIcon }[] = [
  { label: 'Database Management System', icon: Database },
  { label: 'Multitenant Application System', icon: Layers },
  { label: 'Bitcoin/Mining Application', icon: Coins },
  { label: 'Special Content Application System', icon: FileStack },
  { label: 'Social Media/Blogs', icon: Share2 },
  { label: 'Mini/Large Company Project Application', icon: Briefcase },
];

export default function Features() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-8 h-8 text-[var(--primary)]" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Features</h2>
          </div>
          <p className="text-lg sm:text-xl text-gray-600">What We Can Do</p>
        </div>

        {/* Main Features Section - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
          {/* Left Column - Illustration */}
          <div className="relative w-full min-h-[280px] h-[400px] lg:h-[500px] order-2 lg:order-1" data-aos="fade-right">
            <Image
              src="/images/illustrator3.jpg"
              alt="Features - What We Can Do"
              fill
              className="object-contain rounded-lg"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          {/* Right Column - Feature List */}
          <div className="order-1 lg:order-2" data-aos="fade-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-default transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-[var(--primary)]" />
                    </div>
                    <p className="text-base font-semibold text-gray-900">
                      {feature.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* What Else Do We Do Section */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            We are Not limited to creating
          </h3>
          <h4 className="text-2xl font-semibold text-[var(--primary)] mb-8 text-center">
            What Else Do We Do
          </h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Left Column - Text */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h5 className="text-xl font-bold text-gray-900 mb-3">
                  We Train
                </h5>
                <p className="text-gray-700">
                  We tran people in divers aspect of Tech of worl such as Web
                  development, Mobile Development, Product Management and
                  Makerting, UIUX Designing etc.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h5 className="text-xl font-bold text-gray-900 mb-3">
                  We Employ
                </h5>
                <p className="text-gray-700">
                  We make people to be job-ready for any opportuinity that
                  bounce their way, we also employ Intent and senior developers
                  and Designers including makerters.
                </p>
              </div>
            </div>
            {/* Right Column - Illustration */}
            <div className="relative w-full h-[300px] lg:h-[400px]" data-aos="fade-left">
              <Image
                src="/images/Illustrator1.jpg"
                alt="We Train and We Employ"
                fill
                className="object-contain rounded-lg"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
