import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactInfo() {
  const contactItems = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'Remote',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+2349024195493',
      link: 'tel:+2349024195493',
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'websoft@gmail.com',
      link: 'mailto:websoft@gmail.com',
    },
    {
      icon: Clock,
      title: 'Open Hours',
      content: '24/hours Everyday',
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
      {contactItems.map((item, index) => {
        const Icon = item.icon;
        const content = item.link ? (
          <a
            href={item.link}
            className="text-gray-700 hover:text-[var(--primary)] transition-colors"
          >
            {item.content}
          </a>
        ) : (
          <p className="text-gray-700">{item.content}</p>
        );

        return (
          <div key={index} className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-[var(--primary)] bg-opacity-10 rounded-lg flex items-center justify-center">
              <Icon className="w-6 h-6 text-[var(--primary)]" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {item.title}
              </h3>
              {content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
