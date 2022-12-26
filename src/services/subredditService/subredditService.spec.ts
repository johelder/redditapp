import { subredditService } from '.';
import { mockSubreddit } from '../../tests/__mocks__/subreddit';
import { mockPosts } from '../../tests/__mocks__/posts';
import { api } from '../api';

describe('Subreddit Service', () => {
  test('should able to fetch a subreddit data', async () => {
    const spyFunction = jest
      .spyOn(api, 'get')
      .mockResolvedValue({ data: mockSubreddit });

    const response = await subredditService.fetchSubredditData();

    expect(response.result).toEqual(mockSubreddit);
    expect(spyFunction).toBeCalledTimes(1);
  });

  it('should able to fetch a list of posts from a subreddit', async () => {
    const spyFunction = jest
      .spyOn(api, 'get')
      .mockResolvedValue({ data: mockPosts });

    const response = await subredditService.fetchPostsData('new');

    expect(response.result).toEqual(mockPosts);
    expect(spyFunction).toBeCalledTimes(2);
  });
});
