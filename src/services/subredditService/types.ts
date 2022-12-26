import { IPost } from '../../dtos/post';
import { ISubreddit } from '../../dtos/subreddit';

export interface IGetSubredditResultProps {
  data: ISubreddit;
}

export interface IGetPostsResultProps {
  data: {
    after: string;
    children: IPost[];
  };
}

export interface IPostParams {
  after?: string;
}
