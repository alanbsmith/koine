import React from 'react';
import H4 from '../index';
import renderer from 'react-test-renderer';

import { renderWithTheme } from '__tests__/helpers';


describe('H4 Element', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <H4>Header Element</H4>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('applies normalWeight modifier', () => {
    const tree = renderWithTheme(
      <H4 modifiers={['normalWeight']}>Header Element</H4>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
