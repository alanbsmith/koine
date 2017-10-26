import React from 'react';
import P from '../index';
import renderer from 'react-test-renderer';


describe('Header Element', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <P>Header Element</P>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the italic modifier', () => {
    const tree = renderer.create(
      <P modifiers={['italic']}>A paragraph</P>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the extraSmall modifier', () => {
    const tree = renderer.create(
      <P modifiers={['extraSmall']}>A paragraph</P>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the small modifier', () => {
    const tree = renderer.create(
      <P modifiers={['small']}>A paragraph</P>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the large modifier', () => {
    const tree = renderer.create(
      <P modifiers={['large']}>A paragraph</P>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the boldWeight modifier', () => {
    const tree = renderer.create(
      <P modifiers={['boldWeight']}>A paragraph</P>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
