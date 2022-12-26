import { makeObservable, observable, action } from 'mobx';

import { IPost } from '../../dtos/post';
import { ISubreddit } from '../../dtos/subreddit';

class Subreddit {
  information: ISubreddit;
  posts: IPost[];

  constructor() {
    this.information = {} as ISubreddit;
    this.posts = [];

    makeObservable(this, {
      information: observable,
      setSubreddit: action,
      posts: observable,
      setPosts: action,
      setMorePosts: action,
    });
  }

  setSubreddit(subreddit: ISubreddit) {
    this.information = subreddit;
  }

  setPosts(posts: IPost[]) {
    this.posts = posts;
  }

  setMorePosts(posts: IPost[]) {
    this.posts = [...this.posts, ...posts];
  }
}

export const subreddit = new Subreddit();
