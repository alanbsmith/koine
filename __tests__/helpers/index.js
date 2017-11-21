import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import  { theme } from 'retrosockets-ui-utils';
import { ThemeProvider } from 'styled-components';


export function renderWithTheme(component) {
  return renderer.create(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  );
};