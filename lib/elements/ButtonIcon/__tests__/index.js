import React from 'react';
import ButtonIcon from '../index';
import 'jest-styled-components';

import { renderWithTheme } from '__tests__/helpers';


describe('ButtonIcon Element', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(
      <ButtonIcon />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the boxShadow modifier', () => {
    const tree = renderWithTheme(
      <ButtonIcon modifiers={['boxShadow']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the circle modifier', () => {
    const tree = renderWithTheme(
      <ButtonIcon modifiers={['circle']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the focusScale modifier', () => {
    const tree = renderWithTheme(
      <ButtonIcon modifiers={['focusScale']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the small modifier', () => {
    const tree = renderWithTheme(
      <ButtonIcon modifiers={['small']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the bgChrome000 modifier', () => {
    const tree = renderWithTheme(
      <ButtonIcon modifiers={['bgChrome000']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the bgChrome050 modifier', () => {
    const tree = renderWithTheme(
      <ButtonIcon modifiers={['bgChrome050']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the bgChrome100 modifier', () => {
    const tree = renderWithTheme(
      <ButtonIcon modifiers={['bgChrome100']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the bgChrome200 modifier', () => {
    const tree = renderWithTheme(
      <ButtonIcon modifiers={['bgChrome200']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the bgChrome300 modifier', () => {
    const tree = renderWithTheme(
      <ButtonIcon modifiers={['bgChrome300']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the bgChrome400 modifier', () => {
    const tree = renderWithTheme(
      <ButtonIcon modifiers={['bgChrome400']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the bgChrome500 modifier', () => {
    const tree = renderWithTheme(
      <ButtonIcon modifiers={['bgChrome500']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the bgChrome600 modifier', () => {
    const tree = renderWithTheme(
      <ButtonIcon modifiers={['bgChrome600']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the bgChrome700 modifier', () => {
    const tree = renderWithTheme(
      <ButtonIcon modifiers={['bgChrome700']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the bgChrome800 modifier', () => {
    const tree = renderWithTheme(
      <ButtonIcon modifiers={['bgChrome800']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the bgChrome900 modifier', () => {
    const tree = renderWithTheme(
      <ButtonIcon modifiers={['bgChrome900']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the bgBlue modifier', () => {
    const tree = renderWithTheme(
      <ButtonIcon modifiers={['bgBlue']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the bgGreen modifier', () => {
    const tree = renderWithTheme(
      <ButtonIcon modifiers={['bgGreen']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the bgOrange modifier', () => {
    const tree = renderWithTheme(
      <ButtonIcon modifiers={['bgOrange']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the bgPink modifier', () => {
    const tree = renderWithTheme(
      <ButtonIcon modifiers={['bgPink']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the bgPurple modifier', () => {
    const tree = renderWithTheme(
      <ButtonIcon modifiers={['bgPurple']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the bgYellow modifier', () => {
    const tree = renderWithTheme(
      <ButtonIcon modifiers={['bgYellow']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the bgDanger modifier', () => {
    const tree = renderWithTheme(
      <ButtonIcon modifiers={['bgDanger']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the bgDefault modifier', () => {
    const tree = renderWithTheme(
      <ButtonIcon modifiers={['bgDefault']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the bgInfo modifier', () => {
    const tree = renderWithTheme(
      <ButtonIcon modifiers={['bgInfo']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the bgSuccess modifier', () => {
    const tree = renderWithTheme(
      <ButtonIcon modifiers={['bgSuccess']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the bgWarning modifier', () => {
    const tree = renderWithTheme(
      <ButtonIcon modifiers={['bgWarning']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the hoverBgChrome000 modifier', () => {
    const tree = renderWithTheme(
      <ButtonIcon modifiers={['hoverBgChrome000']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the hoverBgBlue modifier', () => {
    const tree = renderWithTheme(
      <ButtonIcon modifiers={['hoverBgBlue']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the hoverBgGreen modifier', () => {
    const tree = renderWithTheme(
      <ButtonIcon modifiers={['hoverBgGreen']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the hoverBgOrange modifier', () => {
    const tree = renderWithTheme(
      <ButtonIcon modifiers={['hoverBgOrange']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the hoverBgPink modifier', () => {
    const tree = renderWithTheme(
      <ButtonIcon modifiers={['hoverBgPink']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the hoverBgPurple modifier', () => {
    const tree = renderWithTheme(
      <ButtonIcon modifiers={['hoverBgPurple']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the hoverBgYellow modifier', () => {
    const tree = renderWithTheme(
      <ButtonIcon modifiers={['hoverBgYellow']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the hoverBgDanger modifier', () => {
    const tree = renderWithTheme(
      <ButtonIcon modifiers={['hoverBgDanger']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the hoverBgDefault modifier', () => {
    const tree = renderWithTheme(
      <ButtonIcon modifiers={['hoverBgDefault']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the hoverBgInfo modifier', () => {
    const tree = renderWithTheme(
      <ButtonIcon modifiers={['hoverBgInfo']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the hoverBgSuccess modifier', () => {
    const tree = renderWithTheme(
      <ButtonIcon modifiers={['hoverBgSuccess']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the hoverBgWarning modifier', () => {
    const tree = renderWithTheme(
      <ButtonIcon modifiers={['hoverBgWarning']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
