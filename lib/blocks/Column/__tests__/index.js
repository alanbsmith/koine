import React from 'react';
import Column from '../index';
import renderer from 'react-test-renderer';
import 'jest-styled-components';


describe('Column Block', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Column>
        <Column.Header>
          <Column.HeaderText>New Column</Column.HeaderText>
        </Column.Header>
      </Column>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
