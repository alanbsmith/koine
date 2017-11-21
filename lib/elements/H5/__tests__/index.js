import React from 'react';
import H5 from '../index';
import renderer from 'react-test-renderer';

import { renderWithTheme } from '__tests__/helpers';

describe('H5 Element', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <H5>Header Element</H5>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('applies mediumWeight modifier', () => {
    const tree = renderWithTheme(
      <H5 modifiers={['mediumWeight']}>Header Element</H5>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
