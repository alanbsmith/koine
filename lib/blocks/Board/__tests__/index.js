import React from 'react';
import Board from '../index';
import renderer from 'react-test-renderer';


describe('Board Block', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Board>
        <Board.Header>
          <Board.HeaderText>Board Header Text</Board.HeaderText>
        </Board.Header>
        <Board.Body>
          Board Body
        </Board.Body>
      </Board>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
