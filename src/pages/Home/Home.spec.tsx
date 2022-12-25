import React from 'react';
import { Home } from '.';
import { render } from '../../tests/contexts';
import { mockPosts } from '../../tests/__mocks__/posts';
import { mockSubreddit } from '../../tests/__mocks__/subreddit';

jest.mock('../../hooks/useSubreddit', () => {
  return {
    useSubReddit() {
      return {
        subreddit: mockSubreddit,
        posts: mockPosts,
      };
    },
  };
});

jest.mock('@react-navigation/native');

describe('Home Page', () => {
  const navigation: any = jest.fn();
  const route: any = {
    params: {
      slug: 'fake-slug',
    },
  };

  it('should able to render a subreddit header', async () => {
    const { findByText } = render(
      <Home navigation={navigation} route={route} />,
    );

    const subredditName = await findByText('/r/fake-subreddit-name');

    expect(subredditName).toBeTruthy();
  });

  it('should able to render a list of posts', async () => {
    const { findByText } = render(
      <Home navigation={navigation} route={route} />,
    );

    const postTitle = await findByText('fake-title');

    expect(postTitle).toBeTruthy();
  });
});
