import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

import { fontStyles, fontWeights } from '../../modifiers';
import gridScale from '../../utils/gridScale';

const modifierConfig = {
  ...fontStyles,
  ...fontWeights,
};

const Label = styled.label`
  color: ${props => props.theme.colors.base.chrome600};
  font-size: ${props => gridScale(props, 1.5)};
  font-weight: ${props => props.theme.fontWeights.light};
  text-transform: uppercase;
  ${applyStyleModifiers(modifierConfig)}
`;

export default Label;
