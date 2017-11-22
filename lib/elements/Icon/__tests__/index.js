import React from 'react';
import Icon from '../index';
import renderer from 'react-test-renderer';

describe('Icon Element', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Icon name="home" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
