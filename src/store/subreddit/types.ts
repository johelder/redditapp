import { IPost } from '../../dtos/post';
import { ISubreddit } from '../../dtos/subreddit';

export interface ISubredditStore {
  information: ISubreddit | {};
  posts: IPost[];
}
