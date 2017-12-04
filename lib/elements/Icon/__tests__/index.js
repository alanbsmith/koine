import React from 'react';
import Icon from '../index';

import { renderWithTheme } from '__tests__/helpers';

describe('Icon Element', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(
      <Icon name="home" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
