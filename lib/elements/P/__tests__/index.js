import React from 'react';
import P from '../index';
import 'jest-styled-components';

import { renderWithTheme } from '__tests__/helpers';


describe('Paragraph Element', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(
      <P>A paragraph</P>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the capitalize modifier', () => {
    const tree = renderWithTheme(
      <P modifiers={['capitalize']}>A paragraph</P>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the italicize modifier', () => {
    const tree = renderWithTheme(
      <P modifiers={['italicize']}>A paragraph</P>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the lowercase modifier', () => {
    const tree = renderWithTheme(
      <P modifiers={['lowercase']}>A paragraph</P>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the underline modifier', () => {
    const tree = renderWithTheme(
      <P modifiers={['underline']}>A paragraph</P>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the uppercase modifier', () => {
    const tree = renderWithTheme(
      <P modifiers={['uppercase']}>A paragraph</P>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the extraSmall modifier', () => {
    const tree = renderWithTheme(
      <P modifiers={['extraSmall']}>A paragraph</P>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the large modifier', () => {
    const tree = renderWithTheme(
      <P modifiers={['large']}>A paragraph</P>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the small modifier', () => {
    const tree = renderWithTheme(
      <P modifiers={['small']}>A paragraph</P>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the lightWeight modifier', () => {
    const tree = renderWithTheme(
      <P modifiers={['lightWeight']}>A paragraph</P>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the normalWeight modifier', () => {
    const tree = renderWithTheme(
      <P modifiers={['normalWeight']}>A paragraph</P>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the semiBoldWeight modifier', () => {
    const tree = renderWithTheme(
      <P modifiers={['semiBoldWeight']}>A paragraph</P>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the boldWeight modifier', () => {
    const tree = renderWithTheme(
      <P modifiers={['boldWeight']}>A paragraph</P>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
