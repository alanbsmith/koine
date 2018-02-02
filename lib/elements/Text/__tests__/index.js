import React from 'react';
import Text from '../index';
import 'jest-styled-components';

import { renderWithTheme } from '__tests__/helpers';

describe('Paragraph Element', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<Text>A paragraph</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the extraSmall modifier', () => {
    const tree = renderWithTheme(<Text modifiers={['extraSmall']}>A paragraph</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the small modifier', () => {
    const tree = renderWithTheme(<Text modifiers={['small']}>A paragraph</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the large modifier', () => {
    const tree = renderWithTheme(<Text modifiers={['large']}>A paragraph</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
