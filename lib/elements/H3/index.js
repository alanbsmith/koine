import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

import { fontStyles, fontWeights } from '../../modifiers';
import gridScale from '../../utils/gridScale';

const modifierConfig = {
  ...fontStyles,
  ...fontWeights,
};

const H3 = styled.h3`
  font-size: ${props => gridScale(props, 4)};
  margin: 0;
  text-transform: capitalize;
  ${applyStyleModifiers(modifierConfig)}
`;

export default H3;
