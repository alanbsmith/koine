import React from 'react';
import HeaderText from '../index';
import renderer from 'react-test-renderer';
import 'jest-styled-components';


describe('HeaderText Block', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <HeaderText>New Column</HeaderText>
    ).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('font-weight', '400')
  });
});
