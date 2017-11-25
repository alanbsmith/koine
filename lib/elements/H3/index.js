import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { rem } from 'polished';

import { fontStyles, fontWeights } from '../../modifiers';

const modifierConfig = {
  ...fontStyles,
  ...fontWeights,
};

const H3 = styled.h3`
  font-size: ${rem(32)};
  margin: 0;
  text-transform: capitalize;
  ${applyStyleModifiers(modifierConfig)}
`;

export default H3;
