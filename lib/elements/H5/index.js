import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { rem } from 'polished';

import { fontStyles, fontWeights } from '../../modifiers';

const modifierConfig = {
  ...fontStyles,
  ...fontWeights,
};

const H5 = styled.h1`
  font-size: ${rem(24)};
  margin: 0;
  text-transform: capitalize;
  ${applyStyleModifiers(modifierConfig)}
`;

export default H5;
