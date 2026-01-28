'use client';

import Image from 'next/image';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-28 sm:pt-32 pb-16 sm:pb-20 relative overflow-hidden"
      style={{
        backgroundColor: 'var(--hero-bg)',
        backgroundImage: 'url(/images/eclipsBg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left">
            <div className="flex items-center gap-3 mb-4" data-aos="fade-right">
              <div
                className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-transform hover:scale-105"
                style={{ background: 'var(--primary-gradient)' }}
              >
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <span
                className="text-sm font-medium font-semibold uppercase tracking-wide"
                style={{ color: 'var(--primary)' }}
              >
                Modern Solutions
              </span>
            </div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-shadow"
              style={{ color: 'var(--headline)' }}
              data-aos="fade-right"
              data-aos-delay="100"
            >
              We offer modern solutions for growing your business
            </h1>
            <p
              className="text-lg md:text-xl mb-8 leading-relaxed"
              style={{ color: 'var(--body-text)' }}
              data-aos="fade-right"
              data-aos-delay="200"
            >
              We are team of talented Designers, Developers, Engineers and
              Content Writers making web-sites, Web-apps as well as Mobile-apps
              and Desktop-apps for your product to go global
            </p>
            <a
              href="/contact"
              className="inline-block text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
              style={{
                background: 'var(--primary-gradient)',
                boxShadow: 'var(--cta-shadow)',
              }}
              data-aos="fade-right"
              data-aos-delay="300"
            >
              Get Started →
            </a>
          </div>
          {/* Right Column - Illustration */}
          <div
            className="relative w-full min-h-[280px] h-[400px] lg:h-[500px]"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <Image
              src="/images/Illustrator1.jpg"
              alt="We offer modern solutions for growing your business"
              fill
              className="object-contain rounded-lg"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
