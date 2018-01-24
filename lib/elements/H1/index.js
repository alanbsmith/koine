import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";

import { fontStyles, fontWeights } from "../../modifiers";
import gridScale from "../../utils/gridScale";

const modifierConfig = {
  ...fontStyles,
  ...fontWeights
};

const H1 = styled.h1`
  font-size: ${props => gridScale(props, 5)};
  margin: 0;
  text-transform: capitalize;
  ${applyStyleModifiers(modifierConfig)};
`;

/** @component */
export default H1;
