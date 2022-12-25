import React from 'react';

import { render } from '../../tests/contexts';
import { Loading } from '.';

describe('Loading Component', () => {
  it('should render a loading icon', () => {
    const { getByTestId } = render(<Loading />);
    const loadingIcon = getByTestId('loading-icon');

    expect(loadingIcon).toBeTruthy();
  });
});
