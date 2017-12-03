import React from 'react';
import Icon from '../Icon';

import { renderWithTheme } from '__tests__/helpers';


describe('Icon Element', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(
      <Icon name="home" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('applies left modifier', () => {
    const tree = renderWithTheme(
      <Icon
        modifiers={['left']}
        name="home"
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('applies right modifier', () => {
    const tree = renderWithTheme(
      <Icon
        modifiers={['right']}
        name="home"
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
