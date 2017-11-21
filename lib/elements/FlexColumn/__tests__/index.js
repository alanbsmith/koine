import React from 'react';
import FlexColumn from '../index';
import renderer from 'react-test-renderer';


describe('FlexColumn Element', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <FlexColumn />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
