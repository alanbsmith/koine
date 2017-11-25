import React from 'react';
import FlexColumn from '../index';

import { renderWithTheme } from '__tests__/helpers';

describe('FlexColumn Element', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(
      <FlexColumn />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
