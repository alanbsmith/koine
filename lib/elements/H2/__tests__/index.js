import React from 'react';
import H2 from '../index';
import renderer from 'react-test-renderer';


describe('A H2 Element', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <H2>Header Element</H2>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('applies mediumWeight modifier', () => {
    const tree = renderer.create(
      <H2 modifiers={['mediumWeight']}>Header Element</H2>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
