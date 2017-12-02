import React from 'react';
import GhostButton from '../index';
import 'jest-styled-components';

import { renderWithTheme } from '__tests__/helpers';


describe('GhostButton Block', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(
      <GhostButton>
        <GhostButton.Text>Login</GhostButton.Text>
        <GhostButton.Icon name="home" />
      </GhostButton>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the bgDanger modifier', () => {
    const tree = renderWithTheme(
      <GhostButton modifiers={['bgDanger']}>
        <GhostButton.Text>Login</GhostButton.Text>
        <GhostButton.Icon name="home" />
      </GhostButton>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the hoverBgDanger modifier', () => {
    const tree = renderWithTheme(
      <GhostButton modifiers={['hoverBgDanger']}>
        <GhostButton.Text>Login</GhostButton.Text>
        <GhostButton.Icon name="home" />
      </GhostButton>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the fullWidth modifier', () => {
    const tree = renderWithTheme(
      <GhostButton modifiers={['fullWidth']}>
        <GhostButton.Text>Login</GhostButton.Text>
        <GhostButton.Icon name="home" />
      </GhostButton>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the hoverCustom modifier', () => {
    const tree = renderWithTheme(
      <GhostButton
        hoverColor="pink"
        modifiers={['hoverCustom']}
      >
        <GhostButton.Text>Login</GhostButton.Text>
      </GhostButton>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('uses default styles if no hoverColor is provided with hoverCustom modifier', () => {
    const tree = renderWithTheme(
      <GhostButton
        modifiers={['hoverCustom']}
      >
        <GhostButton.Text>Login</GhostButton.Text>
      </GhostButton>
    ).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('border-color', '#191919', {
      modifier: ':hover',
    });
    expect(tree).toHaveStyleRule('color', '#191919', {
      modifier: ':hover',
    });
  });

  it('adds the hoverDanger modifier', () => {
    const tree = renderWithTheme(
      <GhostButton modifiers={['hoverDanger']}>
        <GhostButton.Text>Login</GhostButton.Text>
      </GhostButton>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the hoverInfo modifier', () => {
    const tree = renderWithTheme(
      <GhostButton modifiers={['hoverInfo']}>
        <GhostButton.Text>Login</GhostButton.Text>
      </GhostButton>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the hoverSuccess modifier', () => {
    const tree = renderWithTheme(
      <GhostButton modifiers={['hoverSuccess']}>
        <GhostButton.Text>Login</GhostButton.Text>
      </GhostButton>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the hoverWarning modifier', () => {
    const tree = renderWithTheme(
      <GhostButton modifiers={['hoverWarning']}>
        <GhostButton.Text>Login</GhostButton.Text>
      </GhostButton>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
