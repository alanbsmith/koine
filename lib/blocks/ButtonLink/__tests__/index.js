import React from 'react';
import ButtonLink from '../index';
import 'jest-styled-components';

import { renderWithTheme } from '__tests__/helpers';


describe('ButtonLink Block', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(
      <ButtonLink>
        Login
      </ButtonLink>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the bgDanger modifier', () => {
    const tree = renderWithTheme(
      <ButtonLink modifiers={['bgDanger']}>
        Login
      </ButtonLink>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the hoverBgDanger modifier', () => {
    const tree = renderWithTheme(
      <ButtonLink modifiers={['hoverBgDanger']}>
        Login
      </ButtonLink>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the fullWidth modifier', () => {
    const tree = renderWithTheme(
      <ButtonLink modifiers={['fullWidth']}>
        Login
      </ButtonLink>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the hoverCustom modifier', () => {
    const tree = renderWithTheme(
      <ButtonLink
        hoverColor="pink"
        modifiers={['hoverCustom']}
      >
        Login
      </ButtonLink>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('uses default styles if no hoverColor is provided with hoverCustom modifier', () => {
    const tree = renderWithTheme(
      <ButtonLink
        modifiers={['hoverCustom']}
      >
        Login
      </ButtonLink>
    ).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('color', '#1F2D3D', {
      modifier: ':hover',
    });
  });

  it('adds the hoverDanger modifier', () => {
    const tree = renderWithTheme(
      <ButtonLink modifiers={['hoverDanger']}>
        Login
      </ButtonLink>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the hoverInfo modifier', () => {
    const tree = renderWithTheme(
      <ButtonLink modifiers={['hoverInfo']}>
        Login
      </ButtonLink>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the hoverSuccess modifier', () => {
    const tree = renderWithTheme(
      <ButtonLink modifiers={['hoverSuccess']}>
        Login
      </ButtonLink>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the hoverWarning modifier', () => {
    const tree = renderWithTheme(
      <ButtonLink modifiers={['hoverWarning']}>
        Login
      </ButtonLink>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
