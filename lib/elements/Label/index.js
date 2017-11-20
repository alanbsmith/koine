import styled from 'styled-components';
import { rem } from 'polished';
import { applyStyleModifiers } from 'styled-components-modifiers';

import { fontStyles, fontWeights } from '../../modifiers';

const modifierConfig = {
  ...fontStyles,
  ...fontWeights,
};


const Label = styled.label`
  color: ${props => props.theme.colors.base.chrome600};
  font-size: ${rem(14)};
  font-weight: 600;
  text-transform: capitalize;
  ${applyStyleModifiers(modifierConfig)}
`;

export default Label;
