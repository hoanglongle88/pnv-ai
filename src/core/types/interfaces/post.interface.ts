import { Pagination } from './common.interface';

export type PostStatus = 'draft' | 'published' | 'archived';

export interface PostAuthor {
  id: string;
  username: string;
  email: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  status: PostStatus;
  author: PostAuthor;
  createdAt: string;
  updatedAt: string;
}

export interface PostListData {
  posts: Post[];
  pagination: Pagination;
}

export interface GetPostsParams {
  page?: number;
  limit?: number;
  status?: PostStatus;
}

export interface CreatePostPayload {
  title: string;
  content: string;
  status: PostStatus;
}

export interface UpdatePostPayload {
  title?: string;
  content?: string;
  status?: PostStatus;
}
