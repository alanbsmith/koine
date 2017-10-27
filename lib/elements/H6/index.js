import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { rem } from 'polished';

import { fontWeights } from '../../modifiers';

const H6 = styled.h6`
  font-size: ${rem(20)};
  margin: 0;
  text-transform: capitalize;
  ${applyStyleModifiers(fontWeights)}
`;

export default H6;
