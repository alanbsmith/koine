import React from 'react';
import CircleButton from '../index';
import renderer from 'react-test-renderer';


describe('A CircleButton Element', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <CircleButton />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('applies bgColor modifier', () => {
    const tree = renderer.create(
      <CircleButton modifiers={['bgBlue']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
