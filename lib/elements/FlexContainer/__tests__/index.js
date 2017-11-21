import React from 'react';
import FlexContainer from '../index';
import renderer from 'react-test-renderer';


describe('FlexContainer Element', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <FlexContainer />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
