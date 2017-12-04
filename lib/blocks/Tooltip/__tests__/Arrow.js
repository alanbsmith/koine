import React from 'react';
import Arrow from '../Arrow';
import 'jest-styled-components';

import { renderWithTheme } from '__tests__/helpers';


describe('Tooltip Arrow Element', () => {
  it('applies the bottom modifier', () => {
    const tree = renderWithTheme(
      <Arrow modifiers={['bottom']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('applies the left modifier', () => {
    const tree = renderWithTheme(
      <Arrow modifiers={['left']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('applies the right modifier', () => {
    const tree = renderWithTheme(
      <Arrow modifiers={['right']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('applies the top modifier', () => {
    const tree = renderWithTheme(
      <Arrow modifiers={['top']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
