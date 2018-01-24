import React from 'react';
import H6 from '../index';
import 'jest-styled-components';

import { renderWithTheme } from '__tests__/helpers';


describe('H6 Element', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(
      <H6>Header Element</H6>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('applies lightWeight modifier', () => {
    const tree = renderWithTheme(
      <H6 modifiers={['lightWeight']}>Header Element</H6>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
