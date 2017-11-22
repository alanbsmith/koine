import React from 'react';
import Button from '../index';
import 'jest-styled-components';

import { renderWithTheme } from '__tests__/helpers';


describe('Button Block', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(
      <Button>
        <Button.Text>Login</Button.Text>
        <Button.Icon name="home" />
      </Button>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the bgSuccess modifier', () => {
    const tree = renderWithTheme(
      <Button modifiers={['bgSuccess']}>
        <Button.Text>Login</Button.Text>
        <Button.Icon name="home" />
      </Button>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the hoverBgSuccess modifier', () => {
    const tree = renderWithTheme(
      <Button modifiers={['hoverBgSuccess']}>
        <Button.Text>Login</Button.Text>
        <Button.Icon name="home" />
      </Button>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the fullWidth modifier', () => {
    const tree = renderWithTheme(
      <Button modifiers={['fullWidth']}>
        <Button.Text>Login</Button.Text>
        <Button.Icon name="home" />
      </Button>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
