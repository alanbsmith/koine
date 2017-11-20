import React from 'react';
import FlexRow from '../index';
import renderer from 'react-test-renderer';


describe('FlexRow Element', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <FlexRow />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
