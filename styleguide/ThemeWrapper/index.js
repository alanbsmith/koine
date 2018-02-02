import React, { Component } from "react";
import { ThemeProvider, injectGlobal } from "styled-components";
import { theme, buildGlobalStyles } from "koine-ui-utils";

import configureFonts from "config/configureFonts";

injectGlobal([buildGlobalStyles(theme)]);
configureFonts(theme);

export default class Wrapper extends Component {
  render() {
    return <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>;
  }
}
