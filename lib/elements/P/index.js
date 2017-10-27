import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { rem } from 'polished';

import { fontStyles, fontWeights } from '../../modifiers';

const customModifiers = {
  extraSmall: () => `font-size: ${rem(12)};`,
  italic: () => 'font-style: italic;',
  large: () => `font-size: ${rem(18)};`,
  small: () => `font-size: ${rem(14)};`,
};

const modifierConfig = {
  ...fontStyles,
  ...fontWeights,
  ...customModifiers
};

const P = styled.p`
  font-size: ${rem(16)};
  margin: 0;
  ${applyStyleModifiers(modifierConfig)}
`;

export default P;
