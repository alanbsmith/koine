import React from 'react';
import Modal from '../index';
import 'jest-styled-components';

import { renderWithTheme } from '__tests__/helpers';


describe('Modal Block', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(
      <Modal.Overlay>
        <Modal>
          <Modal.Header>
            <Modal.CloseButton />
            <Modal.HeaderText>
              header text
            </Modal.HeaderText>
          </Modal.Header>
          <Modal.Body>
            body
          </Modal.Body>
          <Modal.Footer>
            footer
          </Modal.Footer>
        </Modal>
      </Modal.Overlay>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
