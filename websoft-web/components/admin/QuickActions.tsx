import Link from 'next/link';
import { Plus, FileText, Settings } from 'lucide-react';

export default function QuickActions() {
  const actions = [
    {
      title: 'Create New Post',
      description: 'Write and publish a new blog post',
      href: '/admin/posts/new',
      icon: Plus,
      color: 'bg-[var(--primary)] hover:bg-[var(--primary-hover)]',
    },
    {
      title: 'Manage Posts',
      description: 'View, edit, or delete existing posts',
      href: '/admin/posts',
      icon: FileText,
      color: 'bg-green-600 hover:bg-green-700',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6" data-aos="fade-up">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <Link
              key={action.href}
              href={action.href}
              className={`${action.color} text-white p-6 rounded-lg transition-colors flex items-center gap-4`}
            >
              <Icon className="w-8 h-8" />
              <div>
                <h3 className="text-lg font-semibold">{action.title}</h3>
                <p className="text-sm opacity-90">{action.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
