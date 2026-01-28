'use client';

import { LayoutGrid, Globe, Smartphone, type LucideIcon } from 'lucide-react';

const projectIcon: Record<string, LucideIcon> = {
  Web: Globe,
  App: Smartphone,
};

export default function Portfolio() {
  const projects = [
    { name: 'Seekers Lobby', type: 'Web', gradient: 'from-blue-400 to-blue-600' },
    { name: 'Pharmacy System', type: 'App', gradient: 'from-green-400 to-green-600' },
    { name: 'Hirepipu', type: 'Web', gradient: 'from-purple-400 to-purple-600' },
  ];

  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <LayoutGrid className="w-8 h-8 text-[var(--primary)]" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Portfolio</h2>
          </div>
          <p className="text-lg sm:text-xl text-gray-600">Check our latest work</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = projectIcon[project.type] ?? Globe;
            return (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={`h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="relative text-center text-white z-10">
                    <div className="flex justify-center mb-2">
                      <IconComponent className="w-14 h-14" />
                    </div>
                    <div className="text-xl font-semibold">{project.name}</div>
                  </div>
                </div>
                <div className="p-6">
                  <span
                    className="inline-block text-white px-4 py-1 rounded-full text-sm font-semibold"
                    style={{ background: 'var(--primary-gradient)' }}
                  >
                    {project.type}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
