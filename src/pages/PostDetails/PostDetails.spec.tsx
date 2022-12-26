import React from 'react';

import { PostDetails } from '.';
import { render } from '../../tests/contexts';

describe('PostDetails Page', () => {
  it('should render correctly a post details', () => {
    const navigation: any = jest.fn();

    const { getByTestId } = render(
      <PostDetails
        navigation={navigation}
        route={{
          key: 'fake-key',
          name: 'PostDetails',
          path: 'fake-path',
          params: {
            permalink: 'fake-permalink',
            title: 'fake-title',
          },
        }}
      />,
    );

    const postDetails = getByTestId('post-details');

    expect(postDetails.props.source.uri).toBe(
      'https://reddit.com/fake-permalink',
    );
  });
});
