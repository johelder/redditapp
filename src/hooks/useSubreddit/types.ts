import { ReactNode } from 'react';
import { IPost } from '../../dtos/post';
import { TSlug } from '../../dtos/slug';
import { ISubreddit } from '../../dtos/subreddit';

export interface ISubredditContextProps {
  subreddit: ISubreddit;
  getPosts: (slug: TSlug) => void;
  getMorePosts: (slug: TSlug) => void;
  posts: IPost[];
  status: TStatus | string;
}

export interface ISubredditProviderProps {
  children: ReactNode;
}

export type TStatus = 'idle' | 'loading' | 'success' | 'error';
