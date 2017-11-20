import React from 'react';
import Label from '../index';
import 'jest-styled-components';

import { renderWithTheme } from '__tests__/helpers';


describe('Label Element', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(
      <Label>Label</Label>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the italicize modifier', () => {
    const tree = renderWithTheme(
      <Label modifiers={['italicize']}>Label</Label>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the fontWeightBold modifier', () => {
    const tree = renderWithTheme(
      <Label modifiers={['fontWeightBold']}>Label</Label>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
