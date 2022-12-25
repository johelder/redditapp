import { ReactNode } from 'react';
import { IPost } from '../../dtos/post';
import { TSlug } from '../../dtos/slug';
import { ISubreddit } from '../../dtos/subreddit';

export interface ISubredditContextProps {
  subreddit: ISubreddit;
  getPosts: (slug: TSlug) => void;
  posts: IPost[];
  isLoading: boolean;
}

export interface ISubredditProviderProps {
  children: ReactNode;
}
