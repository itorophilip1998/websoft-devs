export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string | null;
  featuredImage?: string | null;
  authorId: string;
  author: User;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  comments?: Comment[];
}

export interface Comment {
  id: string;
  content: string;
  authorId: string;
  author: User;
  postId: string;
  parentId?: string | null;
  parent?: Comment | null;
  replies?: Comment[];
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  clerkId: string;
  email: string;
  name?: string | null;
  image?: string | null;
  role: string;
  createdAt: Date;
}

export interface PostCreateInput {
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  featuredImage?: string;
  published?: boolean;
}

export interface CommentCreateInput {
  content: string;
  postId: string;
  parentId?: string;
}
