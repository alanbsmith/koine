import React from 'react';
import Tooltip from '../index';
import 'jest-styled-components';

import { renderWithTheme } from '__tests__/helpers';


describe('Tooltip Block', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(
      <Tooltip>
        <Tooltip.Arrow modifiers={['bottom']} />
        <Tooltip.Text>
          tooltip text
        </Tooltip.Text>
      </Tooltip>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
