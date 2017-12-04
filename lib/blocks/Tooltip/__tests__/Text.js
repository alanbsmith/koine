import React from 'react';
import Text from '../Text';
import 'jest-styled-components';

import { renderWithTheme } from '__tests__/helpers';


describe('Tooltip Text Element', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(
      <Text>
        Tooltip Text
      </Text>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('applies the capitalize modifier', () => {
    const tree = renderWithTheme(
      <Text modifiers={['capitalize']}>
        Tooltip Text
      </Text>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('applies the boldWeight modifier', () => {
    const tree = renderWithTheme(
      <Text modifiers={['boldWeight']}>
        Tooltip Text
      </Text>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
