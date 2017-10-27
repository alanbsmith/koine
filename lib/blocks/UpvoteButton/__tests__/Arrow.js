import React from 'react';
import Arrow from '../Arrow';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('Arrow Element', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Arrow />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the orange modifier', () => {
    const tree = renderer.create(
      <Arrow modifiers={['orange']}>A paragraph</Arrow>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the hoverBounce modifier', () => {
    const tree = renderer.create(
      <Arrow modifiers={['hoverBounce']}>A paragraph</Arrow>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
