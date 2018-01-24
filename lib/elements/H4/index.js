import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";

import { fontStyles, fontWeights } from "../../modifiers";
import gridScale from "../../utils/gridScale";

const modifierConfig = {
  ...fontStyles,
  ...fontWeights
};

const H4 = styled.h4`
  font-size: ${props => gridScale(props, 3.5)};
  margin: 0;
  text-transform: capitalize;
  ${applyStyleModifiers(modifierConfig)};
`;

/** @component */
export default H4;
