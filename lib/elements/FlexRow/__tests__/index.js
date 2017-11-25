import React from 'react';
import FlexRow from '../index';
import { renderWithTheme } from '__tests__/helpers';


describe('FlexRow Element', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(
      <FlexRow />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
