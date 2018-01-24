import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { rem } from "polished";

import { fontStyles, fontWeights } from "../../modifiers";
import gridScale from "../../utils/gridScale";

const customModifiers = {
  extraSmall: props => `font-size: ${gridScale(props, 1.5)};`,
  large: props => `font-size: ${gridScale(props, 2.25)};`,
  small: props => `font-size: ${gridScale(props, 1.75)};`
};

const modifierConfig = {
  ...fontStyles,
  ...fontWeights,
  ...customModifiers
};

const P = styled.p`
  font-size: ${props => rem(props.theme.dimensions.baseFontSize)};
  margin: 0;
  ${applyStyleModifiers(modifierConfig)};
`;

/** @component */
export default P;
