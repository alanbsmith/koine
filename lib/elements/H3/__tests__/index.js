import React from 'react';
import H3 from '../index';

import { renderWithTheme } from '__tests__/helpers';


describe('H3 Element', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(
      <H3>Header Element</H3>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('applies lightWeight modifier', () => {
    const tree = renderWithTheme(
      <H3 modifiers={['lightWeight']}>Header Element</H3>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
