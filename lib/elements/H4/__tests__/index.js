import React from 'react';
import H4 from '../index';
import renderer from 'react-test-renderer';


describe('A H4 Element', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <H4>Header Element</H4>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('applies normalWeight modifier', () => {
    const tree = renderer.create(
      <H4 modifiers={['normalWeight']}>Header Element</H4>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
