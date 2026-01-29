import { redirect } from 'next/navigation';
import { isAdmin } from '@/lib/auth';
import Header from '@/components/Header';

export const dynamic = 'force-dynamic';

import Footer from '@/components/Footer';
import Link from 'next/link';
import { FileText, Plus, Settings } from 'lucide-react';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const admin = await isAdmin();

  if (!admin) {
    redirect('/');
  }

  return (
    <>
      <Header />
      <div className="pt-20 min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <aside className="w-full md:w-64 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-md p-4">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Admin Panel
                </h2>
                <nav className="space-y-2">
                  <Link
                    href="/admin"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Settings className="w-5 h-5" />
                    Dashboard
                  </Link>
                  <Link
                    href="/admin/posts"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <FileText className="w-5 h-5" />
                    Posts
                  </Link>
                  <Link
                    href="/admin/posts/new"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                    New Post
                  </Link>
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1">{children}</main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
