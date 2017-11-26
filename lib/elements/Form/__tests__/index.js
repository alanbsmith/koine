import React from 'react';
import Form from '../index';
import renderer from 'react-test-renderer';


describe('Form Element', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Form />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
