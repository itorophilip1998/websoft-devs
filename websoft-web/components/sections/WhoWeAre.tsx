import Image from 'next/image';
import { Users, Code, Palette, Settings } from 'lucide-react';

export default function WhoWeAre() {
  const pillars = [
    { label: 'We Create', icon: Palette },
    { label: 'We Develop', icon: Code },
    { label: 'We Manage', icon: Settings },
  ];
  return (
    <section id="about" className="bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Illustration */}
          <div className="relative w-full min-h-[280px] h-[400px] lg:h-[500px] order-2 lg:order-1" data-aos="fade-right">
            <Image
              src="/images/illstrator2.jpg"
              alt="Who We Are - We Create, We Develop, We Manage"
              fill
              className="object-contain rounded-lg"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          {/* Right Column - Text Content */}
          <div className="text-left order-1 lg:order-2" data-aos="fade-left">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-8 h-8 text-[var(--primary)] flex-shrink-0" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Who We Are
              </h2>
            </div>
            <div className="flex flex-wrap gap-3 mb-6">
              {pillars.map((p) => {
                const IconComponent = p.icon;
                return (
                  <span key={p.label} className="inline-flex items-center gap-2 text-lg sm:text-xl md:text-2xl font-semibold text-[var(--primary)]">
                    <IconComponent className="w-5 h-5 flex-shrink-0" />
                    {p.label}
                  </span>
                );
              })}
            </div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We offers quality services for our client by making modern web apps,
              modern mobile apps and web sites as well as desktop(crossplatform)
              application for both small and large scale businesses. We also
              recruit intent who are willing to explore in Tech
            </p>
            <a
              href="/contact"
              className="inline-block text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary)]"
              style={{ background: 'var(--primary-gradient)', boxShadow: 'var(--cta-shadow)' }}
            >
              Join Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
