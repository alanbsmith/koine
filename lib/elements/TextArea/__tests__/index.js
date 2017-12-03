import React from 'react';
import TextArea from '../index';
import 'jest-styled-components';

import { renderWithTheme } from '__tests__/helpers';


describe('TextArea Element', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(
      <TextArea modifiers={['']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the focusPrimmary modifier', () => {
    const tree = renderWithTheme(
      <TextArea modifiers={['focusPrimmary']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the focusSecondary modifier', () => {
    const tree = renderWithTheme(
      <TextArea modifiers={['focusSecondary']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the focusTertiary modifier', () => {
    const tree = renderWithTheme(
      <TextArea modifiers={['focusTertiary']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the focusBlue modifier', () => {
    const tree = renderWithTheme(
      <TextArea modifiers={['focusBlue']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the focusGreen modifier', () => {
    const tree = renderWithTheme(
      <TextArea modifiers={['focusGreen']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the focusOrange modifier', () => {
    const tree = renderWithTheme(
      <TextArea modifiers={['focusOrange']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the focusPink modifier', () => {
    const tree = renderWithTheme(
      <TextArea modifiers={['focusPink']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the focusPurple modifier', () => {
    const tree = renderWithTheme(
      <TextArea modifiers={['focusPurple']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the focusYellow modifier', () => {
    const tree = renderWithTheme(
      <TextArea modifiers={['focusYellow']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the focusDanger modifier', () => {
    const tree = renderWithTheme(
      <TextArea modifiers={['focusDanger']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the focusDefault modifier', () => {
    const tree = renderWithTheme(
      <TextArea modifiers={['focusDefault']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the focusInfo modifier', () => {
    const tree = renderWithTheme(
      <TextArea modifiers={['focusInfo']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the focusSuccess modifier', () => {
    const tree = renderWithTheme(
      <TextArea modifiers={['focusSuccess']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the focusWarning modifier', () => {
    const tree = renderWithTheme(
      <TextArea modifiers={['focusWarning']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
