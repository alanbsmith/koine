import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components';
import { theme }  from 'koine-ui-utils';
import FontFaceObserver from 'fontfaceobserver';

export default class Wrapper extends Component {
  render() {
    return <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>
  }
}
