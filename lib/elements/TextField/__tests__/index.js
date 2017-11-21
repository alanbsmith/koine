import React from 'react';
import TextField from '../index';
import 'jest-styled-components';

import { renderWithTheme } from '__tests__/helpers';


describe('TextField Element', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(
      <TextField />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the focusBlue modifier', () => {
    const tree = renderWithTheme(
      <TextField modifiers={['focusBlue']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the focusGreen modifier', () => {
    const tree = renderWithTheme(
      <TextField modifiers={['focusGreen']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the focusOrange modifier', () => {
    const tree = renderWithTheme(
      <TextField modifiers={['focusOrange']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the focusPink modifier', () => {
    const tree = renderWithTheme(
      <TextField modifiers={['focusPink']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the focusPurple modifier', () => {
    const tree = renderWithTheme(
      <TextField modifiers={['focusPurple']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the focusYellow modifier', () => {
    const tree = renderWithTheme(
      <TextField modifiers={['focusYellow']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the focusDanger modifier', () => {
    const tree = renderWithTheme(
      <TextField modifiers={['focusDanger']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the focusDefault modifier', () => {
    const tree = renderWithTheme(
      <TextField modifiers={['focusDefault']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the focusInfo modifier', () => {
    const tree = renderWithTheme(
      <TextField modifiers={['focusInfo']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the focusSuccess modifier', () => {
    const tree = renderWithTheme(
      <TextField modifiers={['focusSuccess']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the focusWarning modifier', () => {
    const tree = renderWithTheme(
      <TextField modifiers={['focusWarning']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
