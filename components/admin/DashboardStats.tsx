import { FileText, Eye, EyeOff, MessageSquare, Users } from 'lucide-react';

interface DashboardStatsProps {
  stats: {
    totalPosts: number;
    publishedPosts: number;
    draftPosts: number;
    totalComments: number;
    totalUsers: number;
  };
}

export default function DashboardStats({ stats }: DashboardStatsProps) {
  const statCards = [
    {
      title: 'Total Posts',
      value: stats.totalPosts,
      icon: FileText,
      color: 'bg-blue-500',
    },
    {
      title: 'Published',
      value: stats.publishedPosts,
      icon: Eye,
      color: 'bg-green-500',
    },
    {
      title: 'Drafts',
      value: stats.draftPosts,
      icon: EyeOff,
      color: 'bg-yellow-500',
    },
    {
      title: 'Comments',
      value: stats.totalComments,
      icon: MessageSquare,
      color: 'bg-purple-500',
    },
    {
      title: 'Users',
      value: stats.totalUsers,
      icon: Users,
      color: 'bg-pink-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {statCards.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.title}
            className="bg-white rounded-lg shadow-md p-6"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-900">
                  {stat.value}
                </p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
