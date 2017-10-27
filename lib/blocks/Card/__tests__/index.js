import React from 'react';
import Card from '../index';
import renderer from 'react-test-renderer';


describe('Card Block', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Card>
        <Card.Header>
          <Card.HeaderText>
            Gandalf the Grey
          </Card.HeaderText>
          <Card.Body>
            <Card.Text>
              Should've called the eagles sooner.
            </Card.Text>
          </Card.Body>
        </Card.Header>
      </Card>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
