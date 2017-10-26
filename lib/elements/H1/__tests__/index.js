import React from 'react';
import H1 from '../index';
import renderer from 'react-test-renderer';


describe('A H1 Element', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <H1>Header Element</H1>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('applies normalWeight modifier', () => {
    const tree = renderer.create(
      <H1 modifiers={['normalWeight']}>Header Element</H1>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
