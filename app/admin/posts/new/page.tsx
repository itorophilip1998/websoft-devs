import PostForm from '@/components/admin/PostForm';

export default function NewPostPage() {
  return (
    <div className="space-y-6">
      <div data-aos="fade-up">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Create New Post</h1>
        <p className="text-gray-600">Write and publish a new blog post</p>
      </div>
      <PostForm />
    </div>
  );
}
