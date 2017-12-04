import React from 'react';
import H2 from '../index';

import { renderWithTheme } from '__tests__/helpers';


describe('H2 Element', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(
      <H2>Header Element</H2>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('applies mediumWeight modifier', () => {
    const tree = renderWithTheme(
      <H2 modifiers={['mediumWeight']}>Header Element</H2>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
