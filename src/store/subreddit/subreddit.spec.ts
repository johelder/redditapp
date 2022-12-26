import { subreddit } from '.';
import { mockPosts } from '../../tests/__mocks__/posts';
import { mockSubreddit } from '../../tests/__mocks__/subreddit';

describe('Subreddit Store', () => {
  it('should able to add a new subreddit', () => {
    subreddit.setSubreddit(mockSubreddit);

    expect(subreddit.information).toEqual(mockSubreddit);
  });

  it('should able to add a list of posts', () => {
    subreddit.setPosts(mockPosts);

    expect(subreddit.posts).toEqual(mockPosts);
  });
});
