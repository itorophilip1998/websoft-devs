import { Smile, FileText, Clock, Users } from 'lucide-react';

export default function Stats() {
  const stats = [
    { number: '50', label: 'Happy Clients', icon: Smile },
    { number: '50+', label: 'Projects', icon: FileText },
    { number: '20', label: 'Hours Of Support', icon: Clock },
    { number: '15+', label: 'Hard Workers', icon: Users },
  ];

  return (
    <section className="text-white" style={{ background: 'var(--primary-gradient)' }}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} data-aos="zoom-in" data-aos-delay={index * 100} className="py-2 md:py-0">
                <div className="flex justify-center mb-3 md:mb-4">
                  <IconComponent className="w-10 h-10 md:w-12 md:h-12 text-white/90" />
                </div>
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-1 md:mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-lg lg:text-xl">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
