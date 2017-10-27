import React from 'react';
import UpvoteButton from '../index';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('UpvoteButton Block', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <UpvoteButton />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders an arrow', () => {
    const tree = renderer.create(
      <UpvoteButton>
        <UpvoteButton.Arrow />
      </UpvoteButton>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
