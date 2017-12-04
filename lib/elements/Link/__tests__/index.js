import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Link from '../index';
import 'jest-styled-components';

import { renderWithTheme } from '__tests__/helpers';

describe('Link Element', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(
      <Router>
        <Link to="/">Link</Link>
      </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
