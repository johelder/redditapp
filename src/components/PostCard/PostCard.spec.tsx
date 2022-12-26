import React from 'react';
import { PostCard } from '.';
import { render } from '../../tests/contexts';

describe('PostCardComponent', () => {
  it('should render a post information correctly', () => {
    const { getByText } = render(
      <PostCard
        post={{
          data: {
            id: 'fake-id',
            thumbnail: 'fake-thumbnail',
            title: 'fake-title',
            author: 'fake-author',
            ups: 111,
            num_comments: 222,
            created: 333,
            permalink: 'fake-permalink',
          },
        }}
      />,
    );

    const title = getByText('fake-title');
    const author = getByText('fake-author');
    const ups = getByText('111');
    const comments = getByText('222');

    expect(title).toBeTruthy();
    expect(author).toBeTruthy();
    expect(ups).toBeTruthy();
    expect(comments).toBeTruthy();
  });
});
